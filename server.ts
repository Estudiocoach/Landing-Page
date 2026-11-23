import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import fs from 'fs';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const DEFAULT_RECIPIENT = 'administracion@estudiocoach.com';

interface LeadPayload {
  fullName: string;
  businessActivity: string;
  city: string;
  instagram: string;
  whatsapp: string;
  email: string;
  sourcePage?: string;
}

const rateLimitMap = new Map<string, number[]>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_REQUESTS = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (rateLimitMap.get(ip) || []).filter((ts) => now - ts < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX_REQUESTS) {
    rateLimitMap.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);

  if (rateLimitMap.size > 1000) {
    for (const [key, timestamps] of rateLimitMap.entries()) {
      const valid = timestamps.filter((ts) => now - ts < RATE_WINDOW_MS);
      if (valid.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, valid);
      }
    }
  }
  return false;
}

function cleanSingleLine(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, maxLen);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validateLeadPayload(body: unknown): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'Solicitud inválida.' };
  }

  const raw = body as Record<string, unknown>;
  const fullName = cleanSingleLine(raw.fullName, 120);
  const businessActivity = cleanSingleLine(raw.businessActivity, 160);
  const city = cleanSingleLine(raw.city, 120);
  const instagram = cleanSingleLine(raw.instagram, 100);
  const whatsapp = cleanSingleLine(raw.whatsapp, 40);
  const email = cleanSingleLine(raw.email, 160);
  const sourcePage = cleanSingleLine(raw.sourcePage, 120) || '/';

  if (!fullName || !businessActivity || !city || !instagram || !whatsapp || !email) {
    return { ok: false, error: 'Por favor completa todos los campos obligatorios marcados con *.' };
  }

  const cleanDigits = whatsapp.replace(/[^\d+]/g, '');
  if (cleanDigits.length < 8) {
    return { ok: false, error: 'Ingresa un número de WhatsApp válido con código de país (mínimo 8 dígitos).' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { ok: false, error: 'Ingresa un email válido (ej. nombre@tunegocio.com).' };
  }

  return {
    ok: true,
    data: {
      fullName,
      businessActivity,
      city,
      instagram,
      whatsapp,
      email,
      sourcePage,
    },
  };
}

function buildLeadEmailContent(lead: LeadPayload) {
  const submittedAt = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
  const subject = `Nueva solicitud Estudio Coach — ${lead.city} (${lead.fullName})`;

  const text = [
    'Nueva solicitud desde Estudio Coach',
    '====================================',
    `Nombre y apellido: ${lead.fullName}`,
    `¿A qué se dedica tu negocio?: ${lead.businessActivity}`,
    `Ciudad: ${lead.city}`,
    `Instagram: ${lead.instagram}`,
    `WhatsApp: ${lead.whatsapp}`,
    `Email: ${lead.email}`,
    `Página de origen: ${lead.sourcePage || '/'}`,
    `Fecha y hora (AR): ${submittedAt}`,
  ].join('\n');

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #111827; border: 1px solid #E5E7EB; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #111111; color: #FFFFFF; padding: 24px 28px;">
        <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #00C853;">
          NUEVO LEAD · ESTUDIO COACH
        </p>
        <h1 style="margin: 0; font-size: 20px; font-weight: 800;">
          Solicitud de disponibilidad en ${escapeHtml(lead.city)}
        </h1>
      </div>
      <div style="padding: 24px 28px; background-color: #FFFFFF;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #4B5563; width: 42%;"><strong>Nombre y apellido</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #111827;">${escapeHtml(lead.fullName)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #4B5563;"><strong>Negocio</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #111827;">${escapeHtml(lead.businessActivity)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #4B5563;"><strong>Ciudad</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #111827;">${escapeHtml(lead.city)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #4B5563;"><strong>Instagram</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #111827;">${escapeHtml(lead.instagram)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #4B5563;"><strong>WhatsApp</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #0056FF; font-weight: 700;">${escapeHtml(lead.whatsapp)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #4B5563;"><strong>Email</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #111827;">${escapeHtml(lead.email)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #4B5563;"><strong>Página de origen</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #F3F4F6; color: #6B7280;">${escapeHtml(lead.sourcePage || '/')}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #4B5563;"><strong>Fecha y hora</strong></td>
            <td style="padding: 10px 0; color: #6B7280;">${escapeHtml(submittedAt)}</td>
          </tr>
        </table>
      </div>
    </div>
  `;

  return { subject, text, html };
}

async function sendViaResend(recipient: string, lead: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) throw new Error('Missing RESEND_API_KEY');

  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || 'Estudio Coach <onboarding@resend.dev>';
  const { subject, text, html } = buildLeadEmailContent(lead);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipient],
      reply_to: lead.email,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    throw new Error(`Resend API error (${res.status}): ${errText}`);
  }
}

async function sendViaSmtp(recipient: string, lead: LeadPayload): Promise<void> {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!host || !user || !pass) throw new Error('Missing SMTP configuration');

  const port = Number(process.env.SMTP_PORT || 587);
  const from = process.env.SMTP_FROM?.trim() || `Estudio Coach <${user}>`;
  const { subject, text, html } = buildLeadEmailContent(lead);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to: recipient,
    replyTo: lead.email,
    subject,
    text,
    html,
  });
}

async function startServer() {
  const app = express();
  app.set('trust proxy', 1);
  app.use(express.json({ limit: '16kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
    const hasSmtp = Boolean(
      process.env.SMTP_HOST?.trim() &&
        process.env.SMTP_USER?.trim() &&
        process.env.SMTP_PASS?.trim()
    );
    res.json({
      ok: true,
      emailConfigured: hasResend || hasSmtp,
    });
  });

  app.post('/api/leads', async (req: Request, res: Response) => {
    const clientIp = req.ip || 'unknown';
    if (isRateLimited(clientIp)) {
      res.status(429).json({
        ok: false,
        error: 'Demasiadas solicitudes seguidas. Por favor aguarda unos minutos e intenta nuevamente.',
      });
      return;
    }

    const validation = validateLeadPayload(req.body);
    if (!validation.ok) {
      res.status(400).json({ ok: false, error: validation.error });
      return;
    }

    const lead = validation.data;
    const recipient = (process.env.LEAD_RECIPIENT_EMAIL || DEFAULT_RECIPIENT).trim();
    const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
    const hasSmtp = Boolean(
      process.env.SMTP_HOST?.trim() &&
        process.env.SMTP_USER?.trim() &&
        process.env.SMTP_PASS?.trim()
    );

    if (!hasResend && !hasSmtp) {
      res.status(503).json({
        ok: false,
        code: 'EMAIL_NOT_CONFIGURED',
        error: `Para enviar las respuestas hacia ${recipient}, falta configurar RESEND_API_KEY o las credenciales SMTP en las variables de entorno del servidor.`,
      });
      return;
    }

    try {
      if (hasResend) {
        await sendViaResend(recipient, lead);
      } else {
        await sendViaSmtp(recipient, lead);
      }

      res.status(200).json({
        ok: true,
        message: 'Solicitud enviada correctamente.',
      });
    } catch (err) {
      console.error('Error al enviar correo de formulario:', err);
      res.status(502).json({
        ok: false,
        error: 'No pudimos enviar el correo en este momento. Por favor intenta nuevamente en unos segundos.',
      });
    }
  });

  const distDir = path.resolve(__dirname, 'dist');
  const distIndex = path.join(distDir, 'index.html');
  const useViteMiddleware =
    process.env.NODE_ENV !== 'production' &&
    (process.env.npm_lifecycle_event === 'dev' || !fs.existsSync(distIndex));

  if (useViteMiddleware) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distDir));
    app.get('*', (req: Request, res: Response, next) => {
      if (req.path.startsWith('/api/')) {
        next();
        return;
      }
      res.sendFile(distIndex);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Estudio Coach server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

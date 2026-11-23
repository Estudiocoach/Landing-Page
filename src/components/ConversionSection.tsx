import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

interface ConversionSectionProps {
  nameInputRef: React.RefObject<HTMLInputElement | null>;
  prefilledZone?: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export const ConversionSection: React.FC<ConversionSectionProps> = ({
  nameInputRef,
  prefilledZone = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [businessActivity, setBusinessActivity] = useState('');
  const [city, setCity] = useState('');
  const [instagram, setInstagram] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCity, setSubmittedCity] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledZone) {
      setSubmittedCity(null);
      setCity(prefilledZone);
    }
  }, [prefilledZone]);

  const fireConversionTracking = (submittedIg: string, submittedZone: string) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'EstudioCoach_Audit',
        event_label: submittedZone,
        instagram: submittedIg,
      });
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'generate_lead',
        city: submittedZone,
        instagram: submittedIg,
      });
    }
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'EstudioCoach_Disponibilidad',
        city: submittedZone,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null);

    if (
      !fullName.trim() ||
      !businessActivity.trim() ||
      !city.trim() ||
      !instagram.trim() ||
      !whatsapp.trim() ||
      !email.trim()
    ) {
      setError('Por favor completa todos los campos obligatorios marcados con *.');
      return;
    }

    const cleanPhone = whatsapp.replace(/[^\d+]/g, '');
    if (cleanPhone.length < 8) {
      setError('Ingresa un número de WhatsApp válido con código de país (mínimo 8 dígitos).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Ingresa un email válido (ej. nombre@tunegocio.com).');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          businessActivity: businessActivity.trim(),
          city: city.trim(),
          instagram: instagram.trim(),
          whatsapp: whatsapp.trim(),
          email: email.trim(),
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !payload?.ok) {
        setError(
          payload?.error ||
            'No se pudo enviar la solicitud en este momento. Por favor intenta nuevamente.'
        );
        return;
      }

      fireConversionTracking(instagram.trim(), city.trim());
      setSubmittedCity(city.trim());
    } catch {
      setError('Error de conexión con el servidor. Verifica tu conexión e intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedCity(null);
    setFullName('');
    setBusinessActivity('');
    setCity('');
    setInstagram('');
    setWhatsapp('');
    setEmail('');
    setError(null);
  };

  return (
    <section id="aplicar" className="bg-[#111111] text-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="inline-block rounded-full bg-[#00C853]/15 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-[#00C853] mb-6">
              ● TRABAJAMOS EN EXCLUSIVIDAD
            </span>

            <h2 className="font-display text-[32px] lg:text-[40px] font-black tracking-[-0.03em] leading-[1.1] text-white text-balance mb-6">
              Limitamos nuestras alianzas para brindar un servicio en excelencia.
            </h2>

            <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#D1D5DB] mb-8">
              Procuramos mantener nuestra calidad; para evitar que esto suceda, elegimos con quién trabajar. Aplica y nos conozcamos.
            </p>

            <div className="border-l-4 border-[#0056FF] pl-4 py-1">
              <p className="text-base font-bold text-white mb-1.5">
                ¿No estás seguro por dónde empezar?
              </p>
              <p className="text-[15px] leading-[1.6] text-[#D1D5DB]">
                Completa tus datos y nuestro equipo analizará tu situación actual antes de nuestra primera charla. Sin presentaciones eternas de PowerPoint, sin discursos de venta forzados — solo una conversación para conocer lo que querés lograr con tu negocio hoy.
              </p>
            </div>
          </div>

          {/* Right Column: White Card Form */}
          <div className="lg:col-span-6">
            <div className="bg-white text-[#111827] rounded-[16px] p-7 sm:p-10 shadow-2xl">
              {!submittedCity ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <h3 className="font-display text-[22px] sm:text-[24px] font-extrabold tracking-tight text-[#111827] mb-2">
                    Verificar disponibilidad
                  </h3>

                  {error && (
                    <div
                      role="alert"
                      className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm font-medium text-red-700"
                    >
                      {error}
                    </div>
                  )}

                  <div>
                    <label htmlFor="fullName" className="block text-sm font-bold text-[#111827] mb-1.5">
                      Nombre y apellido *
                    </label>
                    <input
                      ref={nameInputRef}
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ej. Agustín Bernat"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#0056FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessActivity" className="block text-sm font-bold text-[#111827] mb-1.5">
                      ¿A qué se dedica tu negocio? *
                    </label>
                    <input
                      id="businessActivity"
                      name="businessActivity"
                      type="text"
                      required
                      value={businessActivity}
                      onChange={(e) => setBusinessActivity(e.target.value)}
                      placeholder="Ej. Agente inmobiliario / Consultor de negocios"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#0056FF] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-bold text-[#111827] mb-1.5">
                        Ciudad *
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Ej. Tucumán, Córdoba, CABA"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#0056FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="instagram" className="block text-sm font-bold text-[#111827] mb-1.5">
                        Tu Instagram *
                      </label>
                      <input
                        id="instagram"
                        name="instagram"
                        type="text"
                        required
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        placeholder="@tuusuario"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#0056FF] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="whatsapp" className="block text-sm font-bold text-[#111827] mb-1.5">
                        WhatsApp *
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+54 9 381 555-0192"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#0056FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-[#111827] mb-1.5">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nombre@tunegocio.com"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#0056FF] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full h-14 inline-flex items-center justify-center gap-2 bg-[#0056FF] px-6 text-[16px] font-bold text-white rounded-lg transition-colors duration-150 hover:bg-[#0044CC] active:translate-y-px cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056FF]"
                  >
                    <span>{isSubmitting ? 'Enviando solicitud...' : 'Verificar disponibilidad'}</span>
                    {!isSubmitting && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
                  </button>

                  <p className="text-[12px] text-[#6B7280] text-center pt-1">
                    100% confidencial. Analizaremos tu negocio y te responderemos en menos de 24 horas hábiles.
                  </p>
                </form>
              ) : (
                <div className="py-6 space-y-6">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="h-8 w-8 text-[#00C853] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-2xl font-black text-[#111827]">
                        Solicitud recibida para {submittedCity}
                      </h3>
                      <p className="text-base text-[#4B5563] mt-2 leading-relaxed">
                        Analizaremos tu negocio y te responderemos por WhatsApp en menos de 24 horas hábiles.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F8F9FA] border border-neutral-200 rounded-xl p-4 text-sm text-[#4B5563] space-y-1">
                    <p>
                      <strong className="text-[#111827]">Negocio:</strong> {businessActivity}
                    </p>
                    <p>
                      <strong className="text-[#111827]">Instagram:</strong> {instagram}
                    </p>
                    <p>
                      <strong className="text-[#111827]">WhatsApp:</strong> {whatsapp}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0056FF] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Enviar otra consulta o corregir datos</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

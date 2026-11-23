import React, { useState } from 'react';
import { Eye, EyeOff, ShieldCheck } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Julieta Isas',
    role: 'Agente Top Producer de Remax Pacará',
    quote:
      'Antes mi negocio tenía presencia en redes sociales pero no me representaba, ahora no solo me representa sino que también genero más clientes.',
    initials: 'JI',
  },
  {
    name: 'Yesica Ortiz',
    role: 'Agente Top Producer de Remax Pacará',
    quote:
      'Mi marca personal creció, mis contactos aumentaron, empecé a vender más y ahora mi negocio es reconocido en mi provincia.',
    initials: 'YO',
  },
  {
    name: 'Valeria B.',
    role: 'Super Anfitriona de Airbnb',
    quote:
      'Queríamos tener presencia en redes sociales y generar clientes, junto a ellos logramos ambas cosas y teniendo los datos reportados de lo que se hizo.',
    initials: 'VB',
  },
  {
    name: 'Agustín Bernat',
    role: 'Consultor PyME',
    quote:
      'Llegamos a conseguir clientes de Latinoamérica y ahora mi Marca Personal convierte nuevos clientes.',
    initials: 'AB',
  },
];

const ADS_ROWS = [
  {
    blurredName: 'MARCA_PERSONAL_INMOBILIARIA_C1',
    status: 'Activa',
    budget: '$35.00 USD / día',
    results: '1,482',
    resultType: 'Consultas en Meta',
    cpl: '$1.84 USD',
    spent: '$2,726.88 USD',
  },
  {
    blurredName: 'CONSULTORIA_PYMES_RETARGETING_V2',
    status: 'Activa',
    budget: '$25.00 USD / día',
    results: '814',
    resultType: 'Conversaciones Coachea2',
    cpl: '$2.15 USD',
    spent: '$1,750.10 USD',
  },
  {
    blurredName: 'CAPTACION_PROPIEDADES_ZONA_N3',
    status: 'Activa',
    budget: '$40.00 USD / día',
    results: '1,120',
    resultType: 'Consultas en Meta',
    cpl: '$1.96 USD',
    spent: '$2,195.20 USD',
  },
];

export const SocialProofSection: React.FC = () => {
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
    <section id="resultados" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="max-w-3xl mb-12 lg:mb-14">
          <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-3">
            EVIDENCIA VERIFICABLE
          </p>
          <h2 className="font-display text-[30px] lg:text-[40px] font-black tracking-[-0.03em] leading-[1.1] text-[#111827] text-balance">
            Los números que respaldan nuestro sistema.
          </h2>
        </div>

        {/* 3 Giant Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-[#F8F9FA] border border-neutral-200 rounded-2xl p-8">
            <h3 className="font-display font-mono-tabular text-[44px] sm:text-[56px] font-black tracking-tight leading-none text-[#0056FF]">
              +20
            </h3>
            <p className="mt-4 text-base font-medium text-[#111827]">
              Marcas personales acompañadas
            </p>
          </div>

          <div className="bg-[#F8F9FA] border border-neutral-200 rounded-2xl p-8">
            <h3 className="font-display font-mono-tabular text-[44px] sm:text-[56px] font-black tracking-tight leading-none text-[#0056FF]">
              +1.000
            </h3>
            <p className="mt-4 text-base font-medium text-[#111827]">
              Clientes potenciales generados
            </p>
          </div>

          <div className="bg-[#F8F9FA] border border-neutral-200 rounded-2xl p-8">
            <h3 className="font-display font-mono-tabular text-[44px] sm:text-[56px] font-black tracking-tight leading-none text-[#0056FF]">
              -30%
            </h3>
            <p className="mt-4 text-base font-medium text-[#111827]">
              Reducción promedio del costo de adquisición
            </p>
          </div>
        </div>

        {/* 4 Testimonials in 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 items-stretch">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="flex flex-col justify-between bg-[#F8F9FA] border border-neutral-200 rounded-2xl p-8 sm:p-10"
            >
              <blockquote className="text-lg sm:text-xl font-bold leading-relaxed text-[#111827]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#111827] text-sm font-display font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display text-base font-extrabold text-[#111827]">{t.name}</p>
                  <p className="text-sm text-[#4B5563]">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Real Meta Ads Manager Screenshot Capture */}
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#111111] text-white border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#00C853]" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold leading-tight">
                  Captura real · Administrador de Anuncios de Meta (Clientes Estudio Coach)
                </p>
                <p className="text-xs text-neutral-400">
                  Identificadores internos protegidos por confidencialidad · Datos de rendimiento auditados
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="inline-flex items-center gap-2 border border-neutral-700 bg-neutral-900 px-3.5 py-2 text-xs font-bold text-white rounded-md hover:border-neutral-500 transition-colors cursor-pointer whitespace-nowrap"
            >
              {showBreakdown ? (
                <>
                  <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Ocultar lectura técnica</span>
                </>
              ) : (
                <>
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Ver lectura técnica</span>
                </>
              )}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 bg-[#F8F9FA] text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  <th className="py-3.5 px-6">Campaña (Confidencial)</th>
                  <th className="py-3.5 px-4">Entrega</th>
                  <th className="py-3.5 px-4">Presupuesto</th>
                  <th className="py-3.5 px-4 text-right">Resultados</th>
                  <th className="py-3.5 px-4 text-right">Costo por resultado</th>
                  <th className="py-3.5 px-6 text-right">Importe gastado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-sm">
                {ADS_ROWS.map((row) => (
                  <tr key={row.blurredName} className="hover:bg-neutral-50/80">
                    <td className="py-4 px-6">
                      <span className="select-none blur-[4.5px] font-mono-tabular text-xs font-bold text-neutral-700">
                        {row.blurredName}
                      </span>
                      <span className="block text-[11px] text-neutral-500 mt-0.5">
                        Marca Personal + Coachea2 CRM
                      </span>
                    </td>
                    <td className="py-4 px-4 text-xs font-semibold text-emerald-700">
                      {row.status}
                    </td>
                    <td className="py-4 px-4 font-mono-tabular text-xs text-neutral-700">
                      {row.budget}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="font-mono-tabular font-bold text-[#111827] block">
                        {row.results}
                      </span>
                      <span className="text-[11px] text-neutral-500">{row.resultType}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-block font-mono-tabular font-black text-base text-[#0056FF] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                        {row.cpl}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-mono-tabular font-semibold text-neutral-800">
                      {row.spent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showBreakdown && (
            <div className="px-6 py-4 bg-blue-50/70 border-t border-blue-200 text-sm text-[#111827]">
              <p className="font-bold text-[#0056FF] mb-1">Lectura técnica de esta cuenta:</p>
              <p className="text-[#4B5563]">
                Con un CPL promedio de <span className="font-mono-tabular font-bold text-[#111827]">$1.95 USD</span> y calificación automática en <span className="font-bold text-[#111827]">Coachea2</span>, los agentes y consultores reciben únicamente reuniones con clientes calificados.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

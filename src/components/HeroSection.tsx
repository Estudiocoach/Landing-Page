import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onApplyClick: () => void;
}

const PERSONAL_BRAND_LOGOS = [
  {
    name: 'Marca Personal 01',
    svg: (
      <svg viewBox="0 0 180 32" className="h-6 w-auto fill-current" aria-label="Consultoría Grow">
        <rect x="2" y="6" width="5" height="20" />
        <rect x="10" y="11" width="5" height="15" />
        <text x="24" y="22" className="font-display text-[15px] font-black tracking-tight">
          PYMES GROW
        </text>
      </svg>
    ),
  },
  {
    name: 'Marca Personal 02',
    svg: (
      <svg viewBox="0 0 185 32" className="h-6 w-auto fill-current" aria-label="Pacará Real Estate">
        <path d="M12 4L2 28h5.2l2-5.2h5.6l2 5.2H22L12 4zm-1.4 14.4L12 14.2l1.4 4.2h-2.8z" />
        <text x="28" y="22" className="font-display text-[15px] font-black tracking-tight">
          TOP PRODUCER
        </text>
      </svg>
    ),
  },
  {
    name: 'Marca Personal 03',
    svg: (
      <svg viewBox="0 0 180 32" className="h-6 w-auto fill-current" aria-label="Vértice Capital">
        <polygon points="12,26 2,6 8,6 12,16 16,6 22,6" />
        <text x="30" y="22" className="font-display text-[15px] font-black tracking-tight">
          VÉRTICE
        </text>
      </svg>
    ),
  },
  {
    name: 'Marca Personal 04',
    svg: (
      <svg viewBox="0 0 190 32" className="h-6 w-auto fill-current" aria-label="Meridiano Brokers">
        <path d="M2 26V6h6l5 9 5-9h6v20h-5V14l-6 10-6-10v12H2z" />
        <text x="32" y="22" className="font-display text-[15px] font-black tracking-tight">
          MERIDIANO
        </text>
      </svg>
    ),
  },
  {
    name: 'Marca Personal 05',
    svg: (
      <svg viewBox="0 0 195 32" className="h-6 w-auto fill-current" aria-label="Torre & Capital">
        <path d="M2 6h18v4h-6.5v16h-5V10H2V6z" />
        <text x="26" y="22" className="font-display text-[15px] font-black tracking-tight">
          TORRE & CAPITAL
        </text>
      </svg>
    ),
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onApplyClick }) => {
  return (
    <section id="top" className="bg-white pt-14 pb-16 lg:pt-24 lg:pb-24 border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="max-w-[820px]">
          <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.08em] text-[#0056FF] uppercase mb-5">
            EXCLUSIVO PARA AGENTES INMOBILIARIOS Y CONSULTORES DE NEGOCIOS
          </p>

          <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-black tracking-[-0.03em] leading-[1.05] text-[#111827] text-balance mb-6">
            Atrae Clientes. Filtra Curiosos. Cierra Negocios.
          </h1>

          <p className="text-[16px] sm:text-[20px] leading-[1.6] text-[#4B5563] max-w-2xl mb-9">
            Somos más que una agencia de marketing digital, instalamos en tu negocio una infraestructura de negocio y creamos campañas &ldquo;Hechas-Para-Ti&rdquo; que sumarán más consultas calificadas a tu negocio.
          </p>

          <div>
            <button
              type="button"
              onClick={onApplyClick}
              className="inline-flex items-center justify-center gap-3 bg-[#0056FF] px-8 py-4 text-base font-bold text-white rounded-lg transition-all duration-150 hover:bg-[#0044CC] active:translate-y-px whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056FF]"
            >
              <span>Verificar disponibilidad en mi zona</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <p className="mt-3 text-[13px] font-medium text-[#6B7280]">
              Sin presentaciones aburridas. Sin presión de venta. Diagnóstico real en 20 min.
            </p>
          </div>
        </div>

        {/* Grayscale trust band */}
        <div className="mt-16 pt-10 border-t border-neutral-200">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-neutral-500 mb-6">
            IMPULSANDO EL CRECIMIENTO DE MARCAS PERSONALES:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center text-neutral-700 opacity-60">
            {PERSONAL_BRAND_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-start transition-opacity duration-150 hover:opacity-100"
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

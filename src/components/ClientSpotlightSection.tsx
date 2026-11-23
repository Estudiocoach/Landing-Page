import React, { useState } from 'react';
import { ArrowRight, Building2, User } from 'lucide-react';

interface ClientSpotlightSectionProps {
  onAuditClick: () => void;
}

export const ClientSpotlightSection: React.FC<ClientSpotlightSectionProps> = ({ onAuditClick }) => {
  const [clientImgFailed, setClientImgFailed] = useState(false);
  const [projectImgFailed, setProjectImgFailed] = useState(false);

  return (
    <section id="servicio-principal" className="bg-white py-16 lg:py-24 border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Curaytor-inspired 3-column showcase module */}
        <div className="rounded-[28px] bg-[#0056FF] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Client Portrait (Agustín Bernat) */}
            <div className="lg:col-span-3 p-5 sm:p-6 flex">
              <div className="relative w-full min-h-[320px] lg:min-h-[420px] rounded-[20px] overflow-hidden bg-neutral-900">
                {!clientImgFailed ? (
                  <img
                    src="/src/assets/images/testimonial_martin_1795359305856.jpg"
                    alt="Agustín Bernat, Consultor de Negocios"
                    referrerPolicy="no-referrer"
                    onError={() => setClientImgFailed(true)}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-800 p-6 text-white">
                    <User className="h-10 w-10 text-[#0056FF] mb-2" />
                    <p className="font-display text-sm font-bold">Agustín Bernat</p>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 text-white">
                  <p className="font-display text-sm font-bold leading-tight">Agustín Bernat</p>
                  <p className="text-xs text-neutral-300 mt-0.5">Consultor de Negocios</p>
                </div>
              </div>
            </div>

            {/* Middle Column: Main Service & Client Impact Statement */}
            <div className="lg:col-span-5 px-6 py-8 sm:px-8 lg:py-12 flex flex-col justify-center">
              <p className="text-xs font-bold tracking-[0.16em] uppercase text-blue-100 mb-5">
                CONSULTORIA PYMES · SERVICIO PRINCIPAL
              </p>

              <h2 className="font-display text-2xl sm:text-[26px] lg:text-[28px] font-bold leading-[1.26] tracking-tight text-white text-balance mb-8">
                Los potenciales clientes de mi negocio llegan precalificados y listos para coordinar una reunión comercial porque nuestro marketing ya había hecho el trabajo previo.
              </h2>

              <div>
                <button
                  type="button"
                  onClick={onAuditClick}
                  className="inline-flex items-center gap-3 rounded-l-full rounded-tr-full bg-white px-7 py-4 text-sm font-bold text-[#121212] transition-all duration-150 hover:bg-neutral-100 active:translate-y-px whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Verificar disponibilidad en mi zona</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right Column: Light-tinted stage with Embedded Dark Report */}
            <div className="lg:col-span-4 bg-[#DCE7FF] pt-5 px-5 pb-0 lg:pt-6 lg:pl-6 lg:pr-0 flex items-end">
              <div className="w-full h-full rounded-tl-[20px] rounded-tr-[20px] lg:rounded-tr-none bg-[#0A0A0D] text-white p-5 sm:p-6 flex flex-col justify-between border-t border-l border-neutral-800">
                {/* Report Mini-Header (No tabs, just Agustin Bernat) */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-neutral-800">
                  <span className="font-display text-[11px] font-extrabold tracking-wider uppercase text-neutral-300 whitespace-nowrap">
                    AGUSTIN BERNAT
                  </span>
                </div>

                <div className="my-auto py-4 text-center">
                  <p className="text-lg sm:text-xl font-medium tracking-[0.06em] uppercase text-white mb-5">
                    CLIENTES DE CALIDAD
                  </p>

                  {/* Embedded Project Card */}
                  <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[16/10] mb-5">
                    {!projectImgFailed ? (
                      <img
                        src="/src/assets/images/consultant_strategy_session_1795454265660.jpg"
                        alt="Consultoría PYMES GROW"
                        referrerPolicy="no-referrer"
                        onError={() => setProjectImgFailed(true)}
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-neutral-400">
                        <Building2 className="h-8 w-8" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4">
                      <p className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                        Consultoría PYMES GROW
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-400">fue analizado por</p>
                  <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-white mt-0.5">
                    100 Potenciales Clientes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

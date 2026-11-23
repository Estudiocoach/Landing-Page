import React from 'react';
import { Calendar, CheckCheck, Globe, Smartphone, TrendingUp } from 'lucide-react';

export const TechPlatformSection: React.FC = () => {
  return (
    <section id="tecnologia" className="bg-[#111111] text-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="max-w-3xl mb-12 lg:mb-14">
          <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.08em] text-[#00C853] mb-3">
            INFRAESTRUCTURA PROPIA
          </p>
          <h2 className="font-display text-[30px] lg:text-[40px] font-black tracking-[-0.03em] leading-[1.1] text-white text-balance mb-4">
            Tecnología diseñada para responder en segundos, no en horas.
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#9CA3AF]">
            El 78% de las operaciones se las lleva el primero que responde con precisión. Nuestro stack trabaja mientras tu equipo duerme.
          </p>
        </div>

        {/* Bento Grid: Top 12-col wide card + Bottom two 6-col cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Tarjeta 1 (Ancha 12 cols — Coachea2) */}
          <div className="lg:col-span-12 bg-[#1A1A1A] border border-[#2E2E2E] rounded-[16px] p-7 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2.5 text-[#00C853] mb-3">
                  <Smartphone className="h-5 w-5" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    CRM + Google Calendar + WhatsApp
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
                  Coachea2 — &ldquo;Califica tus clientes y ORGANIZA tus citas con ellos&rdquo;
                </h3>
                <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#9CA3AF] mb-6">
                  Gestiona tus relaciones en segundos cada día. Lleva registro, califica y gestiona tus clientes activos y aquellos que solo te consultaron por tus servicios. Agenda tus citas y refléjalas en tu Google Calendar.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#2E2E2E] text-xs font-semibold text-neutral-300">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#0056FF]" aria-hidden="true" />
                    <span>Sincronización directa con Google Calendar</span>
                  </span>
                  <span className="text-[#00C853]">Calificación automática de clientes activos</span>
                </div>
              </div>

              {/* Smartphone Coachea2 + WhatsApp + Google Calendar Mockup */}
              <div className="lg:col-span-6">
                <div className="mx-auto max-w-[390px] rounded-[24px] border-[5px] border-neutral-700 bg-[#0B141A] overflow-hidden shadow-2xl">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#1F2C34] text-[11px] font-mono-tabular text-neutral-300">
                    <span className="font-sans font-bold text-white">Coachea2 CRM</span>
                    <span className="text-[#00C853] font-bold">Google Calendar Sync</span>
                  </div>

                  <div className="p-4 space-y-2.5 text-[12px]">
                    <div className="ml-auto max-w-[88%] rounded-lg bg-[#005C4B] px-3 py-2 text-white">
                      <p>
                        Hola, gracias por consultar por nuestros servicios. ¿Querés coordinar una reunión de diagnóstico esta semana?
                      </p>
                      <span className="mt-1 flex justify-end items-center gap-1 text-[10px] text-neutral-300/80 font-mono-tabular">
                        10:14 <CheckCheck className="h-3 w-3 text-[#53BDEB]" />
                      </span>
                    </div>
                    <div className="mr-auto max-w-[88%] rounded-lg bg-[#202C33] px-3 py-2 text-neutral-100">
                      <p>
                        Sí, perfecto. Busco escalar mi consultora este trimestre. ¿Tienen disponibilidad mañana a las 11:00 hs?
                      </p>
                    </div>
                    <div className="ml-auto max-w-[88%] rounded-lg bg-[#005C4B] px-3 py-2 text-white">
                      <p>
                        ¡Confirmado! Tu cita quedó agendada mañana 11:00 hs y reflejada en Google Calendar.
                      </p>
                      <span className="mt-1 flex justify-end items-center gap-1 text-[10px] text-neutral-300/80 font-mono-tabular">
                        10:15 <CheckCheck className="h-3 w-3 text-[#53BDEB]" />
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-3 border-t border-[#00C853]/30 bg-[#00C853]/15 text-xs font-bold text-[#00C853] flex items-center justify-between gap-2">
                    <span>Cliente Calificado · Cita en Google Calendar</span>
                    <span className="font-mono-tabular">11:00 hs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 (Izquierda 6 cols — Paid Ads) */}
          <div className="lg:col-span-6 bg-[#1A1A1A] border border-[#2E2E2E] rounded-[16px] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-white">
                  Paid Ads — Tu negocio en todos lados
                </h3>
                <TrendingUp className="h-5 w-5 text-[#0056FF] shrink-0" aria-hidden="true" />
              </div>
              <p className="text-[16px] leading-[1.6] text-[#9CA3AF] mb-7">
                Dale visibilidad a tus productos y servicios. Visualiza los resultados reales de tu campaña, medí la efectividad de tus anuncios y conocé el número real de consultas agendadas con vos.
              </p>
            </div>

            {/* Paid Ads Analytics Mockup */}
            <div className="bg-[#111111] border border-[#2E2E2E] rounded-xl p-5">
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 mb-4 border-b border-[#2E2E2E]">
                <span>Paid Ads · Resultados Reales</span>
                <span className="font-mono-tabular text-[#00C853] font-bold">Campañas Activas</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-tabular">
                <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg p-3">
                  <p className="text-xl font-black text-white">48.200</p>
                  <p className="font-sans text-[11px] text-neutral-400 mt-0.5">Alcance Local</p>
                </div>
                <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg p-3">
                  <p className="text-xl font-black text-white">342</p>
                  <p className="font-sans text-[11px] text-neutral-400 mt-0.5">Consultas</p>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-[#0056FF]/20 border border-[#0056FF] rounded-lg p-3">
                  <p className="text-xl font-black text-white">48</p>
                  <p className="font-sans text-[11px] font-bold text-blue-200 mt-0.5">
                    Citas Agendadas
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs font-mono-tabular text-neutral-300 text-center">
                Efectividad de anuncios medida por <strong className="text-[#00C853]">reuniones agendadas reales</strong>
              </p>
            </div>
          </div>

          {/* Tarjeta 3 (Derecha 6 cols — Tus propias páginas) */}
          <div className="lg:col-span-6 bg-[#1A1A1A] border border-[#2E2E2E] rounded-[16px] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-white">
                  Tus propias páginas — Marca Personal y Productos
                </h3>
                <Globe className="h-5 w-5 text-[#00C853] shrink-0" aria-hidden="true" />
              </div>
              <p className="text-[16px] leading-[1.6] text-[#9CA3AF] mb-7">
                Creamos tus páginas de aterrizaje para capturar los datos de tu cliente y para que ellos te encuentren en Google y en los buscadores de inteligencia artificial.
              </p>
            </div>

            {/* Landing & Google / AI Search Visibility Mockup */}
            <div className="bg-[#111111] border border-[#2E2E2E] rounded-xl p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-full sm:w-1/2 bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg p-4">
                <p className="text-[10px] font-bold uppercase text-[#0056FF] mb-1">
                  Marca Personal &amp; Productos
                </p>
                <p className="font-display text-sm font-bold text-white mb-2">
                  Landing de Captura Propia
                </p>
                <div className="space-y-2">
                  <div className="h-7 rounded bg-[#111111] border border-[#2E2E2E] px-2.5 flex items-center text-[11px] text-neutral-400">
                    Nombre y WhatsApp...
                  </div>
                  <div className="h-7 rounded bg-[#0056FF] px-2.5 flex items-center justify-center text-[11px] font-bold text-white">
                    Agendar Asesoría
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                  Indexación SEO + IA
                </p>
                <p className="font-mono-tabular text-2xl sm:text-3xl font-black text-[#00C853]">
                  Google &amp; IA
                </p>
                <p className="text-xs text-neutral-300 mt-1">
                  Visible en buscadores tradicionales y motores de inteligencia artificial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

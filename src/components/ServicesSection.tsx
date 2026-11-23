import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  duration: string;
  summary: string;
  outcome: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Conocer tu negocio',
    duration: 'Mes 1',
    summary:
      'Coordinamos reuniones de descubrimiento para conocer qué es lo que querés lograr con tu negocio y tu marca personal.',
    outcome: 'Definir los lineamientos básicos de tu marca para continuar con el resto de pasos.',
  },
  {
    number: '02',
    title: 'Pre producción y Producción',
    duration: 'Mes 1–2',
    summary:
      'Creamos el contenido junto a vos para que tu marca refleje tu esencia y lo que querés comunicar. Grabamos el contenido y empezamos a publicar.',
    outcome: 'Definir el contenido, coordinar agenda y empezar con la grabación del contenido.',
  },
  {
    number: '03',
    title: 'Infraestructura',
    duration: 'Mes 2',
    summary:
      'Instalamos el CRM, nuestro sistema de gestión interno, creamos tu web y las páginas de las propiedades que te interesa destacar.',
    outcome: 'Tu negocio funcionando con nuestra tecnología y generando nuevos potenciales clientes.',
  },
  {
    number: '04',
    title: 'Escala y Optimización',
    duration: 'Mes 2 en adelante',
    summary:
      'Lanzamos tus anuncios e iniciamos a publicar para hacer que los clientes inicien a llegar a tu negocio para que puedas empezar a gestionarlos desde nuestro CRM.',
    outcome: 'Tus clientes inician a llegar y hay que empezar a gestionarlos.',
  },
];

export const ServicesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="servicios" className="bg-white py-20 lg:py-28 border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#0056FF] mb-3">
            Plan de Acción
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.025em] leading-[1.08] text-[#111827] text-balance">
            Potenciamos tu negocio en 4 pasos.
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {STEPS.map((step, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={step.number} className="py-7 sm:py-9">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0056FF]"
                >
                  <div className="flex items-baseline gap-5 sm:gap-8">
                    <span
                      className={`font-display font-mono-tabular text-4xl sm:text-6xl font-black tracking-tight transition-colors duration-150 ${
                        isOpen ? 'text-[#0056FF]' : 'text-neutral-300 group-hover:text-neutral-500'
                      }`}
                    >
                      {step.number}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                        <span className="text-xs font-bold tracking-wider uppercase text-[#0056FF]">
                          Paso {step.number}
                        </span>
                        <span className="text-neutral-300" aria-hidden="true">
                          ·
                        </span>
                        <span className="font-mono-tabular text-xs font-bold text-neutral-600">
                          {step.duration}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#111827]">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 pl-14 md:pl-0">
                    <span className="text-sm font-bold text-neutral-500 group-hover:text-[#111827] transition-colors">
                      {isOpen ? 'Ocultar detalle' : 'Ver detalle'}
                    </span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center border transition-transform duration-150 ${
                        isOpen
                          ? 'border-[#0056FF] bg-[#0056FF] text-white rotate-180'
                          : 'border-neutral-300 text-[#111827] group-hover:border-[#111827]'
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-6 pl-0 md:pl-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7">
                      <p className="text-lg lg:text-xl leading-relaxed text-[#111827] font-medium">
                        {step.summary}
                      </p>
                    </div>

                    <div className="lg:col-span-5 bg-[#F8F9FA] border border-neutral-200 p-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0056FF] mb-2">
                        Hito operativo
                      </p>
                      <p className="text-base font-semibold text-[#111827] leading-relaxed">
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

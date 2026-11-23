import React from 'react';
import { Check, X } from 'lucide-react';

const TRADITIONAL_ITEMS = [
  {
    title: 'Leads compartidos en portales:',
    detail: 'Pagas cada vez más caro por consultas que también reciben 5 competidores al mismo tiempo.',
  },
  {
    title: 'Métricas de vanidad:',
    detail: 'Agencias que celebran "Me Gusta" y alcance mientras tus unidades siguen sin reservarse.',
  },
  {
    title: 'Embudo comercial colapsado:',
    detail: 'Tus vendedores pierden horas llamando a curiosos sin presupuesto ni intención real de compra.',
  },
];

const ESTUDIO_COACH_ITEMS = [
  {
    title: 'Demanda propia y exclusiva:',
    detail: 'Ecosistema de pauta directa donde cada inversor o propietario registrado es 100% tuyo.',
  },
  {
    title: 'Optimización a Costo por Reserva:',
    detail: 'Medimos cada peso invertido según las visitas agendadas y operaciones cerradas.',
  },
  {
    title: 'Filtrado automático con IA 24/7:',
    detail: 'Precalificamos presupuesto, zona y plazo por WhatsApp antes de pasar el contacto al vendedor.',
  },
];

export const ContrastSection: React.FC = () => {
  return (
    <section id="contraste" className="bg-[#F8F9FA] py-16 lg:py-24 border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-14">
          <h2 className="font-display text-[30px] lg:text-[40px] font-black tracking-[-0.03em] leading-[1.1] text-[#111827] text-balance mb-4">
            El Marketing Tradicional ya no es suficiente.
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#4B5563]">
            Compra clientes, trabajalos y logra que tu negocio tenga más movimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[#111827] pb-5 mb-7 border-b border-neutral-200">
                El Modelo Tradicional (Lo que frena tus ventas)
              </h3>

              <ul className="space-y-6">
                {TRADITIONAL_ITEMS.map((item) => (
                  <li key={item.title} className="flex items-start gap-3.5">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#EF4444]"
                      aria-hidden="true"
                    >
                      <X className="h-4 w-4 stroke-[2.5]" />
                    </span>
                    <p className="text-[16px] leading-[1.6] text-[#4B5563]">
                      <strong className="font-bold text-[#111827]">{item.title}</strong> {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white border-2 border-[#0056FF] rounded-2xl p-8 sm:p-10 shadow-[0_20px_25px_-5px_rgba(0,86,255,0.08)] flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[#111827] pb-5 mb-7 border-b border-neutral-200">
                El Sistema Estudio Coach
              </h3>

              <ul className="space-y-6">
                {ESTUDIO_COACH_ITEMS.map((item) => (
                  <li key={item.title} className="flex items-start gap-3.5">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0056FF] text-white"
                      aria-hidden="true"
                    >
                      <Check className="h-4 w-4 stroke-[2.75]" />
                    </span>
                    <p className="text-[16px] leading-[1.6] text-[#4B5563]">
                      <strong className="font-bold text-[#111827]">{item.title}</strong> {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

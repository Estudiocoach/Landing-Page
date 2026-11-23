import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Compass,
  Minus,
  Plus,
  Target,
  Video,
} from 'lucide-react';
import { ConversionSection } from './ConversionSection';

const FOUNDATION_PILLAR = {
  tag: 'Tarjeta 01 — Creamos las bases de tu negocio',
  title: 'Coaching y Marca Personal',
  description:
    'Exploramos lo que tenés en mente, definimos un plan de acción a seguir para lograrlo y luego vestimos la estrategia con contenido de calidad que genere autoridad y confianza en un nuevo cliente.',
  icon: Compass,
};

const PILLARS = [
  {
    tag: 'Tarjeta 01 — Creación de Contenido',
    title: 'Planificación y Producción',
    description:
      'Definimos lo que querés comunicar con tu negocio, aclaramos los SÍ y los NO de tu marca personal y grabamos el contenido para iniciar a publicar en Redes Sociales.',
    icon: Video,
  },
  {
    tag: 'Tarjeta 02 — Crecimiento Gestionado',
    title: 'Gestión Activa de Tráfico y Anuncios',
    description:
      'Nuestro equipo opera tus campañas en Meta y Google apuntando a compradores con liquidez y motivados, optimizando el presupuesto cada semana según conversiones reales.',
    icon: Target,
  },
  {
    tag: 'Tarjeta 03 — IA en WhatsApp y Entregabilidad',
    title: 'Precalificación 24/7 y Seguimiento',
    description:
      'Nuestra automatización filtra curiosos en WhatsApp para que luego vos los cierres; generamos una infraestructura de email y un CRM con alertas en tiempo real para recontactar a ese potencial cliente.',
    icon: Bot,
  },
  {
    tag: 'Tarjeta 04 — Plan Semanal de Ejecución',
    title: 'Hoja de Ruta y Soporte Comercial',
    description:
      'Durante la semana recibís contenido y campañas listas para publicar. Vos aportás el inventario y el conocimiento de tu sector; nosotros nuestro equipo que planifica, monta y mide el resto.',
    icon: CalendarCheck,
  },
];

const ROI_CASES = [
  {
    badge: 'Clientes Potenciales',
    figure: '+1000',
    text: 'Generados a través de nuestras campañas de anuncios en Meta y Google.',
  },
  {
    badge: 'COMPRADORES y CLIENTES',
    figure: '+50 Ventas',
    text: 'Validamos nuestro método y generamos clientes aptos para cerrar.',
  },
  {
    badge: 'NUESTROS CLIENTES',
    figure: '+20',
    text: 'Hemos trabajado en el sector y desarrollamos un conocimiento que aporta a tu negocio.',
  },
];

const FAQS = [
  {
    q: '¿Cuál es exactamente el costo del servicio?',
    a: 'Nuestro plan más completo tiene un abono base de $500 USD por mes. Incluye toda nuestra plataforma tecnológica (Automatización, CRM y embudos) más el soporte continuo y ejecución semanal de nuestro equipo. Además contamos con otros 3 planes adaptados a cada etapa del negocio.',
  },
  {
    q: '¿Ustedes son un software o una agencia de marketing?',
    a: 'Ambos. Te entregamos la tecnología propietaria para capturar y filtrar clientes, y un equipo real que planifica, produce y opera tus campañas. Nunca te entregamos un usuario y contraseña para que te arregles solo.',
  },
  {
    q: '¿Para qué tipo de negocios está diseñado este modelo?',
    a: 'Trabajamos con agentes inmobiliarios, consultores de negocios, marcas personales y equipos comerciales activos que buscan escalar sus consultas y delegar la ejecución técnica.',
  },
  {
    q: '¿Tengo que crear yo el contenido y los anuncios?',
    a: 'No. Definimos el contenido junto a vos, planificamos la producción y preparamos las piezas, landings y campañas semanales. Solo necesitamos tu conocimiento del sector para validar.',
  },
  {
    q: '¿Qué pasa si tengo un lanzamiento más grande o necesito algo a medida?',
    a: 'Los proyectos de agencia a medida están disponibles exclusivamente para clientes activos. Definimos el alcance, tiempos y valor exacto antes de iniciar.',
  },
  {
    q: '¿Por qué importa la disponibilidad de mi mercado?',
    a: 'Porque protegemos la calidad del servicio y evitamos hacer competir a nuestros socios en la misma plaza. Una vez que envías el formulario, te respondemos en menos de 24 horas hábiles.',
  },
];

export const PricingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const formNameRef = useRef<HTMLInputElement | null>(null);

  const scrollToForm = () => {
    const el = document.getElementById('aplicar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => {
        formNameRef.current?.focus({ preventScroll: true });
      }, 350);
    }
  };

  const FoundationIcon = FOUNDATION_PILLAR.icon;

  return (
    <div className="bg-white text-[#111827]">
      {/* Sección 1: Hero de Precio Transparente (#FFFFFF) */}
      <section className="bg-white pt-24 pb-[72px] px-6">
        <div className="mx-auto max-w-[840px] text-center">
          <span className="inline-block rounded-full bg-[#EFF6FF] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-6">
            INVERSIÓN TRANSPARENTE
          </span>

          <h1 className="font-display text-[34px] lg:text-[52px] font-black leading-[1.06] tracking-[-0.04em] text-[#111827] text-balance mb-6">
            Saca el marketing de tu lista de tareas pendientes.
          </h1>

          {/* Bloque de Precio Protagonista */}
          <div className="my-8 inline-block border border-neutral-200 bg-[#F8F9FA] rounded-2xl px-8 py-6">
            <p className="font-display font-mono-tabular text-[44px] lg:text-[64px] font-black leading-none tracking-[-0.04em] text-[#0056FF]">
              $500 USD <span className="text-[24px] lg:text-[32px] font-extrabold text-[#111827]">/ mes</span>
            </p>
          </div>

          <p className="mx-auto max-w-[680px] text-[18px] lg:text-[20px] leading-[1.6] text-[#4B5563] mb-9">
            Nuestro plan más completo con un abono mensual que incluye nuestra plataforma tecnológica completa (Automatización + CRM + Embudos) y el equipo operativo que ejecuta tus campañas cada semana.
          </p>

          <div>
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex h-[54px] items-center justify-center gap-2.5 rounded-lg bg-[#0056FF] px-8 text-base font-bold text-white transition-colors duration-150 hover:bg-[#0044CC] active:translate-y-px cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056FF]"
            >
              <span>Agendar Llamada de Inicio</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <p className="mt-3 text-[13px] font-medium text-[#6B7280]">
              Este plan es uno de los 4 que tenemos para tu negocio. Consulta por el resto.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: Desglose "Todo lo que obtienes por $500 /mes" (#F8F9FA) */}
      <section className="bg-[#F8F9FA] py-20 px-6 border-t border-b border-neutral-200">
        <div className="mx-auto max-w-[1120px]">
          <div className="text-center mb-14">
            <h2 className="font-display text-[30px] lg:text-[36px] font-extrabold tracking-[-0.03em] text-[#111827]">
              Todo lo que obtienes por $500 /mes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta Base (Span 2 cols on desktop) */}
            <article className="md:col-span-2 bg-white border-2 border-[#0056FF] rounded-[16px] p-8 sm:p-9 flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#0056FF]">
                <FoundationIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.06em] text-[#0056FF] mb-2">
                  {FOUNDATION_PILLAR.tag}
                </p>
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#111827] mb-2.5">
                  {FOUNDATION_PILLAR.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#4B5563] max-w-3xl">
                  {FOUNDATION_PILLAR.description}
                </p>
              </div>
            </article>

            {/* 4 Tarjetas de Ejecución */}
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="bg-white border border-[#E5E7EB] rounded-[16px] p-8 sm:p-9"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#0056FF]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.06em] text-[#0056FF] mb-2">
                    {pillar.tag}
                  </p>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#111827] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[#4B5563]">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección 3: 3 Tarjetas de Resultados + "Tienes un lanzamiento grande en mente?" (#FFFFFF) */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-[1120px]">
          {/* 3 Tarjetas de ROI Real */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROI_CASES.map((item) => (
              <article
                key={item.badge}
                className="bg-white border border-[#E5E7EB] rounded-[12px] p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.08em] text-[#4B5563] mb-3">
                    {item.badge}
                  </span>
                  <p className="font-display font-mono-tabular text-[40px] lg:text-[46px] font-black tracking-[-0.04em] leading-none text-[#0056FF] mb-4">
                    {item.figure}
                  </p>
                </div>
                <p className="text-[15px] leading-[1.55] text-[#374151]">{item.text}</p>
              </article>
            ))}
          </div>

          {/* Bloque "Proyectos Especiales" debajo de los 3 datos */}
          <div className="mt-12 bg-[#F3F4F6] border-l-[5px] border-[#111827] rounded-[12px] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="lg:w-[70%]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#4B5563] mb-2">
                EXPANSIÓN A MEDIDA
              </p>
              <h3 className="font-display text-[24px] font-extrabold tracking-tight text-[#111827] mb-3">
                ¿Tienes un lanzamiento grande en mente?
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#374151]">
                Los proyectos de agencia a medida —como lanzamientos integrales, producción audiovisual completa o flujos personalizados de IA— están disponibles exclusivamente para clientes activos. Si está fuera del abono base, lo cotizamos con alcance cerrado antes de empezar.
              </p>
            </div>

            <div className="lg:w-[30%] flex lg:justify-end">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center border border-[#111827] rounded-lg px-6 py-3.5 text-sm font-bold text-[#111827] transition-colors hover:bg-[#111827] hover:text-white whitespace-nowrap cursor-pointer"
              >
                Consultar alcances a medida
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Formulario alineado con El Sistema y Productos */}
      <ConversionSection nameInputRef={formNameRef} />

      {/* Sección 5: Preguntas Frecuentes (Acordeón Interactivo, #F8F9FA) */}
      <section className="bg-[#F8F9FA] py-20 px-6">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-display text-[30px] lg:text-[36px] font-black tracking-[-0.03em] text-[#111827] text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="py-5 sm:py-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-6 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0056FF]"
                  >
                    <span className="font-display text-lg sm:text-xl font-extrabold text-[#111827]">
                      {faq.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#111827]">
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-[#0056FF]" aria-hidden="true" />
                      ) : (
                        <Plus className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 pr-10 text-[16px] leading-[1.6] text-[#4B5563]">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

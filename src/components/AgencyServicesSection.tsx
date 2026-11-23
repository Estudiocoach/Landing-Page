import React, { useState } from 'react';
import {
  ArrowRight,
  BellRing,
  Building2,
  Check,
  Download,
  ExternalLink,
  Heart,
  MessageCircle,
  Send,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react';

interface AgencyServicesSectionProps {
  onApplyClick: () => void;
}

const CONSOLIDATION_ROWS = [
  {
    area: 'Sitios y Landings',
    traditional: 'Diseñador web externo (entregas lentas)',
    scaleprop: 'Incluido (Embudos ilimitados por proyecto)',
  },
  {
    area: 'Pauta y Creatividades',
    traditional: 'Agencia genérica sin experiencia inmobiliaria',
    scaleprop: 'Incluido (Especialistas en Real Estate DFY)',
  },
  {
    area: 'Atención en WhatsApp',
    traditional: 'Respuesta manual tardía de vendedores',
    scaleprop: 'Incluido (IA precalificadora 24/7 en <10 seg)',
  },
  {
    area: 'CRM y Seguimiento',
    traditional: 'Licencias externas sin configurar',
    scaleprop: 'Incluido (CRM listo + alertas en vivo)',
  },
  {
    area: 'Control Comercial',
    traditional: 'Planillas manuales sin trazabilidad',
    scaleprop: 'Incluido (Dashboard en vivo de costo por cierre)',
  },
];

const RE_ENGAGEMENT_ALERTS = [
  {
    lead: 'Juan Pérez',
    action: 'volvió a abrir la Lista de Precios Torre II',
    time: 'hace 1 minuto',
    budget: 'USD 190k',
  },
  {
    lead: 'Mariana Costa',
    action: 'descargó por 2ª vez el Plano 3 Ambientes',
    time: 'hace 3 minutos',
    budget: 'USD 240k',
  },
];

export const AgencyServicesSection: React.FC<AgencyServicesSectionProps> = ({ onApplyClick }) => {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [brochureSent, setBrochureSent] = useState(false);
  const [alertIdx, setAlertIdx] = useState(0);

  const activeAlert = RE_ENGAGEMENT_ALERTS[alertIdx];

  return (
    <section
      id="sistema"
      aria-labelledby="servicios-agencia-heading"
      className="bg-white py-16 lg:py-24 border-b border-neutral-200"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Header: Servicios de la Agencia */}
        <div className="mx-auto max-w-[760px] text-center mb-16">
          <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-3">
            SERVICIOS DE LA AGENCIA · SISTEMA LLAVE EN MANO (DONE-FOR-YOU)
          </p>
          <h2
            id="servicios-agencia-heading"
            className="font-display text-[32px] lg:text-[42px] font-black tracking-[-0.03em] leading-[1.1] text-[#111827] text-balance mb-5"
          >
            Nos entregas el proyecto o la propiedad. Nosotros hacemos todo lo demás.
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#4B5563]">
            Saca el marketing de tu lista de tareas diarias. Integramos captación, pauta, seguimiento y estrategia comercial en un solo equipo.
          </p>
        </div>

        {/* 4 Módulos Operativos en Grilla Zig-Zag Alternada */}
        <div className="space-y-20 lg:space-y-24">
          {/* Módulo 01 — Captación y Embudos (Texto Izq / Mockup Der) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-1">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-2.5">
                Módulo 01 — Captación y Embudos
              </p>
              <h3 className="font-display text-2xl sm:text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#111827] mb-4">
                Landings dedicadas para cada desarrollo o captación de exclusivas
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#4B5563] mb-6">
                Creamos páginas específicas para tus lanzamientos en pozo, loteos o propiedades destacadas. Tú nos pasas los renders y planos; nosotros armamos toda la arquitectura de conversión.
              </p>
              <ul className="space-y-3 text-[15px] font-medium text-[#111827]">
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Páginas por tipología e inversor</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Descarga automatizada de brochures</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Formularios de alta conversión móvil</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 order-2">
              <div className="relative rounded-[12px] border border-[#E5E7EB] bg-[#F8F9FA] p-5 sm:p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)]">
                <div className="rounded-lg border border-neutral-200 bg-white overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                    </div>
                    <span className="font-mono-tabular text-[11px] text-neutral-500">
                      torre-del-parque.scaleprop.io
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12">
                    <div className="sm:col-span-7 p-5 flex flex-col justify-between">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#0056FF] mb-1">
                          Edificio en Pozo · Preventa
                        </p>
                        <h4 className="font-display text-lg font-black text-[#111827] leading-snug mb-2">
                          Torre del Parque II · Unidades de Inversión
                        </h4>
                        <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                          Plan de cuotas en obra sin interés bancario. Entrega programada Q4 2027.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setBrochureSent(!brochureSent)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#0056FF] px-4 py-2.5 text-xs font-bold text-white rounded-md hover:bg-[#0044CC] transition-colors cursor-pointer"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>
                          {brochureSent ? 'Brochure enviado por WhatsApp ✓' : 'Descargar Brochure y Planos'}
                        </span>
                      </button>
                    </div>

                    <div className="sm:col-span-5 relative min-h-[175px] bg-neutral-900">
                      {!heroImgFailed ? (
                        <img
                          src="/src/assets/images/hero_real_estate_tower_1795359306961.jpg"
                          alt="Vista previa de edificio en pozo"
                          width={640}
                          height={360}
                          referrerPolicy="no-referrer"
                          onError={() => setHeroImgFailed(true)}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-white">
                          <Building2 className="h-8 w-8 text-[#0056FF]" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating Conversion Card */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-4 sm:right-8 bg-[#111111] text-white px-5 py-3 rounded-lg border border-neutral-800 shadow-lg">
                  <p className="font-mono-tabular text-sm font-bold">
                    Conversión: <span className="text-[#00C853]">15.2%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Módulo 02 — Pauta Segmentada: Compradores y Propietarios (Mockup Izq / Texto Der) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-[12px] border border-[#E5E7EB] bg-[#F8F9FA] p-5 sm:p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)]">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  {/* Real Meta Ads Card */}
                  <div className="sm:col-span-7 bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-sm">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-100">
                      <div>
                        <p className="text-xs font-bold text-[#111827]">Estudio Coach · Pauta Inmobiliaria</p>
                        <p className="text-[10px] text-neutral-500">Publicidad · Meta Ads &amp; Google</p>
                      </div>
                      <span className="text-[10px] font-bold uppercase text-[#00C853] bg-[#00C853]/15 px-2 py-0.5 rounded">
                        Activo
                      </span>
                    </div>

                    <div className="px-4 py-3 text-xs text-[#111827]">
                      ¿Buscás invertir en unidades en pozo con renta anual en USD o vender tu propiedad en exclusiva en menos de 60 días?
                    </div>

                    <div className="relative h-32 bg-neutral-900">
                      {!heroImgFailed ? (
                        <img
                          src="/src/assets/images/hero_real_estate_tower_1795359306961.jpg"
                          alt="Anuncio segmentado de desarrollo inmobiliario"
                          width={640}
                          height={360}
                          referrerPolicy="no-referrer"
                          onError={() => setHeroImgFailed(true)}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-white">
                          <Building2 className="h-8 w-8 text-[#0056FF]" />
                        </div>
                      )}
                    </div>

                    <div className="px-4 py-2.5 flex items-center justify-between bg-neutral-50 border-t border-neutral-100">
                      <div className="flex items-center gap-3 text-neutral-500">
                        <Heart className="h-4 w-4" aria-hidden="true" />
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <span className="bg-[#0056FF] text-white text-[11px] font-bold px-3 py-1 rounded">
                        Ver Disponibilidad
                      </span>
                    </div>
                  </div>

                  {/* Ad Panel Metric Card */}
                  <div className="sm:col-span-5 bg-[#111111] text-white rounded-lg p-5 border border-neutral-800">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Métrica de Panel
                    </p>
                    <p className="text-xs text-neutral-300">Costo por Lead Calificado:</p>
                    <p className="font-mono-tabular text-3xl font-black text-[#00C853] mt-1 mb-4">
                      $2.30 USD
                    </p>
                    <div className="space-y-2 pt-3 border-t border-neutral-800 text-xs font-mono-tabular">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Compradores</span>
                        <span className="font-bold text-white">72%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Propietarios</span>
                        <span className="font-bold text-white">28%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-2.5">
                Módulo 02 — Pauta Segmentada: Compradores y Propietarios
              </p>
              <h3 className="font-display text-2xl sm:text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#111827] mb-4">
                Anuncios dirigidos a quienes buscan comprar hoy o vender en exclusiva
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#4B5563] mb-6">
                Gestionamos tus campañas en Meta Ads y Google Ads con un doble objetivo: llenar tu embudo de compradores con liquidez y captar propietarios motivados en tu zona.
              </p>
              <ul className="space-y-3 text-[15px] font-medium text-[#111827]">
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Redacción persuasiva y diseño de anuncios incluidos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Retargeting dinámico a interesados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Optimización diaria de presupuesto</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Módulo 03 — Nutrición y Alertas de Comportamiento (Texto Izq / Mockup Der) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-1">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-2.5">
                Módulo 03 — Nutrición y Alertas de Comportamiento
              </p>
              <h3 className="font-display text-2xl sm:text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#111827] mb-4">
                Ningún interesado vuelve a enfriarse en tu base de datos
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#4B5563] mb-6">
                Activamos secuencias automáticas por WhatsApp y correo electrónico para inversores que deciden a 60 o 90 días, alertando a tu vendedor en el instante en que un contacto vuelve a revisar precios.
              </p>
              <ul className="space-y-3 text-[15px] font-medium text-[#111827]">
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Seguimiento multicanal automatizado</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Alertas de re-interés en tiempo real</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Integración total con tu CRM</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 order-2">
              <div className="rounded-[12px] border border-[#E5E7EB] bg-[#F8F9FA] p-5 sm:p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)]">
                {/* Desktop Notification Mockup */}
                <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-md mb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0056FF] text-white">
                        <BellRing className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#0056FF]">
                          Alerta de Comportamiento · CRM en Vivo
                        </p>
                        <p className="text-base font-bold text-[#111827] mt-1">
                          ⚡ {activeAlert.lead} {activeAlert.action} {activeAlert.time}
                        </p>
                        <p className="text-xs text-[#4B5563] mt-1">
                          Presupuesto declarado: <strong className="font-mono-tabular text-[#111827]">{activeAlert.budget}</strong> · Momento óptimo de contacto telefónico
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between gap-4">
                    <span className="text-xs text-neutral-500">
                      Secuencia activa: Nutrición Inversores 60-90 días
                    </span>
                    <button
                      type="button"
                      onClick={() => setAlertIdx((prev) => (prev + 1) % RE_ENGAGEMENT_ALERTS.length)}
                      className="text-xs font-bold text-[#0056FF] hover:underline cursor-pointer whitespace-nowrap"
                    >
                      Simular siguiente alerta →
                    </button>
                  </div>
                </div>

                {/* Automated Sequence Timeline */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white border border-neutral-200 rounded-lg p-3">
                    <p className="font-mono-tabular text-xs font-bold text-[#111827]">Día 1</p>
                    <p className="text-[11px] text-[#4B5563] mt-0.5">WhatsApp + Dossier</p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-lg p-3">
                    <p className="font-mono-tabular text-xs font-bold text-[#111827]">Día 14</p>
                    <p className="text-[11px] text-[#4B5563] mt-0.5">Avance de Obra</p>
                  </div>
                  <div className="bg-white border border-[#0056FF] rounded-lg p-3">
                    <p className="font-mono-tabular text-xs font-bold text-[#0056FF]">Re-apertura</p>
                    <p className="text-[11px] text-[#111827] font-semibold mt-0.5">Aviso al Vendedor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Módulo 04 — Tu Equipo Completo On-Retainer (Mockup Izq / Texto Der) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-[12px] border border-[#E5E7EB] bg-[#F8F9FA] p-5 sm:p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)]">
                {/* Executive Monthly Summary Card */}
                <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3.5 bg-[#111111] text-white">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[#00C853]" aria-hidden="true" />
                      <span className="text-xs font-bold">
                        Resumen Ejecutivo Mensual · Equipo On-Retainer
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#00C853]">
                      Objetivos cumplidos
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="border border-neutral-200 rounded-md p-3.5">
                        <p className="text-[11px] text-[#4B5563]">Tasa Asistencia Visitas</p>
                        <p className="font-mono-tabular text-2xl font-black text-[#111827] mt-1">
                          74.5%
                        </p>
                        <p className="text-[11px] font-bold text-[#00C853] mt-0.5">↑ +18% vs mes ant.</p>
                      </div>

                      <div className="border border-neutral-200 rounded-md p-3.5">
                        <p className="text-[11px] text-[#4B5563]">Velocidad Respuesta</p>
                        <p className="font-mono-tabular text-2xl font-black text-[#111827] mt-1">
                          &lt; 8 seg
                        </p>
                        <p className="text-[11px] font-bold text-[#00C853] mt-0.5">SLA 24/7 Activo</p>
                      </div>

                      <div className="border border-neutral-200 rounded-md p-3.5">
                        <p className="text-[11px] text-[#4B5563]">CAC sobre Reserva</p>
                        <p className="font-mono-tabular text-2xl font-black text-[#111827] mt-1">
                          0.62%
                        </p>
                        <p className="text-[11px] font-bold text-[#00C853] mt-0.5">↓ -38% sobre ticket</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F8F9FA] border border-neutral-200 rounded-md px-4 py-3 text-xs">
                      <span className="font-semibold text-[#111827]">
                        Equipo asignado: Estratega · Trafficker · Copywriter · Dev · Coach Comercial
                      </span>
                      <span className="font-bold text-[#0056FF]">1 Abono Predecible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-2.5">
                Módulo 04 — Tu Equipo Completo On-Retainer
              </p>
              <h3 className="font-display text-2xl sm:text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#111827] mb-4">
                Un departamento de marketing y tecnología por una fracción del costo interno
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#4B5563] mb-6">
                Accede a estrategas inmobiliarios, traffickers, copywriters, diseñadores y desarrolladores trabajando bajo un abono mensual predecible, con guiones de cierre y reuniones quincenales de métricas.
              </p>
              <ul className="space-y-3 text-[15px] font-medium text-[#111827]">
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Playbooks y guiones para tu equipo de ventas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Auditoría continua de llamadas y chats</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                  <span>Sin contratos de permanencia abusivos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sub-bloque 4B: Tabla de Consolidación de Proveedores */}
        <div className="mt-20 lg:mt-24 bg-[#F8F9FA] rounded-[16px] p-6 sm:p-12 border border-neutral-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-2">
                Consolidación de Proveedores
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#111827]">
                Un solo sistema reemplaza 5 proveedores desconectados
              </h3>
            </div>
            <button
              type="button"
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0056FF] hover:text-[#0044CC] cursor-pointer whitespace-nowrap"
            >
              <span>Verificar disponibilidad en mi plaza</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-neutral-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-4 px-6 text-sm font-bold text-[#111827] bg-neutral-50">
                    Área Operativa
                  </th>
                  <th className="py-4 px-6 text-sm font-bold text-[#4B5563] bg-neutral-50">
                    Modelo Fragmentado Tradicional
                  </th>
                  <th className="py-4 px-6 text-sm font-bold text-white bg-[#0056FF]">
                    Sistema Integral Estudio Coach
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-sm">
                {CONSOLIDATION_ROWS.map((row) => (
                  <tr key={row.area} className="hover:bg-neutral-50/70">
                    <td className="py-4 px-6 font-bold text-[#111827]">{row.area}</td>
                    <td className="py-4 px-6 text-[#4B5563]">{row.traditional}</td>
                    <td className="py-4 px-6 font-semibold text-[#111827] bg-blue-50/40">
                      <span className="inline-flex items-start gap-2">
                        <Check className="h-4 w-4 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                        <span>{row.scaleprop}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

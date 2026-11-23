import React, { useState } from 'react';
import {
  Building2,
  Check,
  CheckCheck,
  Download,
  ExternalLink,
  Heart,
  MessageCircle,
  Send,
  TrendingUp,
} from 'lucide-react';

const STACK_ROWS = [
  {
    feature: 'Sitios y Landings de Captura',
    traditional: 'Agencia de diseño web externa (entrega lenta)',
    integrated: 'Incluido (Embudos ilimitados de alta conversión)',
  },
  {
    feature: 'Gestión de Pauta y Creatividades',
    traditional: 'Agencia de medios genérica sin foco consultivo',
    integrated: 'Incluido (Especialistas en Venta Consultiva + Copywriting)',
  },
  {
    feature: 'Atención y Filtrado en WhatsApp',
    traditional: 'Respuesta manual tardía de los vendedores',
    integrated: 'Incluido (Automatización para la calificación automática)',
  },
  {
    feature: 'CRM y Seguimiento de Leads',
    traditional: 'Licencia de software externa + configuración propia',
    integrated: 'Incluido (CRM configurado + alertas en tiempo real)',
  },
  {
    feature: 'Reportes y Trazabilidad de Ventas',
    traditional: 'Planillas manuales desconectadas de los anuncios',
    integrated: 'Incluido (Reportes semanales del movimiento de tu negocio)',
  },
];

export const ProductsPage: React.FC = () => {
  const [brochureRequested, setBrochureRequested] = useState(false);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <div id="servicios" className="bg-white text-[#111111]">
      {/* 4.1 Encabezado de Sección + 4.2 Los 4 Módulos del Sistema */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          {/* 4.1 Header */}
          <header className="mx-auto max-w-[760px] text-center mb-16">
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-4">
              NUESTRO SISTEMA INTEGRAL
            </p>
            <h1 className="font-display text-[32px] lg:text-[44px] font-black leading-[1.08] tracking-tight text-[#111111] text-balance mb-5">
              Tu negocio con nuestro sistema. Crece con procesos claros.
            </h1>
            <p className="text-[18px] font-normal leading-relaxed text-[#4B5563]">
              Contratar pauta sin seguimiento es tirar presupuesto. Por eso integramos captación, tecnología y cierre comercial en un único ecosistema listo para operar.
            </p>
          </header>

          {/* 4.2 Grilla Zig-Zag Alternada */}
          <div className="space-y-24">
            {/* MÓDULO 1: Captación & Embudos (Texto Izq / Mockup Der) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-1">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-3">
                  01 / UN SISTEMA PARA CONVERTIR
                </p>
                <h2 className="font-display text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#111111] mb-4">
                  Campañas de Ads diseñadas para convertir tráfico frío en consultas reales
                </h2>
                <p className="text-[16px] leading-relaxed text-[#374151] mb-6">
                  Creamos sitios web y los posicionamos en Google. Olvidate de embudos lentos y cambialos por embudos específicos para cada cartera de productos, optimizados para captar datos desde el celular en segundos.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Landings por productos:</strong>{' '}
                      Páginas dedicadas para lanzamientos, campañas de atracción de potenciales clientes y nuevos productos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Velocidad de carga instantánea:</strong>{' '}
                      Arquitectura ligera que evita que el inversor abandone antes de ver toda la información.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Formularios de fricción progresiva:</strong>{' '}
                      Capturamos nombre, WhatsApp e intención de inversión sin abrumar al usuario.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7 order-2">
                <div className="relative rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)]">
                  {/* Browser Frame */}
                  <div className="rounded-lg border border-neutral-200 bg-white overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
                      <div className="flex items-center gap-1.5" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      </div>
                      <span className="font-mono-tabular text-[11px] text-neutral-500">
                        consultoria.estudiocoach.com
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12">
                      <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-between">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#0056FF] mb-1.5">
                            Preventa · Potencia tu 2026
                          </p>
                          <h3 className="font-display text-lg font-black text-[#111111] leading-snug mb-2">
                            Consultoría de Negocios · Para dueños/as PYMES
                          </h3>
                          <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                            Escala tu negocio y hacé crecer tu equipo con bases firmes. Tu negocio puede crecer con esta consultoría.
                          </p>
                        </div>

                        <div className="space-y-2.5">
                          <button
                            type="button"
                            onClick={() => setBrochureRequested(!brochureRequested)}
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#0056FF] px-4 py-2.5 text-xs font-bold text-white rounded-md hover:bg-[#0044CC] transition-colors cursor-pointer"
                          >
                            <Download className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>
                              {brochureRequested
                                ? 'Brochure enviado por WhatsApp ✓'
                                : 'Descargar Brochure'}
                            </span>
                          </button>
                          <p className="text-[10px] text-neutral-500 text-center font-medium">
                            Entrega inmediata por WhatsApp
                          </p>
                        </div>
                      </div>

                      <div className="sm:col-span-5 relative min-h-[190px] bg-neutral-900">
                        {!heroImgFailed ? (
                          <img
                            src="/src/assets/images/hero_real_estate_tower_1795359306961.jpg"
                            alt="Marca personal para Consultores"
                            referrerPolicy="no-referrer"
                            onError={() => setHeroImgFailed(true)}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-white">
                            <Building2 className="h-8 w-8 text-[#0056FF]" />
                          </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3.5 text-white">
                          <p className="font-display text-xs font-bold leading-tight">
                            Marca personal para Consultores
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Metric Card */}
                  <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-4 sm:right-8 bg-[#121212] text-white px-5 py-3.5 rounded-lg border border-neutral-800 shadow-lg">
                    <p className="text-[11px] font-semibold text-neutral-300">Aumenta tus clientes</p>
                    <p className="font-mono-tabular text-sm sm:text-base font-bold text-white mt-0.5">
                      Aumento en las consultas diarias:{' '}
                      <span className="text-[#00E676]">+5 consultas por día aseguradas</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MÓDULO 2: Tráfico y Contenido "Done-For-You" (Mockup Izq / Texto Der) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)]">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    {/* Back Card: Ad Performance Panel */}
                    <div className="sm:col-span-5 bg-[#121212] text-white rounded-lg p-5 border border-neutral-800">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                        Panel Publicitario
                      </p>
                      <p className="text-xs text-neutral-300 mb-1">Costo por Lead Calificado:</p>
                      <p className="font-mono-tabular text-3xl font-black text-[#00E676] mb-4">
                        $1800 ARS
                      </p>
                      <div className="space-y-2 pt-3 border-t border-neutral-800 text-xs font-mono-tabular">
                        <div className="flex justify-between">
                          <span className="text-neutral-400">CTR Anuncio</span>
                          <span className="font-bold text-white">3.84%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Canales</span>
                          <span className="font-bold text-white">Meta + Google</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Estado</span>
                          <span className="font-bold text-[#00E676]">Escalando</span>
                        </div>
                      </div>
                    </div>

                    {/* Front Card: Real IG/FB Ad */}
                    <div className="sm:col-span-7 bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-md">
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-100">
                        <div>
                          <p className="text-xs font-bold text-[#111111]">Estudio Coach · Consultoría</p>
                          <p className="text-[10px] text-neutral-500">Publicidad · Meta &amp; Instagram</p>
                        </div>
                        <span className="text-[11px] font-bold text-[#0056FF] bg-blue-50 px-2 py-0.5 rounded">
                          Activo
                        </span>
                      </div>

                      <div className="relative h-36 bg-neutral-900">
                        {!heroImgFailed ? (
                          <img
                            src="/src/assets/images/hero_real_estate_tower_1795359306961.jpg"
                            alt="Anuncio de consultoría y productos"
                            referrerPolicy="no-referrer"
                            onError={() => setHeroImgFailed(true)}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-white">
                            <Building2 className="h-8 w-8 text-[#0056FF]" />
                          </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-2.5 text-white">
                          <p className="text-xs font-bold">
                            Atrae clientes calificados con pauta multicanal
                          </p>
                        </div>
                      </div>

                      <div className="px-4 py-3 flex items-center justify-between bg-neutral-50 border-t border-neutral-100">
                        <div className="flex items-center gap-3 text-neutral-500">
                          <Heart className="h-4 w-4" aria-hidden="true" />
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                          <Send className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <span className="bg-[#0056FF] text-white text-[11px] font-bold px-3 py-1 rounded">
                          Agendar Consulta
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-3">
                  02 / GENERACIÓN DE DEMANDA
                </p>
                <h2 className="font-display text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#111111] mb-4">
                  Pauta y creatividad ejecutadas por especialistas en Venta Consultiva.
                </h2>
                <p className="text-[16px] leading-relaxed text-[#374151] mb-6">
                  Nuestro equipo diseña, redacta y optimiza tus campañas diarias apuntando exclusivamente a compradores e inversores con capacidad real. No tienes que pensar qué anunciar ni redactar un solo texto.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Campañas multicanal (Meta + Google):</strong>{' '}
                      Capturamos tanto demanda activa en buscadores como inversores segmentados en redes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Producción de anuncios de alto impacto:</strong>{' '}
                      Guiones de video, piezas gráficas y copias orientadas a dar a conocer tus productos, mejorar tu autoridad y generar mayores consultas.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Retargeting dinámico:</strong>{' '}
                      Creamos junto a vos el modelo para dar seguimiento a quienes visitaron y consultaron por tus servicios pero aún no agendaron reunión.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* MÓDULO 3: Automatización WhatsApp & CRM (Texto Izq / Mockup Der) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-1">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-3">
                  03 / VELOCIDAD Y CALIFICACIÓN 24/7
                </p>
                <h2 className="font-display text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#111111] mb-4">
                  Respuesta en menos de 10 segundos y filtrado automático antes de pasar al vendedor
                </h2>
                <p className="text-[16px] leading-relaxed text-[#374151] mb-6">
                  El 78% de las ventas online se las lleva el primero que responde. Nuestro asistente con IA atiende al instante, filtra curiosos y te deja el contacto listo para agendar tu primera llamada o reunión con él.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Precalificación inteligente en WhatsApp:</strong>{' '}
                      Valida presupuesto disponible, plazo de compra y tipo de servicio o producto buscado.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Alertas de seguimiento en tiempo real:</strong>{' '}
                      Si no tenés noticias de un lead antiguo, con nuestro sistema tu vendedor recibe un aviso para llamarlo.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Nutrición automática a largo plazo:</strong>{' '}
                      Secuencias de seguimiento por WhatsApp y email para inversores que deciden a 60 o 90 días.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7 order-2">
                <div className="relative rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)]">
                  {/* iPhone Screen Mockup */}
                  <div className="mx-auto max-w-[340px] rounded-[24px] border-[6px] border-[#121212] bg-[#0B141A] overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between px-4 py-2 bg-[#1F2C34] text-[10px] font-mono-tabular text-neutral-300">
                      <span>14:02</span>
                      <span>Coachea2 · WhatsApp</span>
                      <span>0.8s resp.</span>
                    </div>

                    <div className="p-3.5 space-y-2.5 text-[12px]">
                      <div className="mr-auto max-w-[85%] rounded-lg bg-[#202C33] px-3 py-2 text-neutral-100">
                        Hola, vi el aviso de los departamentos en pozo. ¿Qué valores manejan?
                      </div>
                      <div className="ml-auto max-w-[88%] rounded-lg bg-[#005C4B] px-3 py-2 text-white">
                        Hola Carlos, arrancan en USD 145.000 con 35% de anticipo. ¿Buscás invertir este trimestre y contás con ese capital inicial?
                        <span className="mt-1 flex justify-end items-center gap-1 text-[10px] text-neutral-300">
                          14:02 <CheckCheck className="h-3 w-3 text-[#53BDEB]" />
                        </span>
                      </div>
                      <div className="mr-auto max-w-[85%] rounded-lg bg-[#202C33] px-3 py-2 text-neutral-100">
                        Sí, dispongo de USD 60.000 líquidos. Quisiera visitar el showroom mañana a las 11 hs.
                      </div>
                      <div className="ml-auto max-w-[88%] rounded-lg bg-[#005C4B] px-3 py-2 text-white">
                        Visita confirmada para mañana 11:00 hs. Nuestro asesor senior te envía la ubicación y el plano del Piso 8.
                        <span className="mt-1 flex justify-end items-center gap-1 text-[10px] text-neutral-300">
                          14:03 <CheckCheck className="h-3 w-3 text-[#53BDEB]" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Push Notification Card */}
                  <div className="mt-4 sm:mt-0 sm:absolute sm:top-8 sm:right-6 bg-white border border-neutral-200 rounded-lg px-4 py-3 shadow-lg max-w-[270px]">
                    <p className="text-[11px] font-bold text-[#0056FF] uppercase tracking-wider">
                      Notificación CRM · Tiempo Real
                    </p>
                    <p className="text-xs font-bold text-[#111111] mt-1">
                      🔥 Lead Calificado asignado a Asesor
                    </p>
                    <p className="text-[11px] text-neutral-500 mt-0.5">
                      Carlos R. · Anticipo USD 60k · Visita agendada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MÓDULO 4: Playbooks y Optimización Comercial (Mockup Izq / Texto Der) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)]">
                  {/* Executive Desktop Funnel Dashboard */}
                  <div className="rounded-lg border border-neutral-200 bg-white overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3 bg-[#121212] text-white">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-[#00E676]" aria-hidden="true" />
                        <span className="text-xs font-bold">
                          Dashboard Ejecutivo · Embudo de Cierre Comercial
                        </span>
                      </div>
                      <span className="font-mono-tabular text-[11px] text-neutral-300">
                        Últimos 30 días
                      </span>
                    </div>

                    <div className="p-5 sm:p-6">
                      {/* 4-Stage Numeric Funnel */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        <div className="border border-neutral-200 bg-neutral-50 p-3.5 rounded-md">
                          <p className="text-[11px] font-semibold text-neutral-500">1. Captación</p>
                          <p className="font-mono-tabular text-2xl font-black text-[#111111] mt-1">
                            1,240
                          </p>
                          <p className="text-[11px] text-neutral-600 mt-0.5">Leads</p>
                        </div>

                        <div className="border border-neutral-200 bg-neutral-50 p-3.5 rounded-md">
                          <p className="text-[11px] font-semibold text-neutral-500">2. Filtrado IA</p>
                          <p className="font-mono-tabular text-2xl font-black text-[#111111] mt-1">
                            310
                          </p>
                          <p className="text-[11px] text-neutral-600 mt-0.5">Calificados</p>
                        </div>

                        <div className="border border-neutral-200 bg-neutral-50 p-3.5 rounded-md">
                          <p className="text-[11px] font-semibold text-neutral-500">3. Showroom</p>
                          <p className="font-mono-tabular text-2xl font-black text-[#111111] mt-1">
                            84
                          </p>
                          <p className="text-[11px] text-neutral-600 mt-0.5">Visitas</p>
                        </div>

                        <div className="border-2 border-[#0056FF] bg-blue-50/70 p-3.5 rounded-md">
                          <p className="text-[11px] font-bold text-[#0056FF]">4. Cierre</p>
                          <p className="font-mono-tabular text-2xl font-black text-[#0056FF] mt-1">
                            14
                          </p>
                          <p className="text-[11px] font-bold text-[#111111] mt-0.5">
                            Unidades Reservadas
                          </p>
                        </div>
                      </div>

                      {/* Funnel Flow Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#F8F9FA] border border-neutral-200 rounded-md text-xs font-mono-tabular text-[#111111]">
                        <span>
                          <strong>1,240</strong> Leads
                        </span>
                        <span className="text-[#0056FF] font-bold">→</span>
                        <span>
                          <strong>310</strong> Calificados
                        </span>
                        <span className="text-[#0056FF] font-bold">→</span>
                        <span>
                          <strong>84</strong> Visitas
                        </span>
                        <span className="text-[#0056FF] font-bold">→</span>
                        <span className="text-[#0056FF] font-bold">
                          <strong>14</strong> Unidades Reservadas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-3">
                  04 / CIERRE Y TRAZABILIDAD
                </p>
                <h2 className="font-display text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#111111] mb-4">
                  Alineamos marketing y ventas para que cada peso invertido tenga retorno medible
                </h2>
                <p className="text-[16px] leading-relaxed text-[#374151] mb-6">
                  De nada sirve generar cientos de consultas si se pierden en el embudo comercial. Entregamos guiones probados, tableros de control y auditoría continua sobre el cierre de operaciones.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Guiones de contacto y objeciones:</strong>{' '}
                      Playbooks exactos para que tus asesores conviertan chats en reuniones presenciales o videollamadas.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Trazabilidad de punta a punta:</strong>{' '}
                      Sabrás exactamente qué campaña y qué anuncio generó cada reserva o boleto firmado.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                    <Check className="h-5 w-5 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-[#111111]">Reuniones quincenales de optimización:</strong>{' '}
                      Ajustamos presupuestos y audiencias en base a ventas reales, no a clics.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 Tabla de Consolidación de Herramientas ("Reemplazo de Stack") */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="bg-[#F8F9FA] p-6 sm:p-16 rounded-[16px] border border-neutral-200">
            <div className="max-w-2xl mb-10">
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-2">
                CONSOLIDACIÓN OPERATIVA
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#111111]">
                Reemplazo completo de proveedores y herramientas sueltas
              </h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl border border-neutral-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-4 px-6 text-sm font-bold text-[#111111] bg-neutral-50">
                      Función Operativa
                    </th>
                    <th className="py-4 px-6 text-sm font-bold text-neutral-600 bg-neutral-50">
                      Modelo Tradicional (Proveedores Sueltos)
                    </th>
                    <th className="py-4 px-6 text-sm font-bold text-white bg-[#0056FF]">
                      Nuestro Sistema Integral
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-sm">
                  {STACK_ROWS.map((row) => (
                    <tr key={row.feature} className="hover:bg-neutral-50/60">
                      <td className="py-4 px-6 font-bold text-[#111111]">{row.feature}</td>
                      <td className="py-4 px-6 text-neutral-600">{row.traditional}</td>
                      <td className="py-4 px-6 font-semibold text-[#111111] bg-blue-50/40">
                        <span className="inline-flex items-start gap-2">
                          <Check className="h-4 w-4 shrink-0 text-[#0056FF] mt-0.5 stroke-[2.5]" aria-hidden="true" />
                          <span>{row.integrated}</span>
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
    </div>
  );
};

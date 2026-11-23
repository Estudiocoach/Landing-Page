import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Building2 } from 'lucide-react';

interface BlogPageProps {
  onApplyClick: () => void;
}

type BlogCategory = 'Todos' | 'Adquisición & Pauta' | 'IA & WhatsApp' | 'Estrategia Comercial';

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, 'Todos'>;
  readTime: string;
  date: string;
  author: string;
  role: string;
  featured?: boolean;
  keyTakeaways: string[];
  body: string[];
}

const ARTICLES: BlogArticle[] = [
  {
    id: 'costo-por-reunion-calificada',
    title: 'Por qué medir Costo por Lead barato está destruyendo la rentabilidad de tus ventas consultivas',
    excerpt:
      'Cómo ayudamos a consultores, marcas personales y equipos comerciales a dejar de perseguir consultas baratas para optimizar exclusivamente el Costo por Reunión Calificada en menos de 90 días.',
    category: 'Adquisición & Pauta',
    readTime: '6 min de lectura',
    date: 'Noviembre 2026',
    author: 'Tomás Arancibia',
    role: 'Director de Performance, Estudio Coach',
    featured: true,
    keyTakeaways: [
      'Un lead genérico sin filtro consume tiempo comercial valioso y desgasta a tu equipo respondiendo dudas sin intención de compra.',
      'Optimizar Meta y Google Ads por eventos de precalificación en CRM reduce hasta un 30% el presupuesto desperdiciado en curiosos.',
      'Los embudos propios permiten retargeting dinámico sobre tus propuestas y casos de éxito sin depender de portales o intermediarios.',
    ],
    body: [
      'La mayoría de los negocios de servicios y consultoría miden el éxito de sus campañas mirando el volumen bruto de mensajes o formularios que llegan a fin de mes. Sin embargo, cuando auditamos sus agendas comerciales, descubrimos que más del 70% de esos contactos no tienen presupuesto disponible ni urgencia real para contratar.',
      'Cuando corres campañas genéricas pidiendo únicamente nombre y teléfono sin un proceso de filtrado previo, tu negocio o tu equipo comercial termina convirtiéndose en un centro de atención gratuita. Pierdes horas respondiendo precios por mensaje y las llamadas de venta con clientes ideales se postergan.',
      'En Estudio Coach invertimos la lógica: conectamos tus campañas publicitarias con los estados reales de Coachea2 CRM. De esta forma, los algoritmos de Meta y Google no buscan al usuario que más barato hace clic, sino al perfil con capacidad de decisión que agenda una reunión comercial y contrata tus servicios.',
    ],
  },
  {
    id: 'regla-10-segundos-whatsapp',
    title: 'La regla de los 10 segundos: cómo responder en WhatsApp antes de que tu potencial cliente siga scrolleando',
    excerpt:
      'El 78% de las operaciones en venta consultiva las cierra quien responde primero con claridad, contexto y una propuesta concreta de reunión.',
    category: 'IA & WhatsApp',
    readTime: '5 min de lectura',
    date: 'Noviembre 2026',
    author: 'Luciana Pereyra',
    role: 'Arquitecta de Automatización, Estudio Coach',
    keyTakeaways: [
      'Responder después de los 30 minutos reduce drásticamente la probabilidad de concretar una videollamada de diagnóstico.',
      'Un asistente entrenado con tu oferta y tono de marca valida necesidad, presupuesto y plazo sin sonar robótico.',
      'La cita queda agendada y reflejada automáticamente en tu Google Calendar con el resumen del cliente.',
    ],
    body: [
      'Un potencial cliente que busca asesoramiento, consultoría o un servicio de alto valor suele escribir entre reuniones o fuera del horario de oficina desde su teléfono móvil. Si respondes recién a la mañana siguiente, esa persona ya perdió el impulso inicial o conversó con otra opción.',
      'Las respuestas automáticas genéricas ("En breve te contactamos") solo aumentan la fricción. El comprador consultivo busca validar rápidamente si puedes resolver su problema específico y cuál es el siguiente paso concreto.',
      'Con Coachea2 conectado a WhatsApp y sincronizado con Google Calendar, el sistema atiende en segundos, hace las preguntas clave de calificación y deja la reunión lista en tu calendario antes de que tengas que intervenir manualmente.',
    ],
  },
  {
    id: 'playbooks-cierre-reunion-diagnostico',
    title: 'Guiones de conversión en chat: cómo pasar de "solo quiero el precio" a una llamada de diagnóstico',
    excerpt:
      'Estructura exacta de 4 mensajes que nuestros clientes utilizan para duplicar su tasa de reuniones efectivas sin presionar al prospecto.',
    category: 'Estrategia Comercial',
    readTime: '7 min de lectura',
    date: 'Octubre 2026',
    author: 'Santiago Benítez',
    role: 'Head of Sales Enablement, Estudio Coach',
    keyTakeaways: [
      'Enviar un tarifario completo sin entender la situación del cliente destruye la conversación en la mayoría de los casos.',
      'Hacer dos preguntas de diagnóstico previas posiciona tu autoridad antes de hablar de honorarios.',
      'Confirmar 24 horas antes con una breve agenda clara eleva drásticamente la asistencia a las videollamadas.',
    ],
    body: [
      'Uno de los errores más costosos en la venta consultiva digital es responder a la pregunta "¿Cuánto cuesta?" enviando un PDF genérico y esperando que el prospecto vuelva a escribir. Sin contexto ni diagnóstico, el cliente solo compara precios como si tu servicio fuera un commodity.',
      'Nuestros playbooks comerciales reemplazan el envío frío de presupuestos por una mini conversación consultiva: primero entendemos cuál es el objetivo principal del negocio y qué traba quieren destrabar hoy. Con esa información, proponemos una charla de 20 minutos para mostrarles un plan concreto.',
    ],
  },
  {
    id: 'nutricion-clientes-60-90-dias',
    title: 'Nutrición de 60 a 90 días: cómo recuperar clientes potenciales que consultaron y nunca agendaron',
    excerpt:
      'Más del 40% de los cierres en servicios de alto ticket provienen de prospectos que consultaron hace más de un mes. Así automatizamos su reactivación.',
    category: 'Adquisición & Pauta',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    author: 'Tomás Arancibia',
    role: 'Director de Performance, Estudio Coach',
    keyTakeaways: [
      'El ciclo de decisión en venta consultiva rara vez cierra en la primera semana tras el primer clic.',
      'Las alertas de seguimiento detectan cuándo un contacto antiguo vuelve a interesarse o queda sin seguimiento.',
      'El contenido de autoridad y casos reales mantiene tu marca en el top of mind hasta el momento de compra.',
    ],
    body: [
      'Descartar un contacto porque no contrató en los primeros siete días equivale a desperdiciar gran parte de tu inversión en pauta. Dueños de PyMEs, inversores y decisores evalúan momentos financieros, ordenan prioridades internas y comparan opciones antes de avanzar.',
      'Al combinar secuencias automatizadas de valor por WhatsApp y email con alertas en tiempo real dentro del CRM, vuelves a conversar con el potencial cliente exactamente cuando está listo para tomar acción.',
    ],
  },
  {
    id: 'marca-personal-autoridad-consultiva',
    title: 'Marca personal que vende: por qué la autoridad previa multiplica tu tasa de cierre',
    excerpt:
      'Cómo la combinación de contenido estratégico, posicionamiento en Google/IA y embudos propios hace que el cliente llegue convencido a la reunión.',
    category: 'Estrategia Comercial',
    readTime: '5 min de lectura',
    date: 'Octubre 2026',
    author: 'Santiago Benítez',
    role: 'Head of Sales Enablement, Estudio Coach',
    keyTakeaways: [
      'Cuando el cliente ya consumió tu contenido antes de la llamada, la conversación deja de ser una defensa de precio.',
      'Estar visible tanto en redes sociales como en Google y buscadores de IA captura demanda en todo el recorrido.',
      'La coherencia entre tus anuncios, tu landing page y tu discurso comercial acelera la confianza.',
    ],
    body: [
      'En cualquier servicio de venta consultiva, las personas eligen primero la confianza y el criterio del profesional antes que los detalles técnicos del servicio. Si dependes únicamente de anuncios fríos sin respaldo de marca personal, cada reunión empieza desde cero.',
      'En Estudio Coach unimos la producción de contenido de autoridad con páginas de aterrizaje propias e indexadas en Google y motores de inteligencia artificial. Así, cuando el prospecto agenda una cita con vos, ya entiende cómo trabajas y llega listo para conversar sobre cómo implementarlo en su negocio.',
    ],
  },
];

const CATEGORIES: BlogCategory[] = [
  'Todos',
  'Adquisición & Pauta',
  'IA & WhatsApp',
  'Estrategia Comercial',
];

export const BlogPage: React.FC<BlogPageProps> = ({ onApplyClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('Todos');
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);
  const [imgFailed, setImgFailed] = useState(false);

  const filteredArticles =
    selectedCategory === 'Todos'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCategory);

  const featuredArticle =
    selectedCategory === 'Todos'
      ? filteredArticles.find((a) => a.featured) || filteredArticles[0]
      : filteredArticles[0];

  const remainingArticles = filteredArticles.filter((a) => a.id !== featuredArticle?.id);

  if (activeArticle) {
    return (
      <section className="bg-white py-16 lg:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-[820px] px-6">
          <button
            type="button"
            onClick={() => setActiveArticle(null)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0056FF] hover:text-[#0044CC] mb-8 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Volver al Blog</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#4B5563] mb-4">
            <span className="text-[#0056FF] font-bold uppercase tracking-wider">
              {activeArticle.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{activeArticle.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{activeArticle.date}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.08] tracking-[-0.03em] text-[#111827] text-balance mb-6">
            {activeArticle.title}
          </h1>

          <div className="pb-8 mb-8 border-b border-neutral-200 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#111827]">{activeArticle.author}</p>
              <p className="text-xs text-[#4B5563]">{activeArticle.role}</p>
            </div>
          </div>

          <div className="bg-[#F8F9FA] border border-neutral-200 rounded-xl p-6 sm:p-8 mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0056FF] mb-3">
              Puntos clave del análisis
            </p>
            <ul className="space-y-2.5 text-[15px] font-medium text-[#111827]">
              {activeArticle.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="font-mono-tabular font-bold text-[#0056FF]">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 text-[17px] leading-[1.7] text-[#374151]">
            {activeArticle.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-[#F8F9FA] p-6 sm:p-8 rounded-xl border">
            <div>
              <p className="font-display text-xl font-black text-[#111827]">
                ¿Quieres implementar este sistema en tu negocio?
              </p>
              <p className="text-sm text-[#4B5563] mt-1">
                Verifica disponibilidad y conversemos sobre cómo escalar tus ventas consultivas.
              </p>
            </div>
            <button
              type="button"
              onClick={onApplyClick}
              className="inline-flex items-center justify-center gap-2 bg-[#0056FF] px-6 py-3.5 text-sm font-bold text-white rounded-lg hover:bg-[#0044CC] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Verificar Disponibilidad</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.08em] text-[#0056FF] mb-3">
            BLOG &amp; PLAYBOOKS ESTRATÉGICOS
          </p>
          <h1 className="font-display text-[34px] lg:text-[48px] font-black leading-[1.06] tracking-[-0.03em] text-[#111827] text-balance mb-4">
            Ideas prácticas y datos reales para escalar tus ventas consultivas.
          </h1>
          <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#4B5563]">
            Sin teoría genérica de marketing. Análisis documentados sobre adquisición de inversores, automatización en WhatsApp y cierre comercial de Ventas Consultivas.
          </p>
        </div>

        {/* Category Segmented Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F8F9FA] border border-neutral-200 rounded-xl w-fit mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-[#0056FF] text-white'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <article className="mb-12 bg-[#F8F9FA] border border-neutral-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 min-h-[240px] lg:min-h-[340px] bg-neutral-900 relative">
              {!imgFailed ? (
                <img
                  src="/src/assets/images/consultant_strategy_session_1795454265660.jpg"
                  alt={featuredArticle.title}
                  width={800}
                  height={450}
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-white">
                  <Building2 className="h-10 w-10 text-[#0056FF]" />
                </div>
              )}
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5563] mb-4">
                  <span className="font-bold uppercase tracking-wider text-[#0056FF]">
                    {featuredArticle.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.date}</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-black leading-[1.15] tracking-tight text-[#111827] mb-4">
                  {featuredArticle.title}
                </h2>

                <p className="text-[16px] leading-[1.6] text-[#4B5563] mb-6">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-200">
                <div className="text-xs">
                  <p className="font-bold text-[#111827]">{featuredArticle.author}</p>
                  <p className="text-[#4B5563]">{featuredArticle.role}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveArticle(featuredArticle);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-[#111827] px-5 py-2.5 text-xs font-bold text-white rounded-lg hover:bg-[#0056FF] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Leer artículo completo</span>
                </button>
              </div>
            </div>
          </article>
        )}

        {/* Remaining Articles Grid */}
        {remainingArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remainingArticles.map((article) => (
              <article
                key={article.id}
                className="flex flex-col justify-between bg-white border border-neutral-200 rounded-2xl p-8 hover:border-[#0056FF] transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5563] mb-3">
                    <span className="font-bold uppercase tracking-wider text-[#0056FF]">
                      {article.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-extrabold leading-[1.2] tracking-tight text-[#111827] mb-3">
                    {article.title}
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-[#4B5563] mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-5 border-t border-neutral-200 flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-[#4B5563]">
                    Por <strong className="text-[#111827]">{article.author}</strong>
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveArticle(article);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0056FF] hover:text-[#0044CC] cursor-pointer whitespace-nowrap"
                  >
                    <span>Leer guía</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

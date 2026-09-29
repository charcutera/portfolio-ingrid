import { Project } from "@/types/project";
import { Language } from "@/context/LanguageContext";
import { SAMPLE_PROJECTS } from "./projects";

type ProjectTextOverrides = {
  title?: string;
  shortDescription?: string;
  fullDescription?: string;
  client?: string;
  timeframe?: string;
  productionTime?: string;
  tags?: string[];
  highlights?: string[];
  deliverablesEyebrow?: string | null;
  deliverablesTitle?: string;
  deliverablesDescription?: string;
  documents?: {
    name: string;
    url: string;
    label: string;
    language?: string;
  }[];
  mediaCaptions?: Record<number, string>;
  caseStudy?: {
    challenge?: {
      problemStatement?: string;
      goal?: string;
      role?: string;
    };
    research?: {
      overview?: string;
      insights?: string[];
    };
    concept?: {
      overview?: string;
      process?: string;
    };
    prototyping?: {
      eyebrow?: string;
      title?: string;
      overview?: string;
    };
    refinement?: {
      eyebrow?: string;
      title?: string;
      overview?: string;
      changes?: string[];
    };
    results?: {
      resultsText?: string;
      learningsText?: string;
    };
  };
};

const PROJECT_TRANSLATIONS: Record<Language, Record<string, ProjectTextOverrides>> = {
  EN: {
    // Baseline is already in projects.ts; EN overrides are only needed for video projects that were originally in Catalan
    "accio-2026": {
      shortDescription:
        "Winner for Best Short Film. Action short film directed and produced by Ingrid Lara, Sergi Font, Cristina Moles, and Aura Espí.",
      fullDescription:
        "Action short film awarded Best Short Film in the 2026 edition. Created jointly by Ingrid Lara, Sergi Font, Cristina Moles, and Aura Espí at CITM (UPC).",
      tags: ["Short Film", "Award Winner", "Direction", "Video & Photography"],
    },
    "accio-2025": {
      shortDescription:
        "Winner for Best Post-production. Action short film exploring a tense misunderstanding, by Ingrid Lara, Javi Vida, and Cristina Moles.",
      fullDescription:
        "Action short film exploring a tense misunderstanding, awarded Best Post-production in the 2025 festival. Realised by Ingrid Lara, Javi Vida, and Cristina Moles.",
      tags: ["Short Film", "Action", "Post-production", "Video & Photography"],
    },
    "i-si-es-super": {
      shortDescription:
        "Free-themed narrative short film produced for the university Post-production course.",
      fullDescription:
        "Open-theme narrative short film created and edited within the Advanced Post-production curriculum at CITM (UPC).",
      tags: ["Short Film", "Post-production", "Free Theme", "Video & Photography"],
    },
    "stories-that-bite": {
      shortDescription:
        "Free-themed narrative short film created for the Audiovisual Narrative 24/25 coursework.",
      fullDescription:
        "Narrative fiction short film developed for the Audiovisual Narrative module at CITM (UPC) during the 2024/2025 academic year.",
      tags: ["Short Film", "Audiovisual Narrative", "Free Theme", "Video & Photography"],
    },
  },

  ES: {
    /* ──────────────────────────────────────────────────────────────────────────
       1. Five Stars
    ────────────────────────────────────────────────────────────────────────── */
    "five-stars": {
      title: "Five Stars — App de Cine y Series",
      shortDescription:
        "Una app móvil diseñada para unificar el descubrimiento de contenido, disponibilidad en streaming, listas personales y reseñas en una sola experiencia fluida.",
      fullDescription:
        "Five Stars resuelve la molestia de alternar entre múltiples apps de entretenimiento. Analizando plataformas como Letterboxd, IMDb, TV Time y JustWatch, diseñé un producto móvil unificado mediante Card Sorting (17 participantes), bocetos en papel, wireframes y un prototipo interactivo en Figma.",
      client: "Proyecto Académico / Personal",
      timeframe: "Oct – Dic 2024",
      productionTime: "3 meses",
      tags: ["Investigación UX", "Figma", "Card Sorting", "Arquitectura de Información", "App Móvil"],
      deliverablesTitle: "Documentación y Prototipo del Proyecto",
      deliverablesDescription:
        "Accede al archivo interactivo de trabajo en Figma o descarga el documento PDF de la memoria académica.",
      caseStudy: {
        challenge: {
          problemStatement:
            "Elegir qué ver y organizar los títulos vistos requiere actualmente múltiples apps: Letterboxd para reseñas, JustWatch para plataformas y TV Time para el seguimiento de episodios. El reto consistió en fusionar estas funciones en una interfaz limpia y sin saturación.",
          goal:
            "Diseñar una app móvil intuitiva para descubrir películas y series, consultar disponibilidad en streaming, seguir episodios, crear listas personalizadas, valorar obras y compartir recomendaciones con amigos.",
          role:
            "Diseñadora UX/UI — Lideré el proyecto de inicio a fin: benchmark competitivo de 5 plataformas, arquitectura de información, Card Sorting con 17 participantes, 13 bocetos en papel, wireframes y prototipo interactivo en Figma.",
        },
        research: {
          overview:
            "Analicé cinco plataformas líderes (Letterboxd, IMDb, TV Time, JustWatch, Sofa Time) evaluando fortalezas y carencias. Para validar la navegación y agrupación temática, llevé a cabo un estudio de Card Sorting abierto con 17 participantes.",
          insights: [
            "Cambio constante de apps: Los usuarios alternan 3 o más apps para decidir qué ver, dónde encontrarlo y registrar su historial.",
            "Disponibilidad en streaming: Conocer de inmediato la plataforma de emisión reduce drásticamente el abandono durante la búsqueda.",
            "Hábitos de valoración diversos: Parte del público busca solo una rápida puntuación de 5 estrellas, mientras otros prefieren reseñas extensas.",
            "Sobrecarga vs. sencillez: Portales como IMDb saturan de datos. Los usuarios prefieren un diseño visual centrado en pósteres con detalles desplegables.",
            "Resultados del Card Sorting: Las respuestas de 17 participantes ayudaron a optimizar la taxonomía y definir un feed de descubrimiento personalizado.",
          ],
        },
        concept: {
          overview:
            "Five Stars se fundamenta en una estética oscura y cinematográfica que cede todo el protagonismo a los pósteres. La premisa fue lograr interacciones ágiles y directas, permitiendo registrar un capítulo o verificar plataformas en un solo toque.",
          process:
            "Comencé dibujando 13 pantallas clave en papel para probar patrones de navegación y equilibrio visual antes de pasar a Figma. Esto definió un flujo ergonómico a una mano combinando feeds verticales con carruseles horizontales.",
        },
        prototyping: {
          eyebrow: "04 · Wireframes y Estructura",
          title: "Wireframes",
          overview:
            "Trasladar los bocetos en papel a wireframes digitales en Figma permitió fijar la distribución, jerarquía de elementos y flujo de navegación antes de aplicar el estilo visual final. Los controles de búsqueda se fijaron para facilitar la exploración.",
        },
        refinement: {
          eyebrow: "05 · Prototipo de Alta Fidelidad",
          title: "Mockups",
          overview:
            "El prototipo interactivo en Figma comprende variantes completas de componentes, microinteracciones y 9 flujos de usuario clave: bienvenida, feed de descubrimiento, ficha de título, seguimiento de temporadas, reseñas, filtros y estadísticas.",
          changes: [
            "Feed personalizado 'Para ti': Carruseles dinámicos según actores predilectos, directores y sagas activas.",
            "Búsqueda facetada: Filtros rápidos por plataformas de streaming, géneros cinematográficos y año de estreno.",
            "Listas a medida: Creación de colecciones temáticas compartibles más allá de la lista de seguimiento habitual.",
            "Métricas de visionado: Pestaña en el perfil con tiempo acumulado de visualización y hábitos mensuales.",
            "Sistema de diseño: Modo oscuro cinematográfico (negros profundos, carbón y toques dorados) combinando Montserrat e Inter.",
          ],
        },
        results: {
          resultsText:
            "El proyecto concluyó con un prototipo interactivo en Figma de alta fidelidad que cubre 9 flujos de usuario completos, eliminando la fricción entre herramientas dispersas. La arquitectura se validó mediante Card Sorting con 17 usuarios, consolidando un sistema de diseño escalable con componentes reutilizables, tokens de color y tipografía armónica.",
          learningsText:
            "Efectuar el Card Sorting antes de los wireframes resultó determinante para alinear la organización de contenidos con los modelos mentales de los usuarios y no con meras suposiciones. Iterar desde el papel facilitó calibrar la densidad de pantalla y navegación, garantizando que el cartel y la acción rápida sigan siendo protagonistas.",
        },
      },
    },

    /* ──────────────────────────────────────────────────────────────────────────
       2. Salvatge Energy
    ────────────────────────────────────────────────────────────────────────── */
    "salvatge-energy": {
      title: "Salvatge Energy",
      shortDescription:
        "Creación completa de marca para una bebida energética natural: desde el naming y diseño de logotipo hasta el packaging y una colaboración con el festival Sónar.",
      fullDescription:
        "Salvatge Energy es un proyecto de branding desarrollado desde cero durante un semestre universitario. El trabajo abarca el sistema integral de identidad: investigación, naming, logotipo, paleta cromática y diseño de lata. Posteriormente se amplía con una propuesta de colaboración y merchandising para el festival Sónar, adaptando la personalidad gráfica sin perder su esencia.",
      client: "Proyecto Universitario",
      timeframe: "Febrero – Junio 2024",
      productionTime: "1 semestre universitario",
      tags: [
        "Adobe Illustrator",
        "Branding",
        "Diseño de Logo",
        "Identidad Visual",
        "Packaging",
        "Dirección de Arte",
        "Colaboración de Marca",
        "Merchandising",
      ],
      deliverablesTitle: "Documentación y Guías del Proyecto",
      deliverablesDescription:
        "Descarga la documentación académica original: el manual completo de Identidad Visual y la propuesta de Merchandising para Sónar Festival redactados en español.",
      documents: [
        {
          name: "SalvatgeBebida_IdentidadVisual.pdf",
          url: "/projects/salvatge-energy/SalvatgeBebida_IdentidadVisual.pdf",
          label: "Manual de Identidad Visual",
          language: "ES · PDF",
        },
        {
          name: "SalvatgeMerchandising.pdf",
          url: "/projects/salvatge-energy/SalvatgeMerchandising.pdf",
          label: "Propuesta Merchandising Sónar",
          language: "ES · PDF",
        },
      ],
      caseStudy: {
        challenge: {
          problemStatement:
            "El encargo requería crear una marca de bebida energética bajo un posicionamiento natural: una combinación compleja, ya que el sector está dominado por códigos visuales agresivos y sintéticos. Además, la identidad debía responder a nivel internacional, funcionar en diversos soportes y adaptarse fluidamente a una colaboración con el festival Sónar.",
          goal:
            "Desarrollar una identidad de marca completa (nombre, imagotipo, cromatismo, tipografía y envase) para una bebida energética natural dirigida a adultos de 18 a 40 años. La marca debía transmitir fuerza y vitalidad diferenciándose con un carácter orgánico. En la segunda fase, adaptar la identidad para una cápsula de merchandising en Sónar Festival.",
          role:
            "Diseñadora Gráfica — Responsable de todo el proceso: modelado de usuarios, investigación visual, naming, diseño de logotipo, selección tipográfica, sistema de color, diseño de envase y concepto de colaboración con adaptación de personaje y merchandising.",
        },
        research: {
          overview:
            "La investigación se centró en dos aspectos: estudiar al público objetivo y mapear el panorama visual de las bebidas energéticas. Se definieron dos perfiles de usuario que representan al consumidor potencial: un deportista de 28 años y una responsable de marketing activa. En lo gráfico, se analizaron marcas de referencia con simios para encontrar huecos estéticos diferenciadores.",
          insights: [
            "Las bebidas energéticas emplean colores estridentes y tipografías agresivas de fuerza, pero la mayoría lucen homogéneas.",
            "Las marcas con gorilas existentes tienden al hiperrealismo complejo: un icono depurado y de líneas limpias resulta mucho más memorable.",
            "El verde evoca frescura y conexión con lo botánico, articulando el mensaje saludable de manera coherente.",
            "La coincidencia de público entre Salvatge Energy y Sónar (18 a 40 años) convirtió la colaboración en una extensión lógica y atractiva.",
          ],
        },
        concept: {
          overview:
            "El concepto une dos atributos esenciales: fuerza salvaje y vitalidad natural. Se eligió el gorila como figura icónica por su poder y nobleza, combinándolo con tonalidades verdes y follaje para distanciarse de los refrescos industriales. El naming SALVATGE ENERGY equilibra una raíz lingüística propia con una denominación internacional.",
          process:
            "El imagotipo se construyó depurando la ilustración del gorila para hacerla nítida y reconocible a pequeña escala. Se integró una fractura en el letrero ENERGY para generar dinamismo y dinamitar la rigidez. Para la versión de Sónar, el gorila sostiene el emblema del festival e incorpora auriculares verdes, fusionándose con la atmósfera musical sin desdibujar la marca.",
        },
        prototyping: {
          eyebrow: "04 · Packaging y Merchandising",
          title: "Aplicación",
          overview:
            "El diseño de la lata fusiona el imagotipo con elementos vegetales y texturas selváticas. Una base en verdes contrastados con detalles dorados refuerza el ángulo energético y natural. Para la colaboración con Sónar se optó por una gorra festivalera de bordado sutil, siguiendo el estilo minimalista de la línea oficial del festival.",
        },
        refinement: {
          eyebrow: "05 · Refinamiento y Ajustes",
          title: "Decisiones",
          overview:
            "El logotipo se evaluó en múltiples escalas, soportes y fondos, pasando por pruebas de legibilidad en Logo Lab. La adaptación para Sónar se perfeccionó cuidando las proporciones, la armonía cromática y las especificaciones técnicas del bordado textil.",
          changes: [
            "Simplificación del trazo del gorila para optimizar la legibilidad en tamaños reducidos e impresión digital.",
            "Ajuste tipográfico personalizado en el término SALVATGE para concebir una mancha gráfica exclusiva.",
            "Elaboración de versiones en positivo y negativo para garantizar máxima versatilidad sobre cualquier fondo.",
            "Inclusión de matices dorados en las latas para resaltar el componente premium y la energía vibrante.",
            "En la gorra de Sónar: reubicación sutil del logotipo del festival y auriculares verdes como guiño directo a la música.",
            "Gama cromática más sobria y neutra en el merchandising textil para armonizar con el ADN del festival.",
          ],
        },
        results: {
          resultsText:
            "El proyecto dio como resultado una identidad visual completa para Salvatge Energy —nombre, logotipo positivo/negativo, sistema de color, tipografía y packaging de lata— junto con un concepto de merchandising para Sónar Festival resuelto en un mockup de gorra bordada. Ambas etapas conforman un lenguaje gráfico coherente y complementario.",
          learningsText:
            "Tener una idea de marca sólida desde el principio orienta de manera fluida cada decisión posterior. Sintetizar una ilustración no le resta fuerza, sino que multiplica su impacto y retención visual. En una colaboración entre marcas, la clave radica en la integración mutua más que en yuxtaponer dos logotipos aislados.",
        },
      },
    },

    /* ──────────────────────────────────────────────────────────────────────────
       3. Book Magazine
    ────────────────────────────────────────────────────────────────────────── */
    "book-magazine": {
      title: "Book Magazine",
      shortDescription:
        "Proyecto de diseño editorial que explora la composición, la tipografía, el color y la jerarquía visual a lo largo de una revista literaria de cinco pliegos.",
      fullDescription:
        "Book Magazine es un proyecto editorial concebido en torno a recomendaciones literarias y ensayos culturales. La propuesta profundiza en diferentes estructuras visuales para exhibir libros, combinando tipografía, imágenes, color y maquetación para lograr una lectura dinámica y estimulante en cinco dobles páginas.",
      client: "Proyecto Universitario",
      timeframe: "Feb – Jun 2024",
      productionTime: "1 semestre",
      tags: ["Diseño Editorial", "Adobe InDesign", "Tipografía", "Maquetación", "Teoría del Color"],
      caseStudy: {
        challenge: {
          problemStatement:
            "El diseño editorial a menudo recurre a maquetas monótonas y predecibles, especialmente en temática literaria. El reto radicaba en formular una publicación envolvente donde cada doble página tuviera personalidad propia sin fragmentar la armonía del conjunto.",
          goal:
            "Maquetar una revista de libros de cinco dobles páginas que transmita el contenido literario con expresividad gráfica, experimentando con la retícula, la escala tipográfica y el color, garantizando una lectura placentera y fluida.",
          role:
            "Diseñadora Editorial — Desarrollo conceptual, arquitectura de maquetación, definición del sistema tipográfico, tratamiento de color y producción técnica en Adobe InDesign.",
        },
        research: {
          overview:
            "Comencé examinando una amplia gama de publicaciones independientes y revistas culturales de referencia, analizando cómo el uso del espacio en blanco, las retículas modulares y la jerarquía visual dirigen la mirada del lector sin saturarlo.",
          insights: [
            "Flexibilidad de retícula: Las dobles páginas más sugerentes quiebran la retícula con intención y propósito, no por azar. Dominar las reglas permite romperlas con criterio.",
            "Tipografía expresiva: En la literatura la tipografía funciona como imagen viva. Tratar titulares y citas como elementos de composición enriquece el relato.",
            "El color como atmósfera: El cromatismo no solo identifica la cabecera; modula el tono emocional de cada reseña y amplifica el mensaje de la obra tratada.",
            "Equilibrio en lecturas prolongadas: El cuerpo de texto necesita holgura y ritmo. La clave consiste en asegurar una óptima legibilidad sin caer en la frialdad.",
          ],
        },
        concept: {
          overview:
            "La idea medular consistió en otorgar a cada pliego una atmósfera gráfica singular —variando cadencia, escalas y gamas cromáticas— articulada mediante una familia tipográfica coherente que unifica la experiencia como capítulos de un mismo libro.",
          process:
            "Planteé bocetos preliminares en miniatura para explorar distribuciones antes de trasladar las cajas a InDesign. Fijé una tipografía serif para titulares y lectura literaria junto a una grotesca limpia para datos y créditos.",
        },
        prototyping: {
          eyebrow: "03 · Desarrollo de Maquetación",
          title: "Maquetación",
          overview:
            "Con la estructura asentada, trabajé directamente en InDesign diseñando por dobles páginas completas en lugar de hojas sueltas. El ancho de columnas, encuadres fotográficos y tamaños tipográficos se adaptaron al carácter específico de cada autor reseñado.",
        },
        refinement: {
          eyebrow: "04 · Refinamiento",
          title: "Detalles",
          overview:
            "En esta fase se pulieron los detalles de microtipografía, kerning, interlineados, márgenes y relaciones de color entre páginas consecutivas, garantizando un acabado editorial profesional de alta precisión gráfica.",
        },
        results: {
          resultsText:
            "La publicación resultante es una pieza editorial de cinco dobles páginas que exhibe una variada riqueza compositiva —desde pliegos fotográficos a sangre hasta páginas donde manda la tipografía— bajo un sistema coherente, fluido y seductor.",
          learningsText:
            "Este proyecto confirmó que los límites de espacio son un catalizador creativo. Trabajar con un número fijado de pliegos obligó a sopesar cada decisión visual y valorar la importancia decisiva que tiene la iteración microscópica en el diseño editorial.",
        },
      },
    },

    /* ──────────────────────────────────────────────────────────────────────────
       4. Arctic Monkeys
    ────────────────────────────────────────────────────────────────────────── */
    "arctic-monkeys": {
      title: "Arctic Monkeys — The Car Tour Poster & Flyer",
      shortDescription:
        "Cartel y flyer promocionales de inspiración retro de los años 60 para un concierto ficticio de Arctic Monkeys en el Campus UPC Terrassa (CITM), explorando el collage y la estética de la gira 'The Car'.",
      fullDescription:
        "Diseñado como ejercicio editorial y publicitario en el CITM (UPC Terrassa), este proyecto investiga la comunicación para un concierto ficticio de Arctic Monkeys en torno a su álbum 'The Car'. Inspirado en el Plakatstil de los años 60 y en la cartelería vintage de conciertos, articula un collage con iconos clave: el Toyota Camry, la silueta escénica de Alex Turner y la bola de espejos, enmarcado en tonos beige (#FFF5E0) y verde oliva (#8C8F73).",
      client: "Proyecto Académico (CITM — UPC)",
      timeframe: "Sep 2024",
      productionTime: "2 semanas",
      tags: ["Diseño de Cartel", "Impresión y Flyer", "Adobe InDesign", "Collage", "Tipografía"],
      highlights: [
        "Concierto Ficticio: Flyer promocional diseñado para un directo imaginado de Arctic Monkeys en el Campus UPC Terrassa (CITM) con motivo del álbum 'The Car'.",
        "Collage Retro Años 60: Composición vintage inspirada en el Plakatstil y carteles de bandas de los sesenta, combinando texturas orgánicas y contrastes cromáticos.",
        "Iconografía Temática: Incluye el automóvil Toyota Camry del álbum, la silueta en directo de Alex Turner y la bola de espejos discotequera.",
        "Identidad Tipográfica a Medida: Maquetado con la tipografía Milker, que reproduce los surcos geométricos y el espíritu retro de la estética de la banda.",
        "Exploración Cromática Dual: Propuesta diurna en verde oliva (#8C8F73) junto a una variante nocturna con destellos multicolores de luz reflejada.",
      ],
      mediaCaptions: {
        0: "Propuesta Principal — Collage retro de los 60 con el Toyota Camry, silueta de Alex Turner, bola de espejos y bordes beige (#FFF5E0).",
        1: "Propuesta Alternativa / Trasera — Jerarquía tipográfica y estudio de reflejos cromáticos de discoteca sobre fondo carbón profundo.",
      },
    },

    /* ──────────────────────────────────────────────────────────────────────────
       5. Artist Alley
    ────────────────────────────────────────────────────────────────────────── */
    "artist-alley": {
      title: "Artist Alley — Fiesta de Navidad y Semana Cultural",
      shortDescription:
        "Serie de carteles publicitarios para el Artist Alley universitario, un evento que celebra la creatividad estudiantil durante la Semana Cultural y Navidad en el CITM (UPC).",
      fullDescription:
        "Artist Alley es un evento universitario celebrado durante la Semana Cultural y la fiesta de Navidad en el CITM (UPC Terrassa). Ofrece al alumnado de los grados de diseño y multimedia una jornada en el campus para exponer y vender sus ilustraciones, láminas y proyectos artísticos propios, recaudando fondos y visibilizando su perfil. Para este certamen se diseñaron dos carteles promocionales: una edición navideña y otra para la Semana Cultural.",
      client: "CITM y ESEIAAT — Delegación de Estudiantes",
      productionTime: "1 semana",
      tags: ["Diseño de Cartel", "Identidad de Evento", "Impresión y Flyer", "Ilustración", "Diseño Gráfico"],
      mediaCaptions: {
        0: "Fiesta de Navidad 25' — Edición navideña festiva con ilustración de personajes, abeto de Navidad y llamada a la inscripción.",
        1: "Semana Cultural 25' — Edición de la Semana Cultural en naranja vibrante, con ilustración del puesto de artistas y código QR.",
      },
    },

    /* ──────────────────────────────────────────────────────────────────────────
       6. Cortometraje de Acción 2026
    ────────────────────────────────────────────────────────────────────────── */
    "accio-2026": {
      title: "Cortometraje de Acción 2026",
      shortDescription:
        "Ganador al Mejor Cortometraje. Cortometraje de acción realizado por Ingrid Lara, Sergi Font, Cristina Moles y Aura Espí.",
      fullDescription:
        "Cortometraje de acción galardonado con el premio al Mejor Cortometraje en la convocatoria de 2026. Realizado conjuntamente por Ingrid Lara, Sergi Font, Cristina Moles y Aura Espí en el CITM (UPC).",
      tags: ["Cortometraje", "Premiado", "Dirección", "Vídeo y Fotografía"],
    },

    /* ──────────────────────────────────────────────────────────────────────────
       7. Cortometraje de Acción 2025
    ────────────────────────────────────────────────────────────────────────── */
    "accio-2025": {
      title: "Cortometraje de Acción 2025",
      shortDescription:
        "Ganador al Premio a la Mejor Postproducción. Cortometraje de temática Malentendido realizado por Ingrid Lara, Javi Vida y Cristina Moles.",
      fullDescription:
        "Cortometraje de acción de temática Malentendido galardonado con el Premio a la Mejor Postproducción en la edición 2025. Realizado por Ingrid Lara, Javi Vida y Cristina Moles.",
      tags: ["Cortometraje", "Acción", "Postproducción", "Vídeo y Fotografía"],
    },

    /* ──────────────────────────────────────────────────────────────────────────
       8. I si es... SUPER?
    ────────────────────────────────────────────────────────────────────────── */
    "i-si-es-super": {
      title: "¿Y si es... SUPER?",
      shortDescription:
        "Cortometraje de temática libre realizado para la asignatura de Postproducción.",
      fullDescription:
        "Cortometraje de ficción y temática libre creado y editado dentro del marco de la asignatura de Postproducción en el CITM (UPC).",
      tags: ["Cortometraje", "Postproducción", "Temática Libre", "Vídeo y Fotografía"],
    },

    /* ──────────────────────────────────────────────────────────────────────────
       9. Stories That Bite
    ────────────────────────────────────────────────────────────────────────── */
    "stories-that-bite": {
      title: "Stories That Bite",
      shortDescription:
        "Cortometraje de temática libre realizado como proyecto para la asignatura de Narrativa Audiovisual 24/25.",
      fullDescription:
        "Cortometraje de ficción narrativa desarrollado para la asignatura de Narrativa Audiovisual en el CITM (UPC) durante el curso académico 2024/2025.",
      tags: ["Cortometraje", "Narrativa Audiovisual", "Temática Libre", "Vídeo y Fotografía"],
    },
  },

  CAT: {
    /* ──────────────────────────────────────────────────────────────────────────
       1. Five Stars
    ────────────────────────────────────────────────────────────────────────── */
    "five-stars": {
      title: "Five Stars — App de Cinema i Sèries",
      shortDescription:
        "Una app mòbil dissenyada per unificar la descoberta de contingut, disponibilitat en streaming, llistes personals i ressenyes en una sola experiència fluida.",
      fullDescription:
        "Five Stars resol la molèstia d'alternar entre múltiples aplicacions d'entreteniment. Analitzant plataformes com Letterboxd, IMDb, TV Time i JustWatch, vaig dissenyar un producte mòbil unificat mitjançant Card Sorting (17 participants), esbossos en paper, wireframes i un prototip interactiu a Figma.",
      client: "Projecte Acadèmic / Personal",
      timeframe: "Oct – Des 2024",
      productionTime: "3 mesos",
      tags: ["Recerca UX", "Figma", "Card Sorting", "Arquitectura d'Informació", "App Mòbil"],
      deliverablesTitle: "Documentació i Prototip del Projecte",
      deliverablesDescription:
        "Accedeix al fitxer interactiu de treball a Figma o descarrega el document PDF de la memòria acadèmica en català.",
      caseStudy: {
        challenge: {
          problemStatement:
            "Escollir què mirar i organitzar els títols vistos requereix actualment múltiples apps: Letterboxd per a ressenyes, JustWatch per a plataformes i TV Time per al seguiment d'episodis. El repte va consistir a fusionar aquestes funcions en una interfície neta i sense saturació.",
          goal:
            "Dissenyar una app mòbil intuïtiva per descobrir pel·lícules i sèries, consultar disponibilitat en streaming, seguir episodis, crear llistes personalitzades, valorar obres i compartir recomanacions amb amics.",
          role:
            "Dissenyadora UX/UI — Vaig liderar el projecte d'inici a fi: benchmark competitiu de 5 plataformes, arquitectura d'informació, Card Sorting amb 17 participants, 13 esbossos en paper, wireframes i prototip interactiu a Figma.",
        },
        research: {
          overview:
            "Vaig analitzar cinc plataformes líders (Letterboxd, IMDb, TV Time, JustWatch, Sofa Time) avaluant fortaleses i carències. Per validar la navegació i agrupació temàtica, vaig dur a terme un estudi de Card Sorting obert amb 17 participants.",
          insights: [
            "Canvi constant d'apps: Els usuaris alternen 3 o més apps per decidir què mirar, on trobar-ho i registrar el seu historial.",
            "Disponibilitat en streaming: Saber immediatament la plataforma d'emissió redueix dràsticament l'abandonament durant la cerca.",
            "Hàbits de valoració diversos: Part del públic busca només una ràpida puntuació de 5 estrelles, mentre d'altres prefereixen ressenyes extenses.",
            "Sobrecàrrega vs. senzillesa: Portals com IMDb saturen de dades. Els usuaris prefereixen un disseny visual centrat en pòsters amb detalls desplegables.",
            "Resultats del Card Sorting: Les respostes de 17 participants van ajudar a optimitzar la taxonomia i definir un feed de descoberta personalitzat.",
          ],
        },
        concept: {
          overview:
            "Five Stars es fonamenta en una estètica fosca i cinematogràfica que cedeix tot el protagonisme als pòsters. La premissa va ser aconseguir interaccions àgils i directes, permetent registrar un capítol o verificar plataformes en un sol toc.",
          process:
            "Vaig començar dibuixant 13 pantalles clau en paper per provar patrons de navegació i equilibri visual abans de passar a Figma. Això va definir un flux ergonòmic a una mà combinant feeds verticals amb carrusels horitzontals.",
        },
        prototyping: {
          eyebrow: "04 · Wireframes i Estructura",
          title: "Wireframes",
          overview:
            "Traslladar els esbossos en paper a wireframes digitals a Figma va permetre fixar la distribució, jerarquia d'elements i flux de navegació abans d'aplicar l'estil visual final. Els controls de cerca es van fixar per facilitar l'exploració.",
        },
        refinement: {
          eyebrow: "05 · Prototip d'Alta Fidelitat",
          title: "Mockups",
          overview:
            "El prototip interactiu a Figma comprèn variants completes de components, microinteraccions i 9 fluxos d'usuari clau: benvinguda, feed de descoberta, fitxa de títol, seguiment de temporades, ressenyes, filtres i estadístiques.",
          changes: [
            "Feed personalitzat 'Per a tu': Carrusels dinàmics segons actors preferits, directors i sagues actives.",
            "Cerca facetada: Filtres ràpids per plataformes de streaming, gèneres cinematogràfics i any d'estrena.",
            "Llistes a mida: Creació de col·leccions temàtiques compartibles més enllà de la llista de seguiment habitual.",
            "Mètriques de visionat: Pestanya al perfil amb temps acumulat de visualització i hàbits mensuals.",
            "Sistema de disseny: Mode fosc cinematogràfic (negres profunds, carbó i tocs daurats) combinant Montserrat i Inter.",
          ],
        },
        results: {
          resultsText:
            "El projecte va concloure amb un prototip interactiu a Figma d'alta fidelitat que cobreix 9 fluxos d'usuari complets, eliminant la fricció entre eines disperses. L'arquitectura es va validar mitjançant Card Sorting amb 17 usuaris, consolidant un sistema de disseny escalable amb components reutilitzables, tokens de color i tipografia harmònica.",
          learningsText:
            "Efectuar el Card Sorting abans dels wireframes va resultar determinant per alinear l'organització de continguts amb els models mentals dels usuaris i no amb meres suposicions. Iterar des del paper va facilitar calibrar la densitat de pantalla i navegació, garantint que el cartell i l'acció ràpida continuïn sent protagonistes.",
        },
      },
    },

    /* ──────────────────────────────────────────────────────────────────────────
       2. Salvatge Energy
    ────────────────────────────────────────────────────────────────────────── */
    "salvatge-energy": {
      title: "Salvatge Energy",
      shortDescription:
        "Creació completa de marca per a una beguda energètica natural: des del naming i disseny de logotip fins al packaging i una col·laboració amb el festival Sónar.",
      fullDescription:
        "Salvatge Energy és un projecte de branding desenvolupat des de zero durant un semestre universitari. El treball abasta el sistema integral d'identitat: recerca, naming, logotip, paleta cromàtica i disseny de llauna. Posteriorment s'amplia amb una proposta de col·laboració i marxandatge per al festival Sónar, adaptant la personalitat gràfica sense perdre la seva essència.",
      client: "Projecte Universitari",
      timeframe: "Febrer – Juny 2024",
      productionTime: "1 semestre universitari",
      tags: [
        "Adobe Illustrator",
        "Branding",
        "Disseny de Logo",
        "Identitat Visual",
        "Packaging",
        "Direcció d'Art",
        "Col·laboració de Marca",
        "Marxandatge",
      ],
      deliverablesTitle: "Documentació i Guies del Projecte",
      deliverablesDescription:
        "Descarrega la documentació acadèmica original: el manual complet d'Identitat Visual i la proposta de Marxandatge per a Sónar Festival redactats en castellà com a part del lliurament acadèmic.",
      documents: [
        {
          name: "SalvatgeBebida_IdentidadVisual.pdf",
          url: "/projects/salvatge-energy/SalvatgeBebida_IdentidadVisual.pdf",
          label: "Manual d'Identitat Visual",
          language: "ES · PDF",
        },
        {
          name: "SalvatgeMerchandising.pdf",
          url: "/projects/salvatge-energy/SalvatgeMerchandising.pdf",
          label: "Proposta Marxandatge Sónar",
          language: "ES · PDF",
        },
      ],
      caseStudy: {
        challenge: {
          problemStatement:
            "L'encàrrec requeria crear una marca de beguda energètica sota un posicionament natural: una combinació complexa, ja que el sector està dominat per codis visuals agressius i sintètics. A més, la identitat havia de respondre a escala internacional, funcionar en diversos suports i adaptar-se fluidament a una col·laboració amb el festival Sónar.",
          goal:
            "Desenvolupar una identitat de marca completa (nom, imagotip, cromatisme, tipografia i envàs) per a una beguda energètica natural adreçada a adults de 18 a 40 anys. La marca havia de transmetre força i vitalitat diferenciant-se amb un caràcter orgànic. En la segona fase, adaptar la identitat per a una càpsula de marxandatge a Sónar Festival.",
          role:
            "Dissenyadora Gràfica — Responsable de tot el procés: modelatge d'usuaris, recerca visual, naming, disseny de logotip, selecció tipogràfica, sistema de color, disseny d'envàs i concepte de col·laboració amb adaptació de personatge i marxandatge.",
        },
        research: {
          overview:
            "La recerca es va centrar en dos àmbits: estudiar el públic objectiu i analitzar el panorama visual de les begudes energètiques. Es van definir dos perfils d'usuari representatius: un esportista de 28 anys i una responsable de màrqueting activa. En l'àmbit gràfic, es van estudiar marques amb goril·les per identificar patrons i espais de diferenciació.",
          insights: [
            "Les begudes energètiques empren colors estridents i tipografies agressives, però la majoria acaben semblant intercanviables.",
            "Les marques amb simis existents solen caure en una il·lustració recarregada: un símbol net i geomètric destaca molt més.",
            "El verd evoca natura i hàbits saludables, encaixant de manera orgànica amb els valors de la beguda sense artificis.",
            "La coincidència d'edats entre Salvatge Energy i el festival Sónar (18 a 40 anys) va fer de la col·laboració una extensió natural i atractiva.",
          ],
        },
        concept: {
          overview:
            "El concepte connecta dos principis: força salvatge i vitalitat natural. Es va triar el goril·la com a eix per la seva potència i presència, combinat amb tons verds i vegetació per allunyar el producte dels refrescos industrials. El nom SALVATGE ENERGY emparella el terme català amb l'anglès, creant una identitat única i comprensible internacionalment.",
          process:
            "L'imagotip es va construir simplificant la silueta del goril·la perquè fos identificable a qualsevol escala. Es va crear un tall a la paraula ENERGY simulant un llamp per aportar dinamisme. Per a Sónar, el goril·la subjecta el logotip del festival i duu auriculars verds, unint-se a la música sense desvirtuar la identitat.",
        },
        prototyping: {
          eyebrow: "04 · Packaging i Marxandatge",
          title: "Aplicació",
          overview:
            "El disseny de la llauna combina el goril·la amb motius botànics i textures selvàtiques. Els tons foscos i clars en contrast amb reflexos daurats reforcen l'energia del producte. Per a Sónar es va triar una gorra com a format de marxandatge, pràctica per al festival i d'estètica elegant i continguda.",
        },
        refinement: {
          eyebrow: "05 · Refinament",
          title: "Decisions",
          overview:
            "El logotip es va avaluar en diversos formats, contrastos i mides mitjançant proves a Logo Lab. La col·laboració amb Sónar es va polir prestant especial atenció a les proporcions, la concordança cromàtica i els límits físics del brodat tèxtil.",
          changes: [
            "Simplificació del dibuix del goril·la per garantir un reconeixement òptim en formats petits i pantalles.",
            "Intervenció tipogràfica manual en el mot SALVATGE per aconseguir un rètol distintiu i dinàmic.",
            "Creació de variants en positiu i negatiu per a una aplicació versàtil en qualsevol suport.",
            "Incorporació d'accents daurats al packaging per transmetre la dimensió energètica sense perdre la puresa natural.",
            "A la gorra de Sónar: integració del logotip del festival i auriculars verds com a picada d'ullet directa a l'electrònica.",
            "Paleta cromàtica més moderada i minimalista en el marxandatge per alinear-se amb el caràcter de Sónar.",
          ],
        },
        results: {
          resultsText:
            "El projecte va culminar en una identitat visual completa per a Salvatge Energy —nom, logotip positiu/negatiu, sistema cromàtic, tipografia i disseny de llauna— a més d'una proposta de marxandatge per a Sónar Festival en format de gorra brodada. Ambdues fases conviuen en un sistema sòlid i interconnectat.",
          learningsText:
            "Un concepte sòlid des de l'arrencada simplifica qualsevol decisió de disseny posterior. Depurar una il·lustració la fa més icònica, no menys contundent. I en una col·laboració, l'èxit depèn d'integrar un univers visual dins de l'altre, en comptes de limitar-se a ajuntar dos logotips.",
        },
      },
    },

    /* ──────────────────────────────────────────────────────────────────────────
       3. Book Magazine
    ────────────────────────────────────────────────────────────────────────── */
    "book-magazine": {
      title: "Book Magazine",
      shortDescription:
        "Projecte de disseny editorial que explora la composició, la tipografia, el color i la jerarquia visual al llarg d'una revista literària de cinc plecs.",
      fullDescription:
        "Book Magazine és un projecte editorial concebut al voltant de recomanacions literàries i assajos culturals. La proposta aprofundeix en diferents estructures visuals per exhibir llibres, combinant tipografia, imatges, color i maquetació per assolir una lectura dinàmica i estimulant en cinc dobles pàgines.",
      client: "Projecte Universitari",
      timeframe: "Feb – Jun 2024",
      productionTime: "1 semestre",
      tags: ["Disseny Editorial", "Adobe InDesign", "Tipografia", "Maquetació", "Teoria del Color"],
      caseStudy: {
        challenge: {
          problemStatement:
            "El disseny editorial sovint cau en patrons repetitius i predictibles, especialment en publicacions de literatura. El desafiament consistia a dissenyar una revista que fos atractiva i viva: on cada plec tingués una veu pròpia sense perdre la coherència del conjunt.",
          goal:
            "Maquetar una revista de llibres de cinc dobles pàgines que comuniqui el contingut literari de manera visualment potent, experimentant amb la composició, la jerarquia tipogràfica i el color, mantenint la lectura còmoda i propera.",
          role:
            "Dissenyadora Editorial — Desenvolupament del concepte, disseny de retícula, elecció tipogràfica, paleta cromàtica i maquetació tècnica a Adobe InDesign.",
        },
        research: {
          overview:
            "Vaig començar analitzant revistes independents i publicacions culturals de referència, observant com es manegen els marges, el blanc i l'escala tipogràfica per captar l'atenció del lector amb fluïdesa i equilibri.",
          insights: [
            "Flexibilitat de retícula: Les dobles pàgines més expressives trenquen la retícula de manera conscient i justificada. Dominar l'estructura permet transgredir-la amb sentit.",
            "Tipografia com a imatge: En el camp literari el text és l'element gràfic clau. Tractar títols i citacions com a objectes visuals multiplica les possibilitats narratives.",
            "El color com a emoció: La paleta cromàtica no és només un tret corporatiu; pot transformar per complet l'estat d'ànim i la percepció d'una pàgina.",
            "Ritme en textos llargs: Els blocs de lectura necessiten respiració. El repte és oferir dinamisme visual sense comprometre en absolut la claredat lectora.",
          ],
        },
        concept: {
          overview:
            "El concepte es basa a atorgar a cada doble pàgina una personalitat diferenciada —un ritme propi, una escala i un cromatisme específics— cohesionat per un sistema tipogràfic transversal, de manera similar als capítols d'un bon llibre.",
          process:
            "Vaig dibuixar esbossos ràpids en miniatura per testejar composicions abans de treballar a InDesign. Vaig seleccionar una serif d'alt caràcter per a titulars i lectura i una grotesca neutral per a anotacions i peus d'imatge.",
        },
        prototyping: {
          eyebrow: "03 · Desenvolupament de Maquetació",
          title: "Maquetació",
          overview:
            "Amb les idees fixades, vaig estructurar cada plec a InDesign concebent la doble pàgina com un llenç continu i equilibrat. Les columnes, els talls fotogràfics i els cossos de lletra van respondre a les necessitats particulars de cada lectura.",
        },
        refinement: {
          eyebrow: "04 · Refinament",
          title: "Detalls",
          overview:
            "Durant el refinament es van ajustar els espaiats fins, el contrast tipogràfic i l'harmonia cromàtica entre plecs consecutius, assegurant que cada pàgina tingués força individual mantenint una sintonia perfecta.",
        },
        results: {
          resultsText:
            "El resultat final és una revista de cinc dobles pàgines que explora diversos camins visuals —des de fotografies a sang sencera fins a jocs d'impacte tipogràfic— sostinguts per un criteri sòlid d'estil i sensibilitat editorial.",
          learningsText:
            "Aquest treball em va demostrar que les limitacions són aliades del disseny. Ajustar-se a cinc plecs va obligar a mesurar cada intervenció i a valorar com la iteració detallada transforma una bona maqueta en una peça memorable.",
        },
      },
    },

    /* ──────────────────────────────────────────────────────────────────────────
       4. Arctic Monkeys
    ────────────────────────────────────────────────────────────────────────── */
    "arctic-monkeys": {
      title: "Arctic Monkeys — The Car Tour Poster & Flyer",
      shortDescription:
        "Cartell i flyer promocionals d'inspiració retro dels anys 60 per a un concert fictici d'Arctic Monkeys al Campus UPC Terrassa (CITM), explorant el collage i l'estètica de la gira 'The Car'.",
      fullDescription:
        "Dissenyat com a exercici editorial i publicitari al CITM (UPC Terrassa), aquest projecte investiga la comunicació per a un concert fictici d'Arctic Monkeys entorn del seu àlbum 'The Car'. Inspirat en el Plakatstil dels anys 60 i en la cartelleria vintage de concerts, articula un collage amb icones clau: el Toyota Camry, la silueta escènica d'Alex Turner i la bola de miralls, emmarcat en tons beix (#FFF5E0) i verd oliva (#8C8F73).",
      client: "Projecte Acadèmic (CITM — UPC)",
      timeframe: "Set 2024",
      productionTime: "2 setmanes",
      tags: ["Disseny de Cartell", "Impressió i Flyer", "Adobe InDesign", "Collage", "Tipografia"],
      highlights: [
        "Concert Fictici: Flyer promocional dissenyat per a un directe imaginat d'Arctic Monkeys al Campus UPC Terrassa (CITM) en commemoració de 'The Car'.",
        "Collage Retro Anys 60: Composició d'estil vintage influenciada pel Plakatstil dels seixanta, combinant capes de paper, textures orgàniques i contrastos tonals.",
        "Iconografia Temàtica: Incorpora el vehicle Toyota Camry de la portada, la silueta en directe d'Alex Turner i la bola de miralls discotequera.",
        "Tipografia Personalitzada: Maquetat amb la font Milker, transmetent la geometria acanalada i el caràcter retro del marxandatge de la banda.",
        "Doble Exploració Cromàtica: Proposta diürna en verd oliva (#8C8F73) al costat d'una variant nocturna amb reflexos multicolors sobre fons fosc.",
      ],
      mediaCaptions: {
        0: "Proposta Principal — Collage retro dels 60 amb el Toyota Camry, silueta d'Alex Turner, bola de miralls i marges beix (#FFF5E0).",
        1: "Proposta Alternativa / Revers — Jerarquia tipogràfica i estudi de reflexos cromàtics de discoteca sobre fons de carbó intens.",
      },
    },

    /* ──────────────────────────────────────────────────────────────────────────
       5. Artist Alley
    ────────────────────────────────────────────────────────────────────────── */
    "artist-alley": {
      title: "Artist Alley — Festa de Nadal & Setmana Cultural",
      shortDescription:
        "Sèrie de cartells publicitaris per a l'Artist Alley universitari, un esdeveniment que celebra la creativitat estudiantil durant la Setmana Cultural i Nadal al CITM (UPC).",
      fullDescription:
        "L'Artist Alley és un esdeveniment universitari organitzat durant la Setmana Cultural i la festa de Nadal al CITM (UPC Terrassa). Ofereix a l'alumnat dels graus de disseny i multimèdia una jornada al campus per exposar i vendre les seves il·lustracions, làmines i projectes artístics propis, recaptant fons i visibilitzant el seu perfil. Per a aquest certamen es van dissenyar dos cartells promocionals: una edició nadalenca i una altra per a la Setmana Cultural.",
      client: "CITM i ESEIAAT — Delegació d'Estudiants",
      productionTime: "1 setmana",
      tags: ["Disseny de Cartell", "Identitat d'Esdeveniment", "Impressió i Flyer", "Il·lustració", "Disseny Gràfic"],
      mediaCaptions: {
        0: "Festa de Nadal 25' — Edició nadalenca festiva amb il·lustració de personatges, arbre de Nadal i crida a la inscripció.",
        1: "Setmana Cultural 25' — Edició de la Setmana Cultural en taronja vibrant, destacant la parada d'artistes i el codi QR.",
      },
    },

    /* ──────────────────────────────────────────────────────────────────────────
       6. Curtmetratge d'Acció 2026
    ────────────────────────────────────────────────────────────────────────── */
    "accio-2026": {
      title: "Curtmetratge d'Acció 2026",
      shortDescription:
        "Guanyador al Millor Curtmetratge. Curtmetratge d'acció realitzat per Ingrid Lara, Sergi Font, Cristina Moles i Aura Espí.",
      fullDescription:
        "Curtmetratge d'acció premiat amb el Millor Curtmetratge a la convocatòria del 2026. Realitzat conjuntament per Ingrid Lara, Sergi Font, Cristina Moles i Aura Espí al CITM (UPC).",
      tags: ["Curtmetratge", "Premiat", "Direcció", "Vídeo i Fotografia"],
    },

    /* ──────────────────────────────────────────────────────────────────────────
       7. Curtmetratge d'Acció 2025
    ────────────────────────────────────────────────────────────────────────── */
    "accio-2025": {
      title: "Curtmetratge d'Acció 2025",
      shortDescription:
        "Guanyador al Premi a la Millor Postproducció. Curtmetratge de temàtica Malentès fet per Ingrid Lara, Javi Vida i Cristina Moles.",
      fullDescription:
        "Curtmetratge d'acció de temàtica Malentès premiat amb el Premi a la Millor Postproducció a la convocatòria del 2025. Realitzat per Ingrid Lara, Javi Vida i Cristina Moles.",
      tags: ["Curtmetratge", "Acció", "Postproducció", "Vídeo i Fotografia"],
    },

    /* ──────────────────────────────────────────────────────────────────────────
       8. I si es... SUPER?
    ────────────────────────────────────────────────────────────────────────── */
    "i-si-es-super": {
      title: "I si es... SUPER?",
      shortDescription:
        "Curt de temàtica lliure realitzat per a la classe de Postproducció.",
      fullDescription:
        "Curtmetratge de temàtica lliure creat dins del marc de l'assignatura de Postproducció al CITM (UPC).",
      tags: ["Curtmetratge", "Postproducció", "Temàtica Lliure", "Vídeo i Fotografia"],
    },

    /* ──────────────────────────────────────────────────────────────────────────
       9. Stories That Bite
    ────────────────────────────────────────────────────────────────────────── */
    "stories-that-bite": {
      title: "Stories That Bite",
      shortDescription:
        "Curtmetratge de temàtica lliure. Treball de la classe de Narrativa Audiovisual 24/25.",
      fullDescription:
        "Curtmetratge de temàtica lliure realitzat per a l'assignatura de Narrativa Audiovisual del curs 24/25 al CITM (UPC).",
      tags: ["Curtmetratge", "Narrativa Audiovisual", "Temàtica Lliure", "Vídeo i Fotografia"],
    },
  },
};

export function getLocalizedProjects(lang: Language): Project[] {
  return SAMPLE_PROJECTS.map((baseProject) => {
    const overrides = PROJECT_TRANSLATIONS[lang]?.[baseProject.id];
    if (!overrides) return baseProject;

    const localizedMediaAssets = baseProject.mediaAssets.map((asset, idx) => {
      if (overrides.mediaCaptions && overrides.mediaCaptions[idx]) {
        return { ...asset, caption: overrides.mediaCaptions[idx] };
      }
      return asset;
    });

    const localizedCaseStudy = baseProject.caseStudy
      ? {
          ...baseProject.caseStudy,
          challenge: {
            ...baseProject.caseStudy.challenge,
            ...(overrides.caseStudy?.challenge ?? {}),
          },
          research: baseProject.caseStudy.research
            ? {
                ...baseProject.caseStudy.research,
                ...(overrides.caseStudy?.research ?? {}),
              }
            : undefined,
          concept: baseProject.caseStudy.concept
            ? {
                ...baseProject.caseStudy.concept,
                ...(overrides.caseStudy?.concept ?? {}),
              }
            : undefined,
          prototyping: baseProject.caseStudy.prototyping
            ? {
                ...baseProject.caseStudy.prototyping,
                ...(overrides.caseStudy?.prototyping ?? {}),
              }
            : undefined,
          refinement: baseProject.caseStudy.refinement
            ? {
                ...baseProject.caseStudy.refinement,
                ...(overrides.caseStudy?.refinement ?? {}),
              }
            : undefined,
          results: {
            ...baseProject.caseStudy.results,
            ...(overrides.caseStudy?.results ?? {}),
          },
        }
      : undefined;

    return {
      ...baseProject,
      title: overrides.title ?? baseProject.title,
      shortDescription: overrides.shortDescription ?? baseProject.shortDescription,
      fullDescription: overrides.fullDescription ?? baseProject.fullDescription,
      client: overrides.client ?? baseProject.client,
      timeframe: overrides.timeframe ?? baseProject.timeframe,
      productionTime: overrides.productionTime ?? baseProject.productionTime,
      tags: overrides.tags ?? baseProject.tags,
      highlights: overrides.highlights ?? baseProject.highlights,
      deliverablesEyebrow:
        overrides.deliverablesEyebrow !== undefined
          ? overrides.deliverablesEyebrow
          : baseProject.deliverablesEyebrow,
      deliverablesTitle: overrides.deliverablesTitle ?? baseProject.deliverablesTitle,
      deliverablesDescription:
        overrides.deliverablesDescription ?? baseProject.deliverablesDescription,
      documents: overrides.documents ?? baseProject.documents,
      mediaAssets: localizedMediaAssets,
      caseStudy: localizedCaseStudy,
    };
  });
}

export function getLocalizedProject(id: string, lang: Language): Project | undefined {
  const projects = getLocalizedProjects(lang);
  return projects.find((p) => p.id === id);
}

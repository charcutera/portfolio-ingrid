import { Language } from "@/context/LanguageContext";

export interface NavItem {
  name: string;
  href: string;
}

export interface DisciplineTranslation {
  slug: "ux-ui" | "graphic-design" | "video";
  label: string;
  emoji: string;
  description: string;
  color: string;
}

export interface ExperienceTranslation {
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  current: boolean;
  description?: string;
}

export interface ToolTranslation {
  tool: string;
  desc: string;
}

export interface EducationTranslation {
  degree: string;
  institution: string;
  period: string;
  isCurrent?: boolean;
  description: string;
}

export interface Translations {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  home: {
    tagline: string;
    viewProjects: string;
    getInTouch: string;
    rolePill: string;
    projectsHeading: string;
    viewAll: string;
    disciplinesHeading: string;
    browseWorks: string;
    experienceHeading: string;
    fullBio: string;
    disciplines: DisciplineTranslation[];
    experience: ExperienceTranslation[];
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    experienceHeading: string;
    educationHeading: string;
    toolsHeading: string;
    experiences: ExperienceTranslation[];
    education: EducationTranslation[];
    award: {
      title: string;
      level: string;
      period: string;
      description: string;
    };
    tools: ToolTranslation[];
  };
  contact: {
    headline: [string, string];
    successBadge: string;
    successTitle: string;
    successMessage: string;
    nameLabel: string;
    firstNamePlaceholder: string;
    lastNamePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    services: {
      uxUi: string;
      graphicDesign: string;
      videoMotion: string;
      seo: string;
      other: string;
    };
    emailLabel: string;
    emailPlaceholder: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    submitButton: string;
  };
  footer: {
    headline: string[];
    navHome: string;
    navProjects: string;
    navAbout: string;
    navContact: string;
    rights: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    tabAll: string;
    tabUxUi: string;
    tabGraphicDesign: string;
    tabVideo: string;
    badgeOverview: string;
    badgeUxUi: string;
    badgeGraphicDesign: string;
    badgeVideo: string;
    descriptionAll: string;
    descriptionUxUi: string;
    descriptionGraphicDesign: string;
    descriptionVideo: string;
    videoSubsection: string;
    photographySubsection: string;
    backToAll: string;
  };
  caseStudyUI: {
    backToAll: string;
    watchYouTube: string;
    viewLive: string;
    openFigma: string;
    downloadDoc: string;
    metaCategory: string;
    metaClient: string;
    metaYear: string;
    metaTimeframe: string;
    metaProductionTime: string;
    catUxUi: string;
    catGraphicDesign: string;
    catVideo: string;
    eyebrow01: string;
    eyebrow02: string;
    eyebrow03: string;
    eyebrow06: string;
    challengeTitle: string;
    problemStatement: string;
    goal: string;
    myRole: string;
    researchTitle: string;
    keyInsights: string;
    conceptTitle: string;
    processTitle: string;
    keyUpdates: string;
    conclusionsTitle: string;
    resultsTitle: string;
    learningsTitle: string;
    deliverablesEyebrowDefault: string;
    deliverablesTitleDefault: string;
    deliverablesDescriptionDefault: string;
    otherProjectsTitle: string;
    browseByDiscipline: string;
    projectOverviewTitle: string;
    keyDetailsNotes: string;
  };
  magazine: {
    spread: string;
    single: string;
    returnStart: string;
    fullscreen: string;
    exitFullscreen: string;
    prevPage: string;
    nextPage: string;
    endOfIssue: string;
    backCover: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  EN: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About Me",
      contact: "Contact",
    },
    home: {
      tagline:
        "Crafting immersive visual narratives across design and motion. From brand identities to interactive digital experiences.",
      viewProjects: "View Projects",
      getInTouch: "Get in touch",
      rolePill:
        "Multimedia Designer · UX/UI · Video & Photography · Graphic Design",
      projectsHeading: "Projects",
      viewAll: "View all",
      disciplinesHeading: "Disciplines",
      browseWorks: "Browse works",
      experienceHeading: "Experience",
      fullBio: "Full bio",
      disciplines: [
        {
          slug: "ux-ui",
          label: "UX / UI",
          emoji: "◈",
          description:
            "Mobile app prototyping, user research, wireframing, and interactive design systems built in Figma.",
          color: "#7C3AED",
        },
        {
          slug: "graphic-design",
          label: "Graphic Design",
          emoji: "✦",
          description:
            "Corporate brand identities, editorial magazine layouts, and poster series with high-impact typography.",
          color: "#D946EF",
        },
        {
          slug: "video",
          label: "Video & Photography",
          emoji: "▶",
          description:
            "Cinematic narrative short films, rhythmic video editing, color grading, and artistic photography exploration.",
          color: "#BE123C",
        },
      ],
      experience: [
        {
          role: "Marketing & Social Media Management",
          company: "Artemisa Beauty",
          location: "Barcelona",
          period: "Nov 2025 — Apr 2026",
          duration: "6 mos",
          current: true,
        },
        {
          role: "Web Design & E-commerce Management",
          company: "WeHippie.shop",
          location: "Terrassa (Remote)",
          period: "May 2024 — Oct 2024",
          duration: "6 mos",
          current: false,
        },
        {
          role: "SEO Marketing",
          company: "PIXELWOLF",
          location: "Terrassa (Remote)",
          period: "Jun 2023 — Dec 2024",
          duration: "1 yr 7 mos",
          current: false,
        },
      ],
    },
    about: {
      heroTitle: "ABOUT ME",
      heroSubtitle:
        "Crafting visual narratives across mobile UX/UI prototyping, corporate brand identity, editorial layouts, and cinematic short films & photography.",
      experienceHeading: "Professional Experience",
      educationHeading: "Studies & Education",
      toolsHeading: "Creative Toolkit",
      experiences: [
        {
          role: "Marketing & Social Media Management",
          company: "Artemisa Beauty — Barcelona",
          location: "Barcelona",
          period: "Nov 2025 — Apr 2026",
          duration: "6 mos",
          current: true,
          description:
            "Organic marketing strategy and content creation for Artemisa Beauty, alongside full management of the Instagram profile @shucostmetics.iberia.",
        },
        {
          role: "Web Design & E-commerce Management",
          company: "WeHippie.shop — Terrassa (Remote)",
          location: "Terrassa (Remote)",
          period: "May 2024 — Oct 2024",
          duration: "6 mos",
          current: false,
          description:
            "Website management and editing, Instagram content for @wehippie.shop, customer care, and order fulfilment for this independent online boutique.",
        },
        {
          role: "SEO Marketing",
          company: "PIXELWOLF — Terrassa (Remote)",
          location: "Terrassa (Remote)",
          period: "Jun 2023 — Dec 2024",
          duration: "1 yr 7 mos",
          current: false,
          description:
            "Organic marketing and SEO strategy for a diverse range of clients at PIXELWOLF.es digital agency, covering web design and search engine optimisation.",
        },
      ],
      education: [
        {
          degree: "Bachelor's in Multimedia Technology & Digital Design",
          institution: "CITM — Centre de la Imatge i la Tecnologia Multimèdia, UPC",
          period: "2023 — Present",
          isCurrent: true,
          description:
            "Specialising in digital design, multimedia production, Adobe Illustrator, logo design, and interactive technologies at the Universitat Politècnica de Catalunya.",
        },
        {
          degree: "Technological Baccalaureate",
          institution: "IES Terrassa",
          period: "2021 — 2023",
          description:
            "Technology-oriented secondary education with a focus on scientific and engineering disciplines.",
        },
      ],
      award: {
        title: "CAN SAT Project — Winner",
        level: "Catalonia & Spain National Award",
        period: "Edition 2021 – 2022",
        description:
          "First-place winner at both the Catalonia and Spain national levels of the CAN SAT satellite engineering competition — a European Space Agency programme for secondary school students.",
      },
      tools: [
        {
          tool: "Figma",
          desc: "Design Systems, User Interface & Rapid Interactive Prototyping",
        },
        {
          tool: "Adobe After Effects",
          desc: "Motion Graphics, VFX & Kinetic Typography Animation",
        },
        {
          tool: "Frontend",
          desc: "React, JavaScript, HTML & CSS — Interactive interfaces and component-driven web development",
        },
        {
          tool: "Adobe Illustrator",
          desc: "Vector Brand Identities, Iconography & Print Layouts",
        },
        {
          tool: "Adobe Photoshop",
          desc: "Digital Image Manipulation, Art Direction & Texture Design",
        },
        {
          tool: "DaVinci Resolve",
          desc: "Cinematic Color Grading & Finalizing Output Formats",
        },
        {
          tool: "Cinema 4D & Blender",
          desc: "3D Motion Graphics, Product Renders & Spatial Assets",
        },
        {
          tool: "Framer / Webflow",
          desc: "No-code Interactive Development & Micro-animations",
        },
      ],
    },
    contact: {
      headline: ["LET'S HAVE A", "CONVERSATION."],
      successBadge: "Message Sent",
      successTitle: "Thank you!",
      successMessage:
        "Your message has been received. Ingrid will get back to you shortly.",
      nameLabel: "Name",
      firstNamePlaceholder: "First Name",
      lastNamePlaceholder: "Last Name",
      serviceLabel: "Service",
      servicePlaceholder: "Select a service...",
      services: {
        uxUi: "UX / UI & Product Design",
        graphicDesign: "Graphic Design & Brand Identity",
        videoMotion: "Video Production & Motion Graphics",
        seo: "SEO & Digital Marketing",
        other: "Other / Collaboration",
      },
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      descriptionLabel: "Project description",
      descriptionPlaceholder:
        "Tell me about your project, timeline, and goals...",
      submitButton: "Submit",
    },
    footer: {
      headline: ["THANKS FOR", "SCROLLING", "THIS FAR."],
      navHome: "Home",
      navProjects: "Projects",
      navAbout: "About Me",
      navContact: "Contact",
      rights: "All rights reserved.",
    },
    projectsPage: {
      eyebrow: "Selected Works & Case Studies",
      title: "Projects",
      tabAll: "All Works",
      tabUxUi: "UX / UI",
      tabGraphicDesign: "Graphic Design",
      tabVideo: "Video & Photography",
      badgeOverview: "Overview",
      badgeUxUi: "Mobile Prototyping",
      badgeGraphicDesign: "Editorial & Posters",
      badgeVideo: "Short Films & Art",
      descriptionAll:
        "Explore a curated collection of work across mobile product design, editorial graphic design, corporate identity, narrative short films, and artistic photography.",
      descriptionUxUi:
        "Mobile app prototyping, user research, wireframing, card sorting, and interactive design systems built in Figma.",
      descriptionGraphicDesign:
        "Corporate brand identities, editorial book and magazine layouts, and typographic poster series with focused visual storytelling.",
      descriptionVideo:
        "Cinematic narrative short films, rhythmic video editing, DaVinci Resolve color grading, and introspective artistic photography series.",
      videoSubsection: "Video",
      photographySubsection: "Photography",
      backToAll: "Back to All Projects",
    },
    caseStudyUI: {
      backToAll: "All Projects",
      watchYouTube: "Watch on YouTube",
      viewLive: "View live project",
      openFigma: "Open Figma Prototype",
      downloadDoc: "Download Practice Document",
      metaCategory: "Category",
      metaClient: "Client",
      metaYear: "Year",
      metaTimeframe: "Time Frame",
      metaProductionTime: "Production Time",
      catUxUi: "UX / UI (Mobile)",
      catGraphicDesign: "Graphic Design",
      catVideo: "Video & Photography",
      eyebrow01: "Defining the Challenge",
      eyebrow02: "Research",
      eyebrow03: "Concept & Process",
      eyebrow06: "Conclusions",
      challengeTitle: "Challenge",
      problemStatement: "Problem Statement",
      goal: "Goal",
      myRole: "My Role",
      researchTitle: "Research & Insights",
      keyInsights: "Key Insights",
      conceptTitle: "Concept",
      processTitle: "Process",
      keyUpdates: "Key Updates",
      conclusionsTitle: "Conclusions",
      resultsTitle: "Results",
      learningsTitle: "Learnings",
      deliverablesEyebrowDefault: "Project Deliverables & Assets",
      deliverablesTitleDefault: "Explore the Complete Project",
      deliverablesDescriptionDefault:
        "Access the full interactive Figma working file or download the complete academic documentation PDF.",
      otherProjectsTitle: "Other Projects",
      browseByDiscipline: "Browse by Discipline",
      projectOverviewTitle: "Project Overview & Context",
      keyDetailsNotes: "Key Details & Design Notes",
    },
    magazine: {
      spread: "Spread",
      single: "Single",
      returnStart: "Return to start",
      fullscreen: "Fullscreen View",
      exitFullscreen: "Exit Fullscreen",
      prevPage: "Previous page",
      nextPage: "Next page",
      endOfIssue: "End of issue",
      backCover: "Back cover",
    },
  },

  ES: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    home: {
      tagline:
        "Creando narrativas visuales inmersivas en diseño y movimiento. Desde identidades de marca hasta experiencias digitales interactivas.",
      viewProjects: "Ver Proyectos",
      getInTouch: "Contactar",
      rolePill:
        "Diseñadora Multimedia · UX/UI · Vídeo y Fotografía · Diseño Gráfico",
      projectsHeading: "Proyectos",
      viewAll: "Ver todos",
      disciplinesHeading: "Disciplinas",
      browseWorks: "Explorar obras",
      experienceHeading: "Experiencia",
      fullBio: "Bio completa",
      disciplines: [
        {
          slug: "ux-ui",
          label: "UX / UI",
          emoji: "◈",
          description:
            "Prototipado de apps móviles, investigación de usuarios, wireframing y sistemas interactivos en Figma.",
          color: "#7C3AED",
        },
        {
          slug: "graphic-design",
          label: "Diseño Gráfico",
          emoji: "✦",
          description:
            "Identidades corporativas, maquetación editorial y series de carteles con tipografía de alto impacto.",
          color: "#D946EF",
        },
        {
          slug: "video",
          label: "Vídeo y Fotografía",
          emoji: "▶",
          description:
            "Cortometrajes narrativos, edición dinámica de vídeo, etalonaje cinematográfico y fotografía artística.",
          color: "#BE123C",
        },
      ],
      experience: [
        {
          role: "Marketing y Gestión de Redes Sociales",
          company: "Artemisa Beauty",
          location: "Barcelona",
          period: "Nov 2025 — Abr 2026",
          duration: "6 meses",
          current: true,
        },
        {
          role: "Diseño Web y Gestión de E-commerce",
          company: "WeHippie.shop",
          location: "Terrassa (Remoto)",
          period: "May 2024 — Oct 2024",
          duration: "6 meses",
          current: false,
        },
        {
          role: "Marketing SEO",
          company: "PIXELWOLF",
          location: "Terrassa (Remoto)",
          period: "Jun 2023 — Dic 2024",
          duration: "1 año 7 m",
          current: false,
        },
      ],
    },
    about: {
      heroTitle: "SOBRE MÍ",
      heroSubtitle:
        "Creando narrativas visuales mediante prototipado UX/UI móvil, identidad corporativa, maquetación editorial, cortometrajes y fotografía.",
      experienceHeading: "Experiencia Profesional",
      educationHeading: "Estudios y Formación",
      toolsHeading: "Herramientas Creativas",
      experiences: [
        {
          role: "Marketing y Gestión de Redes Sociales",
          company: "Artemisa Beauty — Barcelona",
          location: "Barcelona",
          period: "Nov 2025 — Abr 2026",
          duration: "6 meses",
          current: true,
          description:
            "Estrategia de marketing orgánico y creación de contenido para Artemisa Beauty, junto a la gestión integral de la cuenta @shucostmetics.iberia.",
        },
        {
          role: "Diseño Web y Gestión de E-commerce",
          company: "WeHippie.shop — Terrassa (Remoto)",
          location: "Terrassa (Remoto)",
          period: "May 2024 — Oct 2024",
          duration: "6 meses",
          current: false,
          description:
            "Gestión y edición web, creación de contenido en Instagram para @wehippie.shop, atención al cliente y pedidos para esta tienda online independiente.",
        },
        {
          role: "Marketing SEO",
          company: "PIXELWOLF — Terrassa (Remoto)",
          location: "Terrassa (Remoto)",
          period: "Jun 2023 — Dic 2024",
          duration: "1 año 7 m",
          current: false,
          description:
            "Estrategia de marketing orgánico y posicionamiento SEO para diversos clientes de la agencia PIXELWOLF.es, abarcando diseño web y optimización.",
        },
      ],
      education: [
        {
          degree: "Grado en Tecnologías Multimedia y Diseño Digital",
          institution: "CITM — Centre de la Imatge i la Tecnologia Multimèdia, UPC",
          period: "2023 — Actualidad",
          isCurrent: true,
          description:
            "Especialización en diseño digital, producción multimedia, Adobe Illustrator, diseño de logos y tecnologías interactivas en la UPC.",
        },
        {
          degree: "Bachillerato Tecnológico",
          institution: "IES Terrassa",
          period: "2021 — 2023",
          description:
            "Educación secundaria orientada al ámbito tecnológico con sólida base científica y en ingeniería.",
        },
      ],
      award: {
        title: "Proyecto CAN SAT — Primer Premio",
        level: "Premio Nacional de Cataluña y España",
        period: "Edición 2021 – 2022",
        description:
          "Primer premio en las fases autonómica de Cataluña y estatal de España del concurso satelital CAN SAT, programa de la Agencia Espacial Europea.",
      },
      tools: [
        {
          tool: "Figma",
          desc: "Sistemas de diseño, interfaces de usuario y prototipado interactivo",
        },
        {
          tool: "Adobe After Effects",
          desc: "Motion graphics, efectos visuales y animación tipográfica cinética",
        },
        {
          tool: "Frontend",
          desc: "React, JavaScript, HTML y CSS — Interfaces interactivas por componentes",
        },
        {
          tool: "Adobe Illustrator",
          desc: "Identidades vectoriales, sistemas iconográficos y arte final",
        },
        {
          tool: "Adobe Photoshop",
          desc: "Tratamiento fotográfico digital, dirección de arte y texturas",
        },
        {
          tool: "DaVinci Resolve",
          desc: "Etalonaje y corrección de color cinematográfico profesional",
        },
        {
          tool: "Cinema 4D y Blender",
          desc: "Motion graphics 3D, renders de producto y entornos espaciales",
        },
        {
          tool: "Framer / Webflow",
          desc: "Desarrollo interactivo sin código y microanimaciones web",
        },
      ],
    },
    contact: {
      headline: ["HABLEMOS DE", "TU PROYECTO."],
      successBadge: "Mensaje Enviado",
      successTitle: "¡Muchas gracias!",
      successMessage:
        "Tu mensaje ha sido recibido correctamente. Ingrid te responderá muy pronto.",
      nameLabel: "Nombre",
      firstNamePlaceholder: "Nombre",
      lastNamePlaceholder: "Apellidos",
      serviceLabel: "Servicio",
      servicePlaceholder: "Selecciona un servicio...",
      services: {
        uxUi: "UX / UI y Diseño de Producto",
        graphicDesign: "Diseño Gráfico e Identidad",
        videoMotion: "Producción de Vídeo y Motion",
        seo: "Marketing Digital y SEO",
        other: "Otro / Colaboración",
      },
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu.email@ejemplo.com",
      descriptionLabel: "Descripción del proyecto",
      descriptionPlaceholder:
        "Cuéntame los detalles del proyecto, plazos y objetivos...",
      submitButton: "Enviar",
    },
    footer: {
      headline: ["THANKS FOR", "SCROLLING", "THIS FAR."],
      navHome: "Inicio",
      navProjects: "Proyectos",
      navAbout: "Sobre mí",
      navContact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
    projectsPage: {
      eyebrow: "Proyectos y Casos de Estudio",
      title: "Proyectos",
      tabAll: "Todas las Obras",
      tabUxUi: "UX / UI",
      tabGraphicDesign: "Diseño Gráfico",
      tabVideo: "Vídeo y Fotografía",
      badgeOverview: "Resumen",
      badgeUxUi: "Prototipos Móviles",
      badgeGraphicDesign: "Editorial y Carteles",
      badgeVideo: "Cortos y Arte",
      descriptionAll:
        "Explora una cuidada selección de trabajos en diseño de producto móvil, diseño editorial, identidad de marca, cortometrajes y fotografía de autor.",
      descriptionUxUi:
        "Prototipado de aplicaciones móviles, investigación de usuarios, wireframes, card sorting y sistemas interactivos en Figma.",
      descriptionGraphicDesign:
        "Identidades corporativas, maquetación editorial de libros y revistas, y cartelería tipográfica con enfoque narrativo visual.",
      descriptionVideo:
        "Cortometrajes narrativos cinematográficos, edición rítmica de vídeo, etalonaje en DaVinci Resolve y fotografía artística introspectiva.",
      videoSubsection: "Vídeo",
      photographySubsection: "Fotografía",
      backToAll: "Volver a Todos los Proyectos",
    },
    caseStudyUI: {
      backToAll: "Todos los Proyectos",
      watchYouTube: "Ver en YouTube",
      viewLive: "Ver proyecto en directo",
      openFigma: "Abrir Prototipo en Figma",
      downloadDoc: "Descargar Documento de Práctica",
      metaCategory: "Categoría",
      metaClient: "Cliente",
      metaYear: "Año",
      metaTimeframe: "Período",
      metaProductionTime: "Tiempo de Producción",
      catUxUi: "UX / UI (Móvil)",
      catGraphicDesign: "Diseño Gráfico",
      catVideo: "Vídeo y Fotografía",
      eyebrow01: "Definiendo el Desafío",
      eyebrow02: "Investigación",
      eyebrow03: "Concepto y Proceso",
      eyebrow06: "Conclusiones",
      challengeTitle: "Desafío",
      problemStatement: "Planteamiento del Problema",
      goal: "Objetivo",
      myRole: "Mi Rol",
      researchTitle: "Investigación e Insights",
      keyInsights: "Hallazgos Clave",
      conceptTitle: "Concepto",
      processTitle: "Proceso",
      keyUpdates: "Cambios Clave",
      conclusionsTitle: "Conclusiones",
      resultsTitle: "Resultados",
      learningsTitle: "Aprendizajes",
      deliverablesEyebrowDefault: "Entregables y Recursos",
      deliverablesTitleDefault: "Explora el Proyecto Completo",
      deliverablesDescriptionDefault:
        "Accede al archivo interactivo de trabajo en Figma o descarga el documento PDF de la memoria académica.",
      otherProjectsTitle: "Otros Proyectos",
      browseByDiscipline: "Explorar por Disciplina",
      projectOverviewTitle: "Visión General y Contexto",
      keyDetailsNotes: "Detalles Clave y Notas de Diseño",
    },
    magazine: {
      spread: "Doble página",
      single: "Individual",
      returnStart: "Volver al inicio",
      fullscreen: "Pantalla completa",
      exitFullscreen: "Salir de pantalla completa",
      prevPage: "Página anterior",
      nextPage: "Página siguiente",
      endOfIssue: "Fin de la revista",
      backCover: "Contraportada",
    },
  },

  CAT: {
    nav: {
      home: "Inici",
      projects: "Projectes",
      about: "Sobre mi",
      contact: "Contacte",
    },
    home: {
      tagline:
        "Creant narratives visuals immersives en disseny i moviment. Des d'identitats de marca fins a experiències digitals interactives.",
      viewProjects: "Veure Projectes",
      getInTouch: "Contactar",
      rolePill:
        "Dissenyadora Multimèdia · UX/UI · Vídeo i Fotografia · Disseny Gràfic",
      projectsHeading: "Projectes",
      viewAll: "Veure tots",
      disciplinesHeading: "Disciplines",
      browseWorks: "Explorar obres",
      experienceHeading: "Experiència",
      fullBio: "Bio completa",
      disciplines: [
        {
          slug: "ux-ui",
          label: "UX / UI",
          emoji: "◈",
          description:
            "Prototipatge d'apps mòbils, recerca d'usuaris, wireframing i sistemes interactius desenvolupats a Figma.",
          color: "#7C3AED",
        },
        {
          slug: "graphic-design",
          label: "Disseny Gràfic",
          emoji: "✦",
          description:
            "Identitats corporatives, maquetació editorial i sèries de cartells amb tipografia de gran impacte visual.",
          color: "#D946EF",
        },
        {
          slug: "video",
          label: "Vídeo i Fotografia",
          emoji: "▶",
          description:
            "Curtmetratges narratius, edició dinàmica de vídeo, etalonatge cinematogràfic i fotografia artística d'autor.",
          color: "#BE123C",
        },
      ],
      experience: [
        {
          role: "Màrqueting i Gestió de Xarxes Socials",
          company: "Artemisa Beauty",
          location: "Barcelona",
          period: "Nov 2025 — Abr 2026",
          duration: "6 mesos",
          current: true,
        },
        {
          role: "Disseny Web i Gestió d'E-commerce",
          company: "WeHippie.shop",
          location: "Terrassa (Remot)",
          period: "Maig 2024 — Oct 2024",
          duration: "6 mesos",
          current: false,
        },
        {
          role: "Màrqueting SEO",
          company: "PIXELWOLF",
          location: "Terrassa (Remot)",
          period: "Juny 2023 — Des 2024",
          duration: "1 any 7 m",
          current: false,
        },
      ],
    },
    about: {
      heroTitle: "SOBRE MI",
      heroSubtitle:
        "Creant narratives visuals mitjançant prototipatge UX/UI mòbil, identitat corporativa, maquetació editorial, curtmetratges i fotografia.",
      experienceHeading: "Experiència Professional",
      educationHeading: "Estudis i Formació",
      toolsHeading: "Eines Creatives",
      experiences: [
        {
          role: "Màrqueting i Gestió de Xarxes Socials",
          company: "Artemisa Beauty — Barcelona",
          location: "Barcelona",
          period: "Nov 2025 — Abr 2026",
          duration: "6 mesos",
          current: true,
          description:
            "Estratègia de màrqueting orgànic i creació de continguts per a Artemisa Beauty, a més de la gestió integral del compte @shucostmetics.iberia.",
        },
        {
          role: "Disseny Web i Gestió d'E-commerce",
          company: "WeHippie.shop — Terrassa (Remot)",
          location: "Terrassa (Remot)",
          period: "Maig 2024 — Oct 2024",
          duration: "6 mesos",
          current: false,
          description:
            "Gestió i edició web, creació de continguts a Instagram per a @wehippie.shop, atenció al client i comandes per a aquesta botiga independent.",
        },
        {
          role: "Màrqueting SEO",
          company: "PIXELWOLF — Terrassa (Remot)",
          location: "Terrassa (Remot)",
          period: "Juny 2023 — Des 2024",
          duration: "1 any 7 m",
          current: false,
          description:
            "Estratègia de màrqueting orgànic i posicionament SEO per a diversos clients a l'agència PIXELWOLF.es, cobrint disseny web i optimització.",
        },
      ],
      education: [
        {
          degree: "Grau en Tecnologies Multimèdia i Disseny Digital",
          institution: "CITM — Centre de la Imatge i la Tecnologia Multimèdia, UPC",
          period: "2023 — Actualitat",
          isCurrent: true,
          description:
            "Especialització en disseny digital, producció multimèdia, Adobe Illustrator, disseny de logotips i tecnologies interactives a la UPC.",
        },
        {
          degree: "Batxillerat Tecnològic",
          institution: "IES Terrassa",
          period: "2021 — 2023",
          description:
            "Educació secundària orientada a l'àmbit tecnològic amb una base sòlida en disciplines científiques i d'enginyeria.",
        },
      ],
      award: {
        title: "Projecte CAN SAT — Primer Premi",
        level: "Premi Nacional de Catalunya i Espanya",
        period: "Edició 2021 – 2022",
        description:
          "Guanyadora del primer lloc a les fases autonòmica de Catalunya i estatal d'Espanya del concurs de satèl·lits CAN SAT de l'Agència Espacial Europea.",
      },
      tools: [
        {
          tool: "Figma",
          desc: "Sistemes de disseny, interfícies d'usuari i prototipatge interactiu",
        },
        {
          tool: "Adobe After Effects",
          desc: "Motion graphics, efectes visuals i animació tipogràfica cinètica",
        },
        {
          tool: "Frontend",
          desc: "React, JavaScript, HTML i CSS — Interfícies interactives per components",
        },
        {
          tool: "Adobe Illustrator",
          desc: "Identitats vectorials, sistemes d'icones i maquetació per a impremta",
        },
        {
          tool: "Adobe Photoshop",
          desc: "Tractament digital d'imatges, direcció d'art i creació de textures",
        },
        {
          tool: "DaVinci Resolve",
          desc: "Etalonatge i correcció de color cinematogràfic d'alt nivell",
        },
        {
          tool: "Cinema 4D i Blender",
          desc: "Motion graphics 3D, renders de producte i composició espacial",
        },
        {
          tool: "Framer / Webflow",
          desc: "Desenvolupament web sense codi i microanimacions interactives",
        },
      ],
    },
    contact: {
      headline: ["PARLEM DEL", "TEU PROJECTE."],
      successBadge: "Missatge Enviat",
      successTitle: "Moltes gràcies!",
      successMessage:
        "El teu missatge s'ha rebut correctament. L'Ingrid et respondrà ben aviat.",
      nameLabel: "Nom",
      firstNamePlaceholder: "Nom",
      lastNamePlaceholder: "Cognoms",
      serviceLabel: "Servei",
      servicePlaceholder: "Selecciona un servei...",
      services: {
        uxUi: "UX / UI i Disseny de Producte",
        graphicDesign: "Disseny Gràfic i Identitat",
        videoMotion: "Producció de Vídeo i Motion",
        seo: "Màrqueting Digital i SEO",
        other: "Altre / Col·laboració",
      },
      emailLabel: "Correu electrònic",
      emailPlaceholder: "el.teu.email@exemple.cat",
      descriptionLabel: "Descripció del projecte",
      descriptionPlaceholder:
        "Explica'm els detalls del projecte, terminis i objectius...",
      submitButton: "Enviar",
    },
    footer: {
      headline: ["THANKS FOR", "SCROLLING", "THIS FAR."],
      navHome: "Inici",
      navProjects: "Projectes",
      navAbout: "Sobre mi",
      navContact: "Contacte",
      rights: "Tots els drets reservats.",
    },
    projectsPage: {
      eyebrow: "Projectes i Casos d'Estudi",
      title: "Projectes",
      tabAll: "Totes les Obres",
      tabUxUi: "UX / UI",
      tabGraphicDesign: "Disseny Gràfic",
      tabVideo: "Vídeo i Fotografia",
      badgeOverview: "Resum",
      badgeUxUi: "Prototips Mòbils",
      badgeGraphicDesign: "Editorial i Cartells",
      badgeVideo: "Curts i Art",
      descriptionAll:
        "Explora un recull seleccionat d'obres en disseny de producte mòbil, disseny editorial, identitat corporativa, curtmetratges i fotografia d'autor.",
      descriptionUxUi:
        "Prototipatge d'aplicacions mòbils, recerca d'usuaris, wireframing, card sorting i sistemes de disseny interactius fets a Figma.",
      descriptionGraphicDesign:
        "Identitats corporatives, maquetació editorial de llibres i revistes, i cartells tipogràfics amb un marcat enfocament visual narratiu.",
      descriptionVideo:
        "Curtmetratges narratius cinematogràfics, edició rítmica de vídeo, etalonatge a DaVinci Resolve i fotografia artística introspectiva.",
      videoSubsection: "Vídeo",
      photographySubsection: "Fotografia",
      backToAll: "Tornar a Tots els Projectes",
    },
    caseStudyUI: {
      backToAll: "Tots els Projectes",
      watchYouTube: "Mirar a YouTube",
      viewLive: "Veure projecte en directe",
      openFigma: "Obrir Prototip a Figma",
      downloadDoc: "Descarregar Document de Pràctica",
      metaCategory: "Categoria",
      metaClient: "Client",
      metaYear: "Any",
      metaTimeframe: "Període",
      metaProductionTime: "Temps de Producció",
      catUxUi: "UX / UI (Mòbil)",
      catGraphicDesign: "Disseny Gràfic",
      catVideo: "Vídeo i Fotografia",
      eyebrow01: "Definint el Desafiament",
      eyebrow02: "Recerca",
      eyebrow03: "Concepte i Procés",
      eyebrow06: "Conclusions",
      challengeTitle: "Desafiament",
      problemStatement: "Plantejament del Problema",
      goal: "Objectiu",
      myRole: "El Meu Rol",
      researchTitle: "Recerca i Insights",
      keyInsights: "Troballes Clau",
      conceptTitle: "Concepte",
      processTitle: "Procés",
      keyUpdates: "Canvis Clau",
      conclusionsTitle: "Conclusions",
      resultsTitle: "Resultats",
      learningsTitle: "Aprenentatges",
      deliverablesEyebrowDefault: "Lliurables i Recursos",
      deliverablesTitleDefault: "Explora el Projecte Sencer",
      deliverablesDescriptionDefault:
        "Accedeix al fitxer interactiu de treball a Figma o descarrega el document PDF de la memòria acadèmica.",
      otherProjectsTitle: "Altres Projectes",
      browseByDiscipline: "Explorar per Disciplina",
      projectOverviewTitle: "Visió General i Context",
      keyDetailsNotes: "Detalls Clau i Notes de Disseny",
    },
    magazine: {
      spread: "Doble pàgina",
      single: "Individual",
      returnStart: "Tornar a l'inici",
      fullscreen: "Pantalla completa",
      exitFullscreen: "Sortir de pantalla completa",
      prevPage: "Pàgina anterior",
      nextPage: "Pàgina següent",
      endOfIssue: "Final de la revista",
      backCover: "Contraportada",
    },
  },
};

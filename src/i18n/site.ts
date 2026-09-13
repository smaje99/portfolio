export const defaultLocale = 'es' as const;
export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

type NavItem = {
  label: string;
  href: string;
};

type FocusItem = {
  title: string;
};

type ExperienceLabels = {
  current: string;
  present: string;
};

type AboutSection = {
  title: string;
  eyebrow: string;
  intro: string;
  seoDescription: string;
  principles: {
    label: string;
    text: string;
  }[];
};

type LearningSection = {
  title: string;
  eyebrow: string;
  intro: string;
  practicesTitle: string;
  pillarsTitle: string;
  highlightsTitle: string;
  skillsTitle: string;
  linkedinLabel: string;
};

type ProjectsSection = {
  title: string;
  intro: string;
  ctaLabel: string;
  pageTitle: string;
  pageDescription: string;
};

type ExperienceSection = {
  title: string;
  intro: string;
  ctaLabel: string;
  pageTitle: string;
  pageDescription: string;
};

type HenkoSection = {
  title: string;
  legalName: string;
  logoAlt: string;
  tagline: string;
  ctaLabel: string;
  intro: {
    text: string;
    emphasis?: 'strong' | 'em';
  }[][];
  areasLabel: string;
  areas: string[];
  linkedinLabel: string;
  websiteLabel: string;
};

type BlogSection = {
  title: string;
  intro: string;
  empty: string;
  readLabel: string;
  mediumLabel: string;
};

type NotFoundSection = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  navigationLabel: string;
  spanishNavigationLabel: string;
  englishNavigationLabel: string;
  languageCodes: {
    spanish: string;
    english: string;
  };
  links: {
    home: string;
    projects: string;
    contact: string;
  };
};

export type FooterCopy = {
  navigationLabel: string;
  contactLabel: string;
  resumeLabel: string;
  resumeDescription: string;
  copyright: string;
};

type HomeCopy = {
  title: string;
  description: string;
  seoDescription: string;
  brandName: string;
  homeLinkLabel: string;
  menuLabel: string;
  closeMenuLabel: string;
  hero: {
    name: string;
    nameLines: [string, string];
    role: string;
    specialties: string;
    summary: string;
  };
  heroActions: {
    projects: string;
    resume: string;
    contact: string;
  };
  socials: {
    linkedin: string;
    github: string;
    contact: string;
  };
  contactSection: {
    eyebrow: string;
    title: string;
  };
  navigation: NavItem[];
  languageSwitcherLabel: string;
  languageLabel: string;
  aboutSection: AboutSection;
  learningSection: LearningSection;
  focusSection: {
    title: string;
    items: FocusItem[];
  };
  projectsSection: ProjectsSection;
  experienceSection: ExperienceSection;
  henkoSection: HenkoSection;
  blogSection: BlogSection;
  notFound: NotFoundSection;
  experienceLabels: ExperienceLabels;
  footer: FooterCopy;
};

export const personalLinks = {
  linkedin: 'https://www.linkedin.com/in/smaje/',
  github: 'https://github.com/smaje99',
  email: 'smajefranco@gmail.com',
} as const;

export function getResumePath(locale: Locale) {
  return `/docs/curriculum-vitae-sergio-maje.${locale}.pdf`;
}

const homeCopy: Record<Locale, HomeCopy> = {
  es: {
    title: 'Sergio Andrés Majé Franco | Desarrollador de Software',
    description:
      'Portafolio de Sergio Andrés Majé Franco. Ingeniería de soluciones y sistemas de información: planificación, diseño, desarrollo, implementación y mejora continua.',
    seoDescription:
      'Portfolio de Sergio Andrés Majé Franco: desarrollo de software, datos, procesos y arquitectura para construir sistemas de información claros y mantenibles.',
    brandName: 'Sergio Majé',
    homeLinkLabel: 'Volver al inicio',
    menuLabel: 'Menú',
    closeMenuLabel: 'Cerrar menú',
    hero: {
      name: 'Sergio Andrés Majé Franco',
      nameLines: ['Sergio Andrés', 'Majé Franco'],
      role: 'Ingeniería de soluciones para sistemas de información',
      specialties: 'Procesos · Datos · Desarrollo · Arquitectura · Transformación digital',
      summary:
        'Trabajo en soluciones digitales que conectan procesos, información y decisiones de desarrollo, transformando necesidades reales en soluciones digitales claras, útiles y mantenibles.',
    },
    heroActions: {
      projects: 'Ver proyectos',
      resume: 'Descargar CV',
      contact: 'Hablemos',
    },
    socials: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      contact: 'Correo',
    },
    contactSection: {
      eyebrow: 'Contacto',
      title: 'Si tienes una idea, un sistema por ordenar o un proceso por mejorar, conversemos.',
    },
    navigation: [
      { label: 'Inicio', href: '#top' },
      { label: 'Perfil', href: '/about' },
      { label: 'Enfoque', href: '#focus' },
      { label: 'Henko', href: '#henko' },
      { label: 'Proyectos', href: '/projects' },
      { label: 'Experiencia', href: '/experience' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contacto', href: '#contact' },
    ],
    languageSwitcherLabel: 'Cambiar idioma',
    languageLabel: 'EN',
    aboutSection: {
      title: 'Construcción de soluciones con sentido práctico',
      eyebrow: 'Perfil',
      intro:
        'Soy desarrollador de software y trabajo en la construcción de soluciones digitales donde se conectan procesos, información, desarrollo y arquitectura. Mi experiencia incluye desarrollo backend, extracción y procesamiento de datos, y formación en gestión de procesos de negocio; estas áreas se complementan para construir y mejorar sistemas claros, útiles y mantenibles.',
      seoDescription:
        'Perfil de Sergio Andrés Majé Franco: criterio práctico para conectar procesos, datos, desarrollo y arquitectura en sistemas de información.',
      principles: [
        {
          label: 'Pienso en procesos',
          text: 'Antes de escribir código busco entender el flujo operativo, las restricciones y el problema real.',
        },
        {
          label: 'Construyo con datos',
          text: 'Uso bases de datos, extracción y análisis como soporte para decisiones y sistemas más claros.',
        },
        {
          label: 'Aprendo con dirección',
          text: 'Elijo formación que refuerza decisiones técnicas concretas y mejora la forma de entregar soluciones.',
        },
      ],
    },
    learningSection: {
      title: 'Formación aplicada',
      eyebrow: 'Criterio técnico',
      intro:
        'He orientado mi formación hacia la construcción de mejores sistemas, aprendiendo a comprender procesos, modelarlos con criterio, usar datos para monitorearlos y transformar decisiones técnicas en soluciones claras, útiles y mantenibles.',
      practicesTitle: 'Cómo convierto formación en práctica',
      pillarsTitle: 'Capacidades que sostienen mi trabajo',
      highlightsTitle: 'Hitos de formación y experiencia',
      skillsTitle: 'Habilidades reforzadas',
      linkedinLabel: 'Ver trayectoria formativa en LinkedIn',
    },
    focusSection: {
      title: 'Áreas de enfoque',
      items: [
        { title: 'Desarrollo de software' },
        { title: 'Datos e información' },
        { title: 'Procesos de negocio' },
        { title: 'Sistemas de información' },
      ],
    },
    projectsSection: {
      title: 'Proyectos',
      intro:
        'Una selección breve de sistemas y soluciones donde el foco ha estado en estructura, operación y claridad técnica.',
      ctaLabel: 'Ver todos los proyectos',
      pageTitle: 'Proyectos',
      pageDescription:
        'Selección de proyectos de Sergio Andrés Majé Franco en desarrollo de software, sistemas de información, procesos, datos y organización operativa.',
    },
    experienceSection: {
      title: 'Experiencia',
      intro:
        'Experiencia en desarrollo, soporte técnico y construcción de soluciones orientadas a procesos, datos y operación real.',
      ctaLabel: 'Ver experiencia completa',
      pageTitle: 'Experiencia',
      pageDescription:
        'Experiencia profesional de Sergio Andrés Majé Franco en desarrollo de software, sistemas de información, procesos, datos y soporte técnico.',
    },
    henkoSection: {
      title: 'Henko Consulting',
      legalName: 'Henko Consulting and Technology Services',
      logoAlt: 'Logotipo de Henko Consulting and Technology Services',
      tagline: 'Transformamos complejidad en soluciones.',
      intro: [
        [
          { text: 'Henko Consulting and Technology Services', emphasis: 'strong' },
          {
            text: ' es una consultoría tecnológica enfocada en el diseño, desarrollo e implementación de soluciones informáticas para organizaciones que buscan mejorar sus procesos, sistemas y capacidad de transformación digital.',
          },
        ],
        [
          { text: 'Trabajamos en áreas como ' },
          {
            text: 'arquitectura de soluciones, desarrollo de software, automatización de procesos, BPM, integración de sistemas, gestión de datos y modernización tecnológica',
            emphasis: 'strong',
          },
          {
            text: ', combinando ingeniería, análisis de procesos y buenas prácticas de arquitectura.',
          },
        ],
        [
          { text: 'Desarrollamos ' },
          {
            text: 'soluciones adaptadas a las necesidades reales de cada organización',
            emphasis: 'strong',
          },
          {
            text: ', desde aplicaciones empresariales y plataformas web hasta sistemas de información especializados, automatización y herramientas para la toma de decisiones.',
          },
        ],
        [
          {
            text: 'Tenemos especial interés en sectores como educación, salud, servicios profesionales, gestión documental y administración empresarial, con un enfoque en ',
          },
          {
            text: 'calidad, seguridad, trazabilidad, cumplimiento normativo y sostenibilidad tecnológica',
            emphasis: 'strong',
          },
          { text: '.' },
        ],
        [
          {
            text: 'En Henko creemos que la tecnología debe resolver problemas reales, simplificar la complejidad y generar valor para las organizaciones.',
            emphasis: 'em',
          },
        ],
      ],
      areasLabel: 'Áreas de trabajo',
      areas: [
        'Arquitectura de soluciones',
        'BPM',
        'Desarrollo de software',
        'Automatización',
        'Gestión de datos',
        'Sistemas empresariales',
        'Consultoría tecnológica',
      ],
      ctaLabel: 'Conoce a Henko en LinkedIn',
      linkedinLabel: 'Visitar la página de Henko en LinkedIn',
      websiteLabel: 'Conoce el sitio web de Henko',
    },
    blogSection: {
      title: 'Blog',
      intro:
        'Notas sobre sistemas, procesos, datos y las decisiones que convierten ideas en soluciones útiles.',
      empty: 'Todavía no hay publicaciones disponibles.',
      readLabel: 'Leer artículo',
      mediumLabel: 'Leer en Medium',
    },
    notFound: {
      title: 'Página no encontrada',
      description:
        'La dirección solicitada no existe. Regresa al portfolio de Sergio Majé para continuar.',
      heading: 'Perdiste la ruta.',
      intro:
        'La página que buscas no está disponible, pero el resto del portfolio sigue a tu alcance.',
      navigationLabel: 'Navegación bilingüe · Bilingual navigation',
      spanishNavigationLabel: 'Navegación de recuperación en español',
      englishNavigationLabel: 'Recovery navigation in English',
      languageCodes: {
        spanish: 'ES',
        english: 'EN',
      },
      links: {
        home: 'Volver al inicio',
        projects: 'Explorar proyectos',
        contact: 'Ir a contacto',
      },
    },
    experienceLabels: {
      current: 'Actual',
      present: 'Actualidad',
    },
    footer: {
      navigationLabel: 'Navegación',
      contactLabel: 'Contacto',
      resumeLabel: 'Descargar CV',
      resumeDescription: 'Perfil profesional en PDF',
      copyright: 'Todos los derechos reservados.',
    },
  },
  en: {
    title: 'Sergio Andrés Majé Franco | Software Developer',
    description:
      'Portfolio of Sergio Andrés Majé Franco. Solution engineering and information systems: planning, design, development, implementation, and continuous improvement.',
    seoDescription:
      'Portfolio of Sergio Andrés Majé Franco: software development, data, processes, and architecture for building clear, maintainable information systems.',
    brandName: 'Sergio Majé',
    homeLinkLabel: 'Back to home',
    menuLabel: 'Menu',
    closeMenuLabel: 'Close menu',
    hero: {
      name: 'Sergio Andrés Majé Franco',
      nameLines: ['Sergio Andrés', 'Majé Franco'],
      role: 'Solution engineering for information systems',
      specialties: 'Processes · Data · Development · Architecture · Digital transformation',
      summary:
        'I work on digital solutions that connect processes, information, and development decisions, transforming real needs into clear, useful, maintainable digital solutions.',
    },
    heroActions: {
      projects: 'View projects',
      resume: 'Download resume',
      contact: 'Let’s talk',
    },
    socials: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      contact: 'Email',
    },
    contactSection: {
      eyebrow: 'Contact',
      title:
        "If you have an idea, a system that needs structure, or a process to improve, let's talk.",
    },
    navigation: [
      { label: 'Home', href: '/en/' },
      { label: 'About', href: '/en/about' },
      { label: 'Focus', href: '/en/#focus' },
      { label: 'Henko', href: '/en/#henko' },
      { label: 'Projects', href: '/en/projects' },
      { label: 'Experience', href: '/en/experience' },
      { label: 'Blog', href: '/en/blog' },
      { label: 'Contact', href: '/en/#contact' },
    ],
    languageSwitcherLabel: 'Change language',
    languageLabel: 'ES',
    aboutSection: {
      title: 'Building practical digital solutions',
      eyebrow: 'About',
      intro:
        'I am a software developer working on digital solutions where processes, information, development, and architecture come together. My experience includes backend development, information extraction and processing, and training in business process management; these areas complement one another when building and improving clear, useful, maintainable systems.',
      seoDescription:
        'Profile of Sergio Andrés Majé Franco: practical judgment connecting processes, data, development, and architecture in information systems.',
      principles: [
        {
          label: 'I think in processes',
          text: 'Before writing code, I look for the operational flow, constraints, and the real problem.',
        },
        {
          label: 'I build with data',
          text: 'I use databases, extraction, and analysis to support clearer decisions and systems.',
        },
        {
          label: 'I learn with direction',
          text: 'I choose learning that strengthens concrete technical decisions and improves how I deliver solutions.',
        },
      ],
    },
    learningSection: {
      title: 'Applied learning',
      eyebrow: 'Technical judgment',
      intro:
        'I have shaped my learning toward building better systems, learning to understand processes, model them with judgment, use data to monitor them, and turn technical decisions into clear, useful, maintainable solutions.',
      practicesTitle: 'How I turn learning into practice',
      pillarsTitle: 'Capabilities behind my work',
      highlightsTitle: 'Learning and experience milestones',
      skillsTitle: 'Reinforced skills',
      linkedinLabel: 'View learning path on LinkedIn',
    },
    focusSection: {
      title: 'Focus areas',
      items: [
        { title: 'Software development' },
        { title: 'Data and information' },
        { title: 'Business processes' },
        { title: 'Information systems' },
      ],
    },
    projectsSection: {
      title: 'Projects',
      intro:
        'A short selection of systems and solutions shaped around structure, operations, and technical clarity.',
      ctaLabel: 'View all projects',
      pageTitle: 'Projects',
      pageDescription:
        'Selected projects by Sergio Andrés Majé Franco across software development, information systems, processes, data, and operational organization.',
    },
    experienceSection: {
      title: 'Experience',
      intro:
        'Experience across development, technical support, and solutions shaped by processes, data, and real operational needs.',
      ctaLabel: 'View full experience',
      pageTitle: 'Experience',
      pageDescription:
        'Professional experience of Sergio Andrés Majé Franco across software development, information systems, processes, data, and technical support.',
    },
    henkoSection: {
      title: 'Henko Consulting',
      legalName: 'Henko Consulting and Technology Services',
      logoAlt: 'Henko Consulting and Technology Services logo',
      tagline: 'We turn complexity into solutions.',
      intro: [
        [
          { text: 'Henko Consulting and Technology Services', emphasis: 'strong' },
          {
            text: ' is a technology consultancy focused on the design, development, and implementation of IT solutions for organizations seeking to improve their processes, systems, and digital transformation capacity.',
          },
        ],
        [
          { text: 'We work across areas such as ' },
          {
            text: 'solution architecture, software development, process automation, BPM, systems integration, data management, and technology modernization',
            emphasis: 'strong',
          },
          {
            text: ', combining engineering, process analysis, and sound architectural practices.',
          },
        ],
        [
          { text: 'We develop ' },
          {
            text: 'solutions adapted to each organization’s real needs',
            emphasis: 'strong',
          },
          {
            text: ', from business applications and web platforms to specialized information systems, automation, and decision-support tools.',
          },
        ],
        [
          {
            text: 'We have a particular interest in sectors such as education, healthcare, professional services, document management, and business administration, with a focus on ',
          },
          {
            text: 'quality, security, traceability, regulatory compliance, and technology sustainability',
            emphasis: 'strong',
          },
          { text: '.' },
        ],
        [
          {
            text: 'At Henko, we believe technology should solve real problems, simplify complexity, and create value for organizations.',
            emphasis: 'em',
          },
        ],
      ],
      areasLabel: 'Areas of work',
      areas: [
        'Solution architecture',
        'BPM',
        'Software development',
        'Automation',
        'Data management',
        'Business systems',
        'Technology consulting',
      ],
      ctaLabel: 'Meet Henko on LinkedIn',
      linkedinLabel: 'Visit Henko on LinkedIn',
      websiteLabel: 'Visit Henko’s website',
    },
    blogSection: {
      title: 'Blog',
      intro:
        'Notes on systems, processes, data, and the decisions that turn ideas into useful solutions.',
      empty: 'There are no published posts yet.',
      readLabel: 'Read article',
      mediumLabel: 'Read on Medium',
    },
    notFound: {
      title: 'Page not found',
      description:
        'The requested address does not exist. Return to Sergio Majé’s portfolio to continue.',
      heading: 'You took a wrong turn.',
      intro:
        'The page you are looking for is not available, but the rest of the portfolio is still within reach.',
      navigationLabel: 'Bilingual navigation · Navegación bilingüe',
      spanishNavigationLabel: 'Navegación de recuperación en español',
      englishNavigationLabel: 'Recovery navigation in English',
      languageCodes: {
        spanish: 'ES',
        english: 'EN',
      },
      links: {
        home: 'Return home',
        projects: 'Explore projects',
        contact: 'Go to contact',
      },
    },
    experienceLabels: {
      current: 'Current',
      present: 'Present',
    },
    footer: {
      navigationLabel: 'Navigation',
      contactLabel: 'Contact',
      resumeLabel: 'Download resume',
      resumeDescription: 'Professional profile in PDF',
      copyright: 'All rights reserved.',
    },
  },
};

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

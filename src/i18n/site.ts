import type { CollectionEntry } from 'astro:content';

export const defaultLocale = 'es' as const;
export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

type NavItem = {
  label: string;
  hash: string;
};

type FocusItem = {
  title: string;
};

type ProjectItem = {
  title: string;
  description: string;
};

type ExperienceLabels = {
  current: string;
  present: string;
};

type AboutSection = {
  title: string;
  eyebrow: string;
  intro: string;
  principles: {
    label: string;
    text: string;
  }[];
};

type LearningSection = {
  title: string;
  eyebrow: string;
  intro: string;
  inventoryTitle: string;
  pillarsTitle: string;
  highlightsTitle: string;
  skillsTitle: string;
  linkedinLabel: string;
};

type HomeCopy = {
  title: string;
  description: string;
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
  projectsSection: {
    title: string;
    items: ProjectItem[];
  };
  experienceSection: {
    title: string;
    intro: string;
  };
  experienceLabels: ExperienceLabels;
  logoAlt: string;
};

const homeCopy: Record<Locale, HomeCopy> = {
  es: {
    title: 'Sergio Andrés Majé Franco | Desarrollador de Software',
    description:
      'Portafolio de Sergio Andrés Majé Franco. Ingeniería de soluciones y sistemas de información: planificación, diseño, desarrollo, implementación y mejora continua.',
    hero: {
      name: 'Sergio Andrés Majé Franco',
      nameLines: ['Sergio Andrés', 'Majé Franco'],
      role: 'Ingeniería de soluciones para sistemas de información',
      specialties: 'Procesos · Datos · Desarrollo · Arquitectura · Transformación digital',
      summary:
        'Diseño y desarrollo sistemas de información que conectan procesos, datos y operación, transformando necesidades reales en soluciones digitales claras, mantenibles y útiles.',
    },
    heroActions: {
      projects: 'Ver proyectos',
      resume: 'Descargar CV',
      contact: 'Contactar',
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
      { label: 'Inicio', hash: '#top' },
      { label: 'About', hash: '#about' },
      { label: 'Enfoque', hash: '#focus' },
      { label: 'Proyectos', hash: '#projects' },
      { label: 'Experiencia', hash: '#experience' },
      { label: 'Contacto', hash: '#contact' },
    ],
    languageSwitcherLabel: 'Cambiar idioma',
    languageLabel: 'EN',
    aboutSection: {
      title: 'Ingeniero integral con foco en sistemas útiles',
      eyebrow: 'About me',
      intro:
        'Soy un desarrollador orientado a sistemas de información: me interesa entender procesos, ordenar datos y construir soluciones mantenibles que funcionen en contextos reales. Mi formación combina backend, analítica de datos, gestión ágil, UX/frontend y liderazgo técnico, lo que me permite moverme entre requerimientos, arquitectura, implementación y mejora continua.',
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
          text: 'La formación continua funciona como refuerzo de una ruta profesional, no como una colección de insignias.',
        },
      ],
    },
    learningSection: {
      title: 'Formación aplicada',
      eyebrow: 'Evidencia curada',
      intro:
        'Los certificados no se muestran como archivo público. Los uso como mapa de aprendizaje para explicar qué capacidades sostienen mi trabajo y qué señales vale la pena revisar.',
      inventoryTitle: 'Mapa de aprendizaje',
      pillarsTitle: 'Pilares que construyen la persona profesional',
      highlightsTitle: 'Credenciales destacadas',
      skillsTitle: 'Skills reforzadas',
      linkedinLabel: 'Credenciales completas en LinkedIn',
    },
    focusSection: {
      title: 'Áreas de enfoque',
      items: [
        { title: 'Backend Engineering' },
        { title: 'Data Processing' },
        { title: 'Business Process Management' },
        { title: 'Sistemas de Información' },
      ],
    },
    projectsSection: {
      title: 'Proyectos destacados',
      items: [
        {
          title: 'SIMIGS',
          description:
            'Sistema orientado a centralizar información operativa y apoyar procesos internos con una base técnica mantenible.',
        },
        {
          title: 'ERP Turismo',
          description:
            'Solución ERP enfocada en la organización de operaciones, flujos de trabajo y control de información en el sector turístico.',
        },
        {
          title: 'ERP Agroinsumos',
          description:
            'Plataforma para administrar inventario, procesos comerciales y trazabilidad de datos en distribución de agroinsumos.',
        },
        {
          title: 'Proyecto educativo de estructuras de datos',
          description:
            'Desarrollo académico centrado en lógica, modelado de estructuras y resolución de problemas con enfoque práctico.',
        },
      ],
    },
    experienceSection: {
      title: 'Experiencia',
      intro:
        'Mi experiencia combina desarrollo, soporte técnico y ejecución de soluciones funcionales orientadas a problemas reales y sistemas mantenibles.',
    },
    experienceLabels: {
      current: 'Actual',
      present: 'Actualidad',
    },
    logoAlt: 'Logotipo de Sergio Majé',
  },
  en: {
    title: 'Sergio Andrés Majé Franco | Software Developer',
    description:
      'Portfolio of Sergio Andrés Majé Franco. Solution engineering for information systems: planning, design, development, implementation, and continuous improvement.',
    hero: {
      name: 'Sergio Andrés Majé Franco',
      nameLines: ['Sergio Andrés', 'Majé Franco'],
      role: 'Solution engineering for information systems',
      specialties: 'Processes · Data · Development · Architecture · Digital transformation',
      summary:
        'I design and build information systems that connect processes, data, and operations, turning real needs into digital solutions that are clear, maintainable, and useful.',
    },
    heroActions: {
      projects: 'View projects',
      resume: 'Download resume',
      contact: 'Contact',
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
      { label: 'Home', hash: '#top' },
      { label: 'About', hash: '#about' },
      { label: 'Focus', hash: '#focus' },
      { label: 'Projects', hash: '#projects' },
      { label: 'Experience', hash: '#experience' },
      { label: 'Contact', hash: '#contact' },
    ],
    languageSwitcherLabel: 'Change language',
    languageLabel: 'ES',
    aboutSection: {
      title: 'An integral engineer focused on useful systems',
      eyebrow: 'About me',
      intro:
        'I am a developer oriented toward information systems: I care about understanding processes, structuring data, and building maintainable solutions that work in real contexts. My learning path combines backend, data analytics, agile management, UX/frontend, and technical leadership, which lets me move across requirements, architecture, implementation, and continuous improvement.',
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
          text: 'Continuous learning works as reinforcement for a professional path, not as a badge collection.',
        },
      ],
    },
    learningSection: {
      title: 'Applied learning',
      eyebrow: 'Curated evidence',
      intro:
        'Certificates are not displayed as a public archive. I use them as a learning map to explain which capabilities support my work and which signals are worth reviewing.',
      inventoryTitle: 'Learning map',
      pillarsTitle: 'Pillars behind the professional persona',
      highlightsTitle: 'Selected credentials',
      skillsTitle: 'Reinforced skills',
      linkedinLabel: 'Full credentials on LinkedIn',
    },
    focusSection: {
      title: 'Focus areas',
      items: [
        { title: 'Backend Engineering' },
        { title: 'Data Processing' },
        { title: 'Business Process Management' },
        { title: 'Information Systems' },
      ],
    },
    projectsSection: {
      title: 'Featured projects',
      items: [
        {
          title: 'SIMIGS',
          description:
            'A system designed to centralize operational information and support internal workflows with a maintainable technical base.',
        },
        {
          title: 'Tourism ERP',
          description:
            'An ERP solution focused on organizing operations, workflows, and information control for the tourism sector.',
        },
        {
          title: 'Agro-input ERP',
          description:
            'A platform built to manage inventory, commercial processes, and data traceability in agro-input distribution.',
        },
        {
          title: 'Educational data structures project',
          description:
            'An academic project centered on logic, data structure modeling, and practical problem-solving.',
        },
      ],
    },
    experienceSection: {
      title: 'Experience',
      intro:
        'My experience spans development, technical support, and the execution of practical solutions focused on real operational needs and maintainable systems.',
    },
    experienceLabels: {
      current: 'Current',
      present: 'Present',
    },
    logoAlt: 'Sergio Majé logo',
  },
};

const experienceTranslations: Partial<
  Record<
    Locale,
    Record<
      string,
      {
        position?: string;
        company?: string;
        description?: string;
        typeOfEmployment?: string;
        skills?: string[];
      }
    >
  >
> = {
  en: {
    'software-developer-cidti-2026': {
      position: 'Software Developer',
      company:
        'Centro de Desarrollo Tecnológico para la Transformación Digital y la Industria 4.0 - Cidti 4.0',
      description:
        'I work as a software developer on a medical auditing project, turning requirements gathered in stakeholder meetings into user stories and implementing new features with support from automation and technical assistance. Alongside feature development on the existing codebase, I occasionally handle deployments to the testing server connected through Cloudflare Tunnel and, when needed, drive the gradual migration toward a hexagonal architecture and an Atomic + ITCSS styling approach.',
      typeOfEmployment: 'Service contractor',
      skills: [
        'Python',
        'FastAPI',
        'MongoDB',
        'Redis',
        'Celery',
        'Jinja2',
        'CSS',
        'Cloudflare Tunnel',
        'Requirements management',
      ],
    },
    'university-intern-cidti-2025': {
      position: 'University Intern',
      company:
        'Centro de Desarrollo Tecnológico para la Transformación Digital y la Industria 4.0 - Cidti 4.0',
      description:
        'I worked as a university intern in backend development and data analysis, contributing to digital transformation initiatives through tools for information extraction and processing, improvements to internal platform components, and the integration of technical data into MongoDB-based systems. I also strengthened software security, organization, and quality by applying good practices, refactoring, and careful configuration management, standing out for autonomy, adaptability to scope changes, and the delivery of solutions aligned with the center’s needs.',
      typeOfEmployment: 'Internship contract',
      skills: ['Python', 'FastAPI', 'MongoDB', 'Backend', 'Data analysis'],
    },
    'internship-2015': {
      position: 'Intern',
      company: 'Fotocopiadora del Lector',
      description:
        'As a technical intern, I was responsible for both preventive and corrective maintenance of computer equipment, ensuring stable day-to-day operation. I also acted as a mentor for less experienced interns, helping them grow professionally in a technical environment.',
      typeOfEmployment: 'Internship contract',
      skills: ['Computer equipment maintenance', 'Teamwork', 'Mentoring and guidance'],
    },
  },
};

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function localizeExperiences(entries: CollectionEntry<'experiences'>[], locale: Locale) {
  const localizedEntries = entries.map((entry) => {
    const overrides = experienceTranslations[locale]?.[entry.id];

    return {
      ...entry.data,
      position: overrides?.position ?? entry.data.position,
      company: overrides?.company ?? entry.data.company,
      description: overrides?.description ?? entry.data.description,
      typeOfEmployment: overrides?.typeOfEmployment ?? entry.data.typeOfEmployment,
      skills: overrides?.skills ?? entry.data.skills,
    };
  });

  return localizedEntries.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
}

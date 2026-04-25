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
  latest: string;
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
      { label: 'Enfoque', hash: '#focus' },
      { label: 'Proyectos', hash: '#projects' },
      { label: 'Experiencia', hash: '#experience' },
      { label: 'Contacto', hash: '#contact' },
    ],
    languageSwitcherLabel: 'Cambiar idioma',
    languageLabel: 'EN',
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
      latest: 'Último',
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
      { label: 'Focus', hash: '#focus' },
      { label: 'Projects', hash: '#projects' },
      { label: 'Experience', hash: '#experience' },
      { label: 'Contact', hash: '#contact' },
    ],
    languageSwitcherLabel: 'Change language',
    languageLabel: 'ES',
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
      latest: 'Latest',
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
      }
    >
  >
> = {
  en: {
    'freelance-2022.md': {
      company: 'Independent',
      description:
        'As an independent developer for Medintegral IPS S.A.S, I design and improve a healthcare web platform that lets users submit suggestions and book medical appointments efficiently. My work strengthens Medintegral’s online presence and helps optimize operational workflows. I also keep close communication with the company manager, sharing progress updates and planning new features using Scrum.',
      typeOfEmployment: 'Independent contractor',
    },
    'internship-2015.md': {
      position: 'Intern',
      company: 'Fotocopiadora del Lector',
      description:
        'As a technical intern, I was responsible for both preventive and corrective maintenance of computer equipment, ensuring stable day-to-day operation. I also acted as a mentor for less experienced interns, helping them grow professionally in a technical environment.',
      typeOfEmployment: 'Internship contract',
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
    };
  });

  return localizedEntries.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
}

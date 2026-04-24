import type { CollectionEntry } from 'astro:content';

export const defaultLocale = 'es' as const;
export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

type NavItem = {
  label: string;
  hash: string;
};

type ExperienceLabels = {
  current: string;
  latest: string;
};

type HomeCopy = {
  title: string;
  description: string;
  greeting: string;
  availability: string;
  heroFacts: [string, string, string, string];
  heroActions: {
    talk: string;
    github: string;
  };
  socials: {
    linkedin: string;
    github: string;
    contact: string;
  };
  navigation: NavItem[];
  languageSwitcherLabel: string;
  languageLabel: string;
  experienceSection: {
    title: string;
    intro: string;
  };
  experienceLabels: ExperienceLabels;
  logoAlt: string;
};

const homeCopy: Record<Locale, HomeCopy> = {
  es: {
    title:
      'Portfolio de Sergio Majé - Desarrollador web con experiencia en productos y plataformas',
    description:
      'Portfolio bilingüe de Sergio Majé, desarrollador web en Colombia. Diseño, desarrollo y optimización de aplicaciones web con enfoque en producto y rendimiento.',
    greeting: 'Hey, soy Sergio Majé',
    availability: 'Disponible para trabajar',
    heroFacts: [
      '+1 año de experiencia.',
      'Desarrollador web.',
      'Desde Colombia.',
      'Simplificando e innovando tus soluciones.',
    ],
    heroActions: {
      talk: 'Hablemos',
      github: 'Ver GitHub',
    },
    socials: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      contact: 'Contáctame',
    },
    navigation: [
      { label: 'Inicio', hash: '#top' },
      { label: 'Experiencia', hash: '#experience' },
      { label: 'Contacto', hash: '#contact' },
    ],
    languageSwitcherLabel: 'Cambiar idioma',
    languageLabel: 'EN',
    experienceSection: {
      title: 'Experiencia',
      intro:
        'He trabajado en producto, desarrollo web y soporte técnico, siempre orientado a resolver problemas reales con herramientas mantenibles.',
    },
    experienceLabels: {
      current: 'Actual',
      latest: 'Último',
    },
    logoAlt: 'Logotipo de Sergio Majé',
  },
  en: {
    title: 'Sergio Majé Portfolio - Web developer building performant product experiences',
    description:
      'Bilingual portfolio of Sergio Majé, a web developer based in Colombia. I design, build, and improve web applications with a product and performance mindset.',
    greeting: "Hey, I'm Sergio Majé",
    availability: 'Available for work',
    heroFacts: [
      '1+ year of experience.',
      'Web developer.',
      'Based in Colombia.',
      'Simplifying and improving your digital solutions.',
    ],
    heroActions: {
      talk: "Let's talk",
      github: 'View GitHub',
    },
    socials: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      contact: 'Contact me',
    },
    navigation: [
      { label: 'Home', hash: '#top' },
      { label: 'Experience', hash: '#experience' },
      { label: 'Contact', hash: '#contact' },
    ],
    languageSwitcherLabel: 'Change language',
    languageLabel: 'ES',
    experienceSection: {
      title: 'Experience',
      intro:
        'My work spans product-minded web development and technical support, always focused on solving real problems with maintainable systems.',
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

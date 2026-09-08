import type { Locale } from '@/i18n/site';

export type PortfolioTier = 'featured' | 'secondary';
export type MvpStatus = 'included';
export type ProjectType = 'information-system' | 'erp-platform' | 'educational-project';
export type StrategicPriority = 'high' | 'medium';
export type ProjectStatus =
  | 'analysis'
  | 'prototype'
  | 'in-development'
  | 'mvp'
  | 'operational'
  | 'architectural-documentation';
export type ProjectVisibility = 'private' | 'public';

type LocalizedProjectContent = {
  title: string;
  description: string;
  focus: string;
  tags: string[];
};

type LocalizedProjectRecord = Record<Locale, LocalizedProjectContent>;

export type PortfolioProject = {
  slug: string;
  portfolioTier: PortfolioTier;
  mvpStatus: MvpStatus;
  projectType: ProjectType;
  strategicPriority: StrategicPriority;
  projectStatus: ProjectStatus;
  visibility: ProjectVisibility;
  repository: string | null;
  demo: string | null;
  demonstrates: string[];
  rationale: string;
  narrativeStatus: string | null;
  content: LocalizedProjectRecord;
};

export type ProjectCardProject = {
  slug: string;
  title: string;
  description: string;
  focus: string;
  tags: string[];
  featured: boolean;
  projectStatus: ProjectStatus;
  statusLabel: string;
  visibility: ProjectVisibility;
  visibilityLabel: string;
  repository: string | null;
  demo: string | null;
};

const projectStatusLabels: Record<Locale, Record<ProjectStatus, string>> = {
  es: {
    analysis: 'En análisis',
    prototype: 'Prototipo',
    'in-development': 'En desarrollo',
    mvp: 'MVP en piloto',
    operational: 'Operativo',
    'architectural-documentation': 'Documentación arquitectónica',
  },
  en: {
    analysis: 'Concept validation',
    prototype: 'Prototype',
    'in-development': 'In development',
    mvp: 'Pilot MVP',
    operational: 'Operational solution',
    'architectural-documentation': 'Architecture blueprint',
  },
};

const projectVisibilityLabels: Record<Locale, Record<ProjectVisibility, string>> = {
  es: {
    private: 'Proyecto privado',
    public: 'Proyecto público',
  },
  en: {
    private: 'Private project',
    public: 'Public project',
  },
};

const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'estructuras-de-datos',
    portfolioTier: 'secondary',
    mvpStatus: 'included',
    projectType: 'educational-project',
    strategicPriority: 'medium',
    projectStatus: 'prototype',
    visibility: 'public',
    repository: null,
    demo: null,
    demonstrates: [
      'Fundamentos de programación',
      'Modelado lógico',
      'Resolución de problemas',
      'Base académica aplicada',
    ],
    rationale:
      'Se conserva como evidencia secundaria de fundamentos técnicos, sin competir con los sistemas principales del MVP.',
    narrativeStatus:
      'Proyecto académico aplicado como evidencia secundaria de fundamentos técnicos.',
    content: {
      es: {
        title: 'Proyecto educativo de estructuras de datos',
        description:
          'Desarrollo académico centrado en lógica, modelado de estructuras y resolución de problemas con enfoque práctico.',
        focus: 'Fundamentos, modelado y resolución de problemas',
        tags: ['Academia', 'Estructuras de datos', 'Lógica'],
      },
      en: {
        title: 'Educational data structures project',
        description:
          'An academic project centered on logic, data structure modeling, and practical problem-solving.',
        focus: 'Foundations, modeling, and problem solving',
        tags: ['Academia', 'Data structures', 'Logic'],
      },
    },
  },
  {
    slug: 'trazalita',
    portfolioTier: 'featured',
    mvpStatus: 'included',
    projectType: 'information-system',
    strategicPriority: 'high',
    projectStatus: 'in-development',
    visibility: 'private',
    repository: null,
    demo: null,
    demonstrates: [
      'Transparencia pública',
      'Cumplimiento',
      'Gestión documental',
      'Trazabilidad',
      'Arquitectura de sistemas',
    ],
    rationale:
      'Muestra la construcción de un sistema de información para organizar transparencia, cumplimiento y trazabilidad sin exponer contexto institucional sensible.',
    narrativeStatus:
      'Sistema en desarrollo para transparencia pública, gestión documental y trazabilidad.',
    content: {
      es: {
        title: 'TrazalITA',
        description:
          'Sistema en desarrollo con Astro y PayloadCMS para apoyar transparencia pública, cumplimiento, gestión documental y trazabilidad sobre una base PostgreSQL.',
        focus: 'Transparencia, cumplimiento y gestión documental',
        tags: ['Astro', 'PayloadCMS', 'TypeScript', 'PostgreSQL', 'Trazabilidad'],
      },
      en: {
        title: 'TrazalITA',
        description:
          'A system in development with Astro and PayloadCMS for public transparency, compliance, document management, and traceability on a PostgreSQL foundation.',
        focus: 'Transparency, compliance, and document management',
        tags: ['Astro', 'PayloadCMS', 'TypeScript', 'PostgreSQL', 'Traceability'],
      },
    },
  },
  {
    slug: 'epicrisisia',
    portfolioTier: 'featured',
    mvpStatus: 'included',
    projectType: 'information-system',
    strategicPriority: 'high',
    projectStatus: 'in-development',
    visibility: 'private',
    repository: null,
    demo: null,
    demonstrates: [
      'Procesamiento documental',
      'Estructuración de información',
      'Interoperabilidad',
      'Validación',
    ],
    rationale:
      'Representa trabajo en construcción sobre procesamiento documental y estructuración de información, manteniendo fuera datos clínicos, documentos reales y reglas propietarias.',
    narrativeStatus:
      'Sistema en desarrollo para procesamiento y estructuración de documentos clínicos.',
    content: {
      es: {
        title: 'EpicrisisIA',
        description:
          'Sistema en desarrollo para procesar y estructurar información de documentos clínicos, con foco en interoperabilidad y validación.',
        focus: 'Documentos clínicos, interoperabilidad y validación',
        tags: ['Python', 'FastAPI', 'MongoDB', 'Procesamiento documental'],
      },
      en: {
        title: 'EpicrisisIA',
        description:
          'A system in development for processing and structuring information from clinical documents, with a focus on interoperability and validation.',
        focus: 'Clinical documents, interoperability, and validation',
        tags: ['Python', 'FastAPI', 'MongoDB', 'Document processing'],
      },
    },
  },
];

function toProjectCardProject(project: PortfolioProject, locale: Locale): ProjectCardProject {
  const localized = project.content[locale];

  return {
    slug: project.slug,
    title: localized.title,
    description: localized.description,
    focus: localized.focus,
    tags: localized.tags,
    featured: project.portfolioTier === 'featured',
    projectStatus: project.projectStatus,
    statusLabel: projectStatusLabels[locale][project.projectStatus],
    visibility: project.visibility,
    visibilityLabel: projectVisibilityLabels[locale][project.visibility],
    repository: project.repository,
    demo: project.demo,
  };
}

export function getPortfolioProjects() {
  return portfolioProjects;
}

export function getProjects(locale: Locale) {
  return portfolioProjects.map((project) => toProjectCardProject(project, locale));
}

export function getFeaturedProjects(locale: Locale, limit = 2) {
  return portfolioProjects
    .filter((project) => project.portfolioTier === 'featured')
    .slice(0, limit)
    .map((project) => toProjectCardProject(project, locale));
}

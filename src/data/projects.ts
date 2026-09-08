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
    slug: 'simigs',
    portfolioTier: 'featured',
    mvpStatus: 'included',
    projectType: 'information-system',
    strategicPriority: 'high',
    projectStatus: 'operational',
    visibility: 'public',
    repository: null,
    demo: null,
    demonstrates: [
      'Sistemas de información',
      'Operación interna',
      'Backend mantenible',
      'Centralización de datos',
    ],
    rationale:
      'Permite mostrar diseño y soporte de sistemas orientados a operación real sin depender de narrativa académica.',
    narrativeStatus: 'Sistema implementado para centralización operativa e información interna.',
    content: {
      es: {
        title: 'SIMIGS',
        description:
          'Sistema orientado a centralizar información operativa y apoyar procesos internos con una base técnica mantenible.',
        focus: 'Sistemas de información y operación interna',
        tags: ['Backend', 'Procesos', 'Información operativa'],
      },
      en: {
        title: 'SIMIGS',
        description:
          'A system designed to centralize operational information and support internal workflows with a maintainable technical base.',
        focus: 'Information systems and internal operations',
        tags: ['Backend', 'Processes', 'Operational information'],
      },
    },
  },
  {
    slug: 'erp-turismo',
    portfolioTier: 'featured',
    mvpStatus: 'included',
    projectType: 'erp-platform',
    strategicPriority: 'high',
    projectStatus: 'operational',
    visibility: 'public',
    repository: null,
    demo: null,
    demonstrates: [
      'Organización operativa',
      'Trazabilidad de procesos',
      'Modelado de flujos de trabajo',
      'Control de información',
    ],
    rationale:
      'Aporta una línea clara de soluciones empresariales y refuerza el posicionamiento consultivo orientado a procesos.',
    narrativeStatus: 'Solución ERP implementada para organización operativa y control sectorial.',
    content: {
      es: {
        title: 'ERP Turismo',
        description:
          'Solución ERP enfocada en la organización de operaciones, flujos de trabajo y control de información en el sector turístico.',
        focus: 'Operación, control y trazabilidad',
        tags: ['ERP', 'Procesos', 'Turismo'],
      },
      en: {
        title: 'Tourism ERP',
        description:
          'An ERP solution focused on organizing operations, workflows, and information control for the tourism sector.',
        focus: 'Operations, control, and traceability',
        tags: ['ERP', 'Processes', 'Tourism'],
      },
    },
  },
  {
    slug: 'erp-agroinsumos',
    portfolioTier: 'featured',
    mvpStatus: 'included',
    projectType: 'erp-platform',
    strategicPriority: 'high',
    projectStatus: 'operational',
    visibility: 'public',
    repository: null,
    demo: null,
    demonstrates: [
      'Inventario',
      'Procesos comerciales',
      'Trazabilidad de datos',
      'Operación sectorial',
    ],
    rationale:
      'Refuerza capacidad para construir soluciones transversales a negocio, inventario y operación con foco en datos.',
    narrativeStatus:
      'Plataforma ERP implementada para inventario, procesos comerciales y trazabilidad.',
    content: {
      es: {
        title: 'ERP Agroinsumos',
        description:
          'Plataforma para administrar inventario, procesos comerciales y trazabilidad de datos en distribución de agroinsumos.',
        focus: 'Inventario, procesos comerciales y datos',
        tags: ['ERP', 'Inventario', 'Trazabilidad'],
      },
      en: {
        title: 'Agro-input ERP',
        description:
          'A platform built to manage inventory, commercial processes, and data traceability in agro-input distribution.',
        focus: 'Inventory, commercial processes, and data',
        tags: ['ERP', 'Inventory', 'Traceability'],
      },
    },
  },
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
          'Sistema en desarrollo para apoyar transparencia pública, cumplimiento, gestión documental y trazabilidad mediante una arquitectura de información clara.',
        focus: 'Transparencia, cumplimiento y gestión documental',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Trazabilidad'],
      },
      en: {
        title: 'TrazalITA',
        description:
          'A system in development for public transparency, compliance, document management, and traceability through a clear information architecture.',
        focus: 'Transparency, compliance, and document management',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Traceability'],
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

export function getFeaturedProjects(locale: Locale, limit = 6) {
  return portfolioProjects
    .filter((project) => project.portfolioTier === 'featured')
    .slice(0, limit)
    .map((project) => toProjectCardProject(project, locale));
}

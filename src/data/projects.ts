import type { Locale } from '@/i18n/site';

export type PortfolioTier = 'featured' | 'secondary';
export type MvpStatus = 'included';
export type ProjectType = 'information-system' | 'erp-platform' | 'educational-project';
export type StrategicPriority = 'high' | 'medium';

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
};

const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'simigs',
    portfolioTier: 'featured',
    mvpStatus: 'included',
    projectType: 'information-system',
    strategicPriority: 'high',
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
  };
}

export function getPortfolioProjects() {
  return portfolioProjects;
}

export function getProjects(locale: Locale) {
  return portfolioProjects.map((project) => toProjectCardProject(project, locale));
}

export function getFeaturedProjects(locale: Locale, limit = 3) {
  return portfolioProjects
    .filter((project) => project.portfolioTier === 'featured')
    .slice(0, limit)
    .map((project) => toProjectCardProject(project, locale));
}

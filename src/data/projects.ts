import type { CollectionEntry } from 'astro:content';

import { getEditorialCatalog, isDraftPreview } from '@/data/editorial';
import type { Locale } from '@/i18n/site';

type ProjectEntry = CollectionEntry<'projects'>;

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
export type ProjectPageVisibility = 'public';
export type RepositoryAvailability = 'none' | 'private' | 'public';

export type ProjectRepository = {
  label: string;
  url: string;
};

export type PortfolioProject = {
  slug: string;
  order: number;
  portfolioTier: PortfolioTier;
  mvpStatus: MvpStatus;
  projectType: ProjectType;
  strategicPriority: StrategicPriority;
  projectStatus: ProjectStatus;
  pageVisibility: ProjectPageVisibility;
  repositoryAvailability: RepositoryAvailability;
  repositories: ProjectRepository[];
  demo: string | null;
  demonstrates: string[];
  rationale: string;
  narrativeStatus: string | null;
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
  repositoryAvailability: RepositoryAvailability;
  repositoryAvailabilityLabel: string;
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

export function getProjectStatusLabel(locale: Locale, status: ProjectStatus) {
  return projectStatusLabels[locale][status];
}

const repositoryAvailabilityLabels: Record<Locale, Record<RepositoryAvailability, string>> = {
  es: {
    none: 'Sin repositorio público',
    private: 'Repositorio privado',
    public: 'Repositorios públicos',
  },
  en: {
    none: 'No public repository',
    private: 'Private repository',
    public: 'Public repositories',
  },
};

const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'estructuras-de-datos',
    order: 1,
    portfolioTier: 'secondary',
    mvpStatus: 'included',
    projectType: 'educational-project',
    strategicPriority: 'medium',
    projectStatus: 'prototype',
    pageVisibility: 'public',
    repositoryAvailability: 'public',
    repositories: [
      { label: 'ds-tdd-uniamazonia', url: 'https://github.com/smaje99/ds-tdd-uniamazonia' },
      { label: 'sorting-comparator', url: 'https://github.com/smaje99/sorting-comparator' },
      { label: 'SimuladorTDA', url: 'https://github.com/smaje99/SimuladorTDA' },
      { label: 'Calc2', url: 'https://github.com/smaje99/Calc2' },
    ],
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
  },
  {
    slug: 'trazalita',
    order: 2,
    portfolioTier: 'featured',
    mvpStatus: 'included',
    projectType: 'information-system',
    strategicPriority: 'high',
    projectStatus: 'in-development',
    pageVisibility: 'public',
    repositoryAvailability: 'private',
    repositories: [],
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
  },
  {
    slug: 'epicrisisia',
    order: 3,
    portfolioTier: 'featured',
    mvpStatus: 'included',
    projectType: 'information-system',
    strategicPriority: 'high',
    projectStatus: 'in-development',
    pageVisibility: 'public',
    repositoryAvailability: 'private',
    repositories: [],
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
  },
  {
    slug: 'it-services-contents-unir',
    order: 4,
    portfolioTier: 'secondary',
    mvpStatus: 'included',
    projectType: 'educational-project',
    strategicPriority: 'medium',
    projectStatus: 'operational',
    pageVisibility: 'public',
    repositoryAvailability: 'public',
    repositories: [
      {
        label: 'it-services-contents-unir',
        url: 'https://github.com/smaje99/it-services-contents-unir',
      },
    ],
    demo: 'https://it-services-contents-unir.vercel.app',
    demonstrates: [
      'Arquitectura Astro',
      'Componentes reutilizables',
      'Colecciones de contenido',
      'Despliegue web',
    ],
    rationale:
      'Aporta una evidencia educativa independiente sobre cómo convertir una plantilla usada por un docente en una base web más mantenible y reutilizable.',
    narrativeStatus:
      'Proyecto educativo operativo para organizar contenidos y actividades de cursos.',
  },
];

const projectSlugPattern = /^(?<slug>[a-z0-9]+(?:-[a-z0-9]+)*)\.(?<locale>es|en)$/;

function getEntryIdentity(entry: ProjectEntry) {
  const match = projectSlugPattern.exec(entry.data.slug);

  if (!match?.groups) {
    throw new Error(
      `Invalid projects entry "${entry.id}": slug "${entry.data.slug}" must use <slug>.es or <slug>.en.`,
    );
  }

  const { slug, locale } = match.groups as { slug: string; locale: Locale };

  if (entry.data.locale !== locale) {
    throw new Error(
      `Invalid projects entry "${entry.id}": slug locale ".${locale}" does not match locale "${entry.data.locale}".`,
    );
  }

  if (entry.id !== entry.data.slug) {
    throw new Error(
      `Invalid projects entry "${entry.id}": filename slug must match frontmatter slug "${entry.data.slug}".`,
    );
  }

  return { slug, locale };
}

function validateProjectEntries(entries: ProjectEntry[]) {
  const entriesBySlug = new Map<string, Map<Locale, ProjectEntry>>();

  for (const entry of entries) {
    const { slug, locale } = getEntryIdentity(entry);
    const localizedEntries = entriesBySlug.get(slug) ?? new Map<Locale, ProjectEntry>();

    if (localizedEntries.has(locale)) {
      throw new Error(`Duplicate projects entry for "${slug}.${locale}".`);
    }

    localizedEntries.set(locale, entry);
    entriesBySlug.set(slug, localizedEntries);
  }

  const strategicSlugs = new Set(portfolioProjects.map((project) => project.slug));

  for (const [slug, localizedEntries] of entriesBySlug) {
    if (!strategicSlugs.has(slug)) {
      throw new Error(`CMS project "${slug}" has no strategic TypeScript metadata.`);
    }

    for (const locale of ['es', 'en'] as const) {
      if (!localizedEntries.has(locale)) {
        throw new Error(`CMS project "${slug}" is missing its ${locale.toUpperCase()} entry.`);
      }
    }
  }

  for (const project of portfolioProjects) {
    const localizedEntries = entriesBySlug.get(project.slug);

    if (!localizedEntries) {
      throw new Error(`Strategic project "${project.slug}" has no CMS editorial content.`);
    }

    for (const locale of ['es', 'en'] as const) {
      if (!localizedEntries.has(locale)) {
        throw new Error(
          `Strategic project "${project.slug}" is missing its ${locale.toUpperCase()} CMS entry.`,
        );
      }
    }
  }

  return entriesBySlug;
}

function toProjectCardProject(
  project: PortfolioProject,
  editorial: ProjectEntry['data'],
  locale: Locale,
): ProjectCardProject {
  return {
    slug: project.slug,
    title: editorial.title,
    description: editorial.description,
    focus: editorial.focus,
    tags: editorial.tags,
    featured: project.portfolioTier === 'featured',
    projectStatus: project.projectStatus,
    statusLabel: projectStatusLabels[locale][project.projectStatus],
    repositoryAvailability: project.repositoryAvailability,
    repositoryAvailabilityLabel:
      repositoryAvailabilityLabels[locale][project.repositoryAvailability],
    repository: project.repositories[0]?.url ?? null,
    demo: project.demo,
  };
}

export function getPortfolioProjects() {
  return [...portfolioProjects].sort((left, right) => left.order - right.order);
}

export async function getProjects(locale: Locale) {
  const catalog = await getEditorialCatalog();
  const entriesBySlug = validateProjectEntries(catalog.projects);

  return getPortfolioProjects().flatMap((project) => {
    const editorial = entriesBySlug.get(project.slug)?.get(locale)?.data;

    if (editorial?.status !== 'published') {
      return [];
    }

    return [toProjectCardProject(project, editorial, locale)];
  });
}

export async function getFeaturedProjects(locale: Locale, limit = 2) {
  const projects = await getProjects(locale);

  return projects.filter((project) => project.featured).slice(0, limit);
}

export async function getProject(locale: Locale, slug: string) {
  const catalog = await getEditorialCatalog();
  const entriesBySlug = validateProjectEntries(catalog.projects);
  const project = portfolioProjects.find((candidate) => candidate.slug === slug);
  const editorial = entriesBySlug.get(slug)?.get(locale);

  if (!project || !editorial || editorial.data.status !== 'published') {
    throw new Error(`Published project "${slug}" is not available for locale "${locale}".`);
  }

  return { project, editorial };
}

export async function getProjectDrafts() {
  const catalog = await getEditorialCatalog();

  return catalog.projects.filter(isDraftPreview);
}

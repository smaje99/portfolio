import type { Locale } from '@/i18n/site';

type Project = {
  slug: string;
  title: string;
  description: string;
  focus: string;
  tags: string[];
  featured: boolean;
};

const projectsByLocale: Record<Locale, Project[]> = {
  es: [
    {
      slug: 'simigs',
      title: 'SIMIGS',
      description:
        'Sistema orientado a centralizar información operativa y apoyar procesos internos con una base técnica mantenible.',
      focus: 'Sistemas de información y operación interna',
      tags: ['Backend', 'Procesos', 'Información operativa'],
      featured: true,
    },
    {
      slug: 'erp-turismo',
      title: 'ERP Turismo',
      description:
        'Solución ERP enfocada en la organización de operaciones, flujos de trabajo y control de información en el sector turístico.',
      focus: 'Operación, control y trazabilidad',
      tags: ['ERP', 'Procesos', 'Turismo'],
      featured: true,
    },
    {
      slug: 'erp-agroinsumos',
      title: 'ERP Agroinsumos',
      description:
        'Plataforma para administrar inventario, procesos comerciales y trazabilidad de datos en distribución de agroinsumos.',
      focus: 'Inventario, procesos comerciales y datos',
      tags: ['ERP', 'Inventario', 'Trazabilidad'],
      featured: true,
    },
    {
      slug: 'estructuras-de-datos',
      title: 'Proyecto educativo de estructuras de datos',
      description:
        'Desarrollo académico centrado en lógica, modelado de estructuras y resolución de problemas con enfoque práctico.',
      focus: 'Fundamentos, modelado y resolución de problemas',
      tags: ['Academia', 'Estructuras de datos', 'Lógica'],
      featured: false,
    },
  ],
  en: [
    {
      slug: 'simigs',
      title: 'SIMIGS',
      description:
        'A system designed to centralize operational information and support internal workflows with a maintainable technical base.',
      focus: 'Information systems and internal operations',
      tags: ['Backend', 'Processes', 'Operational information'],
      featured: true,
    },
    {
      slug: 'tourism-erp',
      title: 'Tourism ERP',
      description:
        'An ERP solution focused on organizing operations, workflows, and information control for the tourism sector.',
      focus: 'Operations, control, and traceability',
      tags: ['ERP', 'Processes', 'Tourism'],
      featured: true,
    },
    {
      slug: 'agro-input-erp',
      title: 'Agro-input ERP',
      description:
        'A platform built to manage inventory, commercial processes, and data traceability in agro-input distribution.',
      focus: 'Inventory, commercial processes, and data',
      tags: ['ERP', 'Inventory', 'Traceability'],
      featured: true,
    },
    {
      slug: 'data-structures-project',
      title: 'Educational data structures project',
      description:
        'An academic project centered on logic, data structure modeling, and practical problem-solving.',
      focus: 'Foundations, modeling, and problem solving',
      tags: ['Academia', 'Data structures', 'Logic'],
      featured: false,
    },
  ],
};

export function getProjects(locale: Locale) {
  return projectsByLocale[locale];
}

export function getFeaturedProjects(locale: Locale, limit = 3) {
  return projectsByLocale[locale].filter((project) => project.featured).slice(0, limit);
}

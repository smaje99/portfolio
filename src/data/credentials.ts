export type CredentialLocale = 'es' | 'en';

type CredentialPillar = {
  title: string;
  signal: string;
  evidence: string[];
};

type CredentialHighlight = {
  title: string;
  issuer: string;
  date: string;
  area: string;
};

type CredentialData = {
  inventory: {
    totalEntries: string;
    providers: string;
    strongestSources: string;
    evidencePolicy: string;
  };
  pillars: CredentialPillar[];
  highlights: CredentialHighlight[];
  skills: string[];
};

export const credentialsByLocale: Record<CredentialLocale, CredentialData> = {
  es: {
    inventory: {
      totalEntries: '373 registros documentados',
      providers: '16 fuentes de formación y evidencia laboral',
      strongestSources: 'Platzi, LinkedIn Learning, Udemy, SENA, UNIR y CIDTI 4.0',
      evidencePolicy:
        'El portfolio muestra señales curadas; los documentos completos permanecen fuera del sitio y se comparten bajo solicitud o por LinkedIn.',
    },
    pillars: [
      {
        title: 'Backend & APIs',
        signal: 'Construcción de servicios, modelos de datos y lógica de negocio.',
        evidence: ['Python', 'FastAPI', 'Node.js', 'Java', 'C#', 'Arquitectura backend'],
      },
      {
        title: 'Datos & Analítica',
        signal: 'Uso de datos para extracción, procesamiento, análisis y soporte a decisiones.',
        evidence: [
          'SQL',
          'MongoDB',
          'PostgreSQL',
          'MySQL',
          'Scikit-learn',
          'Analítica empresarial',
        ],
      },
      {
        title: 'Procesos & Agile',
        signal: 'Traducción de necesidades reales en historias, alcance y entregables mantenibles.',
        evidence: ['Scrum', 'Kanban', 'Lean', 'Requisitos', 'Gestión de proyectos', 'DevOps'],
      },
      {
        title: 'Frontend & UX',
        signal: 'Criterio visual y técnico para interfaces claras, responsivas y sostenibles.',
        evidence: ['Astro', 'React', 'TypeScript', 'CSS Grid', 'Tailwind CSS', 'UX/UI'],
      },
      {
        title: 'Liderazgo & Comunicación',
        signal: 'Trabajo con equipos, comunicación técnica y mejora continua personal.',
        evidence: [
          'Leadership',
          'Comunicación',
          'Productividad',
          'Trabajo remoto',
          'Inglés',
          'Mentoría',
        ],
      },
    ],
    highlights: [
      {
        title: 'Técnico en Sistemas',
        issuer: 'SENA',
        date: '2015',
        area: 'Base técnica',
      },
      {
        title: 'Pasantías y experiencia en CIDTI 4.0',
        issuer: 'CIDTI 4.0',
        date: '2025',
        area: 'Evidencia laboral',
      },
      {
        title: 'Diplomado en Analítica de Datos en la Gestión Empresarial',
        issuer: 'UNIR',
        date: '2026',
        area: 'Datos y negocio',
      },
      {
        title: 'Continuing Education Certificate in Leadership',
        issuer: 'MIU City University Miami',
        date: '2025',
        area: 'Liderazgo',
      },
      {
        title: 'Python, FastAPI y bases de datos',
        issuer: 'Platzi, Código Facilito, Udemy',
        date: '2021-2024',
        area: 'Backend',
      },
      {
        title: 'Agile, Scrum, Kanban y gestión de proyectos',
        issuer: 'LinkedIn Learning, Platzi, Udemy',
        date: '2020-2022',
        area: 'Procesos',
      },
    ],
    skills: [
      'Python',
      'FastAPI',
      'SQL',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'React',
      'Astro',
      'Scrum',
      'Data analysis',
    ],
  },
  en: {
    inventory: {
      totalEntries: '373 documented records',
      providers: '16 learning and work-evidence sources',
      strongestSources: 'Platzi, LinkedIn Learning, Udemy, SENA, UNIR, and CIDTI 4.0',
      evidencePolicy:
        'The portfolio shows curated signals; full documents stay outside the site and are shared on request or through LinkedIn.',
    },
    pillars: [
      {
        title: 'Backend & APIs',
        signal: 'Building services, data models, and business logic.',
        evidence: ['Python', 'FastAPI', 'Node.js', 'Java', 'C#', 'Backend architecture'],
      },
      {
        title: 'Data & Analytics',
        signal: 'Using data for extraction, processing, analysis, and decision support.',
        evidence: ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Scikit-learn', 'Business analytics'],
      },
      {
        title: 'Processes & Agile',
        signal: 'Turning real needs into user stories, scope, and maintainable deliverables.',
        evidence: ['Scrum', 'Kanban', 'Lean', 'Requirements', 'Project management', 'DevOps'],
      },
      {
        title: 'Frontend & UX',
        signal: 'Visual and technical judgment for clear, responsive, sustainable interfaces.',
        evidence: ['Astro', 'React', 'TypeScript', 'CSS Grid', 'Tailwind CSS', 'UX/UI'],
      },
      {
        title: 'Leadership & Communication',
        signal: 'Teamwork, technical communication, and continuous personal improvement.',
        evidence: [
          'Leadership',
          'Communication',
          'Productivity',
          'Remote work',
          'English',
          'Mentoring',
        ],
      },
    ],
    highlights: [
      {
        title: 'Technical Degree in Systems',
        issuer: 'SENA',
        date: '2015',
        area: 'Technical foundation',
      },
      {
        title: 'Internship and work evidence at CIDTI 4.0',
        issuer: 'CIDTI 4.0',
        date: '2025',
        area: 'Work evidence',
      },
      {
        title: 'Diploma in Data Analytics for Business Management',
        issuer: 'UNIR',
        date: '2026',
        area: 'Data and business',
      },
      {
        title: 'Continuing Education Certificate in Leadership',
        issuer: 'MIU City University Miami',
        date: '2025',
        area: 'Leadership',
      },
      {
        title: 'Python, FastAPI, and databases',
        issuer: 'Platzi, Código Facilito, Udemy',
        date: '2021-2024',
        area: 'Backend',
      },
      {
        title: 'Agile, Scrum, Kanban, and project management',
        issuer: 'LinkedIn Learning, Platzi, Udemy',
        date: '2020-2022',
        area: 'Processes',
      },
    ],
    skills: [
      'Python',
      'FastAPI',
      'SQL',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'React',
      'Astro',
      'Scrum',
      'Data analysis',
    ],
  },
};

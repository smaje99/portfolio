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
  meaning: string;
};

type CredentialData = {
  thesis: string;
  thesisEmphasis: string;
  practices: string[];
  pillars: CredentialPillar[];
  highlights: CredentialHighlight[];
  skills: string[];
};

export const credentialsByLocale: Record<CredentialLocale, CredentialData> = {
  es: {
    thesis:
      'Mi aprendizaje parte de una regla simple: debe ayudarme a analizar, construir o comunicar mejor una solución. Por eso lo organizo alrededor de capacidades que aplico en proyectos reales: backend, datos, procesos, interfaces y liderazgo técnico.',
    thesisEmphasis: 'debe ayudarme a analizar, construir o comunicar mejor una solución',
    practices: [
      'Profundizo en backend para tomar mejores decisiones de diseño, integración y mantenimiento.',
      'Trabajo con datos para transformar información dispersa en estructuras útiles para operar y decidir.',
      'Estudio procesos para comprender mejor el alcance, ordenar prioridades y conversar con mayor claridad con los usuarios.',
    ],
    pillars: [
      {
        title: 'Backend & APIs',
        signal:
          'Convertir reglas de negocio en servicios claros, datos consistentes y flujos mantenibles.',
        evidence: ['Python', 'FastAPI', 'Node.js', 'Java', 'C#', 'Arquitectura backend'],
      },
      {
        title: 'Datos & Analítica',
        signal:
          'Leer la operación desde sus datos para encontrar patrones, riesgos y oportunidades.',
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
        signal: 'Entender, modelar y mejorar procesos antes de construir soluciones digitales.',
        evidence: ['BPM', 'BPMN', 'BPMS/RPA', 'Scrum', 'Lean', 'Requisitos'],
      },
      {
        title: 'Frontend & UX',
        signal:
          'Diseñar interfaces que expliquen el sistema y no obliguen al usuario a descifrarlo.',
        evidence: ['Astro', 'React', 'TypeScript', 'CSS Grid', 'Tailwind CSS', 'UX/UI'],
      },
      {
        title: 'Liderazgo & Comunicación',
        signal: 'Sostener el trabajo técnico con criterio, comunicación, autonomía y colaboración.',
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
        title: 'Diplomado BPM para la Transformación Digital de Procesos',
        issuer: 'Pontificia Universidad Javeriana',
        date: '2026',
        area: 'Procesos digitales',
        meaning:
          'Refuerza la capacidad de modelar, rediseñar, automatizar y monitorear procesos con BPM, BPMN, BPMS, RPA y minería de procesos.',
      },
      {
        title: 'Pasantías y experiencia en CIDTI 4.0',
        issuer: 'CIDTI 4.0',
        date: '2025',
        area: 'Evidencia laboral',
        meaning:
          'La formación aterriza en desarrollo, datos, requerimientos y entregas dentro de un entorno real.',
      },
      {
        title: 'Diplomado en Analítica de Datos en la Gestión Empresarial',
        issuer: 'UNIR',
        date: '2026',
        area: 'Datos y negocio',
        meaning:
          'Refuerza la conexión entre análisis de datos, gestión empresarial y toma de decisiones.',
      },
      {
        title: 'Continuing Education Certificate in Leadership',
        issuer: 'MIU City University Miami',
        date: '2025',
        area: 'Liderazgo',
        meaning:
          'Complementa la ejecución técnica con comunicación, dirección y responsabilidad profesional.',
      },
      {
        title: 'Python, FastAPI y bases de datos',
        issuer: 'Platzi, Código Facilito, Udemy',
        date: '2021-2024',
        area: 'Backend',
        meaning:
          'Profundiza la ruta técnica que hoy se refleja en servicios, APIs y sistemas de información.',
      },
      {
        title: 'Agile, Scrum, Kanban y gestión de proyectos',
        issuer: 'LinkedIn Learning, Platzi, Udemy',
        date: '2020-2022',
        area: 'Procesos',
        meaning:
          'Aporta estructura para trabajar con alcance, incertidumbre, equipos y mejora de procesos.',
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
    thesis:
      'My learning starts from a simple rule: it must help me analyze, build, or communicate a solution better. I organize it around capabilities I apply in real projects: backend, data, processes, interfaces, and technical leadership.',
    thesisEmphasis: 'it must help me analyze, build, or communicate a solution better',
    practices: [
      'I go deeper into backend to make better design, integration, and maintenance decisions.',
      'I work with data to transform scattered information into useful structures for operations and decisions.',
      'I study processes to better understand scope, organize priorities, and speak with users more clearly.',
    ],
    pillars: [
      {
        title: 'Backend & APIs',
        signal:
          'Turning business rules into clear services, consistent data, and maintainable flows.',
        evidence: ['Python', 'FastAPI', 'Node.js', 'Java', 'C#', 'Backend architecture'],
      },
      {
        title: 'Data & Analytics',
        signal: 'Reading operations through data to find patterns, risks, and opportunities.',
        evidence: ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Scikit-learn', 'Business analytics'],
      },
      {
        title: 'Processes & Agile',
        signal:
          'Understanding, modeling, and improving processes before building digital solutions.',
        evidence: ['BPM', 'BPMN', 'BPMS/RPA', 'Scrum', 'Lean', 'Requirements'],
      },
      {
        title: 'Frontend & UX',
        signal:
          'Designing interfaces that explain the system instead of forcing users to decode it.',
        evidence: ['Astro', 'React', 'TypeScript', 'CSS Grid', 'Tailwind CSS', 'UX/UI'],
      },
      {
        title: 'Leadership & Communication',
        signal:
          'Supporting technical work with judgment, communication, ownership, and collaboration.',
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
        title: 'Diploma in BPM for Digital Process Transformation',
        issuer: 'Pontificia Universidad Javeriana',
        date: '2026',
        area: 'Digital processes',
        meaning:
          'Strengthens process modeling, redesign, automation, and monitoring with BPM, BPMN, BPMS, RPA, and process mining.',
      },
      {
        title: 'Internship and work evidence at CIDTI 4.0',
        issuer: 'CIDTI 4.0',
        date: '2025',
        area: 'Work evidence',
        meaning:
          'Learning translated into development, data, requirements, and delivery in a real environment.',
      },
      {
        title: 'Diploma in Data Analytics for Business Management',
        issuer: 'UNIR',
        date: '2026',
        area: 'Data and business',
        meaning:
          'Strengthens the link between data analysis, business management, and decision-making.',
      },
      {
        title: 'Continuing Education Certificate in Leadership',
        issuer: 'MIU City University Miami',
        date: '2025',
        area: 'Leadership',
        meaning:
          'Complements technical execution with communication, direction, and professional responsibility.',
      },
      {
        title: 'Python, FastAPI, and databases',
        issuer: 'Platzi, Código Facilito, Udemy',
        date: '2021-2024',
        area: 'Backend',
        meaning:
          'Deepens the technical path now reflected in services, APIs, and information systems.',
      },
      {
        title: 'Agile, Scrum, Kanban, and project management',
        issuer: 'LinkedIn Learning, Platzi, Udemy',
        date: '2020-2022',
        area: 'Processes',
        meaning:
          'Adds structure for working with scope, uncertainty, teams, and process improvement.',
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

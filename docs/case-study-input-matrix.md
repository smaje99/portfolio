# Matriz de insumos para casos de estudio

**Work item:** `BLG-F3-S05-03`
**Estado:** `Cerrado — matriz de insumos completada` (2026-09-10).
**Fuente editorial:** respuestas de Sergio y evidencia pública disponible al 2026-09-10.
**Regla:** los campos pendientes no deben completarse por inferencia.

## Decisión inicial

`TrazalITA` queda seleccionado como el primer caso de estudio. `EpicrisisIA`
se conserva como segundo candidato principal. El proyecto educativo de
estructuras de datos permanece como evidencia secundaria. `it-services-contents-unir`
se incorpora a esta matriz como candidato educativo adicional, pero todavía no
se añade al inventario público de `src/data/projects.ts`.

## Estados de información

- **Confirmado:** proviene de la respuesta de Sergio o de una fuente pública
  identificable.
- **Pendiente:** hace falta una respuesta, documento o validación concreta.
- **Restringido:** puede servir para revisión interna, pero no para el texto
  público.

## TrazalITA

| Área | Insumo actual | Estado |
| --- | --- | --- |
| Tipo y estado | Sistema de información; en desarrollo. | Confirmado |
| Contexto | Instituciones educativas pueden carecer de una herramienta específica para organizar el cumplimiento ante encuestas de la Procuraduría, con riesgo de observaciones, memorandos o sanciones. | Confirmado; revisar redacción pública |
| Usuarios | Personal administrativo. | Confirmado |
| Objetivo | Apoyar el cumplimiento normativo relacionado con ITA y su gestión. | Confirmado |
| Alcance | Apoyar el cumplimiento normativo relacionado con el Índice de Transparencia y Acceso a la Información (ITA), vigilado por la Procuraduría General de la Nación de Colombia. | Confirmado |
| Contribución | Sergio dirige el alcance, la gestión del proyecto y las decisiones de solución; consulta y documenta la normativa y realiza la definición de requisitos, ADRs, arquitectura, operaciones, diccionarios de datos, diagramas de secuencia y gobierno. ChatGPT/Codex se usa como asistencia para análisis y construcción bajo su dirección. | Confirmado |
| Tecnologías | Docker y Nginx cubren la infraestructura. PayloadCMS se apoya en Next.js y PostgreSQL. Astro genera las páginas estáticas a partir del contenido gestionado por PayloadCMS; cada modificación requiere un nuevo `astro build`. También se usan TypeScript. | Confirmado |
| Decisión principal | Usar un CMS existente y enfocarlo en la normativa ITA, en lugar de construir desde cero una aplicación integral de gestión educativa. | Confirmado |
| Evidencia | La base normativa principal son la Resolución 1519 de 2020 y sus anexos. La evidencia técnica detallada queda reservada para una ampliación futura. | Confirmado; detalle diferido |
| Visibilidad | Se puede mencionar el proyecto; el contexto institucional, diseño y material sensible requieren reserva. | Confirmado; formulación detallada futura |
| Resultados | No se declara un resultado actual publicable; la evidencia de implementación y resultados queda para el futuro. | Cerrado por alcance |
| Próximo paso | Integrar un CMS existente que responda a las necesidades definidas. | Confirmado; detalle futuro |

### Decisiones de cierre de captura de TrazalITA

1. ¿Qué funcionalidades ya están implementadas y cuáles solo están diseñadas?
   **Cierre:** no se detallan en este WI; se difieren para la futura ficha del
   caso de estudio.
2. ¿Cuál es el flujo principal: requisito o norma → evidencia/documento →
   revisión → respuesta o reporte?
   **Cierre:** no se detalla en este WI; se difiere para la futura ficha del
   caso de estudio.
3. ¿Qué significa exactamente `ITA` en la redacción pública y qué parte puede
   explicarse sin citar documentos internos?
   **Respuesta actual:** Índice de Transparencia y Acceso a la Información,
   vigilado por la Procuraduría General de la Nación de Colombia.
4. ¿Qué módulos, decisiones o artefactos concretos implementaste o definiste
   tú directamente dentro de esa arquitectura?
   **Respuesta actual:** todos los módulos, decisiones y artefactos incluidos
   en el alcance documentado del proyecto.
5. ¿Qué decisiones dependieron del contexto institucional o de requisitos
   externos, y cuáles fueron decisiones propias de diseño?
   **Respuesta actual:** la Resolución 1519 de 2020 y sus anexos establecen de
   forma clara los requisitos normativos; las decisiones de solución se toman
   a partir de ese marco.
6. ¿Existe un entorno, demo, captura o documento que pueda revisarse sin
   exponer información confidencial? Si no, el caso se redactará solo con
   evidencia contextual.
   **Cierre:** no se incorpora evidencia técnica adicional en este WI; queda
   diferida para el futuro y sujeta a los límites de confidencialidad.
7. ¿Qué resultado observable existe hoy: módulo construido, flujo probado,
   requisitos validados o solo arquitectura definida?
   **Respuesta actual:** los resultados se documentarán en el futuro; no se
   presenta todavía un resultado publicable.

## EpicrisisIA

| Área | Insumo actual | Estado |
| --- | --- | --- |
| Tipo y estado | Sistema de información; en desarrollo. | Confirmado |
| Origen | Proyecto contratado que llegó a CIDTI por medio del doctor Edgar Pabón. | Restringido; no publicar sin autorización |
| Contexto | Automatizar la auditoría de un caso médico hasta la generación de la epicrisis médica. | Confirmado; publicar de forma genérica |
| Usuarios | Auditores médicos. | Confirmado |
| Problema | Lectura informe por informe y cruce manual de información entre varios artefactos. | Confirmado |
| Alcance | Auditoría médica y generación de epicrisis a partir de artefactos de un caso médico; el flujo completo está implementado. | Confirmado |
| Tecnologías | Python, Docker, MongoDB, Celery, Redis, FastAPI y PydanticAI. | Confirmado |
| Artefactos | Requisitos, ADRs, arquitectura, operaciones, diccionarios de datos y diagramas de secuencia, entre otros. | Confirmado; asociación detallada futura |
| Contribución | El primer desarrollador contratado construyó el núcleo inicial y el flujo base. El líder técnico participó en el diseño. Sergio realizó la refactorización, rediseñó integralmente la aplicación, definió la arquitectura, integró LLMs y RAG, mejoró el flujo, añadió herramientas deterministas y alineó la experiencia con el sistema de diseño de la empresa, incluyendo accesibilidad y flujos UX integrados. | Confirmado por declaración; la atribución detallada queda para una ampliación futura |
| Aprendizajes | Gestión de stakeholders, colas de trabajo, LLMs y RAGs, refactorización de código sin arquitectura, control de alcance, diseño de UX y accesibilidad. | Confirmado; asociación detallada futura |
| Evidencia | No se aporta una fuente técnica pública o autorizada; los detalles se mantienen restringidos y se difieren para una ampliación futura. | Cerrado por alcance |
| Visibilidad | El nombre del proyecto puede mencionarse; los casos médicos, documentos y diseños están sujetos a secreto profesional y confidencialidad. | Confirmado; formulación detallada futura |
| Resultados | Medición interna reportada: el coste por caso pasó de aproximadamente 5.000 COP a 800 COP después de la refactorización, optimización del flujo y adición de herramientas deterministas. | Confirmado por declaración; evidencia detallada futura |
| Producto y UX | Rediseño integral de la aplicación, alineado con el sistema de diseño de la empresa, con accesibilidad y flujos UX integrados. | Confirmado por declaración; la evidencia de validación se difiere |

### Decisiones de cierre de captura de EpicrisisIA

1. ¿Qué parte del flujo está implementada hoy: recepción, extracción,
   normalización, validación, auditoría, generación o revisión humana?
   **Respuesta actual:** todas las etapas forman parte del flujo implementado.
2. ¿Qué hace cada componente: FastAPI, Celery, Redis, MongoDB y PydanticAI?
   **Cierre:** no se detalla en este WI; se difiere para una ampliación futura.
3. ¿Qué significa `RAG` en este proyecto y qué fuentes autorizadas utiliza?
   **Cierre:** no se detalla en este WI por alcance y confidencialidad; se
   difiere para una ampliación futura.
4. ¿Qué validaciones conserva el proceso para evitar que una salida generada
   se presente como decisión médica?
   **Cierre:** no se detalla en este WI; cualquier descripción futura deberá
   conservar la distinción entre asistencia documental y decisión médica.
5. ¿Cuál fue tu contribución concreta en arquitectura, desarrollo, colas,
   LLMs/RAG, refactorización y gestión del alcance?
   **Respuesta actual:** refactorización, rediseño integral, arquitectura,
   integración de LLMs y RAG, optimización del flujo, herramientas
   deterministas, accesibilidad y UX.
6. ¿Qué partes fueron realizadas por otras personas o dependen de decisiones
   del cliente?
   **Respuesta actual:** el primer desarrollador contratado construyó el núcleo
   inicial y el flujo base. El líder técnico participó en el diseño original.
   Sergio realizó la refactorización, la arquitectura, la integración de LLMs
   y RAG y la mejora del flujo mediante optimización y herramientas
   deterministas.
7. ¿Qué evidencia interna puede revisarse sin entregar documentos médicos,
   datos personales, prompts privados, reglas propietarias o diseños sensibles?
   **Cierre:** no se incorpora evidencia interna adicional en este WI; queda
   diferida y restringida.
8. ¿Existe algún resultado medido o solo una validación cualitativa del flujo?
   **Respuesta actual:** existe una medición interna del coste por caso, de
   aproximadamente 5.000 COP a 800 COP. La fuente de cálculo no se publica
   todavía y podrá documentarse en una ampliación futura.

**Cierre provisional de captura:** no se solicitará más información de
`EpicrisisIA` en esta iteración. La evidencia detallada del rediseño, la
accesibilidad, los flujos UX y la medición de costes queda diferida para una
ampliación futura del caso.

## Proyecto educativo de estructuras de datos

| Área | Insumo actual | Estado |
| --- | --- | --- |
| Tipo y posición | Proyecto educativo; evidencia secundaria. | Confirmado |
| Propósito | Guiar el aprendizaje de estructuras de datos mediante implementaciones desde cero, uso de la API de Java, ejercicios y pruebas. | Confirmado |
| Componentes | Ejercicios con retroalimentación, simuladores de ordenamiento, tipos de datos abstractos, recursividad y calculadora de expresiones infijas a postfijas. | Confirmado |
| Lenguaje | Java. | Confirmado |
| Evidencia pública | [`ds-tdd-uniamazonia`](https://github.com/smaje99/ds-tdd-uniamazonia), [`sorting-comparator`](https://github.com/smaje99/sorting-comparator), [`SimuladorTDA`](https://github.com/smaje99/SimuladorTDA) y [`Calc2`](https://github.com/smaje99/Calc2). | Confirmado |
| Contribución | Los repositorios fueron desarrollados por Sergio. | Confirmado |
| Visibilidad | Pública, manteniendo su carácter educativo y posición secundaria. | Confirmado |
| Presentación | Se mostrarán agrupados como ejercicios y proyectos relacionados de un mismo curso, sin competir con TrazalITA ni EpicrisisIA. | Confirmado |
| Evidencia representativa | [`ds-tdd-uniamazonia`](https://github.com/smaje99/ds-tdd-uniamazonia) se toma como repositorio principal por integrar ejercicios guiados, pruebas de contrato y una estructura pedagógica reutilizable. | Confirmado |

La revisión pública confirma que `ds-tdd-uniamazonia` contiene ejercicios
guiados, pruebas de contrato y variantes de implementación; `sorting-comparator`
documenta una aplicación Java Swing con algoritmos instrumentados, controles de
ejecución y pruebas; `SimuladorTDA` se presenta como proyecto final de curso; y
`Calc2` como calculadora Java de expresiones infijas a postfijas.

### Decisiones de cierre de captura de estructuras de datos

1. ¿Qué repositorios fueron desarrollados directamente por ti y en cuáles hubo
   colaboración?
   **Respuesta actual:** Todos los repositorios fueron desarrollados directamente
   por Sergio, sin colaboración externa.
2. ¿Qué repositorio representa mejor tu contribución personal?
   **Respuesta actual:** `ds-tdd-uniamazonia`, por su combinación de ejercicios
   guiados, pruebas y material de apoyo.
3. ¿Qué aprendizaje o decisión técnica quieres demostrar con este conjunto?
   **Cierre:** se difiere la selección de aprendizajes concretos; el conjunto
   queda presentado como evidencia educativa agrupada.
4. ¿Qué fechas, curso o contexto académico pueden mencionarse públicamente?
   **Cierre:** no se añaden detalles académicos adicionales en este WI.
5. ¿Debe mantenerse como una sola evidencia agrupada o como varios proyectos
   relacionados?
   **Respuesta actual:** se mantendrá como evidencia agrupada, mostrando los
   repositorios como ejercicios y proyectos relacionados de un mismo curso, sin
   competir con TrazalITA ni EpicrisisIA.

## Candidato añadido: `it-services-contents-unir`

| Área | Insumo actual | Estado |
| --- | --- | --- |
| Nombre | Plantilla de contenidos educativos complementarios para UNIR. | Confirmado |
| Tipo | Proyecto educativo / plantilla web. | Confirmado |
| Evidencia pública | [Repositorio `it-services-contents-unir`](https://github.com/smaje99/it-services-contents-unir) y [demo publicada](https://it-services-contents-unir.vercel.app). | Confirmado |
| Tecnologías | Astro, React, MDX y colecciones de contenido, según el README y la configuración pública. | Confirmado |
| Propósito | Permitir a docentes organizar temas, recursos, actividades, autoevaluaciones y casos de estudio en una web reutilizable. | Confirmado |
| Despliegue | Se documentan GitHub Pages y Vercel como destinos posibles. | Confirmado |
| Contribución | Sergio propuso mejorar una plantilla que utilizaba un docente, y desarrolló su arquitectura Astro, componentes, colecciones y despliegue. No participó en la creación de contenidos ni en integraciones con otros sistemas. | Confirmado |
| Estado | Operativo; el docente lo utiliza actualmente como apoyo para sus cursos. | Confirmado |
| Posición | Proyecto independiente; no se incorpora todavía a `src/data/projects.ts` porque su inclusión runtime y prioridad narrativa pertenecen a una decisión posterior. | Confirmado; decisión runtime diferida |

### Decisiones de cierre de captura de `it-services-contents-unir`

1. ¿Cuál fue tu objetivo concreto al construir esta plantilla?
   **Respuesta actual:** aplicar ingeniería a una plantilla que un docente
   utilizaba para apoyar su curso, pero que no era reutilizable ni mantenible.
2. ¿Fue un proyecto académico, profesional, personal o una colaboración con
   UNIR?
   **Respuesta actual:** iniciativa personal. Sergio propuso a un docente
   mejorar la plantilla y hacerla más mantenible y reutilizable; no fue un
   encargo ni un proyecto académico.
3. ¿Qué partes implementaste tú: arquitectura Astro, componentes, colecciones,
   contenidos, despliegue o integración?
   **Respuesta actual:** arquitectura Astro, componentes, colecciones y
   despliegue. No participó en la creación de contenidos ni en la integración
   con otros sistemas.
4. ¿La demo sigue disponible y representa el estado actual del repositorio?
   **Respuesta actual:** sí; la demo sigue disponible y refleja el estado
   actual del repositorio.
5. ¿Qué estado canónico debe tener dentro del portfolio?
   **Respuesta actual:** operativo, el docente actualmente lo usa como ayuda para
   sus cursos.
6. ¿Debe mostrarse como proyecto independiente, evidencia educativa relacionada
   o parte del conjunto de proyectos de estructuras de datos?
   **Respuesta actual:** independiente, porque aunque es educativo no está relacionado
   con estructuras de datos ni con los otros proyectos educativos que se están documentando.

## Faltantes diferidos para el primer caso

Estos elementos quedan diferidos para `BLG-F3-S06-01`. No bloquean el cierre de
`BLG-F3-S05-03`, pero sí condicionan la redacción de un caso de estudio completo
de `TrazalITA`:

- inventario de funcionalidades construidas;
- flujo principal de usuario y datos;
- separación precisa de contribución personal y colaboración;
- evidencia revisable, aunque sea privada y resumida;
- resultados o validaciones observables;
- límites de publicación aprobados;
- siguiente paso realista del proyecto.

La matriz no autoriza todavía una página de detalle ni afirmaciones de
resultados, operación institucional o responsabilidad integral.

## Cierre de `BLG-F3-S05-03`

El work item queda cerrado porque `TrazalITA`, `EpicrisisIA` y los proyectos
educativos tienen una fuente o validación para sus afirmaciones principales,
una lista explícita de restricciones y una decisión documentada sobre qué se
difiere a `BLG-F3-S06-01` o a futuras ampliaciones. La versión inglesa se
redactará después de validar la ficha española.

# TrazalITA — caso de estudio

**Work item:** `BLG-F3-S06-01`
**Estado:** ficha editorial `draft`; lista para una implementación pública futura, no publicada como ruta Astro.
**Estado del proyecto:** `in-development`
**Visibilidad:** `private`
**Responsable de revisión:** Sergio Majé
**Evidencia revisada:** [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), [`src/data/projects.ts`](../../src/data/projects.ts), [`docs/project-status-taxonomy.md`](../project-status-taxonomy.md) y [`docs/case-study-template.md`](../case-study-template.md).

## 1. Resumen ejecutivo

TrazalITA es un sistema de información en desarrollo para apoyar la gestión del cumplimiento relacionado con el Índice de Transparencia y Acceso a la Información (ITA), vigilado por la Procuraduría General de la Nación de Colombia. El proyecto se orienta a instituciones educativas y a su personal administrativo, dentro de un contexto en el que organizar los requerimientos normativos y su gestión puede ser una necesidad específica. Sergio Majé dirige el alcance, los requisitos, la arquitectura, la documentación técnica, las operaciones y el gobierno del proyecto. La ficha documenta decisiones y límites confirmados, pero no presenta todavía funcionalidades concretas, resultados verificables ni un producto operativo.

## 2. Contexto y problema

El proyecto parte de una necesidad de gestión: las instituciones educativas pueden requerir una herramienta específica para organizar el cumplimiento asociado a las encuestas de la Procuraduría. El contexto identificado contempla el riesgo de observaciones, memorandos o sanciones cuando la información y las responsabilidades relacionadas con ese cumplimiento no se gestionan de forma clara. TrazalITA aborda ese contexto desde el marco del ITA y sus requerimientos normativos.

La información confirmada permite describir el propósito general y los usuarios previstos —personal administrativo—, pero no autoriza detallar una institución concreta, sus documentos, datos, procesos internos o diseño sensible. Tampoco se publica aún la limitación operativa anterior, el flujo completo de usuario y datos, ni un inventario de funcionalidades implementadas. Esos elementos requieren evidencia técnica o validación adicional y quedan diferidos.

Por tanto, el alcance de esta ficha es explicar el problema de cumplimiento y el razonamiento de solución a un nivel publicable. Quedan fuera una demostración del sistema, la descripción de módulos específicos, la exposición de documentos internos y cualquier afirmación sobre resultados institucionales.

## 3. Objetivo y alcance

### Objetivo

Apoyar el cumplimiento normativo relacionado con el Índice de Transparencia y Acceso a la Información (ITA) y su gestión en instituciones educativas.

### Incluido en el alcance documentado

- La orientación del sistema hacia el cumplimiento relacionado con el ITA.
- La definición de requisitos a partir de la Resolución 1519 de 2020 y sus anexos.
- La definición y documentación de decisiones de arquitectura, operación y gobierno.
- El uso de un CMS existente como base de la solución, con el alcance centrado en la normativa ITA.

### Fuera del alcance público actual

- Funcionalidades concretas, módulos implementados y separación entre diseño e implementación.
- El flujo completo de usuario y datos.
- Resultados, métricas, validaciones o evidencia de operación.
- Capturas, documentos internos, datos institucionales y detalles técnicos sensibles.
- La presentación del proyecto como una aplicación integral de gestión educativa o como producto comercial.

La ficha mantiene como restricción principal la confidencialidad del contexto institucional y como restricción editorial la ausencia de evidencia técnica detallada publicable.

## 4. Contribución personal

Sergio dirige el alcance y la gestión del proyecto, y toma las decisiones de solución dentro del marco normativo identificado. Contribuye a la consulta y documentación de la normativa, la definición de requisitos, los registros de decisiones de arquitectura (ADRs), la arquitectura, las operaciones, los diccionarios de datos, los diagramas de secuencia y el gobierno del proyecto.

Esta descripción corresponde al alcance documentado de su contribución; no afirma que Sergio haya construido en solitario todos los componentes ni atribuye resultados que todavía no cuentan con evidencia publicable. La asistencia de ChatGPT/Codex se utiliza para análisis y construcción bajo la dirección de Sergio, sin sustituir su responsabilidad sobre el alcance, las decisiones y la revisión del trabajo.

La ficha no identifica a otras personas o instituciones ni atribuye autoría sobre elementos que no estén documentados de forma publicable. La contribución del equipo, la implementación de módulos concretos y la validación del sistema requieren una ampliación futura.

## 5. Decisiones de solución

### Partir de un CMS existente

La decisión principal es utilizar un CMS existente y enfocarlo en la normativa ITA, en lugar de construir desde cero una aplicación integral de gestión educativa. El criterio confirmado es mantener el problema dentro de un alcance específico de cumplimiento y aprovechar una base tecnológica existente. El resultado funcional de esta decisión todavía no se declara: la integración y sus necesidades concretas siguen formando parte del desarrollo.

### Traducir el marco normativo a requisitos y artefactos

La Resolución 1519 de 2020 y sus anexos constituyen la base normativa principal. A partir de ese marco se definen requisitos y se documentan decisiones mediante ADRs, arquitectura, diccionarios de datos y diagramas de secuencia. Esto permite conservar una relación explícita entre la norma y el diseño, aunque esta ficha no publica el contenido detallado de esos artefactos.

### Separar contenido gestionado y presentación estática

La solución utiliza PayloadCMS con Next.js y PostgreSQL, mientras Astro genera páginas estáticas a partir del contenido gestionado por PayloadCMS. Cada modificación de ese contenido requiere ejecutar un nuevo `astro build`. Docker y Nginx cubren la infraestructura, y TypeScript forma parte del desarrollo. Esta decisión describe la composición tecnológica confirmada; no implica que el sitio público exponga actualmente el caso de estudio ni que el sistema completo esté operativo.

### Mantener límites de publicación proporcionales a la evidencia

La ficha solo publica el propósito, el marco normativo, la composición tecnológica y la contribución documentada. No publica alternativas descartadas, decisiones institucionales, módulos, resultados ni material interno porque no existe todavía una fuente técnica autorizada para describirlos en detalle. El estado conocido de esos elementos es `pendiente` o `restringido`, no una hipótesis que deba completarse narrativamente.

## 6. Arquitectura y flujo

La arquitectura publicable puede resumirse como una separación entre gestión de contenido, generación del sitio y soporte de infraestructura:

- **Gestión de contenido:** PayloadCMS, apoyado en Next.js y PostgreSQL.
- **Presentación:** Astro genera páginas estáticas a partir del contenido gestionado.
- **Infraestructura:** Docker y Nginx.
- **Lenguaje transversal:** TypeScript.

La entrada normativa del problema está constituida por la Resolución 1519 de 2020 y sus anexos. Sin embargo, el flujo completo desde un requisito o norma hasta su gestión, revisión, evidencia, respuesta o reporte no está confirmado para publicación. Por esa razón, esta ficha no dibuja un flujo de usuario ni asigna responsabilidades a módulos concretos.

La persistencia y las integraciones se mencionan solo al nivel confirmado por el stack: PostgreSQL forma parte de la base de PayloadCMS y Astro consume el contenido generado por ese CMS durante el proceso de build. Los límites, validaciones, dependencias internas y separación precisa entre componentes actuales y evolución prevista quedan diferidos a una ampliación técnica revisada.

## 7. Implementación y evidencia

| Afirmación | Evidencia | Madurez | Publicable |
| --- | --- | --- | --- |
| TrazalITA es un sistema de información en desarrollo orientado al cumplimiento relacionado con el ITA. | [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), sección “TrazalITA”; [`src/data/projects.ts`](../../src/data/projects.ts). | aplicada | resumida |
| El proyecto se orienta a instituciones educativas y personal administrativo. | [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), tabla de insumos de TrazalITA. | contextual | sí |
| La base normativa principal es la Resolución 1519 de 2020 y sus anexos. | [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), área “Evidencia”. | contextual | sí |
| La solución usa Docker, Nginx, PayloadCMS, Next.js, PostgreSQL, Astro y TypeScript. | [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), área “Tecnologías”. | contextual | resumida |
| Sergio dirige el alcance, los requisitos, la arquitectura, las operaciones, la documentación y el gobierno del proyecto. | [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), área “Contribución”. | aplicada | resumida |
| Existen funcionalidades concretas, un flujo completo, resultados verificables o evidencia técnica detallada publicable. | La matriz registra estos elementos como diferidos o cerrados por alcance; no se aporta fuente técnica autorizada para publicarlos. | pendiente | no |

La evidencia revisada sostiene una ficha editorial contextual. No se incluyen capturas, documentos internos, URLs privadas, datos personales, secretos, fragmentos de código ni métricas no validadas.

## 8. Estado actual y próximos pasos

El estado canónico del proyecto es `in-development`: TrazalITA se encuentra en construcción y no debe describirse como operativo, MVP validado o producto terminado. Lo confirmado hasta ahora es el propósito, el marco normativo, la orientación de usuarios, la composición tecnológica y el alcance de la contribución de Sergio.

El siguiente paso documentado es integrar un CMS existente que responda a las necesidades definidas. La ficha no anticipa módulos, fechas, resultados ni una forma de operación que todavía no esté respaldada por evidencia. La publicación de una ruta de detalle en Astro queda para un trabajo posterior y requiere una nueva revisión editorial.

## 9. Aprendizajes

- Un marco normativo concreto puede funcionar como punto de partida para ordenar requisitos y decisiones, siempre que la relación entre norma, diseño y evidencia permanezca documentada.
- En un problema acotado de cumplimiento, partir de un CMS existente ayuda a mantener la solución enfocada y evita asumir desde el inicio el alcance de una plataforma integral.
- Los ADRs, diccionarios de datos, diagramas de secuencia y documentación de operaciones hacen visible el razonamiento técnico antes de exponer detalles de implementación.
- La confidencialidad no elimina la posibilidad de explicar un proyecto: obliga a separar con precisión lo que puede publicarse, lo que debe resumirse y lo que necesita validación futura.

## 10. Límites de publicación

- Esta ficha es documental y permanece en `draft`; no crea una ruta pública, un enlace de navegación, un CTA ni una entrada CMS.
- El proyecto conserva exactamente el estado `in-development` y la visibilidad `private` del inventario estratégico.
- No se exponen nombres institucionales, documentos, datos personales, diseños sensibles, secretos, URLs internas ni reglas propietarias.
- No se presentan funcionalidades, flujo, resultados, métricas o validaciones como hechos cuando están diferidos.
- La contribución personal se describe con el alcance confirmado y no se convierte en autoría integral sobre un producto operativo.
- La versión inglesa debe conservar este mismo estado, alcance, responsabilidad y nivel de madurez.

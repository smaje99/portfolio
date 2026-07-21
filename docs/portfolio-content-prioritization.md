# Matriz de priorización de contenido público del MVP

**Work item:** `BLG-F1-S02-02`

**Fecha de corte:** 20 de julio de 2026

**Fuentes contrastadas:** `docs/portfolio-mvp-sitemap.md`, `docs/portfolio-roadmap.md`, `docs/portfolio-information-architecture-audit.md`, `docs/project-status-taxonomy.md`, `src/i18n/site.ts`, `src/data/projects.ts`, rutas bajo `src/pages/` y componentes de página.

## Propósito y alcance

Esta matriz define qué contenido público sostiene el MVP del portfolio, qué contenido puede esperar sin debilitar su propósito consultivo y qué piezas no deben promocionarse hasta contar con evidencia, decisión o insumos suficientes.

No redacta copy final, no modifica rutas ni componentes y no convierte nodos reservados en cobertura pública. Su función es alimentar `BLG-F1-S02-03`, la implementación narrativa de Fase 2 y la preparación de Fases 3 a 6.

## Reglas de priorización

| Prioridad | Regla operativa | Condición de publicación o avance |
| --- | --- | --- |
| `critico` | Es necesario para que una persona entienda quién es Sergio, qué problemas aborda, qué proyectos puede construir y cómo contactarlo. | Debe tener destino público ES/EN, relación con un OKR, evidencia identificable y tipo de ejecución. Una validación manual breve mantiene la prioridad; no lo bloquea. |
| `importante` | Aporta profundidad, confianza o contexto, pero la propuesta central del MVP sigue siendo entendible sin ampliar la pieza de inmediato. | Debe conservar paridad ES/EN y una fuente o plan de ampliación antes de modificar su narrativa. |
| `posterior` | Aumenta autoridad, cierre técnico o especialización, pero no pertenece al contenido necesario para publicar y explicar el MVP actual. | Debe estar trazado a una fase y work item posteriores; no se presenta como disponible mientras no exista soporte público. |
| `bloqueado` | Requeriría evidencia propia, decisión técnica, información fuente o participación externa que todavía no existe. | No puede promocionarse a `critico` ni presentarse como cobertura pública hasta resolver la causa explícita. |

Reglas complementarias:

1. Una afirmación visible sobre proyectos, experiencia, CV o perfiles externos puede seguir siendo `critico` cuando solo necesite confirmar exactitud, vigencia o coherencia. Esa validación se registra como dependencia manual, no como bloqueo.
2. Ninguna pieza puede clasificarse como `critico` si no tiene una sección pública concreta, propósito, fuente/evidencia y relación con el roadmap.
3. Los nodos reservados del sitemap —blog y casos de estudio— no se incluyen en navegación ni se describen como funcionalidad publicada hasta que su fase entregue contenido y soporte técnico.
4. Toda pieza pública `critico` o `importante` debe preservar equivalencia semántica entre español e inglés. La traducción puede adaptarse editorialmente, pero no exagerar madurez ni alcance.

## Estados de madurez usados

| Estado | Significado |
| --- | --- |
| `existente con validación` | Está expuesto o disponible y la fuente es observable; solo requiere confirmación manual puntual de precisión, vigencia o coherencia externa. |
| `parcial` | La estructura o evidencia existe, pero falta profundizar, reagrupar o afinar el mensaje antes de ampliarlo. |
| `reservado` | Es una capacidad prevista por el sitemap, sin ruta, bloque o contenido público publicable todavía. |
| `sin insumos verificables` | La pieza requiere información, decisión o evidencia que el repositorio no contiene; se mantiene bloqueada. |

## Matriz de contenido

| Pieza de contenido | Propósito y destino ES/EN | Prioridad / madurez | Fuente actual y tratamiento | Evidencia o dependencia | Ejecución | Trazabilidad |
| --- | --- | --- | --- | --- | --- | --- |
| Identidad y propuesta de valor | Explicar en `/` y `/en/` el perfil, enfoque de ingeniería de soluciones y valor práctico. | `critico` / `existente con validación` | `hero` y metadatos en `src/i18n/site.ts`; **conservar** y refinar en Fase 2. | Validación manual de que el mensaje siga representando el posicionamiento y perfiles externos. | `Mixto` | O1-KR1, O1-KR3; `BLG-F2-S03-01`, `BLG-F2-S04-01`. |
| Capacidades y enfoque | Mostrar en `/#focus` y `/en/#focus` las áreas que conectan procesos, datos, desarrollo y arquitectura. | `critico` / `parcial` | `focusSection` en `src/i18n/site.ts` y `PortfolioPage.astro`; **ampliar** hacia una propuesta explícita de capacidades/servicios. | Debe ser consistente con proyectos, experiencia y formación; no crear ruta propia en v1. | `Mixto` | O1-KR1, O1-KR4; `BLG-F2-S03-02`, `BLG-F2-S03-03`. |
| Proyectos públicos principales: SIMIGS, ERP Turismo y ERP Agroinsumos | Demostrar en `/projects`, `/en/projects` y destacados de home que existen soluciones orientadas a sistemas y operación. | `critico` / `existente con validación` | `src/data/projects.ts`, `ProjectsGrid.astro` y `PortfolioPage.astro`; **conservar** como inventario base, sin tratarlos aún como casos de estudio. | Validación manual de alcance, estado y wording de cada afirmación pública; la evidencia profunda queda para Fase 3. | `Mixto` | O2-KR3, O2-KR4, O4-KR1; `BLG-F3-S05-01`, `BLG-F3-S05-03`. |
| Experiencia profesional | Dar confianza y contexto laboral en `/experience`, `/en/experience` y el resumen de home. | `critico` / `existente con validación` | Colección `src/content/experiences/` y componentes de experiencia; **conservar** y revisar su narrativa. | Confirmación manual de vigencia, redacción y coherencia con LinkedIn y CV. | `Mixto` | O1-KR3, O4-KR1; `BLG-F2-S04-01`. |
| CV localizado | Ofrecer respaldo descargable desde los CTAs de `/` y `/en/`. | `critico` / `existente con validación` | PDFs publicados en `public/docs/` y fuentes en `docs/resume/`; **conservar** como CTA secundario. | Revisión manual de vigencia y correspondencia con experiencia y perfiles externos. | `Manual` | O1-KR3, O4-KR1; `BLG-F2-S04-02`. |
| Contacto y enlaces profesionales | Permitir conversión por correo, LinkedIn y GitHub desde `/#contact` y `/en/#contact`. | `critico` / `existente con validación` | `PortfolioPage.astro`, `SocialPill.astro` y copy en `src/i18n/site.ts`; **conservar** y ordenar sus CTAs. | Comprobar manualmente URLs, disponibilidad de correo y coherencia de GitHub/LinkedIn; Medium no se promete todavía. | `Mixto` | O1-KR3, O4-KR3, O4-KR4; `BLG-F2-S04-01`, `BLG-F2-S04-02`. |
| Perfil profundo y principios de trabajo | Explicar criterio profesional en `/about` y `/en/about` sin depender solo del hero. | `importante` / `parcial` | `aboutSection` en `src/i18n/site.ts` y `AboutPage.astro`; **ampliar** después de cerrar mensaje y coherencia externa. | Requiere voz personal y consistencia con propuesta de valor, experiencia y perfiles. | `Mixto` | O1-KR2, O1-KR3; `BLG-F2-S04-01`. |
| Formación aplicada y credenciales | Aportar sustento de aprendizaje y capacidades en perfil, sin sustituir evidencia de proyectos. | `importante` / `parcial` | `learningSection`, `LearningEvidence.astro` y `src/data/credentials.ts`; **conservar** y afinar su relación con capacidades. | Validar que cada credencial sea vigente y que no infle capacidad sin evidencia aplicada. | `Mixto` | O1-KR2, O1-KR4; `BLG-F2-S03-02`, `BLG-F2-S04-01`. |
| Proyecto educativo de estructuras de datos | Mantener evidencia secundaria de fundamentos dentro de `/projects` y `/en/projects`. | `importante` / `existente con validación` | Registro `estructuras-de-datos` en `src/data/projects.ts`; **conservar** en segundo plano. | Confirmar que su presentación académica no compita con los sistemas principales ni se presente como producto operativo. | `Mixto` | O2-KR3, O2-KR4; `BLG-F3-S05-01`, `BLG-F3-S06-03`. |
| Capacidad de casos de estudio | Reservar profundidad técnica futura asociada a proyectos, sin ruta ni enlace público en v1. | `posterior` / `reservado` | Nodo reservado en `docs/portfolio-mvp-sitemap.md`; **diferir**. | Requiere plantilla, selección de casos y artefacto estructurado distinto de la tarjeta actual. | `Codex con supervisión` | O2-KR1, O2-KR2; `BLG-F3-S05-02`, `BLG-F3-S06-01`. |
| Blog y autoridad técnica | Reservar una superficie editorial futura que refuerce arquitectura, procesos, datos, desarrollo e IA aplicada. | `posterior` / `reservado` | No hay rutas, colección, tarjetas ni integración; **diferir**. | Debe cerrar primero la integración, arquitectura de información y backlog editorial. | `Codex con supervisión` | O3-KR1 a KR4; `BLG-F4-S07-01`, `BLG-F4-S07-02`, `BLG-F4-S07-03`. |
| Footer profesional | Completar navegación secundaria, identidad y contacto global. | `posterior` / `reservado` | No existe componente global; **diferir**. | Su función y contenido se definen en Fase 5, sin duplicar el contacto del MVP. | `Codex con supervisión` | O4-KR1, O4-KR4; `BLG-F5-S09-03`. |
| Analytics e instrumentación | Medir visitas o conversiones mínimas tras definir la señal de valor. | `posterior` / `reservado` | No hay instrumentación observable; **diferir**. | Requiere decisión proporcional de métricas, privacidad e integración. | `Mixto` | O4-KR5; `BLG-F5-S09-02`. |
| Página 404 y recuperación | Recuperar navegación ante rutas inexistentes como parte del cierre de producto. | `posterior` / `reservado` | No existe ruta 404 dedicada; **diferir**. | Requiere especificación de comportamiento y contenido de recuperación. | `Codex con supervisión` | O4-KR1; `BLG-F5-S10-01`. |
| Páginas de consultoría, productos, newsletter y sistema editorial propio | Explorar evolución posterior sin dispersar el MVP. | `posterior` / `reservado` | No pertenecen al sitemap funcional ni tienen soporte actual; **diferir**. | Solo evaluar tras el cierre formal del MVP y backlog de continuidad. | `Mixto` | Continuidad posterior al MVP; `BLG-F6-S12-02`. |
| Casos de estudio individuales del pipeline estratégico | Convertir ITA, Cognark, Media Report CLI y el proyecto jurídico/documental en evidencia técnica profunda. | `bloqueado` / `sin insumos verificables` | El pipeline está registrado en roadmap y taxonomía, pero no en la UI actual; **diferir** sin sustituir el inventario público base. | Falta captura de contexto, problema, solución, arquitectura, tecnologías, estado y aprendizajes por caso. | `Mixto` | O2-KR1 a KR4; `BLG-F3-S05-03`, `BLG-F3-S06-01`, `BLG-F3-S06-02`. |
| Artículos de blog iniciales | Proveer autoridad editorial real para el futuro blog. | `bloqueado` / `sin insumos verificables` | El roadmap sugiere temas, pero no hay textos ni fuente publicable; **diferir**. | Requiere voz personal, evidencia y curaduría antes de escribir o publicar. | `Mixto` | O3-KR2 a KR4; `BLG-F4-S07-03`, `BLG-F4-S08-02`, `BLG-F4-S08-03`. |
| Integración con Medium | Habilitar el vínculo entre contenido editorial y portfolio sin decidirlo prematuramente. | `bloqueado` / `sin insumos verificables` | No hay cuenta, URL, adaptador ni decisión técnica observable; **diferir**. | Debe decidirse entre enlace manual, RSS o estrategia híbrida. | `Mixto` | O3-KR1, O4-KR3; `BLG-F4-S07-01`. |
| Validación externa documentada | Respaldar el lanzamiento con revisiones de terceros, no con promesas de confianza. | `bloqueado` / `sin insumos verificables` | No existe evidencia documental en el repositorio; **diferir**. | Depende de participación de revisores externos y de un protocolo de captura de hallazgos. | `Manual` | O4-KR1; `BLG-F6-S11-02`, `BLG-F6-S11-03`. |

## Bloqueos y validaciones manuales

| Tipo | Piezas afectadas | Acción requerida | Efecto sobre la prioridad |
| --- | --- | --- | --- |
| Validación manual breve | Propuesta de valor, proyectos públicos, experiencia, CV y enlaces profesionales. | Confirmar precisión, vigencia y coherencia con LinkedIn/GitHub antes de ampliar o modificar el contenido. | Conservan `critico`; el MVP no queda bloqueado por la comprobación. |
| Falta de información fuente | Casos de estudio del pipeline y artículos iniciales. | Reunir hechos, decisiones, resultados, límites y voz personal suficientes para una narrativa defendible. | Permanecen `bloqueado`; no se anuncian como cobertura actual. |
| Decisión técnica pendiente | Integración con Medium y arquitectura funcional del blog. | Elegir mecanismo de publicación e integración antes de diseñar rutas, listados o enlaces. | Permanece `bloqueado`; el blog continúa como nodo reservado. |
| Dependencia externa | Validación con terceros. | Ejecutar el protocolo de revisión y documentar hallazgos accionables. | Permanece `bloqueado`; no se usa como prueba de confianza hasta entonces. |

## Impacto futuro sobre contenido e interfaces

`src/i18n/site.ts` continúa siendo el origen de copy visible para home, perfil, enfoque, proyectos y experiencia. No se modifica en este work item. Sin embargo, `BLG-F1-S02-03` debe separar en el backlog narrativo las piezas que hoy están centralizadas allí: propuesta de valor, capacidades, perfil, formación, introducciones de proyectos, experiencia, contacto y CTAs. Cuando el volumen o la profundidad editorial lo justifiquen, estas piezas podrán migrar a módulos o colecciones específicas, sin decidir todavía un modelo de datos.

`src/data/projects.ts` sigue siendo el inventario público base del MVP. Los casos de estudio futuros necesitarán una relación explícita entre ese listado y un artefacto de detalle con contexto, problema, solución, arquitectura, tecnologías, estado y aprendizajes. Esa relación se decide en Fase 3; esta matriz no añade campos, tipos ni rutas.

## Criterio de cierre

`BLG-F1-S02-02` queda cerrado cuando esta matriz permite determinar, sin conocimiento tácito:

1. qué contenido debe conservarse o refinarse para explicar el MVP;
2. qué piezas requieren únicamente validación manual y cuáles están genuinamente bloqueadas;
3. qué contenido se difiere y a qué fase o work item se entrega;
4. qué fuentes actuales sostienen cada afirmación pública y qué evolución editorial queda pendiente.

Sprint 02 permanece abierto hasta que `BLG-F1-S02-03` convierta estas prioridades en el backlog narrativo inicial.

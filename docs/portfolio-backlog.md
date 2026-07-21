# Backlog del Portfolio

## Propósito y uso

Este documento traduce el roadmap estratégico del portfolio a un backlog operativo de ingeniería de requisitos. Su función no es reemplazar [portfolio-roadmap.md](/home/smaje/Documentos/Projects/portfolio/docs/portfolio-roadmap.md), sino convertirlo en trabajo ejecutable, trazable y priorizable.

La lectura del documento se hace en dos niveles:

1. **Fase**, para entender el objetivo macro del avance.
2. **Sprint**, para agrupar trabajo acotado y verificable dentro de cada fase.

Cada ítem del backlog está redactado con un nivel de detalle medio, suficiente para ejecutar, revisar y validar sin convertir el documento en una especificación exhaustiva.

## Convenciones

### Estados de ejecución

* **Manual**: actividad que depende principalmente de ti, de terceros, de accesos externos o de decisiones personales no automatizables.
* **Codex con supervisión**: actividad que puedo desarrollar técnicamente dentro del repositorio con tu revisión o aprobación.
* **Mixto**: actividad donde puedo preparar artefactos o implementar parte del trabajo, pero tú debes completar una decisión, contenido clave o acción externa.

### Estructura de los identificadores

Cada ítem usa el formato:

`BLG-F{fase}-S{sprint}-{consecutivo}`

Ejemplo:

`BLG-F1-S01-01`

### Criterio de priorización

* Los ítems que corrigen desalineación estratégica tienen prioridad sobre los de pulido visual.
* Los ítems que desbloquean otros entregables deben resolverse antes que los ítems dependientes.
* Los ítems manuales que bloquean trabajo técnico deben resolverse lo antes posible para evitar cuellos de botella.

---

## Fase 1 — Fundamento narrativo y estructura

### Sprint 01

**Objetivo del sprint:** realinear la narrativa base del portfolio ya existente con el roadmap vigente, dejando definido qué proyectos entran en el MVP, cómo se clasifican y cómo se compara la estructura pública actual del sitio con la estructura mínima objetivo.
**Alcance funcional:** inventario oficial de proyectos v1, taxonomía de estados de proyecto y matriz de correspondencia entre roadmap y estructura actual del sitio.
**No alcance:** implementación de nuevas rutas, redacción completa del copy final, cambios visuales, integración con Medium/blog, desarrollo de casos de estudio completos, analytics, SEO o pulido de microinteracciones.
**Entregables consolidados:**
* Tabla oficial de proyectos del portfolio v1 con criterio de inclusión, prioridad y visibilidad narrativa.
* Catálogo cerrado de estados de proyecto con definiciones operativas y reglas de uso.
* Matriz de correspondencia entre estructura mínima del roadmap y artefactos/rutas actuales del repositorio.
* Decisiones de alcance y trazabilidad que habilitan el Sprint 02 sin reabrir decisiones narrativas base.
**Criterio de salida:** el sprint termina cuando exista una versión única, verificable y consistente de qué proyectos entran en el MVP, cómo se clasifican y qué secciones actuales cubren o no cubren la intención estructural del roadmap.
**Tareas transversales:**
* Contrastar cada definición del sprint con la Fase 1 del roadmap para evitar decisiones aisladas del objetivo consultivo.
* Mantener trazabilidad explícita entre backlog, inventario visible en `src/data/projects.ts`, navegación/copy en `src/i18n/site.ts` y rutas reales existentes.
* Separar en todos los entregables lo que es decisión de contenido, lo que es decisión de estructura y lo que queda diferido a implementación posterior.
* Marcar desde este sprint los vacíos deliberadamente pospuestos para no convertirlos en deuda ambigua antes del Sprint 02.
**Dependencias internas:**
* `src/data/projects.ts` como fuente estructurada del inventario visible actual y punto de partida del inventario oficial.
* `src/i18n/site.ts` como referencia de navegación, copy y localización que condiciona la arquitectura de información real.
* Rutas actuales del sitio: `/`, `/about`, `/projects`, `/experience` y sus equivalentes `/en/`, `/en/about`, `/en/projects`, `/en/experience`.
* `docs/portfolio-roadmap.md`, especialmente Fase 1, su estructura mínima recomendada y el gap declarado de blog/casos de estudio.
**Riesgos técnicos concretos:**
* Tomar `src/data/projects.ts` como inventario definitivo sin distinguir entre lo actualmente visible y lo que debe permanecer en el MVP realineado.
* Definir taxonomía de estados demasiado abstracta que luego no clasifique todos los proyectos existentes sin excepciones ad hoc.
* Evaluar la arquitectura de información contra una visión ideal en lugar de contrastarla con las rutas y contenidos realmente presentes en el repositorio.
* Mezclar decisiones narrativas bilingües con decisiones de implementación y dejar inconsistencias entre español e inglés para fases posteriores.
**Decisiones cerradas para el sprint:**
* Sprint 01 es de alineación narrativa y estructural; no implementa nuevas páginas ni resuelve visualmente los gaps detectados.
* El inventario visible actual se toma como insumo, no como verdad final del MVP.
* La taxonomía de estados debe ser corta, reutilizable y suficiente para clasificar todos los proyectos oficiales sin sobreventa.
* La ausencia de blog y casos de estudio se documenta como gap estructural verificable, no como alcance de implementación inmediata.
**Cambios importantes de interfaces y tipos:**
* El sprint debe dejar documentado que la estructura tipo `Project` hoy usada en `src/data/projects.ts` podría requerir más semántica futura para soportar estado narrativo, prioridad o visibilidad, sin fijar todavía el shape final.
* Debe quedar explícito qué decisiones afectan navegación localizada o copy centralizado en `src/i18n/site.ts` y cuáles son solo de priorización editorial.
* La matriz roadmap-estructura debe tratar rutas existentes y faltantes como artefactos verificables del backlog, no solo como observaciones descriptivas.
**Escenarios de prueba de referencia:**
* Validar que todo proyecto del inventario oficial tenga correspondencia clara con el inventario visible actual o una justificación explícita de exclusión.
* Validar que la taxonomía propuesta clasifique todos los proyectos oficiales sin crear estados improvisados para casos aislados.
* Validar que cada elemento de la estructura mínima del roadmap tenga estado de cobertura observable frente a rutas y secciones reales del sitio.
* Validar que una decisión que afecte nombre, estado o navegación tenga criterio consistente entre español e inglés.

#### BLG-F1-S01-01 — Consolidar inventario estratégico de proyectos
**Objetivo:** definir el conjunto oficial de proyectos que deben aparecer en la primera versión alineada del portfolio.
**Descripción:** el sitio actual muestra proyectos, pero no coincide completamente con la selección prioritaria del roadmap. Este ítem establece el inventario de referencia para contenido, navegación y futuros casos de estudio.
**Actividades:**
* Revisar la lista priorizada del roadmap y confirmar cuáles proyectos entran en la primera versión pública.
* Definir por cada proyecto: nombre público, estado, tipo de proyecto y qué capacidad demuestra.
* Marcar proyectos a retirar de la narrativa principal o pasar a segundo plano.
**Entregable esperado:** tabla consolidada de proyectos oficiales para el portfolio v1.
**Dependencias:** roadmap actualizado y criterio estratégico vigente.
**Tipo de ejecución:** Mixto
**Notas de validación:** la lista final debe coincidir con la narrativa consultiva del roadmap y no contradecir el contenido actual del sitio.
**Contexto técnico:** hoy ya existe un inventario visible en `src/data/projects.ts`, con proyectos destacados y secundarios por locale. Este WI no asume que ese archivo ya represente la decisión correcta del MVP; define el inventario oficial que después debe alimentar datos, navegación, priorización editorial y backlog de casos de estudio.
**Alcance funcional:**
* Definir por cada proyecto oficial: nombre público en español e inglés, estado narrativo, tipo de proyecto, capacidad demostrada, prioridad relativa y condición de visibilidad dentro del MVP.
* Marcar si cada proyecto queda como destacado, secundario o excluido de la narrativa principal del portfolio v1.
* Establecer una regla explícita para proyectos actualmente visibles que no pasen el corte estratégico del roadmap.
* Asegurar que la selección final sea utilizable por sprints posteriores sin volver a debatir “entra/no entra” a nivel de proyecto.
**No alcance:**
* Redacción completa de casos de estudio.
* Implementación de filtros, tabs o controles UI para proyectos.
* Creación de nuevas páginas o cambios en rutas existentes.
**Gherkin ampliado:**
* **Escenario: consolidación nominal del inventario oficial**
  **Dado** el roadmap de Fase 1 y el inventario visible actual en `src/data/projects.ts`
  **Cuando** se consolida la tabla oficial de proyectos del MVP
  **Entonces** cada proyecto incluido queda con nombre público ES/EN, tipo, estado narrativo, capacidad demostrada, prioridad y condición de visibilidad.
* **Escenario: exclusión sin contradicción del contenido visible actual**
  **Dado** un proyecto que hoy aparece en el sitio pero no soporta la narrativa prioritaria del roadmap
  **Cuando** se decide excluirlo del MVP o pasarlo a segundo plano
  **Entonces** la decisión queda documentada con justificación y sin dejarlo ambiguamente dentro de la narrativa principal.
* **Escenario: persistencia del inventario de referencia para sprints siguientes**
  **Dado** que Sprint 02 dependerá del mapa del sitio y la priorización de contenido
  **Cuando** se cierra este WI
  **Entonces** existe una única tabla de referencia que puede reutilizarse sin reinterpretar nombres, estados ni prioridad.
* **Escenario: compatibilidad con el roadmap actual**
  **Dado** el objetivo consultivo del portfolio definido en `docs/portfolio-roadmap.md`
  **Cuando** se revisa la tabla final de proyectos
  **Entonces** el conjunto priorizado demuestra sistemas, procesos, datos, desarrollo o transformación digital sin inflar alcance académico o anecdótico.
**Desglose de tareas:**
* **Arquitectura**
  * Identificar la fuente actual de inventario visible y sus límites semánticos.
  * Definir el contrato mínimo del inventario estratégico sin fijar todavía el shape técnico final.
* **Negocio/valor**
  * Alinear la selección de proyectos con la narrativa consultiva que el roadmap quiere comunicar.
  * Determinar qué proyectos aportan autoridad profesional y cuáles distraen o diluyen el mensaje.
* **Funcional**
  * Consolidar la tabla oficial con campos narrativos y de visibilidad.
  * Marcar explícitamente proyectos destacados, secundarios y fuera del MVP.
* **No funcional**
  * Verificar consistencia bilingüe en nombres públicos y criterio de correspondencia ES/EN.
  * Evitar categorías ambiguas o dependientes de memoria informal.
* **Pruebas**
  * Revisar que ningún proyecto oficial quede sin capacidad demostrada asociada.
  * Revisar que ningún proyecto visible actual quede sin decisión de inclusión, exclusión o segundo plano.
* **Documentación/aceptación**
  * Dejar la tabla lista para ser referenciada desde Sprint 02 y Fase 3.
  * Documentar supuestos de proyectos dudosos o pendientes de validación manual.
**Checklist de implementación:**
* El inventario oficial existe y no depende de releer el roadmap completo para entender prioridades.
* Ningún proyecto quedó listado sin capacidad demostrada asociada.
* La versión en español está definida y existe criterio explícito de correspondencia con inglés.
* Los proyectos retirados del MVP están marcados como fuera de narrativa principal o en segundo plano.
* No quedan proyectos “temporales” dentro del inventario por falta de decisión.
* La prioridad entre proyectos destacados y secundarios no depende de interpretación posterior.
**Estado actual:** Cerrado el 2026-06-25. Regularizado el 2026-07-13.
**Cierre de implementación:**
* El inventario oficial del MVP quedó materializado en `src/data/projects.ts` como inventario público base canónico, bilingüe y reutilizable para el portfolio v1.
* Los cuatro proyectos visibles actuales quedaron definidos con nombre público ES/EN, estado narrativo, tipo, capacidades demostradas, prioridad estratégica y visibilidad dentro del portfolio.
* La visibilidad pública actual se conserva: tres proyectos `featured` y un proyecto `secondary`, sin alterar todavía rutas ni UI.
* La correspondencia entre español e inglés quedó normalizada sobre slugs canónicos únicos por proyecto.
* La divergencia con la selección estratégica del roadmap quedó resuelta a nivel de cierre: `SIMIGS`, `ERP Turismo`, `ERP Agroinsumos` y `Proyecto educativo de estructuras de datos` conforman el inventario público base del MVP; `ITA`, `Cognark`, `Media Report CLI` y el proyecto jurídico/documental quedan como pipeline priorizado para futuros casos de estudio y no como sustitución inmediata del inventario visible.
* Los proyectos fuera del inventario público base no se consideran descartados; quedan explícitamente diferidos a Fase 3 por madurez narrativa, profundidad de artefacto y necesidad de estructura de caso de estudio.
* Validación técnica ejecutada: `./node_modules/.bin/astro check`, `./node_modules/.bin/astro build` y `./node_modules/.bin/biome check src/data/projects.ts src/components/ProjectsGrid.astro`.
**Preguntas de definición y cierre:**
* ¿Qué proyectos hoy visibles en `src/data/projects.ts` siguen siendo estratégicos para el MVP y cuáles solo conservan valor de archivo o contexto?
* ¿Existe algún proyecto que deba mantenerse visible por credibilidad técnica aunque no sea prioritario narrativamente?
* ¿Qué evidencia mínima permite decidir que un proyecto “entra” al MVP y no queda como aspiración futura?
* ¿Hay proyectos con traducción pública diferente entre español e inglés que deban normalizarse desde este sprint?

#### BLG-F1-S01-02 — Definir taxonomía de estados de proyecto
**Objetivo:** estandarizar cómo se clasifica cada proyecto dentro del portfolio.
**Descripción:** la comunicación pública debe diferenciar análisis, desarrollo, MVP, prototipo y documentación arquitectónica para evitar ambigüedad o sobreventa.
**Actividades:**
* Definir un catálogo corto de estados válidos.
* Asignar definición operativa a cada estado.
* Asociar cada estado con el tono narrativo que debe usar el portfolio.
**Entregable esperado:** taxonomía de estados con definiciones y reglas de uso.
**Dependencias:** inventario estratégico de proyectos.
**Tipo de ejecución:** Mixto
**Notas de validación:** cada proyecto debe poder clasificarse sin ambigüedad y sin requerir estados nuevos improvisados.
**Contexto técnico:** la taxonomía regulará cómo se describe el inventario consolidado y condicionará futuros datos, badges narrativos o criterios editoriales. No debe inventarse una clasificación desligada de los proyectos reales del repositorio ni de la narrativa ya priorizada.
**Alcance funcional:**
* Definir un catálogo corto, cerrado y mutuamente entendible de estados válidos para el portfolio.
* Asignar a cada estado una definición operativa, criterios de entrada/salida y tono narrativo permitido.
* Incluir ejemplos positivos y negativos que eviten sobrerrepresentar prototipos, análisis o piezas documentales como si fueran productos finales.
* Definir una regla de uso consistente entre español e inglés para que el estado sea canónico aunque cambie su redacción pública.
**No alcance:**
* Implementación de badges, chips o indicadores visuales.
* Diseño de estilos o semántica CSS.
* Filtros interactivos o navegación basada en estados.
**Cambios esperados de interfaces/tipos:**
* Documentar que la futura estructura de proyectos probablemente necesitará un campo canónico de estado o taxonomía.
* Documentar que podría requerirse una regla de traducción o presentación por locale distinta del valor semántico base.
* No fijar en este sprint una interfaz TypeScript definitiva ni un cambio efectivo en `src/data/projects.ts`.
**Gherkin ampliado:**
* **Escenario: clasificación nominal del inventario consolidado**
  **Dado** el inventario oficial de proyectos del Sprint 01
  **Cuando** se aplica la taxonomía definida
  **Entonces** cada proyecto puede clasificarse con un único estado válido y una narrativa coherente.
* **Escenario: rechazo de clasificación ambigua**
  **Dado** un proyecto cuya descripción encaja parcialmente en más de un estado
  **Cuando** la definición operativa no permite distinguirlo con claridad
  **Entonces** la taxonomía se considera incompleta y debe ajustarse antes de cerrarse el WI.
* **Escenario: consistencia bilingüe del estado**
  **Dado** un estado definido en español
  **Cuando** se describe el mismo proyecto en inglés
  **Entonces** se mantiene el mismo valor semántico base y solo cambia su formulación pública.
* **Escenario: reutilización sin estados ad hoc**
  **Dado** el conjunto de proyectos oficiales del MVP
  **Cuando** se intenta clasificar el último proyecto del inventario
  **Entonces** no es necesario crear un estado nuevo improvisado para que encaje.
**Desglose de tareas:**
* **Arquitectura**
  * Determinar qué dimensión semántica será estable: estado narrativo, tipo de proyecto o ambos.
  * Separar la taxonomía de estado de otras etiquetas como foco técnico o tags de tecnologías.
* **Negocio/valor**
  * Definir cómo cada estado protege la credibilidad del portfolio y evita sobreventa.
  * Alinear la taxonomía con la intención consultiva y no solo con etiquetas de delivery técnico.
* **Funcional**
  * Crear el catálogo cerrado y sus definiciones operativas.
  * Asignar criterio de uso y ejemplos por estado.
* **No funcional**
  * Garantizar consistencia entre español e inglés.
  * Evitar definiciones que dependan de conocimiento tácito o interpretación personal futura.
* **Pruebas**
  * Verificar que todos los proyectos oficiales clasifican sin solapamientos.
  * Probar casos límite: proyecto en análisis, MVP parcial, documentación arquitectónica o pieza educativa.
* **Documentación/aceptación**
  * Dejar reglas de uso reutilizables para backlog narrativo, proyectos y futuros casos de estudio.
  * Registrar restricciones para no degradar la taxonomía en sprints posteriores.
**Checklist de implementación:**
* El catálogo está definido y no presenta solapamientos que obliguen a dobles clasificaciones.
* Cada estado tiene definición operativa y regla narrativa, no solo nombre.
* Existe correspondencia clara entre español e inglés para cada estado.
* Ningún proyecto del inventario oficial requiere crear un estado ad hoc.
* La taxonomía no mezcla estado narrativo con tags técnicos o foco funcional.
* Los ejemplos negativos dejan claro qué no debe venderse como producto o implementación completa.
**Preguntas de definición y cierre:**
* ¿La taxonomía debe priorizar etapa de madurez, tipo de entrega o naturaleza narrativa del proyecto?
* ¿Qué estados son indispensables para comunicar con honestidad lo ya construido sin devaluar proyectos valiosos pero parciales?
* ¿Hay algún proyecto actual que tensione el catálogo y obligue a revisar definiciones antes de cerrar el WI?
* ¿Qué redacción pública en inglés podría inducir sobreventa aunque el estado semántico sea correcto?
**Estado actual:** Cerrado el 2026-06-26.
**Cierre de implementación:**
* La taxonomía normativa quedó documentada en `docs/project-status-taxonomy.md` con catálogo cerrado, definiciones operativas, reglas de uso y validación sobre roadmap e inventario visible actual.
* Se formalizó la separación entre estado de proyecto, tipo, visibilidad narrativa, prioridad estratégica y tags técnicos para evitar que `narrativeStatus` siga funcionando como estado implícito.
* Quedó documentado el impacto futuro esperado en `src/data/projects.ts`: un posible campo canónico `projectStatus` con presentación localizada separada del valor semántico base, sin fijar todavía el shape TypeScript.

#### BLG-F1-S01-03 — Revisar la arquitectura de información actual frente al roadmap
**Objetivo:** identificar qué secciones actuales se conservan, ajustan o amplían.
**Descripción:** el sitio ya tiene estructura base, pero necesita contrastarse contra el roadmap para decidir qué entra en el MVP real.
**Actividades:**
* Comparar secciones actuales del sitio con la estructura mínima recomendada.
* Identificar vacíos: blog, casos de estudio, stack/capacidades, cierre de lanzamiento.
* Marcar secciones completas, parciales o ausentes.
**Entregable esperado:** matriz de correspondencia entre roadmap y estructura actual.
**Dependencias:** revisión del repositorio y del roadmap.
**Tipo de ejecución:** Codex con supervisión
**Notas de validación:** la matriz debe permitir justificar por qué cada fase del backlog existe.
**Contexto técnico:** este WI debe contrastar la estructura real del sitio y no una arquitectura objetivo hipotética. Hoy existen rutas públicas para inicio, perfil, proyectos y experiencia, además de navegación localizada en `src/i18n/site.ts`; blog y casos de estudio todavía no existen como rutas o secciones públicas equivalentes.
**Alcance funcional:**
* Construir una matriz sección/ruta actual vs estructura mínima recomendada por el roadmap.
* Marcar por cada elemento su estado de cobertura: `completa`, `parcial`, `ausente` o `reubicable`.
* Registrar si el gap depende de contenido, navegación, estructura o implementación futura.
* Decidir explícitamente si cada vacío detectado debe resolverse en el MVP o diferirse a un sprint posterior identificado.
**No alcance:**
* Diseño visual de nuevas páginas o secciones.
* Implementación de rutas faltantes.
* Redacción definitiva de copy para navegación o páginas futuras.
**Cambios importantes de interfaces y tipos:**
* Documentar impactos esperados en navegación localizada si una sección deja de ser bloque interno y pasa a página o viceversa.
* Documentar posibles necesidades de nuevos artefactos de datos o copy centralizado para cubrir secciones faltantes.
* No prometer aún nuevos componentes, tipos o rutas; solo dejar identificados los impactos previsibles.
**Gherkin ampliado:**
* **Escenario: cobertura nominal de la estructura mínima**
  **Dado** el roadmap de Fase 1 y las rutas actuales del sitio
  **Cuando** se levanta la matriz de correspondencia
  **Entonces** cada sección objetivo queda asociada a una ruta/sección existente o marcada como `ausente` o `reubicable`.
* **Escenario: detección explícita de vacíos actuales**
  **Dado** que blog y casos de estudio no están resueltos en la estructura pública actual
  **Cuando** se evalúa la cobertura del roadmap
  **Entonces** esos gaps quedan registrados con su dependencia y sin convertirse automáticamente en implementación del sprint.
* **Escenario: correspondencia bilingüe observable**
  **Dado** una ruta o sección existente en español
  **Cuando** se valida su equivalente en inglés
  **Entonces** la matriz refleja si la cobertura es consistente entre `/` y `/en/`.
* **Escenario: trazabilidad hacia backlog siguiente**
  **Dado** un gap marcado como `parcial`, `ausente` o `reubicable`
  **Cuando** se cierra el WI
  **Entonces** queda indicado qué sprint o decisión posterior debe absorberlo.
**Desglose de tareas:**
* **Arquitectura**
  * Inventariar rutas, páginas y grandes bloques existentes del sitio.
  * Traducir la estructura mínima del roadmap a un marco comparable con la arquitectura actual.
* **Negocio/valor**
  * Evaluar si la estructura existente soporta la intención de posicionamiento profesional del roadmap.
  * Diferenciar vacíos que dañan el mensaje del MVP de vacíos que solo aplazan profundidad.
* **Funcional**
  * Construir la matriz de cobertura por sección objetivo.
  * Marcar estados de cobertura y dependencias por gap.
* **No funcional**
  * Verificar consistencia de localización y navegabilidad entre español e inglés.
  * Evitar conclusiones basadas en secciones implícitas o contenido no visible públicamente.
* **Pruebas**
  * Comprobar que toda sección mínima del roadmap tenga un estado observable en la matriz.
  * Comprobar que los gaps tengan dependencia y decisión de tratamiento posterior.
* **Documentación/aceptación**
  * Dejar la matriz lista para alimentar sitemap, priorización de contenido y backlog narrativo del Sprint 02.
  * Señalar explícitamente qué hallazgos son estructurales y cuáles son solo editoriales.
**Checklist de implementación:**
* La matriz está levantada y contiene no alcance explícito del WI.
* Cada ruta existente relevante está mapeada a un objetivo del roadmap o marcada como fuera de estructura mínima.
* Cada gap identificado indica si se resuelve en MVP, se difiere o requiere decisión manual.
* La navegación y cobertura en español fueron contrastadas con su impacto en `/en/`.
* No se confundieron secciones deseadas del roadmap con artefactos ya existentes en el repo.
* La matriz permite explicar por qué existen los sprints posteriores de blog, casos de estudio y home.
**Preguntas de definición y cierre:**
* ¿Qué secciones actuales del sitio ya cumplen suficientemente el objetivo del roadmap aunque su copy aún no esté refinado?
* ¿Qué gaps son estructurales de verdad y cuáles son solo ausencia de contenido o profundidad?
* ¿Hay alguna ruta actual que deba degradarse a bloque interno o, al contrario, convertirse luego en página independiente?
* ¿Qué vacíos deben quedar explícitamente diferidos para no inflar el alcance del MVP antes de Sprint 02?
**Estado actual:** Cerrado el 11 de julio de 2026.
**Cierre de implementación:**
* La matriz de correspondencia quedó documentada en `docs/portfolio-information-architecture-audit.md`, basada en las rutas, componentes, navegación localizada y datos públicos realmente observables.
* Se confirmó cobertura bilingüe para inicio, perfil, proyectos y experiencia; contacto se conserva como bloque de la home y experiencia se incorpora como ruta complementaria a la estructura mínima.
* Blog y casos de estudio quedaron identificados como gaps estructurales; stack/capacidades quedó clasificado como contenido existente pero reubicable, sin crear rutas ni componentes prematuramente.
* Cada gap quedó asociado a su dependencia, decisión de tratamiento y work items posteriores, incluidos los pendientes de footer, analytics, 404 y validación de lanzamiento.

**Estado actual del sprint:** Cerrado el 2026-07-13.
**Cierre del sprint:**
* El sprint deja una base verificable y no ambigua para Sprint 02: inventario público base del MVP, taxonomía normativa de estados y auditoría de arquitectura de información.
* La relación entre estrategia y ejecución quedó cerrada sin reabrir Fase 3: el inventario público base del MVP se mantiene sobre proyectos ya visibles y defendibles; el roadmap conserva un pipeline separado de casos de estudio prioritarios para madurar y publicar después.
* Los vacíos diferidos quedaron identificados sin inflar el alcance del sprint: blog, casos de estudio, stack/capacidades, footer, analytics, 404 y validación de lanzamiento.
* Sprint 02 queda desbloqueado con trazabilidad explícita hacia sitemap, priorización de contenido y backlog narrativo.
**Evidencia de verificación del sprint:**
* `src/data/projects.ts` materializa el inventario público base y su correspondencia bilingüe.
* `docs/project-status-taxonomy.md` define la taxonomía canónica y documenta su aplicación sobre el roadmap y el inventario visible.
* `docs/portfolio-information-architecture-audit.md` deja la matriz de cobertura, gaps y dependencias para las fases siguientes.
* Validación técnica de regularización ejecutada el 2026-07-13: `./node_modules/.bin/astro check`, `./node_modules/.bin/astro build` y `./node_modules/.bin/biome check .`.

### Sprint 02

**Objetivo del sprint:** convertir la alineación lograda en Sprint 01 en una arquitectura objetivo del MVP, una prioridad de contenido explícita y un backlog narrativo inicial reutilizable por las fases de implementación.
**Alcance funcional:** sitemap objetivo bilingüe del MVP, matriz de priorización de contenido por página/sección y backlog narrativo inicial con piezas de copy, dependencias y tipo de ejecución.
**No alcance:** implementación de rutas nuevas, redacción final del copy, publicación de casos de estudio, integración efectiva con Medium, definición técnica de analytics/footer/404, cambios visuales o refactor de datos/componentes fuera de lo que el sprint deje especificado.
**Entregables consolidados:**
* Sitemap objetivo del MVP con distinción entre páginas independientes, bloques internos, nodos reservados y elementos explícitamente diferidos.
* Matriz de priorización de contenido con clasificación `critico`, `importante`, `posterior` y bloqueo documentado cuando aplique.
* Backlog narrativo inicial por página/sección con piezas de contenido, dependencia, evidencia mínima y tipo de ejecución.
* Trazabilidad explícita entre inventario público base, taxonomía de estados, auditoría de arquitectura de información y fases posteriores del roadmap.
**Criterio de salida:** el sprint termina cuando exista una definición única y reutilizable de qué estructura pública debe tener el MVP, qué contenido entra realmente en v1 y qué piezas narrativas concretas deben producirse después, sin reabrir decisiones de Sprint 01 ni mezclar diseño/implementación con planificación.
**Tareas transversales:**
* Mantener trazabilidad explícita entre `docs/portfolio-information-architecture-audit.md`, `docs/portfolio-roadmap.md`, `src/i18n/site.ts`, `src/pages/` y `src/data/projects.ts`.
* Separar en cada entregable qué queda visible en el MVP actual, qué queda reservado para evolución estructural y qué se difiere con work item identificado.
* Verificar paridad bilingüe entre español e inglés para rutas, labels de navegación y criterios de publicación.
* Evitar que la priorización de contenido dependa de intuición editorial no documentada o de recordar conversaciones previas.
* Dejar base suficiente para que Fase 2 implemente home/CTAs y Fases 3-4 implementen casos de estudio y blog sin rediscutir el mapa del sitio.
**Dependencias internas:**
* `docs/portfolio-information-architecture-audit.md` como línea base estructural y fuente principal para diferenciar `completa`, `parcial`, `ausente` y `reubicable`.
* `docs/project-status-taxonomy.md` para no perder consistencia entre estado narrativo, visibilidad y profundidad posterior de casos de estudio.
* `src/i18n/site.ts` como estado actual de navegación localizada y copy centralizado.
* `src/pages/` y componentes de página como evidencia de qué rutas y bloques existen realmente hoy.
* `src/data/projects.ts` como inventario público base que condiciona proyectos destacados, secundarios y futuras rutas de profundidad.
**Riesgos técnicos concretos:**
* Diseñar un sitemap idealizado que ignore restricciones reales de navegación localizada, anchors existentes y rutas ya maduras del sitio.
* Priorizar contenido solo por intuición estratégica sin mapearlo a páginas, secciones, origen de datos y dependencia de implementación.
* Tratar blog y casos de estudio como si ya tuvieran arquitectura o integración decidida, cuando el repositorio solo soporta reservarles espacio narrativo y estructural.
* Reabrir decisiones ya cerradas en Sprint 01 sobre inventario base, taxonomía o función de experiencia dentro del MVP.
* Mezclar backlog narrativo con copy final y dejar piezas sin responsable, sin evidencia mínima o sin dependencia explícita.
**Decisiones cerradas para el sprint:**
* El inventario público base definido en Sprint 01 no se reevalúa; Sprint 02 solo lo usa para decidir jerarquía, profundidad y trazabilidad de contenido.
* `Experiencia` se conserva como página independiente dentro del MVP por su aporte de confianza y evidencia profesional.
* `Contacto` se mantiene como bloque interno de la home mientras no exista una razón estructural verificable para volverlo página independiente.
* `Stack/capacidades` se resolverá primero como función narrativa antes de decidir si merece o no una ruta propia.
* `Blog` y `casos de estudio` deben quedar contemplados en la arquitectura objetivo, pero su implementación y sus decisiones técnicas específicas permanecen diferidas a Fase 3 y Fase 4.
**Cambios importantes de interfaces y tipos:**
* El sprint debe dejar explícito qué labels y enlaces de `src/i18n/site.ts` podrían cambiar cuando blog o casos de estudio pasen a navegación pública, sin exigir todavía una edición de implementación.
* Debe quedar documentado si el MVP necesita distinguir entre nodos navegables, bloques internos y nodos reservados para fases posteriores.
* La priorización de contenido debe anticipar que algunos textos hoy centralizados en `src/i18n/site.ts` podrían migrar a artefactos narrativos más granulares si crece la profundidad editorial del sitio.
* Debe quedar indicado si `src/data/projects.ts` necesitará más adelante una relación explícita entre proyecto listado y caso de estudio publicable, sin fijar todavía el shape final.
**Escenarios de prueba de referencia:**
* Validar que cada elemento del sitemap objetivo tenga estado observable: página, bloque interno, reservado o diferido.
* Validar que cada contenido clasificado como `critico` esté vinculado a una página/sección concreta, a un objetivo del roadmap y a un tipo de ejecución.
* Validar que cada pieza del backlog narrativo indique evidencia mínima, dependencia y responsable principal sin exigir reinterpretación posterior.
* Validar que ninguna decisión del sprint contradiga el inventario base, la taxonomía normativa ni la auditoría de arquitectura de información ya cerrados.

#### BLG-F1-S02-01 — Formalizar mapa del sitio objetivo del MVP
**Objetivo:** definir la estructura pública objetivo del portfolio v1.
**Descripción:** este ítem aterriza la navegación y las páginas finales que el MVP debe exponer, considerando lo ya construido y lo faltante.
**Actividades:**
* Definir páginas obligatorias y secciones internas por página.
* Señalar qué irá como página independiente y qué irá como bloque dentro de otra página.
* Incluir rutas bilingües cuando aplique.
**Entregable esperado:** sitemap funcional del MVP.
**Dependencias:** inventario de proyectos y matriz de correspondencia.
**Tipo de ejecución:** Codex con supervisión
**Notas de validación:** el mapa debe cubrir identidad, proyectos, experiencia, blog, contacto y futuros casos de estudio.
**Contexto técnico:** hoy el sitio ya expone rutas públicas bilingües para inicio, perfil, proyectos y experiencia, además de bloques internos navegables para enfoque y contacto. `docs/portfolio-information-architecture-audit.md` ya concluyó que blog y casos de estudio están ausentes, que `stack/capacidades` es reubicable y que `experiencia` debe preservarse como página independiente. Este WI no rediseña la UI; convierte esa línea base en un sitemap objetivo verificable.
**Alcance funcional:**
* Definir el conjunto de nodos del MVP distinguiendo `página independiente`, `bloque interno`, `nodo reservado` y `diferido fuera de v1`.
* Documentar por cada nodo su objetivo narrativo, su paridad ES/EN y su relación con navegación pública o acceso contextual.
* Resolver explícitamente la ubicación estructural de `stack/capacidades`, `experiencia`, `contacto`, `blog` y `casos de estudio`.
* Establecer para blog y casos de estudio si quedan visibles desde la navegación del MVP, visibles solo como destino futuro o reservados sin enlace público hasta su fase correspondiente.
**No alcance:**
* Implementación de rutas Astro nuevas o cambios efectivos en `src/i18n/site.ts`.
* Redacción de títulos finales, microcopy o metadata por página.
* Decisión técnica de integración con Medium.
**Cambios esperados de interfaces/tipos:**
* Registrar si la navegación actual necesitará nuevos labels, anchors o rutas localizadas cuando se ejecute el sitemap.
* Registrar si la noción de “nodo reservado” requiere una convención documental o futura interfaz de navegación más expresiva que la lista simple actual.
* No fijar todavía un contrato TypeScript nuevo para navegación o sitemap.
**Gherkin ampliado:**
* **Escenario: consolidación nominal del sitemap objetivo**
  **Dado** la auditoría de arquitectura de información y las rutas públicas actuales del repositorio
  **Cuando** se formaliza el sitemap del MVP
  **Entonces** cada función del sitio queda clasificada como página independiente, bloque interno, nodo reservado o elemento diferido fuera de v1.
* **Escenario: rechazo de sitemap ambiguo frente a rutas y locales**
  **Dado** una propuesta de sitemap que no distingue entre rutas reales, anchors internos y nodos futuros
  **Cuando** se intenta cerrarla como referencia del MVP
  **Entonces** el WI no puede darse por válido hasta documentar la paridad ES/EN y el comportamiento estructural de cada nodo.
* **Escenario: trazabilidad estructural hacia fases posteriores**
  **Dado** que blog y casos de estudio aún no existen como rutas públicas implementadas
  **Cuando** el sitemap los contempla dentro de la arquitectura objetivo
  **Entonces** queda indicada su condición de reserva, su dependencia y la fase posterior que materializará cada nodo.
* **Escenario: compatibilidad con los artefactos ya maduros del sitio**
  **Dado** que `experiencia`, `proyectos`, `perfil` e `inicio` ya existen con cobertura pública bilingüe
  **Cuando** se define el sitemap objetivo
  **Entonces** esos nodos se conservan o reubican con justificación explícita y sin perder su trazabilidad con la implementación actual.
**Desglose de tareas:**
* **Arquitectura**
  * Traducir la auditoría actual a un modelo de nodos del sitemap con estado y función narrativa.
  * Definir reglas para distinguir rutas, bloques internos y nodos reservados.
* **Negocio/valor**
  * Asegurar que la estructura soporte identidad profesional, prueba de capacidad, autoridad técnica y contacto.
  * Evitar que la arquitectura del MVP parezca una expansión descontrolada del sitio en lugar de una versión consultiva focalizada.
* **Funcional**
  * Listar páginas obligatorias y secciones internas por página.
  * Resolver el tratamiento de blog, casos de estudio, stack/capacidades y experiencia dentro del mapa objetivo.
* **No funcional**
  * Garantizar paridad bilingüe y consistencia de reglas de navegación.
  * Evitar dependencias estructurales que supongan integración externa todavía no decidida.
* **Pruebas**
  * Verificar que cada nodo tenga un estado observable y no quede en una categoría ambigua.
  * Verificar que el sitemap permita justificar la secuencia de fases posteriores del backlog.
* **Documentación/aceptación**
  * Dejar el sitemap en un formato reutilizable para implementación y revisión editorial.
  * Registrar decisiones de diferimiento sin esconder vacíos estructurales del MVP.
**Checklist de implementación:**
* Cada nodo del sitemap está clasificado y no depende de interpretación posterior.
* La relación entre página independiente, bloque interno y nodo reservado quedó explícita.
* `Experiencia` y `contacto` tienen tratamiento estructural cerrado y coherente con la auditoría.
* `Blog` y `casos de estudio` aparecen con dependencia y estado, no como promesas implícitas.
* La paridad ES/EN está definida para todos los nodos que deban ser públicos.
* No se introducen rutas hipotéticas sin indicar si son inmediatas o diferidas.
**Preguntas de definición y cierre:**
* ¿Blog debe figurar en navegación pública desde el MVP inicial o solo quedar reservado hasta la Fase 4?
* ¿Casos de estudio deben vivir como detalle de proyectos o como agrupación separada cuando llegue Fase 3?
* ¿`Stack/capacidades` comunica mejor como bloque de home, bloque de perfil o ruta independiente?
* ¿Existe algún nodo actual cuya permanencia estructural contradiga el posicionamiento consultivo del roadmap?
**Estado actual:** Cerrado el 2026-07-13.
**Cierre de implementación:**
* El sitemap funcional del MVP quedó documentado en `docs/portfolio-mvp-sitemap.md` como entregable canónico de `BLG-F1-S02-01`.
* La arquitectura objetivo distingue `página independiente`, `bloque interno`, `nodo reservado` y `diferido fuera de v1`, evitando mezclar rutas reales, anchors internos y promesas futuras.
* Inicio, perfil, proyectos y experiencia quedan como páginas públicas bilingües; enfoque/capacidades y contacto quedan como bloques internos de la home con paridad ES/EN.
* Blog y casos de estudio quedan contemplados como nodos reservados sin enlace público en v1, dependientes de Fase 4 y Fase 3 respectivamente.
* Footer, analytics y 404 quedan explícitamente diferidos a Fase 5 como piezas de cierre técnico, no como parte del sitemap funcional de contenido del Sprint 02.
* No se modificaron rutas Astro, `src/i18n/site.ts`, `Header.astro`, `BasePage.astro` ni `Layout.astro`; la navegación runtime conserva el contrato simple `{ label, href }[]`.

#### BLG-F1-S02-02 — Definir criterio de priorización de contenido público
**Objetivo:** decidir qué contenido entra en v1, qué se posterga y qué se reserva para fases futuras.
**Descripción:** evita inflar el alcance del MVP con piezas todavía inmaduras o innecesarias para el objetivo consultivo.
**Actividades:**
* Clasificar contenido en crítico, importante y futuro.
* Marcar contenidos bloqueados por falta de información o madurez.
* Relacionar prioridades con los OKRs del roadmap.
**Entregable esperado:** matriz de priorización de contenido del MVP.
**Dependencias:** sitemap funcional y backlog del roadmap.
**Tipo de ejecución:** Codex con supervisión
**Notas de validación:** los contenidos críticos deben explicar claramente quién eres, qué haces, qué proyectos puedes construir y cómo contactarte.
**Contexto técnico:** el repositorio ya contiene contenido público distribuido entre home, perfil, proyectos, experiencia, contacto y CV, pero su jerarquía editorial aún no está formalizada. Además, varios gaps del roadmap dependen de madurez narrativa o de decisiones externas: blog, casos de estudio profundos, validación externa, analytics y piezas de cierre. Este WI define una matriz que permita diferenciar lo publicable ahora de lo que debe bloquearse o diferirse sin ambigüedad.
**Alcance funcional:**
* Definir una escala de priorización mínima para el MVP: `critico`, `importante`, `posterior` y `bloqueado` cuando aplique.
* Clasificar contenidos por página/sección, indicando objetivo del roadmap, dependencia principal, fuente actual y tipo de ejecución.
* Documentar qué contenido ya existe y requiere solo reubicación o ajuste, y qué contenido aún no existe o no es suficientemente maduro para entrar en v1.
* Establecer reglas explícitas para no promover a contenido crítico piezas sin evidencia, sin voz propia o sin soporte estructural del sitemap.
**No alcance:**
* Redactar el contenido final de cada pieza.
* Implementar componentes, páginas o integraciones nuevas.
* Repriorizar objetivos del roadmap por fuera del alcance del MVP.
**Cambios esperados de interfaces/tipos:**
* Dejar indicado qué piezas hoy viven en `src/i18n/site.ts` y podrían migrar a un backlog narrativo o a módulos de contenido más específicos.
* Registrar si alguna prioridad depende de un futuro artefacto estructurado adicional, como detalle de caso de estudio o fuente editorial para blog.
* No introducir todavía nuevos tipos en el código para modelar prioridad de contenido.
**Gherkin ampliado:**
* **Escenario: clasificación nominal del contenido del MVP**
  **Dado** el sitemap objetivo del Sprint 02 y los OKRs activos del roadmap
  **Cuando** se construye la matriz de priorización
  **Entonces** cada contenido relevante queda clasificado como `critico`, `importante`, `posterior` o `bloqueado`, con página/sección y dependencia asociadas.
* **Escenario: contenido bloqueado por falta de madurez o evidencia**
  **Dado** una pieza asociada a blog, caso de estudio o validación externa que aún no cuenta con insumos suficientes
  **Cuando** se evalúa su entrada al MVP
  **Entonces** la pieza se marca como `bloqueado` o `posterior` con su causa explícita, sin inflar el alcance de v1.
* **Escenario: trazabilidad entre prioridad y objetivos del roadmap**
  **Dado** una pieza marcada como `critico`
  **Cuando** se revisa su razón de entrada al MVP
  **Entonces** existe vínculo observable con una página concreta, un objetivo del roadmap y una necesidad de lanzamiento del portfolio.
* **Escenario: compatibilidad con contenido ya visible pero disperso**
  **Dado** contenido que ya existe parcialmente en home, perfil, experiencia o proyectos
  **Cuando** se lo clasifica en la matriz
  **Entonces** se diferencia si requiere conservación, reubicación, expansión o diferimiento sin duplicar su función narrativa.
**Desglose de tareas:**
* **Arquitectura**
  * Identificar las fuentes actuales de contenido público y sus límites de reutilización.
  * Relacionar cada pieza con la estructura definida en el sitemap objetivo.
* **Negocio/valor**
  * Priorizar lo que mejor responde quién eres, qué problemas resuelves y por qué confiar en ti.
  * Evitar que el MVP quede sobrecargado con piezas todavía inmaduras o accesorias.
* **Funcional**
  * Clasificar el contenido por prioridad, dependencia, estado de madurez y página destino.
  * Marcar explícitamente el contenido diferido a Fases 3, 4, 5 y 6.
* **No funcional**
  * Asegurar consistencia bilingüe y trazabilidad editorial.
  * Evitar prioridades que dependan de conocimiento tácito o criterio no documentado.
* **Pruebas**
  * Verificar que todo contenido `critico` tenga ubicación, intención y tipo de ejecución claros.
  * Verificar que todo contenido diferido tenga fase posterior o causa de bloqueo documentada.
* **Documentación/aceptación**
  * Dejar la matriz lista para alimentar implementación de home, backlog narrativo y fases posteriores.
  * Registrar supuestos editoriales o dependencias manuales que puedan cambiar prioridad.
**Checklist de implementación:**
* No hay piezas críticas sin página o sección destino.
* No hay piezas priorizadas sin razón ligada a roadmap, MVP o lanzamiento.
* El contenido existente y el contenido faltante están diferenciados.
* Las piezas bloqueadas indican causa y no quedan ambiguamente “pendientes”.
* La matriz distingue trabajo manual, mixto y técnico cuando esa diferencia afecta ejecución.
* Los diferimientos hacia fases posteriores están trazados y no dependen de memoria informal.
**Preguntas de definición y cierre:**
* ¿Qué contenido debe considerarse crítico aunque todavía requiera una validación manual breve?
* ¿Qué piezas hoy visibles podrían pasar a segundo plano sin debilitar la propuesta consultiva?
* ¿Hay contenido deseable para SEO o autoridad que deba excluirse del MVP por falta de madurez?
* ¿Qué dependencias externas o personales deben bloquear explícitamente una pieza para evitar promesas vacías?
**Estado actual:** Cerrado el 2026-07-20.
**Cierre de implementación:**
* La matriz canónica quedó documentada en `docs/portfolio-content-prioritization.md`, con prioridad, madurez, fuente, tratamiento, dependencia, tipo de ejecución y trazabilidad al roadmap para cada pieza relevante.
* Identidad, capacidades, proyectos públicos, experiencia, CV, contacto y perfiles profesionales permanecen como contenido `critico` del MVP; sus validaciones manuales de precisión o coherencia no los bloquean.
* Perfil profundo, formación/credenciales y el proyecto académico secundario quedan como `importante`; blog, casos de estudio, footer, analytics, 404 y evolución de consultoría/productos quedan diferidos con fase y work item de destino.
* Los casos individuales sin información fuente, los artículos aún no escritos, la decisión de Medium y la validación externa se registran como `bloqueado`, sin presentarlos como cobertura pública actual.
* No se modificaron rutas, componentes, `src/i18n/site.ts`, `src/data/projects.ts` ni el inventario público definido en Sprint 01. Sprint 02 continúa pendiente de `BLG-F1-S02-03`.

#### BLG-F1-S02-03 — Definir backlog narrativo inicial
**Objetivo:** convertir la estrategia discursiva del portfolio en piezas concretas de contenido.
**Descripción:** la narrativa del sitio debe pasar de intención general a unidades redactables: hero, capacidades, proyectos, autoridad técnica y contacto.
**Actividades:**
* Listar piezas de copy pendientes por sección.
* Priorizar el copy que bloquea diseño o implementación.
* Definir qué piezas pueden prepararse técnicamente y cuáles requieren tu voz directa.
**Entregable esperado:** lista priorizada de piezas narrativas por sección.
**Dependencias:** mapa del sitio y priorización de contenido.
**Tipo de ejecución:** Mixto
**Notas de validación:** cada pieza narrativa debe quedar asociada a una página o sección concreta del MVP.
**Contexto técnico:** hoy el copy principal del sitio está concentrado en `src/i18n/site.ts`, mientras que proyectos, experiencia y CV ya aportan evidencia estructurada desde otros artefactos. Para implementar fases siguientes sin improvisar redacción, hace falta convertir la narrativa del roadmap y la prioridad del sprint en piezas concretas con dueño, evidencia mínima, destino estructural y criterio de cierre. Este WI no escribe el copy final; prepara el backlog que lo hará ejecutable.
**Alcance funcional:**
* Listar piezas narrativas por página/sección del MVP: identidad, hero, capacidades/servicios, proyectos, autoridad técnica, experiencia, contacto, blog reservado y futuros casos de estudio cuando correspondan como placeholder narrativo.
* Definir para cada pieza su objetivo comunicativo, evidencia mínima requerida, tipo de ejecución y dependencia de otras piezas o decisiones.
* Separar lo que puede redactarse técnicamente o estructurarse desde el repo de lo que requiere tu voz directa, validación estratégica o evidencia externa.
* Indicar qué piezas bloquean implementación de home, CTAs, proyectos, casos de estudio o blog aunque todavía no se redacten por completo.
**No alcance:**
* Escritura final bilingüe de todas las piezas.
* Implementación visual de componentes o restructuración de rutas.
* Producción de artículos de blog o casos de estudio completos.
**Cambios esperados de interfaces/tipos:**
* Dejar indicado qué piezas actuales podrían seguir viviendo en `src/i18n/site.ts` y cuáles convendría desacoplar después en módulos o colecciones narrativas específicas.
* Registrar si algunas piezas dependen de nuevos identificadores de sección o slug editorial para futuras implementaciones.
* No imponer todavía un modelo de datos narrativo en el código.
**Gherkin ampliado:**
* **Escenario: construcción nominal del backlog narrativo**
  **Dado** el sitemap objetivo y la matriz de priorización del Sprint 02
  **Cuando** se define el backlog narrativo inicial
  **Entonces** cada pieza queda asociada a una página o sección concreta, con objetivo comunicativo, evidencia mínima, tipo de ejecución y dependencia.
* **Escenario: rechazo de pieza sin evidencia o sin responsable**
  **Dado** una pieza narrativa que pretende entrar en el backlog del MVP
  **Cuando** no tiene fuente, evidencia mínima o tipo de ejecución definidos
  **Entonces** la pieza no puede considerarse lista para implementación ni para redacción.
* **Escenario: trazabilidad entre copy y artefacto estructural**
  **Dado** una pieza asociada a proyectos, experiencia o capacidades
  **Cuando** se revisa su backlog narrativo
  **Entonces** se identifica el artefacto del repositorio que aporta evidencia o el documento futuro que deberá sostenerla.
* **Escenario: compatibilidad bilingüe y reutilización controlada**
  **Dado** una pieza base definida en español
  **Cuando** se prepara su contraparte en inglés
  **Entonces** queda claro qué elementos deben conservar equivalencia semántica y cuáles requieren adaptación editorial sin cambiar la intención estratégica.
**Desglose de tareas:**
* **Arquitectura**
  * Definir el inventario de piezas narrativas y su correspondencia con nodos del sitemap.
  * Relacionar cada pieza con la fuente estructurada que la soporta o con la dependencia que la bloquea.
* **Negocio/valor**
  * Priorizar las piezas que mejor explican identidad profesional, capacidad consultiva y confianza operativa.
  * Distinguir entre mensajes fundacionales del MVP y piezas de autoridad que pueden madurar después.
* **Funcional**
  * Listar piezas por sección y marcar cuáles bloquean diseño o implementación.
  * Asignar tipo de ejecución `Manual`, `Codex con supervisión` o `Mixto` según el nivel de voz personal requerido.
* **No funcional**
  * Garantizar consistencia bilingüe y evitar backlog narrativo dependiente de intuiciones no registradas.
  * Evitar piezas que prometan profundidad técnica sin evidencia disponible.
* **Pruebas**
  * Verificar que ninguna pieza crítica quede sin fuente, dependencia o responsable.
  * Verificar que las piezas bilingües tengan criterio explícito de equivalencia.
* **Documentación/aceptación**
  * Dejar el backlog narrativo listo para alimentar Sprint 03, Sprint 04 y la preparación de Fases 3 y 4.
  * Registrar huecos de información que requieran captura manual o validación externa antes de redactar.
**Checklist de implementación:**
* Cada pieza narrativa tiene página o sección destino.
* Cada pieza narrativa tiene objetivo comunicativo y evidencia mínima definida.
* Las piezas que requieren tu voz directa están marcadas como `Manual` o `Mixto`.
* Las piezas que pueden prepararse desde el repo están separadas de las que dependen de información externa.
* No hay piezas críticas sin dependencia o sin criterio de cierre.
* La relación entre español e inglés está indicada para las piezas reutilizables o adaptables.
**Preguntas de definición y cierre:**
* ¿Qué piezas requieren necesariamente tu voz personal para que no suenen genéricas?
* ¿Qué narrativa puede apoyarse en evidencia ya presente en proyectos, experiencia o CV sin esperar nuevas fuentes?
* ¿Qué piezas deben quedar solo como placeholders del sitemap hasta que exista implementación de blog o casos de estudio?
* ¿Qué bloque narrativo sería el primero en romperse si se intentara implementar la home sin este backlog?

---

## Fase 2 — Página de inicio y mensaje profesional

### Sprint 03

#### BLG-F2-S03-01 — Refinar propuesta de valor principal de la home
**Objetivo:** consolidar un mensaje central más consultivo y menos genérico.  
**Descripción:** la home ya tiene una propuesta de valor funcional, pero este ítem busca afinarla para que conecte mejor con soluciones, sistemas y transformación organizacional.  
**Actividades:**
* Revisar el copy actual de hero, subtítulo y summary.
* Identificar términos vagos o demasiado amplios.
* Proponer una versión ajustada al enfoque consultivo del roadmap.
**Entregable esperado:** versión refinada del mensaje principal de la home.  
**Dependencias:** backlog narrativo inicial.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el copy debe responder con claridad quién eres, qué resuelves y por qué tu enfoque es sistémico.

#### BLG-F2-S03-02 — Definir bloque explícito de capacidades/servicios
**Objetivo:** hacer visible la relación entre tus capacidades y los problemas que puedes abordar.  
**Descripción:** el roadmap pide un bloque de servicios o capacidades; actualmente el sitio comunica enfoque, pero no una propuesta operacional claramente separada.  
**Actividades:**
* Definir catálogo inicial de capacidades o servicios.
* Relacionar cada capacidad con valor para cliente u organización.
* Proponer estructura de contenido para presentarlas sin sonar a lista de buzzwords.
**Entregable esperado:** definición funcional del bloque de capacidades/servicios.  
**Dependencias:** propuesta de valor refinada.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** las capacidades deben ser consistentes con proyectos, experiencia y formación.

#### BLG-F2-S03-03 — Definir criterio para la gráfica de araña o visual equivalente
**Objetivo:** decidir si se implementa una visualización comparativa de capacidades y cómo se justificaría.  
**Descripción:** el roadmap sugiere una gráfica de araña para explicar qué problemas sabes convertir en sistemas. Este ítem define si se mantiene esa idea o si conviene otro recurso más claro.  
**Actividades:**
* Evaluar utilidad comunicativa de la gráfica.
* Definir dimensiones, escalas y fuentes de información si se conserva.
* Definir alternativa si la visualización no aporta claridad suficiente.
**Entregable esperado:** decisión documentada sobre uso o descarte de la visualización.  
**Dependencias:** bloque de capacidades/servicios.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** la decisión debe priorizar comprensión real, no solo estética.

### Sprint 04

#### BLG-F2-S04-01 — Revisar coherencia narrativa entre portfolio, GitHub y LinkedIn
**Objetivo:** alinear identidad profesional en los principales puntos públicos de visibilidad.  
**Descripción:** el roadmap exige consistencia entre fuentes. El portfolio no debe prometer una cosa mientras los perfiles externos cuentan otra.  
**Actividades:**
* Comparar encabezados, enfoque profesional y selección de proyectos entre portfolio, GitHub y LinkedIn.
* Detectar contradicciones o enfoques fragmentados.
* Proponer lista concreta de ajustes por plataforma.
**Entregable esperado:** matriz de coherencia narrativa entre plataformas.  
**Dependencias:** propuesta de valor refinada.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** deben quedar claros los cambios que harías tú manualmente fuera del repo y los que puedo materializar en el sitio.

#### BLG-F2-S04-02 — Definir CTA principal y CTAs secundarios del MVP
**Objetivo:** estandarizar la intención de conversión del sitio.  
**Descripción:** el portfolio ya tiene acciones visibles, pero este ítem formaliza qué acción principal buscas provocar y cuáles son los caminos secundarios.  
**Actividades:**
* Definir CTA principal orientada a contacto u oportunidad.
* Definir CTAs secundarios para CV, proyectos o blog.
* Relacionar cada CTA con una intención de usuario.
**Entregable esperado:** catálogo de CTAs del MVP con jerarquía clara.  
**Dependencias:** revisión de coherencia narrativa.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** la acción principal del sitio debe quedar inequívoca.

#### BLG-F2-S04-03 — Consolidar especificación funcional de la home v1
**Objetivo:** dejar la página de inicio completamente especificada antes de futuros ajustes visuales o técnicos.  
**Descripción:** este ítem cierra la fase de identidad dejando definidas sus piezas, orden, intención y validación.  
**Actividades:**
* Enumerar secciones definitivas de la home.
* Definir propósito y contenido mínimo de cada sección.
* Relacionar cada sección con al menos un OKR del roadmap.
**Entregable esperado:** especificación funcional de la home v1.  
**Dependencias:** CTA principal y definición de capacidades.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** no deben quedar decisiones abiertas de contenido estructural para la home.

---

## Fase 3 — Casos de estudio iniciales

### Sprint 05

#### BLG-F3-S05-01 — Realinear el inventario visible de proyectos del sitio
**Objetivo:** sustituir o reorganizar los proyectos actuales para que el sitio refleje la estrategia definida.  
**Descripción:** antes de escribir casos de estudio, el listado visible debe mostrar la selección correcta de proyectos.  
**Actividades:**
* Mapear proyectos actuales vs proyectos priorizados.
* Definir qué proyectos salen, entran o cambian de prioridad.
* Definir metadatos mínimos por proyecto para exposición pública.
**Entregable esperado:** especificación del nuevo set de proyectos visibles.  
**Dependencias:** inventario estratégico y taxonomía de estados.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el set final debe apoyar el posicionamiento consultivo y no dispersarlo.

#### BLG-F3-S05-02 — Diseñar plantilla base de caso de estudio
**Objetivo:** crear una estructura estándar reutilizable para documentar proyectos con profundidad técnica.  
**Descripción:** sin una plantilla unificada, cada caso de estudio tenderá a quedar incompleto o inconsistente.  
**Actividades:**
* Definir secciones obligatorias del caso de estudio.
* Definir qué información es pública, qué es resumida y qué debe omitirse por sensibilidad o madurez.
* Definir longitud esperada por sección.
**Entregable esperado:** plantilla funcional de caso de estudio.  
**Dependencias:** especificación del nuevo set de proyectos.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** la plantilla debe permitir comparar proyectos distintos sin perder profundidad.

#### BLG-F3-S05-03 — Levantar información fuente para los primeros casos
**Objetivo:** reunir los insumos necesarios para completar los primeros casos de estudio.  
**Descripción:** este ítem organiza la captura de información faltante antes de redactar páginas finales.  
**Actividades:**
* Identificar por proyecto qué información ya existe y cuál falta.
* Definir preguntas de levantamiento para cada proyecto.
* Clasificar vacíos críticos vs vacíos tolerables para una primera publicación.
**Entregable esperado:** matriz de insumos por caso de estudio.  
**Dependencias:** plantilla base de caso de estudio.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** cada proyecto prioritario debe tener claro su nivel de completitud documental.

### Sprint 06

#### BLG-F3-S06-01 — Documentar el primer caso de estudio completo
**Objetivo:** producir una primera pieza de referencia que marque el estándar del resto.  
**Descripción:** el primer caso de estudio debe servir como patrón de calidad narrativa y técnica para los siguientes.  
**Actividades:**
* Seleccionar el proyecto más adecuado para el primer caso.
* Redactar el caso usando la plantilla base.
* Revisar consistencia entre narrativa, tecnologías, estado y próximos pasos.
**Entregable esperado:** primer caso de estudio completo y listo para implementación.  
**Dependencias:** matriz de insumos por caso.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el caso debe mostrar claramente tu forma de pensar, no solo describir tecnología.

#### BLG-F3-S06-02 — Definir backlog de los tres casos siguientes
**Objetivo:** preparar la continuidad de la fase sin depender de improvisación posterior.  
**Descripción:** tras el primer caso, los siguientes deben quedar secuenciados y con requisitos mínimos identificados.  
**Actividades:**
* Priorizar los siguientes tres casos de estudio.
* Definir nivel de madurez de cada uno.
* Marcar riesgos, faltantes y dependencias narrativas.
**Entregable esperado:** backlog de continuidad de casos de estudio.  
**Dependencias:** primer caso documentado.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** los próximos casos deben cubrir diversidad de capacidades, no repetirse entre sí.

#### BLG-F3-S06-03 — Definir criterios de publicación de proyectos en análisis
**Objetivo:** establecer cómo mostrar proyectos no terminados sin debilitar credibilidad.  
**Descripción:** el roadmap permite mostrar proyectos en evolución, pero exige honestidad sobre su estado real.  
**Actividades:**
* Definir criterios para publicar proyectos en análisis, desarrollo o prototipo.
* Definir disclaimers o etiquetas necesarias.
* Definir qué no debe mostrarse aún.
**Entregable esperado:** política editorial para proyectos en evolución.  
**Dependencias:** taxonomía de estados y backlog de continuidad de casos.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el resultado debe proteger credibilidad y claridad al mismo tiempo.

---

## Fase 4 — Blog integrado con Medium

### Sprint 07

#### BLG-F4-S07-01 — Definir decisión técnica de integración con Medium
**Objetivo:** cerrar la decisión entre enlace manual, RSS o estrategia híbrida.  
**Descripción:** la fase de blog depende de elegir un mecanismo estable y proporcional al alcance del MVP.  
**Actividades:**
* Revisar ventajas y costos de las alternativas planteadas en el roadmap.
* Determinar qué datos necesita el sitio para mostrar publicaciones.
* Decidir si la integración será manual, por feed o híbrida.
**Entregable esperado:** decisión técnica documentada para integración con Medium.  
**Dependencias:** backlog narrativo inicial y priorización de contenido.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** la solución elegida debe ser mantenible y suficiente para el MVP.

#### BLG-F4-S07-02 — Definir arquitectura de información de la sección blog
**Objetivo:** especificar cómo se organiza el blog dentro del portfolio.  
**Descripción:** el blog no debe ser un añadido aislado; debe integrarse al posicionamiento general del sitio.  
**Actividades:**
* Definir si habrá página índice, bloque destacado en home o ambos.
* Definir categorías, etiquetas y estructura visual mínima.
* Definir qué contenido vive en el portfolio y qué contenido solo enlaza a Medium.
**Entregable esperado:** especificación funcional del blog v1.  
**Dependencias:** decisión técnica de integración.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** la arquitectura debe reforzar autoridad profesional y no duplicar complejidad innecesaria.

#### BLG-F4-S07-03 — Definir backlog editorial inicial del blog
**Objetivo:** seleccionar y ordenar los primeros artículos que deben alimentar la autoridad técnica del portfolio.  
**Descripción:** antes de implementar la sección, debe quedar claro qué contenido se espera mostrar y por qué.  
**Actividades:**
* Priorizar los primeros tres artículos base.
* Asignar categoría y propósito estratégico a cada uno.
* Distinguir artículos que puedes escribir tú manualmente de piezas que puedo ayudarte a estructurar.
**Entregable esperado:** backlog editorial inicial del blog.  
**Dependencias:** especificación funcional del blog.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** cada artículo debe reforzar al menos una línea de posicionamiento del roadmap.

### Sprint 08

#### BLG-F4-S08-01 — Especificar listados, tarjetas y enlaces del blog
**Objetivo:** dejar completamente definida la capa funcional de exposición del contenido.  
**Descripción:** este ítem describe cómo deben verse y comportarse los elementos principales de la sección blog.  
**Actividades:**
* Definir datos mínimos por artículo.
* Definir comportamiento de enlaces a Medium.
* Definir criterios de orden, visibilidad y destaque.
**Entregable esperado:** especificación de componentes funcionales del blog.  
**Dependencias:** arquitectura de información del blog.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** los componentes deben permitir crecimiento futuro sin rediseño conceptual total.

#### BLG-F4-S08-02 — Preparar primer contenido destacado del blog
**Objetivo:** asegurar que la futura sección no salga vacía.  
**Descripción:** la implementación del blog debe acompañarse de al menos una pieza o placeholder editorial con suficiente valor.  
**Actividades:**
* Seleccionar el primer artículo a destacar.
* Definir título, resumen, categoría y llamado a lectura.
* Preparar versión resumida para exposición en el portfolio.
**Entregable esperado:** ficha del primer contenido destacado del blog.  
**Dependencias:** backlog editorial inicial.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el contenido debe verse coherente con el perfil consultivo, no como publicación casual.

#### BLG-F4-S08-03 — Definir criterios de calidad y mantenimiento del blog
**Objetivo:** evitar que la sección blog se vuelva estática, vacía o inconsistente.  
**Descripción:** se necesita una política mínima de actualización y curaduría editorial.  
**Actividades:**
* Definir cuándo agregar nuevos artículos.
* Definir reglas de categorización.
* Definir criterio para retirar, ocultar o destacar publicaciones.
**Entregable esperado:** política mínima de mantenimiento del blog.  
**Dependencias:** componentes funcionales del blog.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el mantenimiento debe ser realista para un ritmo de trabajo de fin de semana.

---

## Fase 5 — Pulido técnico y confianza

### Sprint 09

#### BLG-F5-S09-01 — Definir backlog de confianza técnica del MVP
**Objetivo:** consolidar todos los pendientes técnicos de cierre que afectan percepción profesional.  
**Descripción:** esta fase agrupa piezas que no son el núcleo narrativo, pero sí son necesarias para un producto serio y enviable.  
**Actividades:**
* Consolidar pendientes: analytics, 404, footer, enlaces, SEO complementario, revisión de accesibilidad.
* Priorizar por impacto y dependencia.
* Señalar cuáles pueden resolverse solo con código y cuáles requieren acciones externas.
**Entregable esperado:** backlog priorizado de confianza técnica.  
**Dependencias:** estado real del proyecto y roadmap.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** la lista debe cubrir todo lo necesario para que el sitio se perciba como producto cuidado.

#### BLG-F5-S09-02 — Definir requerimientos de analytics e instrumentación mínima
**Objetivo:** establecer qué medir y con qué nivel de complejidad.  
**Descripción:** no basta con “tener analytics”; debe quedar definido qué señales importan para este portfolio.  
**Actividades:**
* Definir eventos o métricas mínimas: visitas, clics en CV, clics de contacto, clics a proyectos.
* Evaluar si la implementación depende de una cuenta externa.
* Definir criterio de privacidad y simplicidad para el MVP.
**Entregable esperado:** especificación mínima de analytics del portfolio.  
**Dependencias:** backlog de confianza técnica.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** la medición debe responder al objetivo consultivo del sitio y no ser una integración arbitraria.

#### BLG-F5-S09-03 — Definir contenido y función del footer profesional
**Objetivo:** especificar el footer como pieza de cierre informativo y de confianza.  
**Descripción:** el footer debe apoyar navegación, identidad y contacto sin redundancia.  
**Actividades:**
* Definir elementos mínimos del footer.
* Determinar si incluirá navegación secundaria, datos de contacto, derechos, o enlaces estratégicos.
* Relacionar el footer con accesibilidad y cierre visual.
**Entregable esperado:** especificación funcional del footer.  
**Dependencias:** sitemap funcional del MVP.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** el footer no debe ser un relleno decorativo; debe tener una función real.

### Sprint 10

#### BLG-F5-S10-01 — Definir requisitos de página 404 y manejo de rutas inexistentes
**Objetivo:** asegurar una experiencia coherente cuando el usuario llegue a una ruta inválida.  
**Descripción:** una 404 dedicada contribuye a percepción de profesionalismo y evita rupturas de experiencia.  
**Actividades:**
* Definir mensaje, CTA y enlaces de recuperación.
* Definir tono visual coherente con el sitio.
* Determinar si debe incluir acceso rápido a home, proyectos o contacto.
**Entregable esperado:** especificación funcional de la 404.  
**Dependencias:** backlog de confianza técnica.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** el usuario debe poder recuperarse fácilmente sin perder contexto.

#### BLG-F5-S10-02 — Definir backlog de SEO complementario y validación de metadatos
**Objetivo:** completar los elementos SEO que no quedaron cubiertos por la base actual.  
**Descripción:** el sitio ya tiene metadata básica, pero esta tarea busca revisar consistencia, cobertura y calidad.  
**Actividades:**
* Revisar títulos y descripciones por página.
* Definir si hacen falta metadatos adicionales.
* Incluir validación de enlaces sociales y CV.
**Entregable esperado:** checklist SEO complementario del MVP.  
**Dependencias:** backlog de confianza técnica.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** no debe introducir complejidad desproporcionada para un sitio estático personal.

#### BLG-F5-S10-03 — Definir checklist de revisión pre-lanzamiento
**Objetivo:** dejar un protocolo corto y repetible para revisar calidad antes de publicar cambios importantes.  
**Descripción:** sirve como filtro antes de cierre de MVP y futuras iteraciones.  
**Actividades:**
* Definir pruebas funcionales mínimas.
* Definir validaciones de contenido, navegación, enlaces y descargas.
* Definir responsable por cada validación cuando aplique.
**Entregable esperado:** checklist de revisión pre-lanzamiento.  
**Dependencias:** especificaciones de analytics, footer y 404.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** el checklist debe ser corto, realista y ejecutable en una sesión de revisión.

---

## Fase 6 — Lanzamiento y validación

### Sprint 11

#### BLG-F6-S11-01 — Definir requerimientos de publicación y dominio
**Objetivo:** aterrizar qué falta para considerar el portfolio verdaderamente publicado y presentable.  
**Descripción:** el sitio compila y puede desplegarse, pero deben aclararse las tareas manuales y mixtas ligadas a dominio, entorno público y presentación final.  
**Actividades:**
* Definir si habrá dominio propio o subdominio.
* Identificar proveedor, costos y pasos manuales de compra/configuración.
* Diferenciar tareas de despliegue técnico vs tareas de contratación o acceso.
**Entregable esperado:** plan de publicación y dominio del MVP.  
**Dependencias:** backlog de confianza técnica y checklist pre-lanzamiento.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** debe quedar explícito qué parte depende enteramente de ti.

#### BLG-F6-S11-02 — Definir protocolo de revisión externa
**Objetivo:** estructurar la validación con terceros como actividad de ingeniería y no como retroalimentación informal aislada.  
**Descripción:** el roadmap pide validación con distintos perfiles; aquí se formaliza esa actividad.  
**Actividades:**
* Seleccionar perfiles de revisión.
* Definir preguntas o guion de evaluación.
* Definir cómo registrar hallazgos y decisiones derivadas.
**Entregable esperado:** protocolo de validación externa del portfolio.  
**Dependencias:** checklist pre-lanzamiento y home consolidada.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el protocolo debe producir hallazgos accionables, no opiniones dispersas.

#### BLG-F6-S11-03 — Definir backlog de ajustes post-validación
**Objetivo:** preparar la forma en que se absorberán observaciones sin perder control de alcance.  
**Descripción:** después de revisión externa, el equipo debe saber cómo clasificar y priorizar cambios.  
**Actividades:**
* Definir categorías de hallazgos: crítico, importante, opcional.
* Definir criterio de aceptación o descarte.
* Definir cómo registrar ajustes para una iteración posterior.
**Entregable esperado:** criterio de gestión de feedback post-validación.  
**Dependencias:** protocolo de validación externa.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** los cambios sugeridos no deben romper la estrategia definida por el roadmap.

### Sprint 12

#### BLG-F6-S12-01 — Definir criterio formal de cierre del MVP
**Objetivo:** establecer cuándo el portfolio puede considerarse terminado en su primera versión útil.  
**Descripción:** el cierre del MVP no debe depender de intuición; debe relacionarse con criterios observables.  
**Actividades:**
* Reescribir los criterios de cierre en forma verificable.
* Relacionarlos con los OKRs y la evaluación actual del roadmap.
* Diferenciar cierre funcional de cierre estratégico ideal.
**Entregable esperado:** criterio formal de cierre del MVP.  
**Dependencias:** protocolo de validación y backlog de ajustes post-validación.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** el criterio debe ser lo bastante exigente para dar confianza, pero no tan amplio que bloquee indefinidamente el lanzamiento.

#### BLG-F6-S12-02 — Consolidar backlog de continuidad posterior al MVP
**Objetivo:** separar claramente lo que pertenece al MVP de lo que se moverá a una iteración posterior.  
**Descripción:** evita que el portfolio siga creciendo sin cierre por acumulación de ideas.  
**Actividades:**
* Mover a continuidad las ideas no críticas para v1.
* Ordenar próximos incrementos: newsletter, sistema propio de artículos, páginas específicas de consultoría o productos.
* Mantener trazabilidad con el roadmap original.
**Entregable esperado:** backlog post-MVP priorizado.  
**Dependencias:** criterio formal de cierre del MVP.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** la continuidad debe quedar desacoplada del cierre del MVP.

#### BLG-F6-S12-03 — Emitir resumen ejecutivo de estado y siguiente iteración
**Objetivo:** dejar una pieza de cierre que resuma qué se logró, qué quedó pendiente y cuál es la siguiente ruta.  
**Descripción:** este resumen sirve como puente entre el MVP y la siguiente etapa del portfolio.  
**Actividades:**
* Consolidar estado de cumplimiento por fase y por objetivo.
* Resumir dependencias externas aún abiertas.
* Proponer la siguiente línea de trabajo dominante.
**Entregable esperado:** resumen ejecutivo de cierre de iteración.  
**Dependencias:** backlog post-MVP y criterio formal de cierre.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** debe poder leerse como documento de gestión, no solo como nota técnica.

---

## Priorización ejecutiva

### Prioridad inmediata

* Consolidar inventario estratégico de proyectos.
* Definir taxonomía de estados.
* Formalizar mapa del sitio objetivo del MVP.
* Refinar propuesta de valor y capacidades.
* Realinear el inventario visible de proyectos.
* Diseñar la plantilla base del primer caso de estudio.

### Prioridad siguiente

* Definir decisión técnica de integración con Medium.
* Especificar arquitectura de información del blog.
* Preparar backlog editorial inicial.
* Definir backlog de confianza técnica del MVP.
* Especificar analytics, footer y 404.

### Dependencias externas

* Compra y configuración de dominio o subdominio.
* Accesos o cuentas necesarias para Medium y analytics, si aplican.
* Validación externa con revisores reales.
* Ajustes de narrativa en GitHub y LinkedIn fuera del repositorio.

### Trabajo bloqueado por decisiones manuales

* Integración final con Medium si depende de confirmar usuario, feed o estrategia editorial.
* Publicación con dominio propio.
* Redacción final de artículos de voz personal.
* Validación externa y registro de resultados.

# Taxonomía de estados de proyecto

## Propósito

Este documento define la taxonomía canónica de estados de proyecto para el portfolio. Su función es evitar ambigüedad narrativa, reducir riesgo de sobreventa y dejar una regla reutilizable para futuras decisiones de contenido, datos y presentación.

La taxonomía aplica sobre dos conjuntos de referencia:

* El inventario priorizado por el roadmap.
* El inventario visible actual materializado en `src/data/projects.ts`.

Este documento es normativo para la dimensión **estado de proyecto**. No redefine prioridad estratégica, visibilidad en el portfolio, tipo de proyecto ni tags técnicos.

## Alcance y criterio semántico

La taxonomía usa un catálogo cerrado de estados compuestos. Cada proyecto recibe un único valor semántico canónico.

Reglas base:

* Un proyecto solo puede tener un estado canónico a la vez.
* El estado expresa madurez narrativa y naturaleza principal de la entrega cuando esa naturaleza cambia el significado público del proyecto.
* `projectType`, `portfolioTier`, `strategicPriority` y `tags` permanecen como dimensiones separadas.
* Lo académico o educativo sigue siendo una propiedad del tipo de proyecto, no un estado.
* No se permiten variantes ad hoc como `scaffold`, `development-initial`, `idea`, `partial MVP` o equivalentes.
* La redacción pública en inglés puede ser más comercial que la de español, pero no puede alterar el significado base del estado.

## Catálogo canónico

| Semantic key | Etiqueta ES | Public EN | Definición operativa | Criterios de entrada | Criterios de salida | Tono narrativo permitido | Sobreventa prohibida |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `analysis` | En análisis | Concept validation | Proyecto enfocado en entendimiento del problema, requisitos, arquitectura inicial o exploración sectorial, sin flujo usable demostrable. | Hay hipótesis, investigación, modelado, requisitos o exploración técnica con dirección clara, pero no una solución usable extremo a extremo. | Sale cuando existe una prueba técnica parcial o comienza construcción real del flujo principal. | Descubrimiento, formulación, validación conceptual, arquitectura exploratoria. | Presentarlo como producto construido, MVP usable o solución operativa. |
| `prototype` | Prototipo | Prototype | Prueba técnica, scaffold o experimento parcial que demuestra dirección, pero todavía no resuelve un flujo usable extremo a extremo. | Existe evidencia técnica implementada, pero parcial, experimental o acotada a una capacidad. | Sale cuando el proyecto entra en construcción sostenida del flujo principal o alcanza uso piloto usable. | Exploración técnica, viabilidad, aprendizaje aplicado, demostración acotada. | Venderlo como producto listo, solución completa o MVP en uso. |
| `in-development` | En desarrollo | In development | Proyecto con construcción activa del flujo principal y objetivo ya definido, aún sin condiciones de uso piloto real. | El caso principal ya está planteado y existe desarrollo sostenido hacia una solución usable, pero todavía no hay uso piloto válido. | Sale cuando existe flujo usable en piloto o cuando se re-clasifica como prototipo por pérdida de continuidad. | Construcción, iteración, consolidación del flujo principal, avance incremental. | Llamarlo MVP, solución operativa o producto ya validado por uso. |
| `mvp` | MVP en piloto | Pilot MVP | Solución usable de extremo a extremo con uso real o controlado en contexto de piloto. | Existe flujo principal completo y demostrable con uso piloto real o supervisado. Es más que demo o scaffold. | Sale cuando existe adopción sostenida u operación formal; retrocede si pierde usabilidad o evidencia de pilotaje. | Validación temprana, uso piloto, aprendizaje con usuarios o contexto real controlado. | Presentarlo como solución consolidada en producción formal o como plataforma madura. |
| `operational` | Operativo | Operational solution | Solución con uso sostenido o implantación formal en operación real. | Hay evidencia de uso continuo, implantación efectiva o soporte a operación real. | Sale solo si la narrativa deja de representar operación vigente y debe archivarse o recontextualizarse. | Implementación real, soporte operativo, solución aplicada, continuidad funcional. | Inflar el alcance como si fuera plataforma generalizada, enterprise-grade o caso de producción masiva sin evidencia. |
| `architectural-documentation` | Documentación arquitectónica | Architecture blueprint | Artefacto cuyo valor principal es diseño, arquitectura o documentación estructural, no una solución usable. | El activo principal es especificación, blueprint, modelo o documentación técnica reusable sin flujo ejecutable principal. | Sale cuando esa documentación evoluciona a prototipo, desarrollo o MVP usable. | Diseño de solución, arquitectura, decisiones estructurales, base para implementación futura. | Describirlo como software implementado, MVP usable o producto operativo. |

## Ejemplos positivos y negativos por estado

### `analysis`

**Ejemplo positivo**
* Un proyecto con problema definido, investigación sectorial, requisitos y arquitectura exploratoria, pero sin flujo usable aún.

**Ejemplo negativo**
* Un proyecto con CLI funcional o interfaz operativa que ya ejecuta el flujo principal; eso no debe seguir narrándose como análisis.

### `prototype`

**Ejemplo positivo**
* Una herramienta con scaffold funcional, capacidades técnicas parciales y prueba de viabilidad, sin cubrir todavía el flujo completo de uso.

**Ejemplo negativo**
* Un proyecto con construcción sostenida del flujo principal y roadmap de entrega cercano; en ese caso corresponde `in-development`, no `prototype`.

### `in-development`

**Ejemplo positivo**
* Un producto con requerimientos claros, módulos activos en construcción y continuidad de desarrollo, pero sin pilotaje usable validado.

**Ejemplo negativo**
* Una idea con arquitectura preliminar y sin implementación significativa; eso corresponde a `analysis`.

### `mvp`

**Ejemplo positivo**
* Una solución usable de extremo a extremo probada en piloto controlado con evidencia de uso sobre el caso principal.

**Ejemplo negativo**
* Un demo convincente o un prototipo navegable sin uso piloto real; eso no debe llamarse `mvp`.

### `operational`

**Ejemplo positivo**
* Un sistema ya implantado para soportar operación real, centralización de información o procesos internos de manera sostenida.

**Ejemplo negativo**
* Un MVP usable en piloto o una primera versión aún sin operación formal; eso sigue siendo `mvp`.

### `architectural-documentation`

**Ejemplo positivo**
* Un caso cuyo principal valor es un blueprint de arquitectura, decisiones de diseño o documentación estructural lista para guiar implementación futura.

**Ejemplo negativo**
* Un proyecto que ya tiene flujo ejecutable o prueba funcional principal; en ese caso debe clasificarse por madurez del software y no como documentación arquitectónica.

## Qué no debe confundirse con el estado

### Estado de proyecto

Describe la madurez narrativa y, cuando aplica, la naturaleza principal de la entrega pública.

### Tipo de proyecto

Describe la clase de solución o contexto del artefacto. En `src/data/projects.ts` hoy vive como `projectType`.

Ejemplos:

* `information-system`
* `erp-platform`
* `educational-project`

Un proyecto educativo puede ser `prototype`, `mvp` u otro estado válido sin crear un estado académico especial.

### Portfolio tier

Describe la prominencia narrativa del proyecto dentro del portfolio. En `src/data/projects.ts` hoy vive como `portfolioTier`.

Ejemplos:

* `featured`
* `secondary`

Un proyecto secundario puede ser `operational`, y uno destacado puede seguir en `analysis`.

### Prioridad estratégica

Describe importancia para el MVP o para la narrativa consultiva. En `src/data/projects.ts` hoy vive como `strategicPriority`.

Ejemplos:

* `high`
* `medium`

La prioridad no cambia el estado. Un proyecto importante puede seguir en análisis.

### Tags técnicos

Describen capacidades, herramientas o foco funcional visibles en contenido y UI. No son una taxonomía de madurez.

Ejemplos:

* `Backend`
* `Procesos`
* `Inventario`
* `IA`

Los tags no deben usarse para inferir estado narrativo.

## Reglas de uso editorial

* Usar la etiqueta pública en español o inglés solo como presentación del semantic key canónico.
* Evitar redacciones que conviertan prototipos o análisis en productos terminados.
* Si la evidencia disponible no permite distinguir entre dos estados, debe revisarse la definición del proyecto o marcarse el caso para validación manual antes de publicar.
* El estado debe poder sostenerse con evidencia observable en roadmap, backlog, repositorio o material de soporte.
* La traducción al inglés puede suavizar o comercializar el wording, pero no puede subir artificialmente el nivel de madurez.

## Validación de la taxonomía sobre los dos conjuntos de referencia

### 1. Inventario priorizado por roadmap

| Proyecto | Estado asignado | Justificación resumida |
| --- | --- | --- |
| ITA | `analysis` | El roadmap lo posiciona como línea de análisis y consultoría con foco en normativa, educación y arquitectura, sin flujo usable demostrado todavía. |
| Cognark | `in-development` | El roadmap lo describe como desarrollo inicial de producto técnico con requerimientos, IA y modularidad en construcción. |
| Media Report CLI | `prototype` | El roadmap habla de scaffold y CLI básica; existe prueba técnica parcial, pero no evidencia de flujo completo en piloto. |
| Proyecto jurídico/documental | `analysis` | El roadmap lo ubica en ideación/análisis con foco sectorial y sin evidencia de solución usable. |

### 2. Inventario visible actual del sitio

| Proyecto | Estado asignado | Justificación resumida |
| --- | --- | --- |
| SIMIGS | `operational` | En `src/data/projects.ts` se narra como sistema implementado para centralización operativa e información interna. |
| ERP Turismo | `operational` | Se describe como solución ERP implementada para organización operativa y control sectorial. |
| ERP Agroinsumos | `operational` | Se presenta como plataforma ERP implementada para inventario, procesos comerciales y trazabilidad. |
| Proyecto educativo de estructuras de datos | `prototype` | Aunque es académico en tipo, su narrativa actual funciona mejor como evidencia técnica aplicada y acotada, no como solución operativa ni MVP. |

## Distinciones críticas para evitar solapamientos

### `prototype` vs `in-development`

* `prototype` prueba viabilidad parcial o técnica.
* `in-development` construye de forma sostenida el flujo principal de la solución.

La diferencia no es “mejor o peor”, sino nivel de continuidad y cercanía a uso real.

### `mvp` vs `operational`

* `mvp` implica solución usable en piloto.
* `operational` implica implantación formal o uso sostenido en operación real.

La frontera acordada no es solo técnica; depende del contexto de uso.

### `analysis` vs `architectural-documentation`

* `analysis` se centra en descubrimiento, framing o arquitectura exploratoria de una solución futura.
* `architectural-documentation` se usa cuando el principal entregable público ya es el blueprint o artefacto arquitectónico.

## Resolución de la divergencia entre roadmap e inventario visible

Esta taxonomía es normativa y, tras el cierre regularizado de `BLG-F1-S01-01`, ya no deja abierta una ambigüedad operativa sobre qué inventario domina cada capa narrativa.

Quedan definidos dos conjuntos con funciones distintas:

* El inventario público base del MVP usa los proyectos hoy visibles en el sitio: `SIMIGS`, `ERP Turismo`, `ERP Agroinsumos` y `Proyecto educativo de estructuras de datos`.
* El roadmap conserva `ITA`, `Cognark`, `Media Report CLI` y el proyecto jurídico/documental como pipeline priorizado para futuros casos de estudio.

Reglas para manejar esa divergencia:

* Este documento sigue definiendo cómo clasificar proyectos, no el orden exacto en que se publicarán como casos de estudio.
* Cualquier proyecto que migre del pipeline de casos de estudio al inventario público o a una ruta de detalle debe reutilizar este catálogo sin agregar estados nuevos.
* La separación entre `inventario público base` y `pipeline de casos de estudio` evita confundir evidencia ya publicada con narrativa futura todavía no materializada.
* La decisión de si el pipeline complementa, reordena o sustituye parcialmente el inventario público base pertenece a Sprint 02 y Fase 3, no a la taxonomía.

## Impacto futuro esperado en datos e interfaces

Este documento no modifica `src/data/projects.ts`, pero deja establecido el impacto futuro esperado:

* La estructura de proyectos probablemente requerirá un campo canónico como `projectStatus`.
* La etiqueta pública por locale deberá separarse del valor semántico base.
* El texto libre tipo `narrativeStatus` no debe seguir siendo la única representación del estado si futuros sprints implementan badges, filtros, fichas o casos de estudio.

## Checklist de validación del WI

* Cada proyecto de los dos conjuntos de referencia clasifica en un único estado.
* El catálogo cerrado evita crear variantes ad hoc para casos aislados.
* `prototype` y `in-development` quedan distinguibles.
* `mvp` y `operational` quedan distinguibles bajo la regla de piloto vs operación formal.
* Un proyecto educativo puede clasificarse sin introducir un estado especial académico.
* La formulación pública en inglés no altera el semantic key base.
* El documento impide sobreventa de análisis, prototipos y piezas arquitectónicas como si fueran productos finales.

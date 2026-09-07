# Contrato editorial de proyectos para Keystatic

**Work item:** `BLG-CMS-01`
**Estado del contrato:** validado para el piloto documental
**Colección piloto:** `projects`

## 1. Objetivo y alcance

Este documento define el contrato técnico y editorial que debe respetarse antes de instalar Keystatic o migrar contenido. Su objetivo es separar con claridad el contenido que puede editarse de las decisiones que deben seguir protegidas en el repositorio.

Keystatic se incorporará como una capa editorial sobre Astro. En el piloto, su responsabilidad será gestionar archivos de contenido versionables; no reemplazará las rutas, los componentes, la lógica de presentación ni la clasificación estratégica del portfolio.

El único piloto de esta decisión es la colección `projects`. Las experiencias, el blog, los casos de estudio y cualquier otra colección quedan fuera del piloto y podrán evaluarse en work items posteriores.

## 2. Fronteras de responsabilidad

| Área | Fuente o responsable | Tratamiento en el piloto |
| --- | --- | --- |
| Contenido editorial de proyectos | Archivos gestionados por Keystatic | Se migrará en `BLG-CMS-03`, después de integrar y validar el esquema en `BLG-CMS-02`. |
| Clasificación estratégica | Registro TypeScript y backlog | Permanece en código/documentación; no se edita desde Keystatic. |
| Rutas, navegación y copy de interfaz | Astro y `src/i18n/site.ts` | Permanecen en el repositorio. |
| Presentación visual | Componentes Astro/React y estilos | Permanece en el repositorio. |
| Configuración y build | Archivos de configuración y `package.json` | Permanece en el repositorio; no forma parte del contenido editorial. |
| CV y documentos generados | LaTeX en `docs/resume/` y PDFs en `public/docs/` | Permanecen fuera del CMS y se publican mediante el `Makefile`. |

Esta separación evita que una edición editorial pueda alterar la arquitectura pública, los tokens visuales, las prioridades del portfolio, la navegación o los documentos profesionales.

## 3. Inventario de fuentes actuales

| Fuente actual | Qué contiene hoy | Decisión para el contrato |
| --- | --- | --- |
| `src/data/projects.ts` | Fuente combinada actual: contenido localizado de cada proyecto y metadatos de clasificación, prioridad y narrativa. | Sigue siendo la fuente efectiva del sitio hasta que una migración posterior y el lector nuevo hayan sido validados. No se modifica en `BLG-CMS-01`. |
| `src/i18n/site.ts` | Copy de interfaz, navegación, labels, CTAs, metadata y traducciones generales del sitio. | Queda fuera del CMS. No se convierte en una colección de textos de interfaz. |
| `src/content/experiences/` | Colección Markdown existente para experiencias profesionales. | Queda fuera de la colección piloto `projects`; cualquier migración será una decisión posterior. |
| `src/data/credentials.ts` | Credenciales y evidencias de formación usadas por la presentación del portfolio. | Queda fuera del piloto y del contrato editorial de proyectos. |
| `docs/resume/` y `public/docs/` | Fuentes LaTeX y PDFs publicados del CV. | Quedan fuera del CMS y conservan su flujo de build/publicación. |
| `src/pages/`, `src/components/` y `src/styles/` | Rutas, presentación, comportamiento, layout y tokens visuales. | Permanecen en código. Keystatic no será un page builder. |

## 4. Fuente canónica futura

Cuando se complete la migración, la fuente canónica se dividirá por responsabilidad:

1. **Contenido editorial:** dos archivos Keystatic por proyecto, uno en español y uno en inglés, bajo la colección `projects`.
2. **Clasificación estratégica:** el registro TypeScript y el backlog conservarán las decisiones sobre prioridad, inclusión, tipo y propósito narrativo.
3. **Presentación:** Astro seguirá transformando ambas fuentes en tarjetas, páginas y bloques localizados.

Durante la transición, `src/data/projects.ts` continúa siendo la fuente actual. No habrá una migración parcial implícita ni una regla de precedencia inventada en este WI: hasta `BLG-CMS-03`, los archivos futuros del CMS no sustituyen al registro activo.

## 5. Modelo de la colección piloto

### 5.1 Colección y formato

La colección única del piloto se llamará `projects`. Su organización futura se expresará con una ruta wildcard de Keystatic para almacenar entradas dentro de `src/content/projects/`. Las entradas usarán archivos Markdown/Markdoc versionables.

La sintaxis exacta de `keystatic.config.ts`, las dependencias y la configuración del modo local pertenecen a `BLG-CMS-02`; este contrato fija el modelo, no instala ni configura la aplicación.

### 5.2 Convención de archivos

Cada proyecto tendrá exactamente este par de archivos:

```text
src/content/projects/<slug>.es.md
src/content/projects/<slug>.en.md
```

Reglas del identificador:

* `<slug>` es el identificador estable y compartido del proyecto.
* El sufijo `.es` o `.en` identifica el locale del archivo y debe coincidir con el campo `locale`.
* El slug no se traduce entre locales: `simigs.es.md` y `simigs.en.md` representan el mismo proyecto.
* No se permiten dos archivos del mismo locale para un slug ni archivos cuyo slug solo exista en un idioma.
* El ejemplo de referencia del piloto será `simigs.es.md` + `simigs.en.md`.

### 5.3 Campos editoriales mínimos

La siguiente matriz conserva la correspondencia con el modelo actual y fija el objetivo de la migración:

| Campo | Representación actual | Objetivo editorial | Obligatorio |
| --- | --- | --- | --- |
| `title` | `content[locale].title` dentro de `src/data/projects.ts` | `title` en cada archivo ES/EN de Keystatic | Sí |
| `description` | `content[locale].description` dentro de `src/data/projects.ts` | `description` multilínea en cada archivo ES/EN | Sí |
| `focus` | `content[locale].focus` dentro de `src/data/projects.ts` | `focus` en cada archivo ES/EN | Sí |
| `tags` | `content[locale].tags` dentro de `src/data/projects.ts` | Lista `tags` en cada archivo ES/EN | Sí |
| `locale` | Implícito en la clave `es` o `en` del objeto `content` | Valor explícito cerrado `es` o `en`, consistente con el sufijo del archivo | Sí |
| `slug` | Propiedad `slug` compartida por el registro TypeScript | Identidad común derivada del nombre base del par de archivos | Sí como identidad |

Reglas editoriales de los campos objetivo:

* `title` es el nombre o título público del proyecto en el locale correspondiente.
* `description` explica el proyecto con el alcance y el nivel de evidencia que realmente se pueden sostener.
* `focus` resume el foco funcional o técnico visible, sin sustituir la clasificación estratégica.
* `tags` contiene etiquetas técnicas o funcionales útiles para lectura y presentación, no para inferir madurez.
* `locale` no admite fallback silencioso para completar un par.

El slug base forma parte de la identidad del archivo y no puede variar entre los dos locales. Cualquier campo adicional requerirá una nueva decisión de contrato; no se debe ampliar el esquema por conveniencia editorial durante el piloto.

### 5.4 Campos fuera de Keystatic

Los siguientes campos actuales no serán gestionados por Keystatic:

| Campo | Motivo de exclusión |
| --- | --- |
| `portfolioTier` | Decide la prominencia del proyecto dentro del portfolio. |
| `mvpStatus` | Decide la inclusión estratégica en el MVP. |
| `projectType` | Clasifica la naturaleza del proyecto y su contexto. |
| `strategicPriority` | Expresa prioridad para la estrategia, no copy editorial. |
| `demonstrates` | Registra capacidades demostradas y requiere trazabilidad con evidencia. |
| `rationale` | Justifica una decisión estratégica de selección. |
| `narrativeStatus` | Conserva el estado narrativo canónico definido por la taxonomía del proyecto. |

Estos valores podrán permanecer en `src/data/projects.ts`, en otro registro TypeScript o en el backlog que se defina para la migración, pero no se expondrán como campos editables del CMS. La taxonomía de estados de `docs/project-status-taxonomy.md` sigue siendo normativa para esa clasificación.

## 6. Reglas de paridad bilingüe

* Cada proyecto debe tener una versión ES y una versión EN antes de considerarse publicable.
* Los dos archivos deben representar el mismo proyecto, la misma contribución y el mismo nivel de madurez.
* La versión inglesa puede adaptar sintaxis, terminología y tono para sonar natural; no puede ampliar alcance, seniority, resultados ni evidencia.
* Una omisión editorial solo es válida si mantiene el significado y la honestidad del original; no puede ocultar una limitación relevante en un locale.
* Los títulos, descripciones, focos y tags deben poder compararse semánticamente entre locales. No se exige igualdad literal.
* Un archivo huérfano, un par duplicado o una discrepancia de `locale` es un error de contrato y debe bloquear la publicación.
* La validación de estos pares pertenece al lector/migración de `BLG-CMS-03`; no se implementa como runtime en este WI.

## 7. Política de migración

`BLG-CMS-01` es una decisión documental. Por tanto:

* No se migran todavía los archivos ni los registros actuales de `src/data/projects.ts`.
* No se modifica todavía `src/data/projects.ts` ni el lector que consume sus datos.
* No se instalan `@keystatic/core`, `@keystatic/astro`, Markdoc ni otras dependencias.
* No se crea `keystatic.config.ts`.
* No se habilita `/keystatic`, GitHub Mode, autenticación, hosting ni despliegue remoto.
* No se cambian las rutas públicas, los slugs públicos ni los componentes Astro.
* `BLG-CMS-02` implementará el panel local y el esquema aprobado.
* `BLG-CMS-03` definirá la migración efectiva y adaptará el lector solo después de validar la integración.

La migración debe ser incremental y reversible. Mientras no exista una migración validada por colección, el sitio seguirá leyendo la fuente actual y no se crearán dos fuentes activas para el mismo proyecto.

## 8. Criterios de validación del contrato

El work item puede cerrarse documentalmente cuando:

* `projects` es la única colección piloto confirmada.
* Existe una fuente canónica futura para el contenido editorial y se mantiene explícitamente la fuente actual hasta la migración.
* El contrato distingue contenido editorial, configuración, estrategia y presentación.
* La convención `<slug>.es.md` + `<slug>.en.md` impide traducciones huérfanas, duplicadas o desalineadas.
* Los campos editables y no editables están enumerados.
* No se requieren cambios de runtime para cerrar el WI.
* El backlog enlaza este contrato y registra las decisiones cerradas.

## 9. Referencias técnicas

La forma futura de la colección se basa en las capacidades documentadas por Keystatic para [colecciones](https://keystatic.com/docs/collections), [organización de contenido](https://keystatic.com/docs/content-organisation) y [opciones de formato](https://keystatic.com/docs/format-options). La configuración concreta queda deliberadamente diferida a `BLG-CMS-02`.

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

Las capacidades transversales que habilitan más de una fase usan el formato:

`BLG-CMS-{consecutivo}`

Este formato se reserva para decisiones o entregables de plataforma editorial que no pertenecen exclusivamente a una fase narrativa.

### Criterio de priorización

* Los ítems que corrigen desalineación estratégica tienen prioridad sobre los de pulido visual.
* Los ítems que desbloquean otros entregables deben resolverse antes que los ítems dependientes.
* Los ítems manuales que bloquean trabajo técnico deben resolverse lo antes posible para evitar cuellos de botella.

---

## Capacidad transversal — Gestión editorial con Keystatic

### Evaluación y decisión

**Decisión:** incorporar [Keystatic](https://keystatic.com/docs/introduction) como CMS Git-based para facilitar la edición de contenido y adquirir experiencia práctica con un flujo editorial basado en archivos, esquemas y control de versiones.

La decisión es razonable para este portfolio aunque añada complejidad sobre Astro. El beneficio no es únicamente publicar contenido: permite practicar modelado de contenido, validación de esquemas, edición estructurada, trazabilidad Git y un flujo de publicación reproducible. Además, el repositorio ya usa Markdown y Astro Content Collections para las experiencias, mientras que el contenido localizado de proyectos puede formalizarse como archivos editoriales para el piloto.

La integración debe entenderse como una capa editorial sobre Astro, no como un reemplazo del framework ni como una justificación para convertir toda la interfaz en contenido dinámico. La documentación oficial de Astro describe Keystatic como un CMS headless que estructura contenido y puede sincronizarlo con GitHub; también indica que la integración Astro requiere React, Markdoc y una configuración de esquema. El modo local guarda los cambios en el sistema de archivos, mientras que GitHub mode requiere un repositorio existente, permisos de escritura, autenticación y un host capaz de ejecutar las rutas de API de Keystatic.

**Conclusión de alcance:** se aprueba un piloto incremental en modo local. La publicación remota con GitHub mode no se activa: `/keystatic` permanecerá fuera del build de producción y GitHub mode queda como opción futura. La infraestructura de publicación queda fijada en un Contabo Cloud VPS 4 Core en USA-East, con Ubuntu LTS, Docker y Caddy; `smaje.com.co` se mantiene como dominio personal del portfolio y `henkoconsulting.com.co` como dominio de Henko, con DNS gestionado por Cloudflare. El portfolio conserva `smajefranco@gmail.com`; el correo de Henko se gestionará de forma separada con Zoho Mail. La compra, provisión y configuración inicial siguen siendo tareas manuales.

### Alcance inicial

* Confirmar `projects` como única colección piloto para el primer ciclo de Keystatic.
* Gestionar posteriormente con Keystatic el contenido editorial que cambie con frecuencia —experiencias, proyectos/casos de estudio y artículos del blog— solo cuando sus fases entren en implementación y exista un contrato específico.
* Mantener `src/content/experiences/` fuera del piloto actual; no se migra como parte de `BLG-CMS-01`.
* Mantener en código la navegación, las rutas, los componentes, los tokens visuales, la lógica de presentación, el contrato de locales y la configuración de build.
* Mantener el CV en LaTeX y sus PDFs publicados fuera del CMS; Keystatic no será fuente de verdad para documentos generados.
* Diseñar desde el principio un contrato bilingüe explícito para que una edición no deje español e inglés desalineados.
* Migrar de forma incremental y reversible: primero una colección piloto, después las colecciones que demuestren valor real.

### Fuera de alcance inicial

* Reescribir Astro, convertir la aplicación en SSR o introducir una base de datos.
* Migrar todo `src/i18n/site.ts`, la navegación o los textos de interfaz de bajo nivel al CMS.
* Habilitar un panel público de producción sin resolver adapter, autenticación, variables de entorno, permisos y política de exposición de `/keystatic`.
* Migrar los PDFs, fuentes LaTeX, secretos, configuración de despliegue o decisiones estratégicas del roadmap.
* Crear un page builder libre que permita alterar la arquitectura visual sin pasar por los componentes existentes.

### Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| El admin de Keystatic introduce requisitos de servidor incompatibles con el hosting estático actual. | Alto | Validar primero el modo local; documentar el adapter y el proveedor antes de adoptar GitHub mode o exponer `/keystatic`. |
| Se mantienen dos fuentes de verdad para el mismo contenido durante la migración. | Alto | Migrar por colección, declarar una fuente canónica por tipo de contenido y eliminar duplicados solo después de validar el build. |
| El esquema CMS permite editar datos que deberían seguir siendo decisiones de producto o de código. | Medio | Limitar el primer esquema a campos editoriales y conservar rutas, navegación, tipos de UI y tokens en el repositorio. |
| El contenido bilingüe queda incompleto o semánticamente asimétrico. | Alto | Hacer obligatorios los campos ES/EN del piloto y añadir una comprobación de paridad antes de publicar. |
| La herramienta aumenta el tiempo de mantenimiento sin mejorar el flujo real. | Medio | Medir el piloto con una edición completa, rollback Git y rebuild; detener la migración si no reduce fricción o no aporta aprendizaje verificable. |

### Sprints habilitadores

#### BLG-CMS-01 — Cerrar arquitectura y límites del CMS

**Objetivo:** convertir la decisión de usar Keystatic en un contrato técnico y editorial ejecutable.

**Estado inicial:** `En curso`.

**Estado de cierre previsto:** `Cerrado — contrato técnico y editorial validado`.

**Actividades:**

* Confirmar `projects` como única colección piloto.
* Inventariar las fuentes actuales y separar `src/data/projects.ts` como fuente combinada vigente de `src/i18n/site.ts`, `src/content/experiences/` y las fuentes fuera del CMS.
* Definir como fuente canónica futura del contenido editorial los archivos ES/EN gestionados por Keystatic, manteniendo el registro TypeScript/backlog para la clasificación estratégica.
* Definir la convención `<slug>.es.md` + `<slug>.en.md`, los campos editoriales mínimos, el campo `locale` y las reglas de paridad.
* Registrar qué seguirá siendo código, qué será contenido editorial y qué se dejará para una fase posterior.

**Entregable esperado:** [contrato editorial de proyectos para Keystatic](./keystatic-content-contract.md), con mapa de fuentes, matriz de campos y límites de responsabilidad.

**Dependencias:** Sprint 04 cerrado; estructura actual de Astro Content Collections; inventario de proyectos y taxonomía de estados de Fase 1.

**Tipo de ejecución:** Mixto

**Criterios de aceptación:**

* La colección piloto confirmada es únicamente `projects`.
* El modelo bilingüe confirmado usa archivos ES/EN vinculados por el mismo slug base.
* El límite confirmado es contenido editorial; la clasificación estratégica permanece en TypeScript/backlog.
* Existe una fuente canónica futura y una regla explícita para no duplicar contenido durante la transición.
* El contrato distingue contenido editorial de navegación, presentación, configuración y documentos generados.
* La estrategia ES/EN permite detectar entradas incompletas, huérfanas o duplicadas antes de publicar.
* La decisión no exige modificar todavía el roadmap ni publicar el panel de administración.

**Nota de alcance:** cerrar este WI no implica instalar dependencias, crear `keystatic.config.ts`, migrar proyectos, cambiar rutas públicas, habilitar `/keystatic` ni adoptar GitHub Mode. Esas decisiones e implementaciones pertenecen a `BLG-CMS-02`, `BLG-CMS-03` y `BLG-CMS-04` según corresponda.

**Cierre de implementación:**

* El contrato documental quedó creado en [`docs/keystatic-content-contract.md`](./keystatic-content-contract.md).
* `projects` quedó confirmado como único piloto; `src/content/experiences/` permanece fuera del piloto.
* Se confirmó el par obligatorio `<slug>.es.md` + `<slug>.en.md` y la separación entre contenido editorial y clasificación estratégica.
* `src/data/projects.ts` se conserva como fuente actual hasta la migración posterior.
* No hubo cambios de runtime, instalación de Keystatic, configuración local, migración, cambio de rutas ni habilitación de GitHub Mode.

**Estado del WI:** `Cerrado — contrato técnico y editorial validado`.

#### BLG-CMS-02 — Integrar Keystatic en modo local

**Objetivo:** disponer de un panel local funcional para editar la colección piloto y comprobar su convivencia con Astro.

**Actividades:**

* Añadir las dependencias y la integración oficial de Keystatic junto con Markdoc, sin romper la integración React existente.
* Crear `keystatic.config.ts` con almacenamiento local y el esquema mínimo aprobado en `BLG-CMS-01`.
* Configurar el acceso local a `/keystatic` y documentar el comando de desarrollo y el flujo de guardado.
* Mantener la ruta pública existente y el build de producción separado del panel durante el piloto.
* Registrar cualquier cambio de formato, extensión o ubicación de los archivos generados por Keystatic.

**Entregable esperado:** integración local reproducible, configuración versionada y guía breve de uso para el repositorio.

**Dependencias:** `BLG-CMS-01`; disponibilidad de las versiones compatibles y revisión de la configuración actual de Astro.

**Tipo de ejecución:** Codex con supervisión

**Criterios de aceptación:**

* El panel local abre sin errores y permite crear, editar y guardar una entrada piloto.
* Los cambios quedan en archivos versionables dentro del repositorio, sin base de datos ni secretos en el código.
* `pnpm build` y `pnpm lint` siguen pasando.
* Las rutas ES/EN existentes no cambian de URL ni pierden contenido durante la integración.

**Cierre de implementación:**

* Se instalaron `@astrojs/markdoc@2.0.9`, `@keystatic/core@0.6.9` y `@keystatic/astro@6.0.0`, sin actualizar Astro 7.2.9 ni React 19.2.5.
* Se creó `keystatic.config.ts` con almacenamiento `local` y únicamente la colección `projects` bajo `src/content/projects/*`.
* El esquema gestiona `slug`, `locale`, `title`, `description`, `focus`, `tags` y un cuerpo Markdoc opcional con extensión `.md`; los campos estratégicos de `BLG-CMS-01` no se exponen.
* Se añadió la colección Astro `projects` con esquema Zod equivalente al frontmatter. `src/content/experiences/` permanece sin cambios.
* La integración Keystatic se carga en `astro dev` para disponer de `/keystatic`; el build público conserva salida estática y no añade adapter ni rutas server-rendered. La exclusión de `/keystatic` en producción queda formalizada en `BLG-CMS-04`.
* Se añadió [`docs/keystatic-local-workflow.md`](./keystatic-local-workflow.md), con instalación, creación bilingüe, convención de slug, revisión Git y rollback.
* La validación local creó, editó y guardó los fixtures `cms-smoke-test.es.md` y `cms-smoke-test.en.md` mediante el flujo de almacenamiento local; `astro check` confirmó ambas entradas en `projects` y los fixtures fueron eliminados antes del cierre.
* El panel y las rutas `/projects` y `/en/projects` respondieron HTTP 200. `pnpm build`, `pnpm lint` y `git diff --check` pasaron; no se migraron proyectos reales desde `src/data/projects.ts`.

**Estado del WI:** `Cerrado — integración local reproducible validada`.

#### BLG-CMS-03 — Migrar y consumir la primera colección editorial

**Objetivo:** probar el valor real del CMS con una colección pequeña antes de ampliar la migración.

**Actividades:**

* Migrar la colección piloto `projects` usando el contrato bilingüe aprobado en `BLG-CMS-01`.
* Adaptar el lector de Astro al formato de Keystatic solo donde sea necesario, conservando componentes y contratos de presentación.
* Editar una entrada existente desde el panel y comprobar que la versión pública se actualiza en español e inglés según el contrato definido.
* Ejecutar una prueba de rollback mediante Git y documentar cómo recuperar una edición inválida.
* Registrar si el resultado justifica migrar experiencias, casos de estudio o artículos, sin asumir todavía esas migraciones adicionales.

**Entregable esperado:** una colección migrada, visible en el sitio bilingüe y acompañada por evidencia de edición, build y rollback.

**Dependencias:** `BLG-CMS-02`; contrato bilingüe de proyectos; validación de las rutas `/projects` y `/en/projects`.

**Tipo de ejecución:** Mixto

**Criterios de aceptación:**

* Una persona puede editar una entrada sin tocar un componente Astro ni una interfaz TypeScript.
* El contenido editado conserva estructura, accesibilidad, locale y estado narrativo.
* No quedan dos archivos activos que representen la misma entrada sin una regla de precedencia documentada.
* Un cambio inválido se puede revertir desde Git sin intervención en una base de datos.

**Cierre de implementación:**

* Los tres proyectos estratégicos (`estructuras-de-datos`, `trazalita` y `epicrisisia`) fueron migrados a seis archivos Markdown bilingües bajo `src/content/projects/`.
* `src/data/projects.ts` conserva únicamente el inventario y la clasificación estratégica; `getProjects()` y `getFeaturedProjects()` combinan ese registro con `getCollection('projects')` de Astro.
* El build bloquea entradas huérfanas, pares ES/EN incompletos, locales duplicados, slugs con sufijo inconsistente y proyectos estratégicos sin contenido editorial; no existe fallback silencioso.
* Se comprobó la instalación con lockfile congelado (`CI=true pnpm install --frozen-lockfile --store-dir=/tmp/portfolio-pnpm-store`), además de `pnpm build`, `pnpm lint` y `git diff --check`. El build genera `/projects` y `/en/projects` sin cambiar sus URLs.
* El flujo local de Keystatic en `/keystatic` y la revisión del diff Git quedan documentados en [`docs/keystatic-local-workflow.md`](./keystatic-local-workflow.md), incluido el rollback mediante `git restore` y rebuild.
* La migración no incluye experiencias, casos de estudio ni blog; se mantienen explícitamente diferidos a `BLG-CMS-04`.

**Estado del WI:** `Cerrado — colección projects migrada, validada y consumida desde Astro Content Collections`.

#### BLG-CMS-04 — Cerrar publicación y gobierno editorial

**Objetivo:** cerrar el modelo de publicación, gobierno editorial e infraestructura pública del portfolio.

**Estado:** `Cerrado — gobierno editorial y despliegue estático definidos; provisión externa pendiente` (2026-09-11).

**Actividades:**

* Usar un Contabo Cloud VPS 4 Core en USA-East como destino de despliegue, con Ubuntu 24.04 LTS, Caddy en el host, firewall y Docker reservado para servicios Henko, bases de datos y automatizaciones.
* Registrar `henkoconsulting.com.co` como dominio principal de Henko y mantener `smaje.com.co` como dominio personal del portfolio; centralizar en Cloudflare el DNS, proxy, CDN, SSL y DNSSEC cuando corresponda.
* Contratar Auto Backup de Contabo, verificar el recargo en checkout y mantener además un backup externo independiente; documentar el uso limitado del único snapshot del plan como rollback previo a cambios.
* Mantener `smajefranco@gmail.com` como correo del portfolio. Gestionar el correo de Henko en Zoho Mail con MX, SPF, DKIM y DMARC, usando un buzón principal y alias separados del portfolio.
* Mantener Keystatic en modo local; `/keystatic` no se publica y no se crea GitHub App, OAuth ni secretos para GitHub mode.
* Mantener el sitio Astro como build estático; no añadir un adapter de servidor solo para habilitar la administración remota.
* Ejecutar el flujo `edición local → revisión del diff → pnpm cms:check → pnpm build → rsync por SSH → verificación pública`.
* Documentar que el editor y revisor son la misma persona, que el rollback consiste en reconstruir una versión Git anterior, y que las credenciales solo viven en el entorno de despliegue.
* Mantener `projects` como colección editorial canónica, `experiences` como pares ES/EN y `blog` como entradas independientes por locale; las referencias Medium no se sincronizan automáticamente.

**Entregable esperado:** política de publicación y operación editorial, decisión de infraestructura y lista de pasos manuales para comprar, provisionar y verificar el entorno público.

**Dependencias:** `BLG-CMS-03`; compra de los dominios; cuentas de Cloudflare, Contabo y Zoho; acceso al repositorio; configuración del mecanismo de despliegue desde `main`.

**Tipo de ejecución:** Mixto

**Criterios de aceptación:**

* La decisión identifica explícitamente si el CMS será local, remoto o híbrido.
* `/keystatic` no aparece en el build de producción y no se publican credenciales ni secretos.
* `smaje.com.co`, `henkoconsulting.com.co` y el Contabo Cloud VPS 4 Core en USA-East quedan documentados como decisiones de infraestructura, sin automatizar compras ni provisión desde el repositorio.
* El portfolio conserva `smajefranco@gmail.com` y el correo de Henko queda fuera del VPS, bajo Zoho Mail con autenticación DNS documentada.
* Existe un flujo verificable de edición → revisión → `pnpm cms:check` → `pnpm build` → rsync/SSH → verificación pública → rollback.
* `pnpm cms:check` bloquea estados, locales, pares bilingües, `draftSlug`, referencias Medium, secretos, rutas Keystatic, previews draft y builds estáticos sin canonical `https://smaje.com.co`.
* `projects` es la colección editorial canónica; `experiences` y `blog` permanecen como Markdown versionado por su coste/beneficio proporcional, sin ampliar el runtime ni duplicar fuentes estratégicas.

**Cierre de implementación:**

* Astro usa `https://smaje.com.co` como sitio canónico y conserva `output: 'static'`.
* Keystatic se carga únicamente con el comando `dev`; el build de producción no contiene `/keystatic`.
* Las previews draft se conservan para el trabajo local, pero no se generan en el artefacto público.
* `scripts/cms-check.mjs` valida el contrato editorial y, después del build, inspecciona `dist/` para canonical, secretos, rutas Keystatic, previews draft y presencia de HTML estático.
* [`docs/cms-publishing-workflow.md`](./cms-publishing-workflow.md) documenta publicación manual mediante rsync/SSH, cuenta no root, claves fuera del repositorio, permisos, validación de Caddy y rollback por versiones Git.
* [`deploy/Caddyfile`](../deploy/Caddyfile) deja reproducible el servicio directo de `/srv/portfolio`, la compresión, HTTPS automático y la redirección opcional de `www`.
* [`docs/hosting-architecture.md`](./hosting-architecture.md) separa el portfolio estático de Docker; Docker queda reservado para servicios futuros de Henko, bases de datos y automatizaciones.

**Pendientes externos:** compras y provisión de dominios, Cloudflare, Contabo, Auto Backup, DNS, Caddy en el VPS, Zoho Mail y la publicación pública efectiva. No se ejecutan desde este repositorio.

### Criterio de salida de la capacidad

La capacidad se considera validada cuando el piloto local permita editar una colección bilingüe, produzca cambios versionables, conserve el build público y tenga un rollback documentado. La infraestructura pública queda resuelta con Cloudflare y Contabo; el portfolio conserva su correo personal y Henko usa Zoho Mail, mientras que GitHub mode permanece fuera del lanzamiento hasta que exista una necesidad explícita de edición remota, autenticación y permisos adecuados. `experiences` y `blog` se mantienen mediante archivos locales versionados y el contrato editorial aprobado; si una futura ampliación no aporta valor observable, el repositorio conserva el flujo local sin convertir Keystatic en una dependencia obligatoria de toda la aplicación.

**Referencias técnicas:** [Keystatic — Introduction](https://keystatic.com/docs/introduction), [Keystatic & Astro](https://docs.astro.build/en/guides/cms/keystatic/), [Local mode](https://keystatic.com/docs/local-mode), [GitHub mode](https://keystatic.com/docs/github-mode), [desactivar rutas admin en producción](https://keystatic.com/docs/recipes/astro-disable-admin-ui-in-production).

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
* Los tres proyectos visibles actuales (`trazalita`, `epicrisisia` y `estructuras-de-datos`) quedaron definidos con nombre público ES/EN, estado narrativo, tipo, capacidades demostradas, prioridad estratégica y visibilidad dentro del portfolio.
* La visibilidad pública actual conserva dos proyectos `featured` y un proyecto `secondary`, sin alterar las rutas públicas.
* La correspondencia entre español e inglés quedó normalizada sobre slugs canónicos únicos por proyecto.
* La divergencia con la selección estratégica del roadmap quedó resuelta a nivel de cierre: `TrazalITA`, `EpicrisisIA` y el proyecto educativo de estructuras de datos conforman el inventario público base actual; `ITA`, `Cognark`, `Media Report CLI` y el proyecto jurídico/documental quedan como pipeline priorizado para futuros casos de estudio y no como sustitución silenciosa del inventario visible.
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
* No se modificaron rutas, componentes, `src/i18n/site.ts`, `src/data/projects.ts` ni el inventario público definido en Sprint 01. En el corte de cierre de este WI, Sprint 02 quedó pendiente únicamente de `BLG-F1-S02-03`.

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

**Estado actual:** Cerrado el 2026-08-07.

**Cierre de implementación:**

* El backlog narrativo canónico quedó documentado en `docs/portfolio-narrative-backlog.md`, con piezas ordenadas entre bloqueantes de Fase 2, soporte del MVP y reservas de Fases 3 y 4.
* Cada pieza crítica registra destino ES/EN, objetivo, prioridad y madurez heredadas, fuente y evidencia mínima, tipo de ejecución, dependencia, work item bloqueado, criterio de cierre y tratamiento bilingüe.
* La propuesta de valor, capacidades, coherencia externa y jerarquía de CTAs apuntan expresamente a `BLG-F2-S03-01`, `BLG-F2-S03-02`, `BLG-F2-S03-03`, `BLG-F2-S04-01`, `BLG-F2-S04-02` y `BLG-F2-S04-03` según su dependencia.
* La cola manual separa validación de voz, afirmaciones profesionales, alcance de proyectos, vigencia de experiencia/CV y coherencia con GitHub y LinkedIn.
* Blog y casos de estudio permanecen como reservas narrativas sin artículos seleccionados, rutas prometidas ni copy de detalle; sus insumos y bloqueos se entregan a Fases 4 y 3.
* No se modificaron rutas, anchors, componentes, datos públicos ni el contrato localizado de `src/i18n/site.ts`; `#focus` y `#contact` se conservan.

**Estado actual del sprint:** Cerrado el 2026-08-07.

**Cierre del sprint:**

* Sprint 02 deja una definición única del sitemap del MVP, la prioridad del contenido público y las unidades narrativas que alimentarán la implementación de Fase 2.
* La secuencia editorial queda cerrada sin adelantar trabajo posterior: primero mensaje profesional y capacidades, después coherencia externa y CTAs; casos de estudio y blog conservan sus fases propias.
* La paridad ES/EN se define como equivalencia semántica adaptada, con español como base y prohibición explícita de reforzar afirmaciones en inglés.
* Los posibles módulos o colecciones de copy se mantienen como decisión diferida hasta que la profundidad editorial justifique cambiar el contrato actual.

**Evidencia de verificación del sprint:**

* `docs/portfolio-mvp-sitemap.md` formaliza páginas, bloques internos, nodos reservados y elementos diferidos.
* `docs/portfolio-content-prioritization.md` fija prioridad, madurez, fuentes, dependencias y trazabilidad del contenido.
* `docs/portfolio-narrative-backlog.md` cubre todas las rutas y bloques del MVP, la cola manual y los bloqueos hacia Sprints 03 y 04.
* Revisión documental confirma que blog y casos de estudio continúan sin navegación, rutas o contenido público prometido.

---

## Fase 2 — Página de inicio y mensaje profesional

### Sprint 03

**Objetivo de negocio:** convertir la sección de enfoque de la home en un mensaje profesional defendible: una persona que llega al portfolio debe entender quién es Sergio, qué problemas ayuda a convertir en sistemas y qué valor puede aportar, sin que el sitio prometa seniority, consultoría, resultados o servicios que no estén validados.

**Resultado verificable:** queda una especificación editorial y funcional lista para alimentar la implementación posterior de Fase 2, con una propuesta de valor principal, cuatro capacidades nucleares y una matriz comparativa textual. Cada afirmación tiene fuente, evidencia primaria y de apoyo, límites, tratamiento ES/EN y estado de validación manual. El sprint no modifica código, rutas, anchors, copy runtime ni datos públicos.

**Alcance funcional:**

* Definir la propuesta de valor principal para la home y su relación con procesos, datos, desarrollo, arquitectura y operación.
* Consolidar como ejes semánticos las cuatro capacidades actuales: `Backend Engineering`, `Data Processing`, `Business Process Management` e `Information Systems`.
* Especificar problema, valor, evidencia y límites para cada capacidad, distinguiendo experiencia aplicada, formación y exploración.
* Sustituir el radar como recurso predeterminado por una matriz comparativa que pueda leerse completamente como texto.
* Dejar trazabilidad entre narrativa, inventario canónico de proyectos, experiencias, credenciales, CV, taxonomía de estados y validaciones manuales.

**No alcance explícito:**

* No editar `src/i18n/site.ts`, `PortfolioPage.astro`, `src/data/projects.ts`, componentes, estilos ni rutas.
* No crear una ruta propia de capacidades, una página de servicios, un catálogo comercial, un blog, casos de estudio ni nuevos CTAs.
* No implementar la matriz, un radar, una gráfica ni props o tipos de runtime.
* No publicar copy final ni hacer automáticamente cambios en GitHub, LinkedIn, CV o perfiles externos.
* No asignar puntuaciones subjetivas de habilidad, ranking profesional, seniority ni promesas de resultados.

**Criterios de entrada:**

* Sprint 02 permanece cerrado y sus artefactos canónicos están disponibles: sitemap, priorización de contenido y backlog narrativo.
* `NAR-B01`, `NAR-B02`, `NAR-B03`, `NAR-M03`, `NAR-M04` e `IN-M01` a `IN-M03` están identificados como fuentes de decisión, aunque sus validaciones manuales puedan seguir pendientes.
* El inventario público base de `src/data/projects.ts` y la taxonomía de estados de proyecto no se reabren como decisiones de este sprint.
* La especificación se redacta en español como fuente editorial; la contraparte inglesa se define por equivalencia semántica para una implementación posterior.

**Entregables y trazabilidad:**

| Entregable | Contenido mínimo | Trazabilidad |
| --- | --- | --- |
| Propuesta de valor defendible | Audiencia, identidad, problemas abordables, valor diferencial, vocabulario permitido y límites, con evidencia y validación de voz. | `NAR-B01`, `NAR-B02`, `IN-M01`, `IN-M02`; `BLG-F2-S03-01`. |
| Catálogo de cuatro capacidades | Nombre base/localizado, problema, valor, evidencia primaria y de apoyo, límites, relaciones, certeza editorial y distinción entre experiencia, formación y exploración. | `NAR-B03`, `NAR-M03`, `NAR-M04`, `IN-M02`, `IN-M03`; `BLG-F2-S03-02`. |
| Matriz comparativa accesible | Comparación textual de problema, valor, evidencia y límites; presencia/profundidad de evidencia sin escala de dominio ni dependencia visual. | `NAR-B03`, `IN-M02`, `IN-M03`; `BLG-F2-S03-03`. |
| Registro de decisiones y bloqueos | Decisiones cerradas, supuestos, riesgos, validaciones manuales pendientes y criterios de entrada/salida. | `docs/portfolio-narrative-backlog.md`, `docs/portfolio-content-prioritization.md`, `docs/portfolio-mvp-sitemap.md`. |

**Tareas transversales:**

* **Arquitectura:** conservar el bloque de `/#focus` y `/en/#focus`; separar capacidad demostrada, estado de proyecto y prioridad narrativa; reutilizar las fuentes actuales sin fijar un modelo de datos nuevo.
* **Negocio/valor:** validar audiencia, identidad profesional, problemas abordables y valor diferencial; distinguir una capacidad comunicable de una oferta comercial o servicio contratado.
* **Funcional:** definir las cuatro fichas de capacidad, la evidencia mínima de cada afirmación, sus límites y el orden narrativo que conecte hero, enfoque, proyectos, experiencia y CV.
* **No funcional:** asegurar lectura textual completa, paridad semántica ES/EN, independencia de color/posición/área geométrica, lenguaje prudente y exclusión de información confidencial o no publicable.
* **Pruebas:** convertir cada condición de cierre en escenarios observables de nominal, fallo por voz/evidencia/dependencia, trazabilidad y compatibilidad bilingüe.
* **Documentación/aceptación:** registrar fuentes concretas, decisiones editoriales, versión semántica ES, adaptación equivalente EN y validación manual de Sergio antes de cerrar cualquier WI.

**Dependencias internas:**

* `src/i18n/site.ts`: `hero`, `focusSection`, `aboutSection`, `learningSection`, navegación y contrato localizado actual; `focusSection.items` hoy solo expone `title`.
* `src/data/projects.ts`: inventario público base canónico, campo `demonstrates`, `rationale`, `narrativeStatus`, `projectType`, `portfolioTier` y contenido localizado.
* `src/data/credentials.ts`: tesis de formación, pilares, señales, evidencia, hitos, fechas e instituciones; sirve como apoyo y no sustituye experiencia aplicada.
* `src/content/experiences/`: experiencias actuales de desarrollo, backend, datos, requisitos, soporte y mentoría; deben revisarse como fuentes de afirmaciones profesionales.
* `docs/resume/curriculum-vitae.es.tex`, `docs/resume/curriculum-vitae.en.tex` y PDFs publicados: respaldo de experiencia, formación, habilidades y alcance declarado.
* `docs/project-status-taxonomy.md`: regla para no confundir madurez de proyecto con capacidad o nivel de dominio.
* `docs/portfolio-roadmap.md`, `docs/portfolio-mvp-sitemap.md`, `docs/portfolio-content-prioritization.md` y `docs/portfolio-narrative-backlog.md`: objetivo, estructura, prioridad, fuentes y piezas bloqueantes.

**Riesgos técnicos concretos:**

* **Sobreventa profesional:** convertir “ingeniería de soluciones” o una capacidad de formación en una promesa de consultoría, liderazgo o resultados no respaldados.
* **Equivalencia bilingüe:** permitir que EN suene más senior, comercial o amplio que ES por una traducción aparentemente natural pero semánticamente más fuerte.
* **Evidencia insuficiente:** declarar una capacidad a partir de una lista de tecnologías o cursos sin una evidencia primaria observable y una fuente de apoyo.
* **Capacidad versus dominio:** interpretar presencia de una capacidad como puntuación de competencia o ranking, especialmente si se implementa una visualización.
* **Sobrecarga de la matriz:** introducir demasiadas columnas, etiquetas o fuentes hasta hacerla ilegible y convertir el bloque narrativo en un inventario de tecnologías.
* **Deriva de fuentes:** mezclar el inventario público actual, el pipeline futuro de casos de estudio y los estados de proyecto como si fueran la misma dimensión.

**Decisiones cerradas para el sprint:**

* No se crea una ruta propia de capacidades; el bloque sigue siendo una función narrativa de `/#focus` y `/en/#focus`.
* Se conserva el anchor `#focus` y la navegación localizada actual.
* Se mantienen los cuatro ejes base: `Backend Engineering`, `Data Processing`, `Business Process Management` e `Information Systems`; cualquier adaptación editorial conserva su significado.
* Se usa una matriz comparativa accesible como recurso de referencia, no una gráfica de radar.
* La gráfica de araña mencionada como posibilidad en el roadmap se trata como hipótesis inicial; este sprint la resuelve operativamente a favor de la matriz, sin reescribir el roadmap estratégico.
* La matriz describe presencia y profundidad de evidencia; no asigna puntuaciones subjetivas de habilidad ni implica ranking profesional.
* El español es la fuente editorial; el inglés se adapta después con el mismo alcance, madurez y grado de certeza.
* La validación manual de voz, alcance y evidencia es puerta de entrada para cerrar la especificación y puerta de salida para cerrar el sprint.
* Blog, casos de estudio, perfiles externos, servicios comerciales y cambios de diseño quedan fuera de este sprint.

**Cambios importantes de interfaces y tipos:**

* Sprint 03 no cambia ninguna interfaz TypeScript ni el shape de `focusSection.items` en runtime.
* La futura implementación deberá ampliar conceptualmente cada capacidad con: `label`, `problem`, `value`, `primaryEvidence`, `supportingEvidence`, `limits` y `localeEquivalent`.
* Ese shape es una guía editorial y no un contrato aprobado: la forma exacta del tipo, los identificadores, el componente y la fuente de datos se decidirán durante la implementación posterior.
* Se conservan las rutas `/` y `/en/`, los anchors `#focus`, el contrato localizado actual, el inventario canónico de proyectos y la separación entre estado de proyecto, capacidad demostrada y prioridad narrativa.

**Escenarios de prueba de referencia:**

* La propuesta de valor responde quién es Sergio, qué problemas aborda y qué valor aporta sin introducir términos no respaldados por fuentes actuales.
* Una afirmación sin evidencia primaria y de apoyo, o sin límite explícito cuando corresponda, no puede marcarse como cerrada.
* Las cuatro capacidades aparecen con problema, valor, evidencia, límites y distinción entre experiencia aplicada, formación y exploración.
* La versión inglesa conserva el mismo alcance, madurez y grado de certeza de la española, aunque adapte sintaxis o terminología.
* La matriz comparativa no muestra escala numérica, ranking, área geométrica ni una inferencia visual de competencia profesional.
* El sprint no introduce rutas, anchors nuevos, servicios comerciales, blog, casos de estudio ni componentes nuevos.
* Cada afirmación queda trazada hacia el backlog narrativo, la priorización y una fuente actual del repositorio.
* Si falta validación manual de voz, alcance o evidencia, el WI afectado permanece pendiente y sus bloqueos siguen visibles.

**Criterio de aceptación y cierre manual:**

* Los tres WIs tienen especificación implementable, Gherkin ampliado, checklist de estado parcial y preguntas de cierre respondidas o marcadas explícitamente como bloqueo.
* Sergio valida la voz y las afirmaciones profesionales de la propuesta de valor (`IN-M01` e `IN-M02`).
* Sergio valida la contribución, estado, publicabilidad y límites de los proyectos usados como evidencia (`IN-M03`).
* La equivalencia ES/EN está aprobada como alcance semántico, aunque la redacción runtime quede para una fase posterior.
* No se registra “implementado”, fecha de cierre técnico ni cambio de código como resultado de este sprint; el backlog queda listo para Fase 2.

#### BLG-F2-S03-01 — Refinar propuesta de valor principal de la home
**Objetivo:** consolidar una tesis profesional central, consultiva y defendible para `/` y `/en/`.

**Contexto técnico y editorial:** la home ya tiene `hero.role`, `hero.specialties` y `hero.summary` en `src/i18n/site.ts`. El WI define la intención y los límites del mensaje que podrá implementarse después; no redacta ni publica el copy runtime. Su entrada narrativa son `NAR-B01` y `NAR-B02`; la validación manual de voz, afirmaciones y alcance queda registrada en `IN-M01`, `IN-M02` e `IN-M03` para este alcance.

**Alcance funcional:**

* Identificar la audiencia principal y el contexto de decisión al que responde la home.
* Definir la identidad profesional de Sergio en términos compatibles con experiencia, proyectos, formación y CV.
* Explicar qué problemas ayuda a convertir en sistemas y cómo se relacionan procesos, datos, desarrollo, arquitectura y operación.
* Registrar términos que deben conservarse, evitarse o pasar por validación manual.
* Preparar una versión semántica aprobable en ES y una regla de adaptación equivalente en EN.
* Documentar evidencia mínima por afirmación y límites explícitos contra promesas de consultoría, seniority, resultados o servicios no validados.

**No alcance:**

* No reemplazar `hero.role`, `hero.specialties` ni `hero.summary` en `src/i18n/site.ts`.
* No definir CTAs, perfiles externos, servicios comerciales, blog o casos de estudio.
* No convertir la propuesta en una biografía completa ni repetir el contenido de `/about`.

**Entregable esperado:** ficha de propuesta de valor con audiencia, tesis, afirmaciones descompuestas, vocabulario permitido/no permitido, evidencia primaria y de apoyo, límites, versión semántica ES, adaptación EN, dependencias y registro de validación de voz.

**Ficha editorial validada para este WI (fuente ES; no es copy runtime):**

* **Audiencia principal:** personas que evalúan una colaboración o incorporación en equipos técnicos, y organizaciones o equipos que necesitan un perfil freelance para ordenar procesos, datos y operación mediante software. La home debe facilitar una primera conversación profesional; no debe presentar una oferta de consultoría ni asumir que existe un encargo comercial.
* **Identidad profesional validada:** desarrollador de software orientado a backend y datos, con experiencia en iniciativas de transformación digital y formación complementaria en gestión de procesos de negocio, analítica de datos y arquitectura de software. Esta formulación mantiene el foco observable en desarrollo y datos; `ingeniería de soluciones`, `transformación digital` y `arquitectura` funcionan como contexto de trabajo y se mantienen acotadas por los límites aprobados en `IN-M01`/`IN-M02`.
* **Problema que ayuda a abordar:** convertir necesidades de procesos y operación en sistemas de información que conecten requisitos, datos y decisiones de desarrollo. La afirmación describe el tipo de problema abordable, no garantiza una transformación, resultado operativo o disponibilidad de servicio.
* **Valor diferencial propuesto:** conectar comprensión de procesos, organización de información y construcción backend para producir soluciones digitales claras, mantenibles y útiles para quienes las utilizan. `Claro`, `mantenible` y `útil` describen criterios de diseño; no significan impacto medido, calidad certificada ni resultado garantizado.

**Afirmaciones, evidencia y límites:**

| ID | Afirmación semántica | Evidencia primaria observable | Evidencia de apoyo | Límite de publicación | Estado |
| --- | --- | --- | --- | --- | --- |
| `VP-01` | Sergio es un desarrollador de software orientado a backend y datos. | `src/content/experiences/university-intern-cidti-2025.md` registra desarrollo backend y análisis de datos; `src/content/experiences/software-developer-cidti-2026.md` registra desarrollo de software actual. | Resumen y experiencia de `docs/resume/curriculum-vitae.es.tex`; `hero.role` y `hero.summary` en `src/i18n/site.ts`. | No usar `experto`, `especialista`, `senior` ni una jerarquía no validada. La orientación no equivale a dominio exclusivo o exhaustivo. | `validado IN-M01/IN-M02` |
| `VP-02` | Ayuda a traducir necesidades y requisitos en funcionalidades y sistemas digitales. | La experiencia CIDTI 2026 documenta levantamiento de requerimientos, historias de usuario e implementación de funcionalidades sobre una base existente. | Proyecto educativo y experiencias de CIDTI 2025; `aboutSection.principles` y `hero.summary` como contexto narrativo. | No atribuir liderazgo integral, propiedad exclusiva de los sistemas ni resultados de negocio que no estén documentados. | `validado IN-M01/IN-M02` |
| `VP-03` | Conecta procesos, datos y desarrollo para apoyar soluciones de información claras, mantenibles y útiles. | CIDTI 2025 documenta extracción, procesamiento e integración de información; CIDTI 2026 documenta desarrollo, despliegues ocasionales y migración progresiva de arquitectura. | Como evidencia contextual y de apoyo: `EpicrisisIA` de CIDTI 4.0, sistema en construcción para procesamiento y apoyo sobre documentos clínicos, con referencia superficial a equipos técnicos y contextos de salud/auditoría; proyecto en construcción para establecimientos educativos colombianos, orientado a gestión ITA y gestión operativa, con referencia superficial a establecimientos y equipos de gestión; y `BPMNPlay`, herramienta pedagógica en construcción para aprendizaje, modelado y evaluación de procesos BPMN, con referencia superficial a aprendices, facilitadores y equipos de procesos. Los tres proyectos se citan solo para trazabilidad interna y de forma superficial. `SIMIGS`, `ERP Turismo` y `ERP Agroinsumos` quedan registrados como proyectos archivados y dejan de ser evidencia vigente. CV y credenciales complementan el contexto. | `Operación`, `arquitectura` y la relación con los proyectos no deben ampliarse más allá de la contribución validada. No afirmar impactos cuantificados ni garantías de mantenibilidad o utilidad. No incluir datos clínicos, escolares, comerciales, identificadores de stakeholders, documentos internos ni resultados no verificados. | `validado IN-M01/IN-M02/IN-M03; alcance superficial del WI` |
| `VP-04` | Su formación en BPM y analítica de datos refuerza la forma de comprender procesos y trabajar con información. | Diplomados consignados en `docs/resume/curriculum-vitae.es.tex` y registros de `src/data/credentials.ts`. | Experiencia CIDTI 2025 y `learningSection` de `src/i18n/site.ts`. | La formación es evidencia de aprendizaje, no sustituye experiencia aplicada, certificación profesional, consultoría BPM ni resultados analíticos. | `validado IN-M01/IN-M02` |

Los nombres de `EpicrisisIA`, el proyecto educativo y `BPMNPlay` se mantienen únicamente como trazabilidad interna de este backlog. `IN-M03` no cierra las fichas detalladas, los casos de estudio ni la publicación de información de esos proyectos; esas decisiones quedan abiertas para los WIs de proyectos de Fase 3.

**Vocabulario editorial:**

* **Conservar como núcleo:** `desarrollador de software`, `backend`, `datos`, `procesos`, `requisitos`, `sistemas de información`, `desarrollo`, `mantenibles`, `útiles` y `formación aplicada`.
* **Usar con contexto y límites aprobados:** `ingeniería de soluciones`, `transformación digital`, `arquitectura`, `operación`, `consultivo` y `conectar`. Deben describir el enfoque o el contexto de una contribución, no convertirlo en una oferta o un nivel de autoridad.
* **Evitar salvo evidencia y aprobación explícitas:** `consultor`, `especialista`, `experto`, `senior`, `arquitecto`, `líder técnico`, `end-to-end`, `impacto`, `optimización garantizada`, `transformación asegurada`, `servicios` y cualquier promesa de disponibilidad, plazo o resultado.

**Versión semántica validada en ES:**

> Soy desarrollador de software orientado a backend y datos. Convierto necesidades de procesos y operación en sistemas de información claros, mantenibles y útiles, conectando requisitos, datos y decisiones de desarrollo. Mi experiencia en desarrollo backend, extracción y procesamiento de información, y formación en gestión de procesos de negocio orientan la construcción y mejora de soluciones digitales.

Esta redacción es la base semántica validada para una implementación posterior; no es copy runtime publicado. Sus límites aprobados siguen siendo obligatorios y cualquier implementación debe sostener cada segmento con las fuentes indicadas.

**Adaptación semántica equivalente en EN:**

> I am a software developer focused on backend and data. I turn process and operational needs into clear, maintainable, useful information systems by connecting requirements, data, and development decisions. My experience in backend development, information extraction and processing, and training in business process management guides how I build and improve digital solutions.

La adaptación conserva sujeto, alcance, madurez y grado de certeza de ES. `Focused on` no implica especialización exclusiva; `training` conserva el carácter formativo de BPM; `build and improve` no promete resultados ni responsabilidad integral. La versión EN queda aprobada como adaptación semántica equivalente y se usa como base del copy runtime actualizado en la Prioridad inmediata.

**Registro de validación y resolución de preguntas:**

| Punto | Resolución registrada | Evidencia de validación | Estado |
| --- | --- | --- | --- |
| Audiencia y contexto de decisión | Se conserva la audiencia de personas que evalúan colaboración o incorporación en equipos técnicos y se explicita también a organizaciones o equipos que necesiten un perfil freelance; la home abre conversación, no vende un servicio. | Sergio confirma esta audiencia y su objetivo profesional inmediato. | `validado IN-M01` |
| Voz y nivel de lenguaje consultivo | Se aprueba una voz sobria, en primera persona y con verbos de contribución; se excluyen tono de agencia, promesas y seniority no confirmado. | Sergio aprueba las expresiones y límites de lenguaje propuestos. | `validado IN-M01` |
| Afirmaciones profesionales y tesis | Se aprueban la tesis, las afirmaciones y los límites propuestos, conservando la distinción entre experiencia aplicada, formación y exploración. | Sergio aprueba el alcance profesional sin elevarlo a especialización, seniority o resultados garantizados. | `validado IN-M02` |
| Evidencia contextual y proyectos archivados | Los proyectos actuales en construcción se usan solo como evidencia contextual y de apoyo superficial; `SIMIGS`, `ERP Turismo` y `ERP Agroinsumos` se registran como archivados y no como evidencia vigente. | `IN-M03` queda validado únicamente para este alcance; las fichas detalladas se mantienen abiertas para Fase 3. | `validado IN-M03; alcance superficial` |
| Límites de privacidad y publicación | No se publican datos clínicos, escolares, comerciales, identificadores de stakeholders, documentos internos ni resultados no verificados; los nombres de proyectos solo sirven para trazabilidad interna del backlog. | La restricción queda registrada como condición de cualquier implementación posterior de este WI. | `validado IN-M01/IN-M02/IN-M03` |

**Estado del WI:** `Cerrado — especificación editorial validada`. La ficha editorial, la tesis ES, la adaptación EN, la matriz de evidencia, los límites y las validaciones manuales están documentados en el backlog. Este cierre solo cubre el alcance superficial de `IN-M03`; no cierra fichas detalladas ni casos de estudio de proyectos de Fase 3. La implementación runtime posterior actualizó el copy de home y perfil sin cambiar rutas, anchors, el contrato localizado ni las interfaces públicas.

**Gherkin ampliado:**

* **Escenario: propuesta de valor nominal, freelance y defendible**
  **Dado** el hero actual, el objetivo consultivo del roadmap y las fuentes de proyectos, experiencias y CV
  **Cuando** se descompone la propuesta de valor en identidad, problemas y valor aportado
  **Entonces** cada afirmación tiene una redacción semántica en ES, una evidencia identificable y un límite que evita prometer más de lo demostrado, y la audiencia incluye equipos u organizaciones que pueden necesitar un perfil freelance sin convertir el mensaje en una oferta comercial.
* **Escenario: rechazo por voz o alcance no validado**
  **Dado** un mensaje que usa un tono ajeno a Sergio o presenta consultoría, seniority, resultados o disponibilidad no confirmados
  **Cuando** se revisa la ficha antes del cierre
  **Entonces** el WI permanece pendiente, la afirmación se corrige o se marca como bloqueo en `IN-M01`/`IN-M02`, y no se genera copy runtime.
* **Escenario: trazabilidad de cada afirmación y estado de proyectos**
  **Dado** una afirmación sobre procesos, datos, desarrollo, arquitectura u operación
  **Cuando** se audita su ficha editorial
  **Entonces** se puede seguir desde la afirmación hasta `src/i18n/site.ts`, una experiencia/CV y la validación manual correspondiente; `EpicrisisIA`, el proyecto educativo y `BPMNPlay` solo aparecen como apoyo contextual superficial, mientras que `SIMIGS`, `ERP Turismo` y `ERP Agroinsumos` constan como archivados y no como evidencia vigente.
* **Escenario: equivalencia localizada**
  **Dado** el significado aprobado en español
  **Cuando** se prepara la contraparte inglesa
  **Entonces** EN conserva el mismo sujeto, alcance, madurez y grado de certeza, aunque adapte sintaxis o terminología profesional.
* **Escenario: privacidad y cierre manual**
  **Dado** el alcance superficial validado para los proyectos actuales
  **Cuando** se revisa la especificación antes de una implementación posterior
  **Entonces** se excluyen datos clínicos, escolares, comerciales, identificadores de stakeholders, documentos internos y resultados no verificados, se mantienen abiertas las fichas detalladas de Fase 3 y el WI puede marcarse `Cerrado — especificación editorial validada` sin afirmar cambios runtime.

**Desglose de tareas:**

* **Arquitectura:** mapear cada afirmación a las claves actuales del hero y a las fuentes que la sostienen; separar la especificación editorial del contrato runtime.
* **Negocio/valor:** cerrar audiencia, identidad, problemas abordables, valor diferencial y límites de una lectura profesional que también contemple colaboraciones freelance.
* **Funcional:** descomponer la tesis en afirmaciones verificables y producir versión semántica ES/adaptación equivalente EN.
* **No funcional:** evitar lenguaje ambiguo, datos confidenciales, claims de resultados y diferencias de seniority entre locales.
* **Pruebas:** revisar cobertura de evidencia, términos prohibidos/pendientes, trazabilidad y paridad semántica.
* **Documentación/aceptación:** registrar la validación manual completada de `IN-M01`, `IN-M02` y del alcance superficial de `IN-M03`, manteniendo abiertas las fichas detalladas de proyectos para Fase 3.

**Checklist de implementación:**

* La audiencia principal y el contexto de lectura están definidos.
* La identidad profesional no excede cargos, experiencia, formación ni proyectos verificables.
* Cada problema y valor declarado tiene evidencia primaria y de apoyo o queda pendiente.
* Los términos vagos, comerciales o de seniority no validado están sustituidos, acotados o marcados.
* La versión semántica ES tiene una adaptación EN equivalente en alcance y certeza.
* La validación manual `IN-M01`, `IN-M02` y `IN-M03` está registrada; `IN-M03` se limita al alcance superficial de este WI y las fichas detalladas permanecen abiertas para Fase 3.
* `EpicrisisIA`, el proyecto educativo y `BPMNPlay` aparecen solo como evidencia contextual y de apoyo; `SIMIGS`, `ERP Turismo` y `ERP Agroinsumos` están marcados como archivados y no como evidencia vigente.
* Las restricciones de privacidad excluyen datos clínicos, escolares y comerciales, identificadores de stakeholders, documentos internos y resultados no verificados.
* No se modificaron claves, rutas, anchors ni copy runtime.

**Preguntas de definición y cierre — resueltas para este WI:**

* La audiencia conserva a quienes evalúan colaboración o incorporación en equipos técnicos e incluye explícitamente a organizaciones o equipos que necesiten un perfil freelance; el mensaje no se convierte en catálogo de servicios.
* La voz aprobada es sobria, en primera persona y de contribución; se mantienen fuera las promesas comerciales, el seniority no validado y las afirmaciones de especialización o resultados garantizados.
* `IN-M03` queda validado solo para mencionar de forma contextual y superficial los proyectos actuales en construcción; las fichas detalladas y los casos de estudio requieren WIs de Fase 3.
* Los límites de privacidad permanecen obligatorios: no datos clínicos, escolares o comerciales, identificadores de stakeholders, documentos internos ni resultados no verificados.

**Dependencias:** `NAR-B01`, `NAR-B02`, `IN-M01`, `IN-M02`, `IN-M03`, `src/i18n/site.ts`, `src/data/projects.ts`, experiencias, CV y cierre de Sprint 02.
**Tipo de ejecución:** Mixto
**Criterio de aceptación:** existe una tesis ES validada, una adaptación EN equivalente, evidencia y límites por afirmación, y registro de cierre manual para `IN-M01`, `IN-M02` y el alcance superficial de `IN-M03`; las fichas detalladas de proyectos permanecen fuera de este WI. El estado es `Cerrado — especificación editorial validada` y no implica implementación runtime.

#### BLG-F2-S03-02 — Definir bloque explícito de capacidades/servicios
**Objetivo:** especificar un bloque de capacidades que conecte problemas organizacionales, valor y evidencia sin convertirse en un catálogo comercial de servicios.

**Contexto técnico y editorial:** `focusSection` ya presenta cuatro títulos en `src/i18n/site.ts`, mientras que `credentialsByLocale`, `src/data/projects.ts` y las experiencias contienen señales de apoyo distribuidas. El WI amplía la semántica del bloque para una implementación posterior, pero conserva `/#focus`, `/en/#focus` y el significado de los cuatro ejes. La validación de `IN-M02` permite cerrar las afirmaciones y su nivel real a esta profundidad; `IN-M03` solo aporta validación superficial de los proyectos actuales y no sustituye sus fichas detalladas de Fase 3.

**Catálogo editorial validado para este WI (fuente ES; no es copy runtime):**

| ID / capacidad base | Etiqueta ES / equivalente EN | Problema que explica | Valor que puede comunicar | Certeza editorial |
| --- | --- | --- | --- | --- |
| `CAP-01` / `Backend Engineering` | Ingeniería backend / Backend Engineering | Convertir requisitos y reglas de sistema en servicios, integraciones y flujos mantenibles. | Construir y mejorar componentes backend con atención a requisitos, datos, configuración y operación técnica. | `confirmada` para experiencia aplicada; no implica especialización exclusiva ni seniority. |
| `CAP-02` / `Data Processing` | Procesamiento de datos / Data Processing | Extraer, ordenar e integrar información para apoyar la operación o la toma de decisiones. | Transformar información dispersa en estructuras y flujos que puedan utilizarse en un sistema. | `confirmada` para extracción, procesamiento e integración; no incluye analítica predictiva, gobierno de datos ni impacto cuantificado sin evidencia específica. |
| `CAP-03` / `Business Process Management` | Gestión de procesos de negocio / Business Process Management | Comprender requisitos, modelar procesos y ordenar necesidades antes o durante la construcción de una solución digital. | Conectar el análisis de procesos con decisiones de alcance, prioridades y construcción de software. | `confirmada` como combinación acotada de experiencia aplicada y formación; no equivale a consultoría BPM ni a transformación garantizada. |
| `CAP-04` / `Information Systems` | Sistemas de información / Information Systems | Conectar procesos, datos, desarrollo y operación en sistemas útiles y mantenibles. | Integrar perspectivas de proceso, información y construcción técnica para abordar necesidades organizacionales concretas. | `confirmada` como eje integrador de la experiencia documentada; no implica soluciones enterprise universales, propiedad integral ni resultados de negocio. |

El shape conceptual futuro de cada ficha registra obligatoriamente `label`, `problem`, `value`, `primaryEvidence`, `supportingEvidence`, `limits` y `localeEquivalent`. También debe conservar `evidenceMaturity` para distinguir experiencia aplicada, formación y exploración, y `relations` para explicar cómo se complementan los ejes. Este shape es una guía editorial; no es una interfaz TypeScript ni un contrato de runtime aprobado.

**Fichas conceptuales y trazabilidad:**

| ID | Evidencia primaria y naturaleza | Evidencia de apoyo y naturaleza | Relaciones | Límites de publicación |
| --- | --- | --- | --- | --- |
| `CAP-01` | `src/content/experiences/university-intern-cidti-2025.md`: desarrollo backend, extracción/procesamiento e integración en sistemas MongoDB (`experiencia aplicada`). `src/content/experiences/software-developer-cidti-2026.md`: requerimientos, historias de usuario, funcionalidades backend, despliegues ocasionales y migración progresiva de arquitectura (`experiencia aplicada`). | CV y `credentialsByLocale` para Python, FastAPI, bases de datos y arquitectura backend (`formación y respaldo`). `EpicrisisIA` de CIDTI 4.0 solo como proyecto actual en construcción y contexto técnico superficial (`apoyo contextual`). | Recibe requisitos de `CAP-03`, trabaja con información de `CAP-02` y contribuye a `CAP-04`. | No afirmar diseño integral, liderazgo técnico, dominio experto, disponibilidad de servicio ni resultados operativos. |
| `CAP-02` | `university-intern-cidti-2025.md`: herramientas para extracción y procesamiento de información e integración de datos técnicos en MongoDB (`experiencia aplicada`). | `software-developer-cidti-2026.md` y CV para trabajo actual con Python, MongoDB y sistemas existentes (`experiencia aplicada de apoyo`); diplomado de Analítica de Datos y credenciales relacionadas (`formación`). `EpicrisisIA` se conserva como contexto superficial, sin datos clínicos ni resultados (`apoyo contextual`). | Alimenta `CAP-01` y `CAP-04`; se orienta por necesidades de `CAP-03`. | No afirmar analítica avanzada, predicción, gobierno de datos, impacto medido ni decisiones de negocio garantizadas. |
| `CAP-03` | `software-developer-cidti-2026.md`: levantamiento de requerimientos, reuniones con stakeholders, historias de usuario y traducción de necesidades a funcionalidades (`experiencia aplicada`). | `university-intern-cidti-2025.md` y CV para iniciativas de transformación digital (`experiencia aplicada de apoyo`); diplomado BPM y credenciales BPM/BPMN (`formación`). `BPMNPlay` y el proyecto educativo colombiano solo aportan contexto superficial de aprendizaje, modelado, gestión ITA y gestión operativa (`apoyo contextual`). | Orienta el alcance de `CAP-01` y `CAP-02`, y da contexto a `CAP-04`. | No presentarse como consultor BPM, certificación profesional, liderazgo de procesos, transformación garantizada ni resultado de una organización concreta. |
| `CAP-04` | La combinación de `university-intern-cidti-2025.md` y `software-developer-cidti-2026.md` documenta desarrollo, datos, requisitos y mejora de sistemas existentes (`experiencia aplicada`). | `EpicrisisIA`, el proyecto en construcción para establecimientos educativos colombianos y `BPMNPlay` se citan solo como evidencia contextual y de apoyo superficial (`proyectos en construcción`). CV, credenciales y `rationale` del inventario aportan contexto (`respaldo`). `SIMIGS`, `ERP Turismo` y `ERP Agroinsumos` permanecen archivados y no son evidencia vigente. | Integra `CAP-01`, `CAP-02` y `CAP-03`; no agrega una capacidad técnica separada. | No incluir datos clínicos, escolares o comerciales, identificadores de stakeholders, documentos internos ni resultados no verificados. No publicar los nombres de proyectos como casos ni atribuir propiedad o contribución detallada sin ficha Fase 3. |

Los nombres de los proyectos actuales y archivados se mantienen únicamente para trazabilidad interna del backlog. La validación de `IN-M03` en este WI no reabre el inventario público ni cierra `NAR-M05` a `NAR-M07`; las fichas detalladas, los casos de estudio y las decisiones de publicación permanecen en Fase 3.

**Reglas de evidencia y madurez:**

* Cada capacidad exige al menos una evidencia primaria y una evidencia de apoyo; una lista de tecnologías o un curso aislado no satisface el mínimo.
* La evidencia primaria debe ser observable en un proyecto o experiencia cuando exista; una credencial puede reforzar una capacidad, pero no sustituye evidencia aplicada.
* La evidencia de apoyo puede provenir de proyectos adicionales, experiencia, formación o CV, y debe declarar su naturaleza.
* `experiencia aplicada` significa contribución o trabajo verificable; `formación` significa aprendizaje acreditado; `exploración` significa interés o trabajo todavía no suficiente para una afirmación principal.
* La certeza editorial queda en `confirmada` para las cuatro fichas a la profundidad descrita; la etiqueta no representa porcentaje, nivel de dominio ni ranking y queda acotada por los límites de cada fila.
* Ninguna ficha convierte una señal de formación o un proyecto en construcción en experiencia aplicada principal; las tres categorías deben conservarse visibles en cualquier implementación posterior.
* La relación entre capacidades explica complementariedad —procesos que orientan datos y backend, y sistemas de información que integran las demás— sin duplicar la misma afirmación cuatro veces.
* La implementación posterior debe poder expresar la información como texto completo y no depender de color, posición, geometría, tooltip o una lectura visual de “nivel”.

**Alcance funcional:**

* Definir nombre base, etiqueta localizada, problema, valor, evidencia, límites, relaciones y certeza para los cuatro ejes.
* Usar `Áreas de enfoque` / `Focus areas` como encuadre localizado del bloque y `capacidades` / `capabilities` dentro de la explicación editorial; no cerrar una oferta de servicios comerciales.
* Preparar equivalencia ES/EN conservando madurez, responsabilidad y grado de certeza.

**No alcance:**

* No agregar capacidades nuevas, quitar ejes base ni convertir `Frontend & UX` o `Leadership & Communication` de credenciales en ejes principales de este sprint.
* No crear una ruta `/capabilities`, `/services` u otra ruta propia.
* No modificar `focusSection.items`, proyectos, credenciales, experiencias, CV ni componentes.
* No usar capacidades para alterar `projectStatus`, `portfolioTier`, `strategicPriority` o la taxonomía de estados.
* No presentar los proyectos actuales en construcción como casos de estudio ni los proyectos archivados como evidencia vigente.

**Gherkin ampliado:**

* **Escenario: catálogo nominal de cuatro capacidades**
  **Dado** los cuatro títulos actuales de `focusSection` y las fuentes de proyectos, experiencias, formación y CV
  **Cuando** se define el bloque de capacidades
  **Entonces** aparecen exactamente `Backend Engineering`, `Data Processing`, `Business Process Management` e `Information Systems`, cada uno con etiqueta ES/EN, problema, valor, evidencia primaria, apoyo, límites, relaciones, madurez y certeza editorial.
* **Escenario: rechazo por evidencia insuficiente**
  **Dado** una capacidad sustentada solo por tecnologías, cursos o aspiración
  **Cuando** se revisa su criterio de cierre
  **Entonces** no puede marcarse como confirmada; queda `por validar` o `exploratoria` y el bloqueo se vincula a `IN-M02`/`IN-M03`.
* **Escenario: trazabilidad de capacidad a fuentes**
  **Dado** una afirmación de valor para una organización
  **Cuando** se audita la ficha de capacidad
  **Entonces** existe una relación observable con un proyecto o experiencia primaria, una fuente de apoyo y el artefacto narrativo que la consume (`NAR-B03`, `NAR-M03` o `NAR-M04`).
* **Escenario: compatibilidad ES/EN y distinción de madurez**
  **Dado** una ficha validada en español que distingue experiencia aplicada, formación y exploración
  **Cuando** se prepara su adaptación inglesa
  **Entonces** se conserva la misma clasificación y alcance, sin convertir formación en experiencia ni exploración en especialización.
* **Escenario: proyectos actuales y archivados**
  **Dado** que `EpicrisisIA`, el proyecto educativo colombiano y `BPMNPlay` están en construcción, y que `SIMIGS`, `ERP Turismo` y `ERP Agroinsumos` están archivados
  **Cuando** se revisa la evidencia contextual del catálogo
  **Entonces** los proyectos actuales solo respaldan contexto superficial, los archivados no se presentan como evidencia vigente y ninguna ficha incorpora datos sensibles, documentos internos o resultados no verificados.

**Desglose de tareas:**

* **Arquitectura:** mapear el bloque a `/#focus` y `/en/#focus`; definir la separación entre capacidad, estado de proyecto y prioridad narrativa; documentar el shape conceptual futuro.
* **Negocio/valor:** traducir cada eje a una necesidad organizacional y un valor comprensible, sin cerrar servicios comerciales ni resultados garantizados.
* **Funcional:** completar la matriz de cuatro capacidades y sus versiones ES/EN, relaciones, límites y certeza editorial.
* **No funcional:** asegurar que la información pueda leerse como texto, que no dependa de colores y que no exponga información confidencial de proyectos o empleadores.
* **Pruebas:** comprobar exactamente cuatro ejes, evidencia primaria/apoyo, distinción de madurez, trazabilidad y paridad bilingüe.
* **Documentación/aceptación:** registrar la validación manual de `IN-M02` y el alcance superficial de `IN-M03`, incluyendo la separación entre proyectos actuales en construcción y proyectos archivados.

**Checklist de implementación:**

* Las cuatro capacidades conservan su significado y nombres base.
* Cada capacidad tiene problema, valor, evidencia primaria, apoyo, límites, relación y certeza editorial.
* Cada evidencia está clasificada como experiencia aplicada, formación o exploración.
* Ninguna capacidad se presenta como puntuación, ranking, seniority o servicio contratado.
* La etiqueta y el significado ES/EN son equivalentes.
* `IN-M02` queda registrado como validado para las cuatro capacidades a la profundidad de este WI.
* `IN-M03` queda registrado solo para evidencia contextual superficial; las fichas detalladas de proyectos permanecen abiertas para Fase 3.
* `EpicrisisIA`, el proyecto educativo colombiano y `BPMNPlay` aparecen como apoyo contextual de proyectos en construcción; `SIMIGS`, `ERP Turismo` y `ERP Agroinsumos` constan como archivados y no como evidencia vigente.
* Las restricciones de privacidad excluyen datos clínicos, escolares y comerciales, identificadores de stakeholders, documentos internos y resultados no verificados.
* El bloque sigue siendo una función narrativa de `#focus` y no una ruta nueva.
* No se modificó ninguna interfaz, dato, ruta o componente runtime.

**Preguntas de definición y cierre — resueltas para este WI:**

* La evidencia primaria aprobada es la experiencia documentada de CIDTI 2025/2026; proyectos, CV y credenciales funcionan como apoyo según la naturaleza indicada en cada ficha.
* La formulación aprobada describe problemas abordables y valor de construcción de sistemas; `Áreas de enfoque` no se convierte en catálogo de servicios, oferta contractual ni promesa de resultados.
* Las cuatro capacidades se presentan como experiencia aplicada acotada; la formación y los proyectos en construcción permanecen identificados como apoyo, y no se introduce una capacidad basada solo en exploración.
* Las relaciones aprobadas son procesos que orientan datos y backend, con sistemas de información como eje integrador; no se repite la tesis del hero ni se calcula un nivel de dominio.
* La equivalencia ES/EN queda resuelta por etiquetas y significado, con el mismo alcance, madurez, responsabilidad y límites.

**Estado del WI:** `Cerrado — especificación editorial validada`. El catálogo de cuatro capacidades, sus fichas conceptuales, relaciones, evidencia, límites, equivalencia ES/EN y registro de validación quedan definidos. La implementación runtime de la Prioridad inmediata actualizó sus etiquetas bilingües y mantuvo el bloque dentro de `#focus`; no crea una ruta ni una matriz de puntuación. Las fichas detalladas y los casos de estudio de proyectos siguen abiertos en Fase 3.

**Dependencias:** `NAR-B03`, `NAR-M03`, `NAR-M04`, `IN-M02`, `IN-M03`, `src/i18n/site.ts`, `src/data/projects.ts`, `src/data/credentials.ts`, experiencias, CV y taxonomía de estados.
**Tipo de ejecución:** Mixto
**Criterio de aceptación:** los cuatro ejes tienen ficha conceptual completa, evidencia primaria y de apoyo clasificada por madurez, límites, relaciones y equivalencia ES/EN; `IN-M02` y el alcance superficial de `IN-M03` quedan registrados, los proyectos archivados no se presentan como evidencia vigente y las restricciones de privacidad son explícitas. El estado es `Cerrado — especificación editorial validada` y no implica implementación runtime.

#### BLG-F2-S03-03 — Definir matriz comparativa accesible de capacidades
**Objetivo:** reemplazar el radar como recurso predeterminado por una matriz que haga comparable la evidencia de las cuatro capacidades sin simular una medición objetiva de habilidad.

**Decisión funcional:** la matriz comparará cada capacidad por problema, valor, evidencia y límites. Podrá incluir una columna de composición de evidencia —por ejemplo, `primaria`, `primaria + apoyo` o `pendiente`— para expresar presencia/profundidad de respaldo, pero no una escala numérica, porcentaje, ranking o orden de “mejor capacidad”.

**Requisitos de la matriz:**

* Debe tener una fila por cada uno de los cuatro ejes y encabezados comprensibles fuera de cualquier contexto visual.
* Debe poder leerse completamente como contenido textual lineal, tabla semántica o equivalente accesible.
* La comparación debe mostrar problema, valor, evidencia primaria/de apoyo, límites y estado de certeza editorial.
* No puede depender de color, posición, área geométrica, proximidad visual, tooltip, animación o interpretación de un polígono.
* La versión ES y la adaptación EN deben conservar las mismas filas, columnas, alcance, madurez y grado de certeza.
* El recurso debe poder convertirse más adelante en componente sin fijar ahora props, tipos TypeScript, fuente de datos o estrategia visual.
* No debe alterar anchors, navegación, orden de secciones ni estructura actual de la home.

**Especificación editorial validada de la matriz (fuente ES; no es copy runtime):**

La matriz canónica se define con las columnas `Capacidad`, `Problema abordable`, `Valor`, `Evidencia y madurez`, `Límites` y `Certeza editorial`. Las cuatro filas conservan los identificadores de `BLG-F2-S03-02` y el mismo orden del bloque `#focus`:

| ID / capacidad | Problema abordable | Valor | Evidencia y madurez | Límites | Certeza editorial |
| --- | --- | --- | --- | --- | --- |
| `CAP-01` — Backend Engineering / Ingeniería backend | Convertir requisitos y necesidades de producto en funcionalidades backend e integraciones sobre sistemas existentes. | Construir servicios y flujos que conecten decisiones de desarrollo con datos y operación, con atención a claridad y mantenibilidad. | `Primaria + apoyo`: experiencia aplicada documentada en desarrollo backend, funcionalidades, integraciones y despliegues ocasionales; CV y formación como respaldo. `EpicrisisIA` solo aporta contexto superficial de un sistema en construcción. | No afirmar diseño integral, liderazgo técnico, especialización exclusiva, seniority, disponibilidad de servicio ni resultados operativos garantizados. | `Confirmada` a la profundidad descrita; no es una puntuación de dominio. |
| `CAP-02` — Data Processing / Procesamiento de datos | Extraer, ordenar y llevar información a estructuras utilizables por sistemas y procesos. | Facilitar información organizada para apoyar funcionalidades y decisiones de desarrollo. | `Primaria + apoyo`: experiencia aplicada en extracción, procesamiento e integración de información técnica; Python, MongoDB, CV y formación como apoyo. `EpicrisisIA` se mantiene como contexto superficial, sin datos clínicos ni resultados. | No afirmar analítica avanzada, predicción, gobierno de datos, calidad certificada, impacto medido ni decisiones de negocio garantizadas. | `Confirmada` a la profundidad descrita; no equivale a una escala analítica. |
| `CAP-03` — Business Process Management / Gestión de procesos de negocio | Traducir necesidades de procesos, operación y requisitos en alcance funcional y modelos comprensibles. | Conectar comprensión de procesos con historias de usuario, funcionalidades y aprendizaje de modelado BPMN. | `Primaria + apoyo`: experiencia aplicada en requerimientos, historias de usuario y traducción de necesidades a funcionalidades; diplomado BPM, credenciales BPM/BPMN y `BPMNPlay` como apoyo contextual de una herramienta pedagógica en construcción. | No presentarse como consultoría BPM, certificación profesional, liderazgo de procesos, transformación garantizada ni resultado de una organización concreta. | `Confirmada` a la profundidad descrita; formación y exploración permanecen diferenciadas. |
| `CAP-04` — Information Systems / Sistemas de información | Integrar procesos, datos, desarrollo y operación sin reducir el problema a una sola tecnología. | Aportar una mirada de conexión entre requisitos, información y construcción o mejora de sistemas digitales. | `Primaria + apoyo`: combinación de experiencias CIDTI 2025/2026 sobre desarrollo, datos, requisitos y mejora de sistemas existentes; `EpicrisisIA`, el proyecto educativo colombiano y `BPMNPlay` como contexto superficial de proyectos en construcción; CV y credenciales como respaldo. `SIMIGS`, `ERP Turismo` y `ERP Agroinsumos` permanecen archivados. | No incluir datos clínicos, escolares o comerciales, identificadores de stakeholders, documentos internos ni resultados no verificados. No atribuir propiedad, alcance integral o caso de estudio a ningún proyecto. | `Confirmada` como eje integrador a esta profundidad; no representa una solución empresarial universal. |

**Reglas de composición y lectura:**

* `Primaria` identifica evidencia aplicada directamente observable; `apoyo` identifica fuentes que refuerzan el contexto; `contextual` identifica proyectos en construcción o referencias que no sostienen por sí solas una afirmación principal; `pendiente` queda reservado para una fila sin evidencia mínima. Estas categorías describen respaldo, no nivel de habilidad.
* En el estado actual las cuatro filas usan `primaria + apoyo`; la presencia de apoyo contextual no eleva la madurez ni convierte un proyecto en caso de estudio.
* `Confirmada` significa que la formulación está validada para la profundidad editorial indicada y bajo sus límites. No significa porcentaje, ranking, seniority, especialización ni resultado.
* Cada fila y cada afirmación compuesta debe conservar trazabilidad a su ficha `CAP-*`, a una fuente verificable y, cuando corresponda, a `IN-M02` o `IN-M03`. Los nombres de proyectos se mantienen solo como trazabilidad interna.

**Reglas de accesibilidad y fallback:**

* La tabla semántica textual es el fallback normativo y debe estar disponible sin hover, tooltip, animación, color, posición, área, polígono o interacción adicional.
* La futura implementación debe exponer un caption o introducción equivalente, encabezados identificables, asociación entre cada fila y su capacidad, y lectura comprensible cuando las celdas se apilen o el viewport sea estrecho.
* La adaptación visual puede mejorar la comparación, pero no puede ocultar la evidencia, los límites, la madurez o la certeza. El contenido debe seguir siendo operable con teclado y verificable con zoom y lector de pantalla.
* La versión EN conserva los mismos identificadores, filas, columnas, orden lógico, madurez, responsabilidad, límites y fallback. La adaptación puede ser idiomática, pero no puede ampliar el alcance de la versión ES.

**No alcance:**

* No implementar en runtime la tabla, un radar, un SVG, una gráfica ni estilos en este sprint; la matriz anterior es una especificación editorial, no un componente.
* No decidir una escala de competencia, porcentaje de dominio o priorización de capacidades.
* No agregar proyectos, capacidades, filtros, rutas, enlaces a casos de estudio o CTAs.

**Entregable esperado:** especificación de la matriz con columnas, filas, reglas de lectura, categorías de evidencia, fallback textual, paridad ES/EN, criterios de accesibilidad y trazabilidad hacia las fichas de `BLG-F2-S03-02`.

**Gherkin ampliado:**

* **Escenario: matriz comparativa nominal**
  **Dado** el catálogo de cuatro capacidades cerrado por `BLG-F2-S03-02`
  **Cuando** se define la matriz comparativa
  **Entonces** cada fila expone problema, valor, evidencia, límites y certeza, y la composición de evidencia no se interpreta como una puntuación de dominio.
* **Escenario: rechazo de radar o escala subjetiva**
  **Dado** una propuesta que usa área, color, posición, escala numérica o ranking para representar “nivel”
  **Cuando** se revisa contra el criterio del sprint
  **Entonces** la propuesta se rechaza o se reconduce a evidencia textual observable, sin fijar una competencia que las fuentes no demuestran.
* **Escenario: trazabilidad de celdas**
  **Dado** una celda que afirma valor o evidencia de una capacidad
  **Cuando** se audita la matriz
  **Entonces** la celda puede rastrearse a la ficha de capacidad, a `src/data/projects.ts`, experiencias, credenciales, CV o a una validación manual identificada.
* **Escenario: compatibilidad accesible ES/EN**
  **Dado** la matriz semántica en español
  **Cuando** se prepara la contraparte inglesa o un futuro componente
  **Entonces** se conserva el mismo orden lógico, contenido, alcance, fallback textual y estado de certeza, sin depender de color o geometría.
* **Escenario: fallback y viewport estrecho**
  **Dado** un dispositivo o lector que no presenta la composición visual prevista
  **Cuando** se consulta el bloque de capacidades
  **Entonces** las cuatro filas, sus encabezados, evidencia, madurez, límites y certeza siguen disponibles como contenido textual operable y comprensible.

**Desglose de tareas:**

* **Arquitectura:** definir la matriz como artefacto editorial reutilizable por un futuro componente y mantenerla dentro de `#focus`.
* **Negocio/valor:** elegir solo comparadores que ayuden a entender problemas, valor y respaldo; eliminar indicadores decorativos o competitivos.
* **Funcional:** especificar columnas, filas, categorías de evidencia y fallback textual ES/EN.
* **No funcional:** exigir semántica accesible, lectura lineal, contraste/foco cuando se implemente y ausencia de dependencia de color, geometría o interacción oculta.
* **Pruebas:** validar cobertura de cuatro filas, ausencia de escala/ranking, trazabilidad por celda y equivalencia bilingüe.
* **Documentación/aceptación:** registrar la decisión de descartar el radar y las restricciones que deberán respetarse en la implementación futura.

**Checklist de implementación:**

* La matriz compara exactamente las cuatro capacidades definidas.
* Las columnas cubren problema, valor, evidencia, límites y certeza/composición de evidencia.
* La composición de evidencia no se expresa como nota, porcentaje, nivel o ranking.
* Existe una lectura textual completa y una regla de fallback accesible.
* ES/EN conservan filas, columnas, alcance, madurez y certeza.
* La matriz no depende de colores, área, posición, tooltips o animación.
* No se fijaron props, tipos, rutas, anchors ni componentes nuevos.
* La trazabilidad de cada afirmación apunta a una ficha y fuente verificable.

**Preguntas de definición y cierre:**

* **Resuelta:** `primaria`, `apoyo`, `contextual` y `pendiente` describen respaldo y madurez de la evidencia; no son niveles de competencia. El estado actual de las cuatro filas es `primaria + apoyo`.
* **Resuelta:** las columnas imprescindibles son capacidad, problema, valor, evidencia/madurez, límites y certeza. Tecnologías, fechas, stakeholders y resultados quedan en las fuentes, no en la matriz.
* **Resuelta:** el fallback normativo es la tabla semántica textual; cualquier composición visual futura es una mejora opcional que no puede ocultar contenido.
* **Resuelta para la siguiente implementación:** verificar encabezados y asociación de celdas, lectura lineal, teclado, zoom, lector de pantalla, contraste y foco, además de la ausencia de información comunicada solo por color o geometría.

**Dependencias:** `BLG-F2-S03-02`, `NAR-B03`, `IN-M02`, `IN-M03`, `docs/portfolio-mvp-sitemap.md`, `docs/portfolio-content-prioritization.md` y contrato actual de `#focus`.
**Tipo de ejecución:** Mixto
**Criterio de aceptación:** existe una especificación textual, accesible y bilingüe de la matriz con cuatro filas, seis columnas, categorías de evidencia, fallback normativo y trazabilidad por capacidad; descarta el radar, evita puntuaciones/rankings, conserva `#focus` y no define todavía el componente runtime.

**Estado del WI:** `Cerrado — especificación editorial validada`. La matriz, sus cuatro filas, reglas de composición, fallback textual, paridad ES/EN, criterios de accesibilidad y trazabilidad quedan definidos para implementación posterior. Este cierre no implementa una tabla o gráfica, no crea rutas ni anchors, no modifica interfaces TypeScript ni declara copy runtime publicado.

**Cierre del Sprint 03:**

* `BLG-F2-S03-01` deja validada la propuesta de valor y sus límites de voz, audiencia, evidencia y privacidad.
* `BLG-F2-S03-02` deja validadas las cuatro capacidades, sus relaciones, evidencia clasificada y tratamiento de proyectos actuales en construcción frente a proyectos archivados.
* `BLG-F2-S03-03` deja validada la matriz textual accesible como recurso comparativo, con el radar y cualquier escala subjetiva descartados.
* `IN-M01` e `IN-M02` quedan registrados como validados en el alcance de los WIs correspondientes; `IN-M03` queda resuelto solo para el alcance superficial y contextual de este sprint. Las fichas detalladas, los casos de estudio y las decisiones de publicación de proyectos permanecen abiertas en Fase 3.
* Se conservan `/`, `/en/`, `#focus`, el contrato localizado, las interfaces TypeScript, las fuentes runtime y el inventario público. No se declara implementación de aplicación ni copy runtime.

**Evidencia de cierre del sprint:** la propuesta de valor, el catálogo de capacidades y la matriz comparativa están descritos en español como fuente editorial, con equivalencia semántica EN, fuentes y límites explícitos. La documentación queda lista para una futura implementación de Fase 2 y para la captura detallada de proyectos de Fase 3.

**Estado del sprint:** `Cerrado — especificación editorial validada` (2026-08-20). El cierre confirma el alcance documental y no equivale a implementación runtime, cambio de rutas, modificación de datos públicos ni validación definitiva de casos de estudio.

### Sprint 04

**Objetivo del sprint:** convertir la propuesta validada en Sprint 03 en una experiencia de inicio bilingüe coherente con sus fuentes públicas, con contacto como acción principal, proyectos y CV como rutas secundarias y una especificación funcional estable para la home v1.

**Valor:** una persona que llegue desde una búsqueda, un perfil externo o una recomendación debe poder entender rápidamente quién es Sergio, qué tipo de problemas aborda y cómo iniciar una conversación profesional. La coherencia se evalúa por afirmación, alcance y destino; una redacción más amplia o un enlace funcional no compensan una fuente desactualizada.

**Alcance:**

* Revisar claims de identidad, foco, experiencia, proyectos, formación, enlaces y acciones entre portfolio, GitHub, LinkedIn y CV.
* Registrar una matriz con versión canónica, estado, riesgo, acción propuesta y responsable, distinguiendo acciones manuales externas de cambios aplicables al repositorio.
* Definir el catálogo jerarquizado de CTAs del MVP y aplicar su mínimo runtime en `HeroActions`.
* Cerrar la estructura bilingüe de la home con sus fuentes, OKRs, rutas y anchors actuales.
* Corregir en las fuentes LaTeX el estado académico a `formación académica finalizada, grado en trámite` y publicar los PDFs mediante `make cv`.

**No alcance:**

* No modificar GitHub ni LinkedIn automáticamente; las recomendaciones de esos perfiles quedan asignadas a Sergio.
* No convertir proyectos archivados o contextuales en casos de estudio ni en claims de experiencia vigente.
* No crear blog, casos de estudio, rutas nuevas, footer, analytics, 404, catálogo comercial ni tipos runtime para el catálogo documental de CTAs.
* No reescribir la propuesta de valor de Sprint 03, ni añadir nuevas claves de copy, capacidades, datos de proyectos o experiencias.
* No hacer una auditoría visual; solo se verifica la jerarquía funcional, semántica y destino de las acciones.
* No actualizar `docs/portfolio-roadmap.md` hasta que exista cierre real con evidencia técnica, editorial y manual.

**Dependencias internas:** cierre de Sprint 03; `NAR-B04`, `NAR-B05`, `NAR-B06`; `IN-M03`, `IN-M04`, `IN-M05`; `src/i18n/site.ts`; `src/components/HeroActions.tsx`; `src/components/PortfolioPage.astro`; experiencias, datos de proyectos, CV, PDFs publicados y `docs/portfolio-narrative-backlog.md`.

**Tareas transversales:**

* **Arquitectura:** mantener la separación entre copy localizado, componentes presentacionales, datos de proyectos/experiencias y fuentes LaTeX; ampliar solo el contrato interno necesario de `HeroActions`.
* **Negocio/valor:** comprobar que el hero invita a una conversación profesional sin convertirlo en una oferta comercial, y que los proyectos funcionan como evidencia contextual, no como casos de estudio.
* **Funcional:** verificar jerarquía, etiqueta, destino y localización de cada CTA; conservar rutas, anchors, orden de la home y los cuatro ejes de `#focus`.
* **No funcional:** asegurar paridad semántica ES/EN, enlaces accesibles y verificables, foco/operabilidad existentes y ausencia de claims comunicados solo por estilo o posición.
* **Pruebas:** ejecutar build, lint, compilación/publicación de CV, smoke test de las ocho rutas y comprobaciones de anchors, etiquetas, destinos y PDFs; registrar límites del smoke test HTTP si el entorno no permite abrir un puerto.
* **Documentación/aceptación:** mantener la matriz, el catálogo, las preguntas manuales y la evidencia técnica en el backlog; no marcar el sprint cerrado mientras falte revisión externa.

**Riesgos concretos:**

* GitHub conserva un posicionamiento amplio como `Web developer` y `Freelance Full Stack Web Developer`; es una divergencia narrativa que no se debe registrar automáticamente como falsedad.
* LinkedIn y el CV pueden presentar estados académicos distintos; el CV histórico decía `9º semestre`, mientras LinkedIn declara formación finalizada con grado en trámite.
* La lista visible de proyectos no debe reinterpretarse como casos de estudio; los proyectos archivados o contextuales siguen fuera de claims de experiencia vigente y su realineación profunda pertenece a Fase 3.
* Una adaptación inglesa puede reforzar seniority, responsabilidad o disponibilidad aunque parezca una traducción natural; ES conserva la fuente semántica.
* El CTA puede cambiar de aspecto y seguir apuntando a un destino incorrecto; se debe verificar el `href` generado para ambas locales.

**Decisiones cerradas:**

* La propuesta validada en Sprint 03 es la fuente canónica del portfolio.
* El objetivo principal es iniciar contacto profesional; el CTA principal apunta a `#contact` o `/en/#contact` y no abre directamente el correo.
* Proyectos y CV son las únicas acciones secundarias del hero.
* LinkedIn canónico: `https://www.linkedin.com/in/smaje/`; GitHub canónico: `https://github.com/smaje99`; correo: `mailto:smajefranco@gmail.com`.
* No se crean CTAs ni rutas para blog o casos de estudio.
* La revisión externa cubre claims, experiencia, proyectos destacados, enlaces y acciones; no es una auditoría visual.
* Los cambios de GitHub y LinkedIn se validaron manualmente junto con la publicación del copy uniforme, la auditoría de repositorios y la vigencia de los canales. La paridad semántica ES/EN y la aceptación manual de la home quedaron aprobadas.
* Estado académico válido: `formación académica finalizada, grado en trámite`.
* La evidencia externa recibida el 2026-08-31 confirma en LinkedIn el cargo actual de desarrollador de software en Cidti 4.0, jornada parcial, desde marzo de 2026, y el estado académico `formación académica finalizada, grado en trámite`. El copy uniforme de `docs/external-profile-copy.md`, incluidas las aptitudes principales de LinkedIn y la auditoría cualitativa de repositorios, fue publicado y validado manualmente.
* La home conserva rutas, anchors, orden general y contrato bilingüe actuales. La implementación mínima puede modificar copy de etiquetas y el contrato interno de `HeroActions`, sin crear nuevas claves de copy.

**Interfaces y tipos:** `HeroActions` añade la prop `contactHref: string`. El botón de contacto ocupa la variante primaria y se renderiza antes de proyectos y CV; las otras props existentes se mantienen. No se crea un tipo runtime para el catálogo de CTAs ni se altera el shape de `focusSection.items`, proyectos, experiencias o navegación.

**Estado del sprint:** `Cerrado — aceptación manual de la home validada` (2026-09-07). Los puntos de copy externo, actualización de perfiles, verificación de canales, auditoría de repositorios, paridad semántica ES/EN y aceptación manual funcional de la home están validados.

### Resumen actualizado de cierre

**Validado:**

* Copy de GitHub y LinkedIn publicado y revisado, incluyendo titular, bio, sección “Acerca de” y aptitudes principales.
* Estado académico y experiencia actual coherentes con el portfolio y el CV.
* Auditoría cualitativa de repositorios públicos completada, distinguiendo evidencia técnica, formación, trayectoria histórica y procedencia externa.
* URLs y canales de GitHub, LinkedIn y correo verificados.
* Build, lint, generación/publicación de CV, smoke test estático, CTA, anchors y PDFs registrados como evidencia técnica.

**Validado — paridad semántica ES/EN:**

* Se compararon la versión española canónica y su adaptación inglesa en hero, contacto, capacidades, experiencia, proyectos, perfiles externos y CV.
* Ambas versiones describen la misma identidad: desarrollador de software orientado a backend y datos, con foco en sistemas de información.
* `processes`, `requirements`, `data`, `development decisions`, `operations`, `maintainable` y `useful` conservan el alcance de sus equivalentes en español.
* No se detectaron aumentos en seniority, responsabilidad, disponibilidad, autoría de proyectos, resultados ni especialización técnica en la versión inglesa.
* Se acepta como observación editorial que `An integral engineer` es menos idiomático que otras alternativas, pero no cambia el significado.
* Se documenta como decisión de alcance que `technical leadership` aparece en ambas versiones del sitio, mientras que el copy externo evita `líder técnico` para no sobredimensionar el perfil; no es una divergencia ES/EN.

**Pendiente 2 — cerrado: aceptación manual de la home:**

* Se recorrieron `/` y `/en/` en desktop y móvil, comprobando el orden Hero → contacto → enfoque → proyectos → experiencia.
* Se activaron los tres CTA del hero en ambas locales: contacto como acción principal hacia `#contact` o `/en/#contact`, proyectos hacia la ruta localizada y CV hacia el PDF localizado.
* Se verificó con teclado que los CTA fueran alcanzables, tuvieran foco visible y conservaran la jerarquía funcional; también se comprobó zoom y lectura sin depender exclusivamente del estilo visual.
* Se confirmó que `#contact`, `#focus`, `#projects` y `#experience` resolvieran desde la home y que la navegación localizada conservara sus destinos.
* Se revisó que LinkedIn, GitHub, correo y los tres PDFs abrieran sus destinos válidos desde la home y las rutas relacionadas.
* No se encontraron defectos bloqueantes; el pendiente quedó validado y los tres WIs y el sprint pasaron a `Cerrado`.

#### BLG-F2-S04-01 — Matriz de coherencia externa

**Objetivo:** dejar trazable la relación entre el portfolio, GitHub, LinkedIn y CV, separando coincidencias, divergencias de posicionamiento y verificaciones pendientes.

**Entregable:** matriz de claims y elementos públicos. `Portfolio` es la versión canónica del sitio; GitHub y LinkedIn requieren acciones manuales; el CV se modifica en sus fuentes LaTeX y se publica por el Makefile.

| Afirmación o elemento | Portfolio (canónico) | GitHub | LinkedIn | CV | Estado | Riesgo | Acción propuesta | Responsable |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Identidad y foco | Desarrollador de software orientado a backend y datos; ingeniería de soluciones para sistemas de información. | Bio y README actualizados con foco en software, backend, datos y sistemas de información. | Titular y sección “Acerca de” alineados con el foco canónico. | Desarrollador de software orientado a backend y datos. | `coincide` | Mantener el alcance sin volverlo una afirmación de especialización exclusiva. | Validación manual completada; conservar el copy como referencia externa. | Sergio (externo); Codex (portfolio). |
| Experiencia Cidti 4.0 | La home y la colección de experiencias incluyen desarrollo de software actual y experiencia previa en Cidti 4.0. | El copy externo contextualiza el cargo sin atribuir proyectos públicos como experiencia laboral. | La experiencia publicada confirma `Desarrollador de software`, Cidti 4.0, jornada parcial, `mar. 2026 - actualidad`, Cali y remoto. | Las fuentes ES/EN y los tres PDFs publicados incorporan ahora la experiencia actual como primera entrada profesional. | `coincide` | Evitar ampliar la responsabilidad o presentar repositorios públicos como trabajo de Cidti sin evidencia específica. | Validación manual completada; mantener la experiencia sincronizada. | Sergio (perfiles externos y vigencia); Codex (fuentes LaTeX y PDFs). |
| Formación e institución | El portfolio usa formación aplicada y credenciales sin afirmar un semestre vigente. | Bio y README ya no dicen `Computer Engineering Student`. | El perfil confirma UNIR, Ingeniería Informática, formación académica finalizada y grado en trámite. | UNIR; estado actualizado a formación finalizada y grado en trámite en ES/EN. | `coincide` | Conservar la diferencia entre formación finalizada y grado todavía en trámite. | Validación manual completada; conservar el estado académico canónico. | Sergio (perfiles externos); Codex (CV). |
| Proyecto y estado | Los proyectos visibles se mantienen según `src/data/projects.ts`; los archivados/contextuales no son experiencia vigente ni casos de estudio. | La auditoría pública clasifica repositorios propios, académicos, archivados, históricos y externos. | El copy externo presenta los repositorios según rol y madurez, sin elevarlos a experiencia laboral vigente. | El CV no presenta esos proyectos como experiencia vigente. | `coincide` | La clasificación debe mantenerse si cambian el inventario o la visibilidad de repositorios. | Auditoría manual completada; reservar realineación profunda para Fase 3. | Sergio (verificación externa); Codex (cambios del sitio solo en WIs posteriores). |
| Enlaces profesionales | LinkedIn `https://www.linkedin.com/in/smaje/`; GitHub `https://github.com/smaje99`; correo vigente en `#contact`. | Enlace a LinkedIn y perfil `smaje99`. | URL canónica `/in/smaje/`. | Incluye LinkedIn, GitHub y correo enlazados. | `coincide` | Revisar vigencia si cambia algún canal externo. | Verificación manual completada; conservar URLs normalizadas. | Codex (repo); Sergio (vigencia). |
| Alcance bilingüe | EN adapta la tesis ES sin ampliar seniority, responsabilidad, disponibilidad o resultados. | Perfil y README principalmente en inglés, con foco validado en software, backend, datos y sistemas de información. | Perfil público principalmente en español, con foco y estado académico alineados. | Fuentes ES/EN mantienen idéntico alcance académico y profesional. | `coincide` | `An integral engineer` es una formulación menos idiomática, pero no cambia el significado; `technical leadership` se mantiene en ambas versiones del sitio y se acota en el copy externo. | Validación claim por claim completada; conservar la decisión de alcance documentada. | Sergio + Codex. |

**Reglas de la matriz:** `coincide` significa equivalencia suficiente de hecho y alcance; `diverge` identifica una diferencia observable que puede ser de enfoque, actualidad o nivel de detalle y no implica por sí sola falsedad; `pendiente de verificar` requiere una comprobación manual de vigencia, alcance o publicabilidad. Cada fila distingue la acción externa de la acción materializable en el repositorio. Los nombres de proyectos archivados o contextuales no se promocionan como experiencia vigente.

**Gherkin ampliado:**

* **Escenario: comparación nominal entre cuatro fuentes**
  **Dado** un claim de identidad, experiencia, formación, proyecto o canal
  **Cuando** se compara portfolio, GitHub, LinkedIn y CV
  **Entonces** la matriz registra la versión canónica, el texto observable por fuente, el estado, el riesgo, la acción y el responsable.
* **Escenario: divergencia de GitHub o LinkedIn**
  **Dado** que una fuente externa usa un título más amplio o un estado diferente
  **Cuando** se audita el claim
  **Entonces** se marca `diverge`, se explica si es posicionamiento o desactualización y se deja la corrección externa como acción manual.
* **Escenario: corrección del estado académico**
  **Dado** el estado válido `formación académica finalizada, grado en trámite`
  **Cuando** se compara CV, portfolio y LinkedIn
  **Entonces** el CV no dice `9º semestre`, el claim no implica estudios en curso y cualquier estado distinto de GitHub queda como divergencia externa pendiente.
* **Escenario: trazabilidad de cada claim**
  **Dado** un claim publicado en la home o en una ruta enlazada
  **Cuando** se revisa su fuente
  **Entonces** existe una referencia a `site.ts`, una experiencia, un proyecto, una credencial, la fuente LaTeX o una URL externa verificable, junto con su límite de publicación.
* **Escenario: proyectos fuera de claims vigentes**
  **Dado** un proyecto archivado, contextual o en construcción
  **Cuando** se compara la lista pública con perfiles externos y CV
  **Entonces** no se presenta como experiencia laboral vigente ni como caso de estudio cerrado; su análisis profundo se difiere a Fase 3.

**Estado del WI:** `Cerrado — matriz, validación externa y paridad semántica ES/EN aprobadas`.

**Actualización de evidencia (2026-09-06):** las capturas de Experiencia y Educación de LinkedIn confirman el cargo actual en Cidti 4.0 y el estado académico aprobado. La contradicción sobre el trabajo actual queda resuelta en la matriz y el cargo fue incorporado a las dos fuentes LaTeX y a los tres PDFs publicados. La publicación del copy uniforme, las aptitudes principales, la verificación de proyectos, la auditoría de repositorios, la comprobación de canales y la paridad semántica ES/EN quedaron validadas manualmente. Se aceptaron las observaciones editoriales sobre `An integral engineer` y la diferencia de alcance entre el sitio y el copy externo respecto a `technical leadership` / `líder técnico`. El documento de publicación es `docs/external-profile-copy.md`.

#### BLG-F2-S04-02 — Catálogo jerarquizado de CTAs del MVP

**Objetivo:** hacer inequívoca la conversión principal del sitio y conservar caminos secundarios/contextuales honestos.

| ID | Jerarquía | Intención | Etiqueta ES | Etiqueta EN | Destino ES | Destino EN | Ubicación | Responsable | Verificación requerida |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `CTA-HERO-CONTACT` | Principal | Iniciar una conversación profesional. | `Hablemos` | `Let’s talk` | `#contact` | `/en/#contact` | Hero | Codex en repo; Sergio valida tono | Verificar que el botón sea primario, aparezca primero y no abra `mailto:` directamente. |
| `CTA-HERO-PROJECTS` | Secundario | Revisar evidencia pública antes de contactar. | `Ver proyectos` | `View projects` | `/projects` | `/en/projects` | Hero | Codex en repo | Verificar ruta real y que no se presente como caso de estudio. |
| `CTA-HERO-CV` | Secundario | Descargar el perfil profesional resumido. | `Descargar CV` | `Download resume` | `/docs/curriculum-vitae-sergio-maje.es.pdf` | `/docs/curriculum-vitae-sergio-maje.en.pdf` | Hero | Codex en repo | Verificar que ambos PDFs existan y reflejen las fuentes LaTeX actuales. |
| `CTA-CONTACT-LINKEDIN` | Contextual | Elegir un canal profesional de contacto y trayectoria. | `LinkedIn` | `LinkedIn` | `https://www.linkedin.com/in/smaje/` | `https://www.linkedin.com/in/smaje/` | `#contact` y enlaces formativos | Sergio valida vigencia; Codex normaliza repo | Verificar URL canónica y disponibilidad pública. |
| `CTA-CONTACT-GITHUB` | Contextual | Revisar código y actividad pública. | `GitHub` | `GitHub` | `https://github.com/smaje99` | `https://github.com/smaje99` | `#contact` | Sergio valida vigencia; Codex mantiene enlace | Verificar perfil, repositorios y alcance de claims. |
| `CTA-CONTACT-EMAIL` | Contextual | Escribir directamente después de conocer el contexto. | `Correo` | `Email` | `mailto:smajefranco@gmail.com` | `mailto:smajefranco@gmail.com` | `#contact` | Sergio valida canal; Codex mantiene enlace | Verificar canal vigente; no elevarlo a CTA primario del hero. |

**Reglas de jerarquía:** el contacto es la acción visual y semánticamente principal; proyectos y CV son secundarios; LinkedIn, GitHub y correo son canales contextuales dentro de `#contact`. Blog y casos de estudio no aparecen en el catálogo ni en la navegación. El catálogo es documental: no se crea un tipo runtime ni una colección de datos nueva.

**Implementación mínima aplicada:** `HeroActions` recibe `contactHref`; el botón de contacto usa la variante primaria y el destino localizado; proyectos usa la variante outline; CV conserva la descarga localizada en una pestaña nueva. `heroActions.contact` se etiqueta `Hablemos` / `Let’s talk`. La URL de LinkedIn del sitio y del CV se normaliza a `https://www.linkedin.com/in/smaje/`.

**Gherkin ampliado:**

* **Escenario: CTA principal a contacto**
  **Dado** la home ES o EN
  **Cuando** se inspecciona el primer botón del hero
  **Entonces** su etiqueta es `Hablemos` o `Let’s talk`, su destino es `#contact` o `/en/#contact` y no es un enlace `mailto:`.
* **Escenario: paridad ES/EN**
  **Dado** el catálogo de seis CTAs
  **Cuando** se comparan locales
  **Entonces** se conserva la intención, jerarquía, ubicación y destino equivalente, aunque la etiqueta se adapte idiomáticamente.
* **Escenario: rechazo de CTAs reservados**
  **Dado** una propuesta de CTA hacia blog o casos de estudio
  **Cuando** se valida contra el alcance del sprint
  **Entonces** se rechaza porque no existe ruta ni contenido publicado para esas piezas.
* **Escenario: destino de secundarios**
  **Dado** los botones de proyectos y CV
  **Cuando** se activan desde el hero
  **Entonces** llevan a las rutas de proyectos o al PDF localizado y no desplazan la jerarquía del contacto.
* **Escenario: canales contextuales**
  **Dado** el bloque `#contact`
  **Cuando** se revisan sus enlaces
  **Entonces** LinkedIn, GitHub y correo aparecen como canales separados, con destinos verificables y sin afirmaciones nuevas.

**Estado del WI:** `Cerrado — catálogo, implementación mínima y aceptación manual de la home validados`.

#### BLG-F2-S04-03 — Especificación funcional de la home v1

**Objetivo:** cerrar el contrato funcional de la home bilingüe y dejar claro qué se implementa ahora y qué permanece reservado.

**Contrato:** se conservan `/` y `/en/`, `#top`, `#contact`, `#focus`, `#projects` y `#experience`, además de las rutas `/about`, `/projects`, `/experience` y sus equivalentes `/en/...`. No se añade perfil duplicado, blog, casos de estudio, footer, analytics ni 404 como parte de esta home v1.

| Orden | Sección | Propósito y contenido mínimo | Fuente principal | OKR relacionado | Estado |
| --- | --- | --- | --- | --- | --- |
| 1 | Hero | Identidad, propuesta validada de Sprint 03, especialidades y tres acciones: contacto principal, proyectos y CV secundarios. | `copy.hero`, `copy.heroActions`, `HeroActions.tsx`; `VP-01` a `VP-03`. | Objetivo 1 KR1/KR4; Objetivo 4 KR4. | Validado: implementación mínima, tono y destinos comprobados. |
| 2 | Contacto `#contact` | Invitación a conversar y canales LinkedIn, GitHub y correo. | `copy.contactSection`, `copy.socials`, `PortfolioPage.astro`; `NAR-B06`. | Objetivo 4 KR3/KR4. | Validado: enlaces y vigencia comprobados. |
| 3 | `#focus` | Cuatro capacidades de Sprint 03, en el orden actual: Backend Engineering, Data Processing, Business Process Management e Information Systems. | `copy.focusSection.items`, `BLG-F2-S03-02`, `BLG-F2-S03-03`. | Objetivo 1 KR1/KR4. | Conservado sin cambio estructural. |
| 4 | `#projects` | Proyectos destacados del inventario runtime y enlace al listado completo; no se redactan casos de estudio ni se elevan proyectos archivados a experiencia vigente. | `getFeaturedProjects(locale)`, `src/data/projects.ts`, `copy.projectsSection`. | Objetivo 2 KR3/KR4; Objetivo 4 KR1. | Conservado y validado; realineación profunda queda en Fase 3. |
| 5 | `#experience` | Dos experiencias recientes, contexto breve y enlace al historial completo. | `getCollection('experiences')`, `localizeExperiences`, `copy.experienceSection`. | Objetivo 1 KR3; Objetivo 4 KR1/KR4. | Conservado y validado; vigencia y CV comprobados. |

**Reglas funcionales y de contenido:**

* El hero responde quién es Sergio, qué conecta y cuál es el siguiente paso; reutiliza `hero.role`, `hero.specialties` y `hero.summary` sin crear claves nuevas.
* `#contact` permanece dentro de la home y su navegación localizada sigue funcionando desde la home y desde rutas secundarias según el helper de página.
* `#focus` conserva cuatro fichas nominales; la matriz comparativa de Sprint 03 sigue siendo especificación editorial y no se implementa como tabla o radar en este sprint.
* `#projects` y `#experience` usan fuentes runtime existentes; sus enlaces llevan a rutas reales y no prometen blog, casos ni resultados no documentados.
* ES es la fuente semántica; EN es adaptación equivalente en alcance, madurez, responsabilidad y certeza. Si existe deriva, la sección permanece pendiente de cierre.

**Gherkin ampliado:**

* **Escenario: estructura nominal de la home**
  **Dado** `/` o `/en/`
  **Cuando** se recorre el documento en orden
  **Entonces** aparecen Hero, `#contact`, `#focus`, `#projects` y `#experience`, con las fuentes y anchors definidos, sin secciones reservadas nuevas.
* **Escenario: conservación de rutas y anchors**
  **Dado** la navegación actual y los enlaces internos
  **Cuando** se construyen ambas locales
  **Entonces** `/`, `/en/`, sus rutas secundarias y los anchors `#contact`, `#focus`, `#projects` y `#experience` siguen resolviendo.
* **Escenario: equivalencia ES/EN**
  **Dado** una sección publicada en español
  **Cuando** se consulta su contraparte inglesa
  **Entonces** existe el mismo orden funcional, contenido mínimo, jerarquía de CTA y alcance de claims; no se agregan promesas en inglés.
* **Escenario: claims trazables**
  **Dado** cualquier frase sustantiva del hero, contacto, enfoque, proyectos o experiencia
  **Cuando** se audita su procedencia
  **Entonces** se puede rastrear a una clave de copy, fuente runtime o ficha editorial y a una fuente de evidencia del backlog.
* **Escenario: funcionalidades reservadas**
  **Dado** blog, casos de estudio, footer, analytics o 404
  **Cuando** se revisa el contrato de la home
  **Entonces** no se añaden ni se anuncian como capacidades disponibles del MVP.

**Criterios de salida y evidencia de cierre:**

* La matriz externa está completa por claim y diferencia claramente coincidencias, divergencias y pendientes, con acciones manuales y de repositorio separadas.
* La propuesta académica tiene el mismo alcance entre portfolio, CV y LinkedIn: formación finalizada y grado en trámite; cualquier GitHub desactualizado queda como pendiente manual.
* `CTA-HERO-CONTACT` es principal, apunta a `#contact` en ambas locales y no abre el correo directamente.
* Las seis entradas del catálogo tienen intención, etiqueta ES/EN, destino, ubicación, responsable y verificación; no hay CTAs a blog o casos.
* La home conserva rutas, anchors, datos de proyectos, experiencias, navegación y contrato bilingüe actuales.
* Los dos PDFs publicados se regeneran desde las fuentes LaTeX y reflejan el estado académico corregido.
* `pnpm build`, `pnpm lint`, `make cv`, smoke test de rutas ES/EN, comprobación de enlaces/PDFs/etiquetas y revisión manual de la matriz dejan evidencia registrable.
* La aceptación manual de la home quedó completada en ambas locales, incluyendo la comprobación funcional de CTA, anchors, rutas, enlaces y PDFs.

**Preguntas de cierre:**

* **Resuelta:** el estado académico válido es `formación académica finalizada, grado en trámite`.
* **Resuelta manualmente:** Sergio publicó y validó las recomendaciones de titular y bio en GitHub.
* **Resuelta manualmente:** LinkedIn adoptó el foco canónico del portfolio, conservando el contexto profesional y las aptitudes principales.
* **Resuelta:** el perfil uniforme de `docs/external-profile-copy.md` fue publicado y validado; GitHub queda adaptado a desarrolladores y LinkedIn al contexto profesional.
* **Resuelta por evidencia externa y actualización de CV (2026-08-31):** la experiencia actual es desarrollador de software en Cidti 4.0, jornada parcial, desde marzo de 2026; las fuentes LaTeX y los PDFs ES/EN ya reflejan el cargo. La formación académica está finalizada y el grado está en trámite.
* **Resuelta manualmente:** las URLs y canales de contacto continúan vigentes.
* **Resuelta manualmente:** los proyectos archivados y contextuales no se interpretan como experiencia actual ni como casos cerrados; la auditoría queda documentada en `docs/external-profile-copy.md`.
* **Resuelta:** la paridad semántica ES/EN fue aprobada claim por claim. Se aceptaron las observaciones editoriales sobre `An integral engineer` y la diferencia de alcance entre el sitio y el copy externo respecto a `technical leadership` / `líder técnico`.
* **Resuelta:** se completó la aceptación manual de la home en desktop, móvil, teclado y zoom, incluyendo CTA, anchors, rutas, enlaces y PDFs.

**Evidencia técnica generada en esta ejecución:** cambio de contrato y jerarquía de `HeroActions`, etiquetas localizadas, normalización de LinkedIn, actualización de las dos fuentes LaTeX con la experiencia actual y publicación de los tres PDFs mediante `make cv`. Para el cierre de contacto se añadió `scroll-margin-block-start: clamp(7rem, 28vh, 16rem)` a `#contact` y un halo CSS interno activado por `#contact:target`; el halo solo anima `opacity` y `box-shadow`, queda recortado por la banda y mantiene una señal estática con `prefers-reduced-motion: reduce`. El 2026-08-31 `pnpm build` terminó con 0 errores, 0 warnings y 0 hints, generó las ocho rutas, y el smoke test estático confirmó anchors, CTAs localizados, enlaces profesionales y PDFs válidos. El preview HTTP no pudo mantenerse disponible para `curl` en este entorno; la validación estática de los ocho HTML generados queda registrada como alternativa.

La verificación de esta ejecución cubre la inspección estática de los destinos `#contact` y `/en/#contact`, la presencia de los anchors de la home, el orden hero → contacto → enfoque → proyectos → experiencia y la existencia de las reglas de target, margen de scroll y movimiento reducido. La semántica del target nativo cubre click, URL directa, recarga y navegación atrás/adelante; un segundo click sobre el hash ya activo no reanima el halo ni modifica el layout. La comprobación visual en viewport desktop, móvil, teclado y zoom, junto con la vigencia manual de los canales externos, quedó validada sin defectos bloqueantes.

**Estado del WI:** `Cerrado — contrato, home mínima y aceptación manual detallada validados`.

**Evidencia complementaria de formación (2026-08-31):** se incorporan al catálogo bilingüe de `src/data/credentials.ts` tres certificaciones de finalización y una participación académica: `Protección de Datos, Privacidad y Cumplimiento de GDPR` (Udemy, 2026), `Business Process Modeling A-Z™: Domina BPMN 2.0 Desde Cero` (Udemy, 2025), `Continuing Education Certificate in Leadership` (MIU City University Miami, 2025; ya existente, sin duplicar) e `I Encuentro Internacional Virtual: Diálogo entre Disciplinas - Impacto de la IA` (UNIR, 2025). Las fuentes LaTeX ES/EN agrupan estas entradas y los cursos previos bajo una única sección compacta (`Certificaciones` / `Certifications`); los PDFs se publican mediante `make cv`.

**Alcance y privacidad de la evidencia:** los títulos, entidades y años se toman de las capturas revisadas. No se publican IDs, enlaces de validación ni imágenes de las credenciales; el encuentro de UNIR se presenta como participación académica, no como certificación profesional. El área visual distingue protección de datos/GDPR, modelado de procesos/BPMN, liderazgo y participación académica. No se modifica `LearningEvidence.astro` porque el componente ya presenta `area`, entidad y fecha sin requerir una adaptación estructural.

### Incremento transversal — Incorporación de Henko (2026-09-10)

**Objetivo:** registrar Henko como vehículo profesional vigente, integrarlo en la experiencia pública y darle un bloque destacado en la home sin convertir el portfolio personal en un catálogo comercial.

**Fuente pública validada:** `Henko Consulting`; razón social `Henko Consulting and Technology Services`; cargo `Founder & Solutions Engineer`; inicio `2026-09-09`; modalidad profesional independiente e híbrida; ubicación `Florencia, Caquetá, Colombia`; lema `Transformamos complejidad en soluciones.`

**Alcance implementado:**

* Se añadieron los pares bilingües `henko-consulting.es.md` y `henko-consulting.en.md` en `src/content/experiences/`, ambos con `status: published` y `current: true`; la fecha de inicio hace que Henko aparezca primero en `/experience`, `/en/experience` y el resumen de la home.
* Se creó `src/components/HenkoSection.astro` y se insertó antes de `#projects` en `/` y `/en/`, con ancla `#henko`, razón social, lema, descripción, metadatos de inicio/modalidad/ubicación y áreas de trabajo localizadas.
* `HomeCopy` incorpora `henkoSection`; la navegación ES/EN incorpora el enlace a `#henko`; los números visuales posteriores pasan a `03` para proyectos y `04` para experiencia.
* Las fuentes `docs/resume/curriculum-vitae.es.tex` y `docs/resume/curriculum-vitae.en.tex` incluyen Henko como experiencia más reciente. Los tres PDFs publicados se regeneran mediante `make cv`.
* No se añade URL, correo, dominio, logo rasterizado ni página independiente de servicios para Henko. El correo del portfolio continúa siendo `mailto:smajefranco@gmail.com`.

**Decisiones de contenido:** las áreas se presentan como áreas de trabajo públicas y no como catálogo contractual cerrado. La razón social se muestra como texto; la captura de referencia no se usa como logo. La experiencia se mantiene separada de los proyectos personales y no atribuye esos proyectos a Henko sin evidencia específica.

**Verificación requerida y realizada:** comprobar el par ES/EN, `current: true`, orden por fecha, `#henko` en `/` y `/en/`, enlace localizado de navegación, presencia de Henko en ambos CV y PDFs publicados, `git diff --check`, `pnpm lint`, `pnpm build` y `make cv`.

**Estado del incremento:** `Cerrado — implementación y validación técnica completadas` (2026-09-10).

**Evidencia de cierre:** `pnpm lint` terminó correctamente con un aviso informativo preexistente de configuración de Biome; `pnpm build` terminó con 0 errores, warnings ni hints y generó `/`, `/en/`, `/experience` y `/en/experience`; `make cv` compiló y publicó los tres PDFs; `git diff --check` no reportó errores. La inspección estática de las páginas generadas confirmó `#henko`, el orden Henko → proyectos → experiencia y la navegación ES/EN. `pdftotext` confirmó Henko y `smajefranco@gmail.com` en los PDFs ES, EN y predeterminado; la primera página de los CV se revisó visualmente tras la incorporación.

---

## Fase 3 — Casos de estudio iniciales

### Sprint 05

**Relación con la capacidad CMS:** el piloto de `BLG-CMS-01` debe orientar el modelado de los futuros casos de estudio, pero la definición narrativa y la plantilla no quedan bloqueadas por completar la migración técnica. Solo se migrarán a Keystatic los proyectos que tengan una fuente canónica y un esquema validado.

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

**Estado del WI:** `Cerrado — inventario runtime realineado` (2026-09-09).

**Cierre de implementación:**

* `src/data/projects.ts` conserva como inventario público base `trazalita`, `epicrisisia` y `estructuras-de-datos`.
* `trazalita` y `epicrisisia` son proyectos destacados en desarrollo; `estructuras-de-datos` permanece como evidencia secundaria académica.
* El contenido editorial de los tres proyectos está disponible en pares ES/EN bajo `src/content/projects/` y el pipeline futuro no aparece en listados públicos.
* `astro check`, `astro build` y `pnpm lint` deben permanecer como validación de regresión para este inventario.

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

**Estado del WI:** `Cerrado — plantilla editorial versionada` (2026-09-09).

**Cierre de implementación:**

* La plantilla quedó documentada en [`docs/case-study-template.md`](./case-study-template.md).
* Define resumen, contexto, problema, alcance, contribución, decisiones, arquitectura, evidencia, estado, aprendizajes y límites de publicación.
* Diferencia información pública, resumida y no publicable; mantiene la taxonomía de estados y la paridad ES/EN.
* Incluye extensiones orientativas, checklist de publicación y relación explícita con la captura manual de insumos.
* No crea rutas, páginas, una colección CMS ni un caso de estudio ficticio.

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

**Avance de levantamiento:** se creó [`docs/case-study-input-matrix.md`](./case-study-input-matrix.md).
`TrazalITA` quedó seleccionado como primer caso; `EpicrisisIA` queda como segundo
candidato principal; el proyecto educativo de estructuras de datos permanece como
evidencia secundaria; y `it-services-contents-unir` se añadió como candidato
educativo adicional sin modificar todavía el inventario runtime. El levantamiento
queda documentado con los datos disponibles; los detalles no respondidos se
difieren explícitamente a futuras fichas o ampliaciones.

**Estado del WI:** `Cerrado — matriz de insumos completada` (2026-09-10).

**Cierre de implementación:**

* `TrazalITA` quedó seleccionado como primer caso, con contexto, alcance
  normativo, contribución, decisión de CMS y límites de publicación registrados.
* `EpicrisisIA` quedó documentado con su flujo completo, atribución de trabajo,
  rediseño, integración de LLM/RAG, herramientas deterministas y medición interna
  de coste; los detalles sensibles se difieren.
* `ds-tdd-uniamazonia` se toma como repositorio representativo del conjunto
  educativo agrupado.
* `it-services-contents-unir` quedó clasificado como proyecto independiente y
  operativo, sin modificar aún el inventario runtime.
* Los datos no respondidos no quedan abiertos: se registran como diferidos para
  `BLG-F3-S06-01` o futuras ampliaciones.

**Cierre del Sprint 05:**

* `BLG-F3-S05-01` deja realineado el inventario runtime con los tres proyectos públicos definidos: `trazalita`, `epicrisisia` y `estructuras-de-datos`.
* `BLG-F3-S05-02` deja una plantilla de caso de estudio versionada, reutilizable y con límites explícitos de evidencia, privacidad, madurez y paridad ES/EN.
* `BLG-F3-S05-03` deja la matriz de insumos de los primeros casos, con fuentes, faltantes, riesgos, dependencias y siguientes acciones; los datos no confirmados no se completan por inferencia.
* El sprint no crea rutas nuevas ni publica casos de estudio; deja habilitado el Sprint 06 para documentar el primer caso y secuenciar la continuidad.

**Evidencia de cierre del sprint:** [`docs/case-study-template.md`](./case-study-template.md), [`docs/case-study-input-matrix.md`](./case-study-input-matrix.md), el inventario de [`src/data/projects.ts`](../src/data/projects.ts), los pares editoriales de [`src/content/projects/`](../src/content/projects/) y los cierres de `BLG-F3-S05-01`, `BLG-F3-S05-02` y `BLG-F3-S05-03`.

**Estado del Sprint 05:** `Cerrado — inventario, plantilla y matriz de insumos definidos` (2026-09-11). El cierre confirma el alcance documental y de realineación del inventario; no equivale a publicar nuevas fichas de caso.

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

**Estado del WI:** `Cerrado — ficha editorial bilingüe lista para implementación futura` (2026-09-10).

**Cierre de implementación:**

* Se redactaron las fichas [`docs/case-studies/trazalita.es.md`](./case-studies/trazalita.es.md) y [`docs/case-studies/trazalita.en.md`](./case-studies/trazalita.en.md) a partir de la plantilla y la matriz de insumos cerradas.
* Ambas fichas conservan el estado `in-development`, la visibilidad `private` y el mismo alcance, responsabilidad y nivel de madurez.
* Las funcionalidades concretas, el flujo completo, los resultados verificables, la evidencia técnica detallada y el contexto institucional sensible quedaron diferidos explícitamente.
* No se crearon rutas Astro, enlaces públicos, CTAs ni cambios en `src/`; el caso permanece únicamente como documentación editorial.

#### BLG-F3-S06-02 — Definir backlog de los tres casos siguientes
**Objetivo:** preparar la continuidad de la fase sin depender de improvisación posterior, dejando tres casos secuenciados, trazables y con requisitos mínimos para una futura ficha bilingüe.

**Descripción:** este WI convierte la matriz de insumos de `BLG-F3-S05-03` y el cierre documental de `TrazalITA` en un backlog ejecutable para los tres casos posteriores seleccionados por la matriz vigente. El resultado es documental: no redacta todavía las tres fichas, no publica nuevas rutas y no modifica el inventario runtime.

**Contexto técnico:** el repositorio ya dispone de una taxonomía cerrada de estados, una plantilla de caso de estudio, una matriz de fuentes y una ficha editorial bilingüe de referencia para `TrazalITA`. El inventario público base actual contiene `trazalita`, `epicrisisia` y `estructuras-de-datos`; `it-services-contents-unir` está documentado como candidato independiente y operativo, pero permanece fuera de `src/data/projects.ts` hasta una decisión editorial posterior. La matriz establece que los campos pendientes no deben completarse por inferencia.

**Alcance funcional:**

* Secuenciar con prioridad única `EpicrisisIA`, el proyecto educativo agrupado de estructuras de datos e `it-services-contents-unir`.
* Asignar a cada caso su estado canónico, visibilidad narrativa, rol dentro de la secuencia y límite de publicación.
* Registrar objetivo, usuarios o beneficiarios, fuentes, evidencia disponible, faltantes, riesgos, dependencias y requisitos mínimos de una futura ficha.
* Definir requisitos comunes de redacción y revisión: contexto y problema, objetivo y alcance, contribución personal, decisiones, arquitectura y flujo, implementación y evidencia, estado, aprendizajes, límites de publicación y paridad ES/EN.
* Mantener la trazabilidad entre cada afirmación futura, la matriz de insumos, la taxonomía de estados y la evidencia pública o validación manual correspondiente.

**No alcance:**

* Redactar las tres fichas de caso de estudio o traducirlas al inglés.
* Crear rutas Astro, páginas, enlaces públicos, CTAs, navegación, colecciones CMS o entradas nuevas en `src/content/`.
* Añadir `it-services-contents-unir` a `src/data/projects.ts` o decidir su publicación runtime.
* Modificar interfaces TypeScript, esquemas CMS, contratos de datos, taxonomía de estados o componentes existentes.
* Completar vacíos mediante inferencias, convertir declaraciones internas en evidencia pública o presentar una demo como prueba de resultados no registrados.

**Entregable esperado:** backlog de continuidad de tres casos con prioridad, madurez, visibilidad, fuentes, faltantes, riesgos, dependencias, requisitos mínimos de ficha y siguiente acción por caso.

**Dependencias:** [`docs/case-study-input-matrix.md`](./case-study-input-matrix.md), [`docs/case-study-template.md`](./case-study-template.md), [`docs/project-status-taxonomy.md`](./project-status-taxonomy.md) y fichas ES/EN de [`TrazalITA`](./case-studies/trazalita.es.md) ([EN](./case-studies/trazalita.en.md)).

**Tipo de ejecución:** Codex con supervisión

**Decisión de selección:** se adopta el conjunto de la matriz vigente y no el pipeline histórico recomendado por el roadmap. `EpicrisisIA` aporta el caso principal de procesamiento documental, arquitectura y refactorización; el proyecto educativo aporta evidencia secundaria de fundamentos, pruebas y aprendizaje técnico; `it-services-contents-unir` aporta un caso independiente de plantilla educativa, Astro y reutilización.

### Secuencia y ficha mínima por caso

#### Prioridad 1 — `EpicrisisIA`

| Campo | Definición de backlog |
| --- | --- |
| Estado canónico | `in-development` — el flujo completo se declara implementado, pero el proyecto se mantiene como desarrollo según el inventario y no debe presentarse como operación pública ni producto validado. |
| Visibilidad narrativa | `private` — se puede mencionar el nombre y describir el problema de forma genérica; casos médicos, documentos, diseños, reglas y datos permanecen reservados. |
| Rol narrativo | Caso principal de procesamiento documental, arquitectura, refactorización, integración de LLM/RAG, herramientas deterministas y mejora de UX/accesibilidad. |
| Objetivo | Explicar cómo se automatiza la auditoría de un caso médico hasta la generación de la epicrisis, sin convertir asistencia documental en decisión médica. |
| Usuarios o beneficiarios | Auditores médicos. |
| Evidencia disponible | Matriz de insumos; `src/data/projects.ts`; stack declarado de Python, Docker, MongoDB, Celery, Redis, FastAPI y PydanticAI; contribución declarada de Sergio; medición interna reportada de aproximadamente 5.000 COP a 800 COP por caso. |
| Faltantes | Distribución precisa de componentes; fuentes autorizadas y significado operativo del RAG; validaciones y revisión humana; evidencia revisable sin datos clínicos; fuente de cálculo del coste; desglose verificable de contribución, colaboración, UX y accesibilidad. Los faltantes no se completan por inferencia. |
| Riesgos | Confidencialidad y secreto profesional; atribución incorrecta frente al desarrollador inicial y al líder técnico; sobreventa de una medición interna; presentar LLM/RAG como decisión médica o el flujo como operación formal. |
| Dependencias | Validación manual de límites de publicación y atribución; evidencia técnica interna autorizada; plantilla de caso; taxonomía de estados; decisión de si la métrica puede aparecer resumida. |
| Requisitos mínimos para futura ficha | Resumen con objetivo, estado y límites; contexto genérico; alcance del flujo; contribución separada por persona; arquitectura publicable; flujo de entrada, procesamiento, validación y salida; evidencia resumida y autorizada; estado `in-development`; aprendizajes; límites de confidencialidad; versiones ES/EN semánticamente equivalentes. |
| Siguiente acción recomendada | Preparar una ampliación manual de evidencia técnica y autorización de publicación antes de redactar la ficha ES; no publicar la ficha ni la métrica mientras esos límites no estén revisados. |

#### Prioridad 2 — Proyecto educativo de estructuras de datos

| Campo | Definición de backlog |
| --- | --- |
| Estado canónico | `prototype` — evidencia técnica educativa acotada, no solución operativa ni MVP. |
| Visibilidad narrativa | `public` — debe conservar carácter educativo y posición secundaria. |
| Rol narrativo | Evidencia secundaria de fundamentos, modelado, implementación desde cero, pruebas, resolución de problemas y aprendizaje técnico. |
| Objetivo | Mostrar aprendizaje aplicado de estructuras de datos mediante ejercicios, API de Java, simuladores, tipos abstractos, recursividad y calculadora de expresiones. |
| Usuarios o beneficiarios | No definidos de forma específica en la matriz; el contexto beneficiario es educativo y debe conservarse como tal, sin atribuir un producto para usuarios finales. |
| Evidencia disponible | Repositorios [`ds-tdd-uniamazonia`](https://github.com/smaje99/ds-tdd-uniamazonia), [`sorting-comparator`](https://github.com/smaje99/sorting-comparator), [`SimuladorTDA`](https://github.com/smaje99/SimuladorTDA) y [`Calc2`](https://github.com/smaje99/Calc2); `ds-tdd-uniamazonia` queda como repositorio representativo por sus ejercicios guiados, pruebas de contrato y estructura pedagógica. |
| Faltantes | Selección explícita de aprendizajes y decisiones que se quieren demostrar; fechas, curso o contexto académico publicable; alcance exacto de la agrupación. La matriz confirma que todos los repositorios fueron desarrollados por Sergio sin colaboración externa, pero no autoriza inventar contexto académico adicional. |
| Riesgos | Profundidad narrativa limitada; carácter agrupado que puede ocultar diferencias entre repositorios; inflar ejercicios educativos como producto; repetir la narrativa de `EpicrisisIA` o competir con los casos principales. |
| Dependencias | Revisión pública de los repositorios; plantilla de caso; definición manual de la tesis de aprendizaje; consistencia con el inventario `estructuras-de-datos` y con el estado `prototype`. |
| Requisitos mínimos para futura ficha | Declarar que es un conjunto educativo agrupado; elegir evidencia representativa; explicar problema pedagógico y alcance; separar ejercicios y simuladores; atribuir implementación a Sergio sin convertirla en producto operativo; enlazar repositorios; conservar `prototype`, `public` y posición secundaria en ES/EN. |
| Siguiente acción recomendada | Definir la tesis editorial y los 2–4 aprendizajes verificables a partir de `ds-tdd-uniamazonia`; después redactar una ficha breve agrupada, sin inventar fechas ni resultados de uso. |

#### Prioridad 3 — `it-services-contents-unir`

| Campo | Definición de backlog |
| --- | --- |
| Estado canónico | `operational` — el docente lo utiliza actualmente como apoyo para sus cursos. |
| Visibilidad narrativa | `public` como candidato publicable según la matriz, pero sin incorporación runtime ni promesa de ruta pública en este WI. |
| Rol narrativo | Caso independiente de mejora de una plantilla educativa, arquitectura Astro, componentes, colecciones de contenido y despliegue reutilizable. |
| Objetivo | Explicar cómo una plantilla usada por un docente se convirtió en una base más mantenible y reutilizable para temas, recursos, actividades, autoevaluaciones y casos de estudio. |
| Usuarios o beneficiarios | Docentes y estudiantes de los cursos que reciben el apoyo de la plantilla. |
| Evidencia disponible | Repositorio [`it-services-contents-unir`](https://github.com/smaje99/it-services-contents-unir), [demo pública](https://it-services-contents-unir.vercel.app), README y configuración pública con Astro, React, MDX, colecciones de contenido y destinos de despliegue documentados. |
| Faltantes | Revisión futura de que la demo siga disponible y corresponda al repositorio; ficha ES/EN; decisión explícita sobre incorporación al inventario runtime; evidencia adicional de uso que no exceda la declaración de uso actual. La creación de contenidos y las integraciones con otros sistemas permanecen fuera de la contribución declarada. |
| Riesgos | Disponibilidad o divergencia de la demo; confusión con el conjunto de estructuras de datos pese a su carácter educativo; atribuir creación de contenidos o integraciones no realizadas; publicar un caso independiente sin resolver su exclusión actual del runtime. |
| Dependencias | Verificación manual de demo y repositorio; decisión editorial posterior sobre `src/data/projects.ts`; plantilla de caso; revisión de la afirmación de uso operativo; paridad ES/EN antes de cualquier publicación. |
| Requisitos mínimos para futura ficha | Explicar el contexto de plantilla no reutilizable; detallar contribución en arquitectura, componentes, colecciones y despliegue; declarar que no se crearon contenidos ni integraciones; enlazar repo y demo; explicar el uso operativo sin sobregeneralizar; conservar `operational` y `public`; documentar su independencia del grupo educativo. |
| Siguiente acción recomendada | Verificar demo, README y estado del repositorio en una revisión editorial; luego decidir si el caso merece entrada independiente en el inventario antes de redactar o publicar una ficha. |

### Requisitos comunes de futuras fichas

Cada caso deberá cumplir, como mínimo, con los siguientes requisitos antes de pasar de backlog a redacción:

* **Contexto y problema:** explicar la necesidad sin revelar información restringida ni atribuir usuarios, instituciones o resultados no respaldados.
* **Objetivo y alcance:** separar objetivo del proyecto, contribución personal, incluidos y fuera de alcance.
* **Contribución personal:** usar verbos precisos y distinguir trabajo propio, colaboración, asistencia de herramientas y decisiones de terceros.
* **Decisiones:** registrar criterio, alternativa o restricción cuando sea publicable, sin inventar decisiones no documentadas.
* **Arquitectura y flujo:** describir solo componentes, entradas, salidas, persistencia, validaciones y dependencias que tengan fuente.
* **Implementación y evidencia:** vincular cada afirmación sustantiva con la matriz, un repositorio, una fuente pública o una validación manual autorizada.
* **Estado:** reutilizar exactamente el estado canónico y explicar su significado; prioridad, visibilidad y estado no se sustituyen entre sí.
* **Aprendizajes:** seleccionar aprendizajes transferibles y verificables, no listas de tecnologías ni promesas de especialización.
* **Límites de publicación:** registrar datos, documentos, diseños, métricas, atribuciones o integraciones que no pueden publicarse.
* **Paridad ES/EN:** validar primero español y adaptar después inglés sin aumentar responsabilidad, alcance, resultados o madurez.

La ausencia de un dato debe quedar marcada como faltante o diferida. Ninguna ficha puede convertir un campo pendiente de la matriz en una afirmación narrativa por plausibilidad técnica.

**Gherkin ampliado:**

* **Escenario: selección única y secuenciada de los tres casos**
  **Dado** el cierre de `BLG-F3-S06-01`, la matriz de `BLG-F3-S05-03` y el inventario vigente
  **Cuando** se define la continuidad de casos
  **Entonces** aparecen exactamente tres casos con prioridad única 1, 2 y 3: `EpicrisisIA`, el proyecto educativo agrupado e `it-services-contents-unir`, sin sustituirlos por el pipeline histórico del roadmap.
* **Escenario: clasificación de madurez compatible con la taxonomía**
  **Dado** un caso seleccionado y su evidencia disponible
  **Cuando** se asigna el estado de proyecto
  **Entonces** `EpicrisisIA` queda como `in-development`, el proyecto educativo como `prototype` e `it-services-contents-unir` como `operational`, y ninguna descripción los presenta respectivamente como solución operativa, producto final o plataforma generalizada sin evidencia adicional.
* **Escenario: requisito de fuente y trazabilidad**
  **Dado** cualquier afirmación que pueda aparecer en una futura ficha
  **Cuando** se revisa el backlog del caso
  **Entonces** la afirmación tiene fuente, evidencia disponible y tratamiento de publicación; si la fuente falta o está restringida, el dato queda como faltante, diferido o no publicable y no se completa por inferencia.
* **Escenario: paridad bilingüe y límites de publicación**
  **Dado** una ficha ES validada y una adaptación EN propuesta
  **Cuando** se compara el par de locales
  **Entonces** ambos conservan el mismo estado, visibilidad, prioridad narrativa, alcance, contribución, resultados y límites, y la versión EN no eleva la madurez ni oculta restricciones.

**Desglose de tareas:**

* **Arquitectura**
  * Reutilizar la taxonomía de estados, la plantilla de caso y el patrón documental de `TrazalITA`.
  * Mantener `it-services-contents-unir` fuera del inventario runtime y registrar la decisión futura como dependencia editorial, no como cambio de interfaz.
* **Negocio/valor**
  * Ordenar la secuencia para combinar procesamiento documental, fundamentos educativos y reutilización de una plantilla sin repetir la misma historia.
  * Mantener `EpicrisisIA` como caso principal, el conjunto educativo como evidencia secundaria y el tercer caso como independiente.
* **Funcional**
  * Completar para cada caso la tabla de objetivo, usuarios, evidencia, faltantes, riesgos, dependencias, requisitos mínimos y siguiente acción.
  * Definir estado, visibilidad, alcance y límites antes de redactar cualquier ficha.
* **No funcional**
  * Preservar confidencialidad, secreto profesional, atribución correcta y redacción no inflada.
  * Asegurar trazabilidad, paridad ES/EN y ausencia de promesas runtime no implementadas.
* **Pruebas**
  * Comprobar prioridad única, estado canónico, fuente, faltantes, riesgos y dependencias para los tres casos.
  * Comprobar que no se introducen rutas, CTAs, enlaces públicos nuevos ni modificaciones bajo `src/`.
* **Documentación/aceptación**
  * Enlazar la matriz de insumos y la ficha cerrada de `TrazalITA` como evidencia de continuidad.
  * Dejar las preguntas de definición y cierre resueltas o explícitamente diferidas por caso.

**Checklist de implementación:**

* [ ] Los tres casos seleccionados son exactamente los de la matriz vigente y tienen prioridades únicas `1`, `2` y `3`.
* [ ] Cada caso tiene estado canónico, visibilidad narrativa y rol explicados sin contradicción con la taxonomía.
* [ ] Cada caso tiene al menos una fuente identificable; las declaraciones restringidas están marcadas y no se presentan como evidencia pública.
* [ ] Cada caso registra faltantes; no hay campos vacíos ocultos detrás de lenguaje genérico ni inferencias técnicas.
* [ ] Cada caso registra riesgos y dependencias concretas, incluyendo confidencialidad/atribución, profundidad/agrupación o demo/independencia/runtime según corresponda.
* [ ] Cada caso tiene requisitos mínimos de futura ficha y siguiente acción verificable.
* [ ] El alcance no se infla: `EpicrisisIA` no se presenta como operativo, el conjunto educativo no como producto y `it-services-contents-unir` no como proyecto ya incorporado al runtime.
* [ ] La ficha futura deberá cubrir contexto, objetivo, contribución, decisiones, arquitectura/flujo, evidencia, estado, aprendizajes y límites.
* [ ] La paridad ES/EN está definida como equivalencia semántica y no como traducción que aumente madurez o responsabilidad.
* [ ] No se modifican interfaces TypeScript, esquemas CMS, rutas, navegación, colecciones, `src/data/projects.ts` ni datos runtime en este WI.
* [ ] La matriz de insumos y el caso de `TrazalITA` quedan enlazados como evidencia de cierre.

**Preguntas de definición y cierre:**

* **¿Cuál es el conjunto definitivo de casos?** Resuelto: `EpicrisisIA`, el proyecto educativo agrupado de estructuras de datos e `it-services-contents-unir`, según la matriz vigente; no se sustituye por ITA, Cognark, Media Report CLI ni el proyecto jurídico/documental del pipeline histórico.
* **¿Cuál es la prioridad relativa?** Resuelto: 1 `EpicrisisIA`, 2 estructuras de datos, 3 `it-services-contents-unir`; no hay empates.
* **¿Cuál es el estado canónico de cada caso?** Resuelto: `in-development`, `prototype` y `operational`, respectivamente, conforme a `docs/project-status-taxonomy.md`.
* **¿Qué visibilidad puede sostenerse?** Resuelto: `private` para `EpicrisisIA`, `public` para los dos casos educativos; `it-services-contents-unir` sigue fuera del inventario runtime y no recibe una ruta por este cierre.
* **¿Qué información falta?** Resuelto por caso en las tablas; la regla común es diferirla y no completarla por inferencia.
* **¿Qué decisión técnica o de interfaz queda abierta?** Ninguna para este WI: no se modifican interfaces, tipos, esquemas, rutas, navegación, colecciones ni datos runtime. La eventual incorporación de `it-services-contents-unir` pertenece a una decisión editorial posterior.
* **¿Qué evidencia permite cerrar el WI?** Resuelto: esta especificación enlaza la matriz de insumos y el caso bilingüe ya documentado de `TrazalITA`, y deja trazabilidad, límites y siguientes acciones para los tres casos.

**Estado del WI:** `Cerrado — backlog de continuidad de tres casos definido` (2026-09-11).

**Cierre de implementación:**

* `EpicrisisIA` quedó como prioridad 1, caso principal, `in-development` y `private`, con riesgos de confidencialidad y atribución explícitos.
* El proyecto educativo agrupado quedó como prioridad 2, `prototype` y `public`, con `ds-tdd-uniamazonia` como evidencia representativa y con profundidad limitada reconocida.
* `it-services-contents-unir` quedó como prioridad 3, `operational` y candidato `public` independiente, con demo y repositorio como fuentes, sin incorporación al inventario runtime.
* Los tres casos tienen requisitos comunes, fuentes, faltantes, riesgos, dependencias, criterios mínimos de ficha y siguiente acción; los vacíos no se completan por inferencia.
* No se crearon rutas, CTAs, enlaces públicos, colecciones ni cambios bajo `src/`; tampoco se modificaron interfaces TypeScript, esquemas CMS o datos runtime.

#### BLG-F3-S06-03 — Definir criterios de publicación de proyectos en análisis
**Objetivo:** establecer cómo mostrar proyectos no terminados sin debilitar credibilidad, confundiendo madurez, publicación editorial y visibilidad narrativa.

**Descripción:** el roadmap permite mostrar proyectos en evolución, pero exige honestidad sobre su estado real. Este WI convierte esa regla en una política editorial ejecutable para futuros resúmenes, fichas de caso y migraciones CMS. La política es normativa para la redacción y revisión; no publica ningún caso por sí misma.

**Contexto técnico:** el repositorio ya cuenta con la taxonomía canónica de estados, la política de gobierno editorial de CMS y una plantilla de caso de estudio. El estado de proyecto describe madurez; el estado editorial controla si una pieza está aprobada para el sitio; la visibilidad narrativa define cuánto puede contarse. Ninguna de estas dimensiones sustituye a la prioridad estratégica, el tipo de proyecto, el portfolio tier o los tags técnicos.

**Alcance funcional:**

* Definir reglas para presentar proyectos en `analysis`, `prototype`, `in-development`, `mvp` y `operational`, manteniendo también compatible el estado canónico `architectural-documentation` cuando el activo público principal sea un blueprint.
* Separar explícitamente las tres dimensiones siguientes:
  * **Estado de proyecto:** `analysis`, `prototype`, `in-development`, `mvp`, `operational` y, cuando corresponda, `architectural-documentation`. Expresa madurez o naturaleza principal de la entrega.
  * **Estado editorial:** `draft`, `scheduled`, `published` y `archived`. Expresa si el contenido fue aprobado y cuál es su ciclo de publicación.
  * **Visibilidad narrativa:** `private`, `summary-only` y `public`. Expresa la profundidad y el contexto que pueden mostrarse; no convierte por sí sola una pieza en publicada.
* Establecer los datos mínimos que deben existir antes de publicar un resumen o una ficha.
* Definir advertencias localizadas para `analysis`, `prototype` e `in-development` sin crear estados, subestados o etiquetas de madurez ad hoc.
* Mantener la compatibilidad editorial con los tres casos priorizados en `BLG-F3-S06-02`.

**No alcance:**

* Crear rutas Astro, fichas, CTAs, enlaces de navegación, entradas CMS o cambios en el sitemap.
* Cambiar `src/data/projects.ts`, interfaces TypeScript, esquemas CMS, colecciones, componentes, datos runtime o contratos de presentación.
* Publicar cualquiera de los casos de `BLG-F3-S06-02` o decidir por sí solo su incorporación al inventario runtime.
* Crear nuevos estados como `idea`, `scaffold`, `development-initial`, `partial-mvp`, `private-prototype` o equivalentes.
* Usar una preview `draft` como control de acceso, confidencialidad o sustituto de una revisión de privacidad.

**Entregable esperado:** política editorial ejecutable para proyectos en evolución, incorporada en este backlog, con criterios de madurez, separación de estados, disclaimers ES/EN, límites de publicación, trazabilidad y evidencia de cierre.

**Dependencias:** [`docs/project-status-taxonomy.md`](./project-status-taxonomy.md), [`docs/cms-editorial-policy.md`](./cms-editorial-policy.md), [`docs/case-study-template.md`](./case-study-template.md) y el [cierre de `BLG-F3-S06-02`](#blg-f3-s06-02--definir-backlog-de-los-tres-casos-siguientes).

**Tipo de ejecución:** Mixto

**Notas de validación:** el resultado debe proteger credibilidad y claridad al mismo tiempo. Toda afirmación sustantiva debe poder rastrearse a una fuente pública, un repositorio, un documento autorizado o una validación manual registrada.

### Matriz de dimensiones editoriales

Las dimensiones se registran y revisan por separado. Un valor de una columna no implica ni permite inferir automáticamente los valores de las otras dos.

| Dimensión | Valores canónicos | Regla de uso |
| --- | --- | --- |
| Estado de proyecto | `analysis`, `prototype`, `in-development`, `mvp`, `operational`, `architectural-documentation` | Describe la madurez o naturaleza principal del artefacto. Se reutiliza exactamente el catálogo de la taxonomía. |
| Estado editorial | `draft`, `scheduled`, `published`, `archived` | Describe aprobación y ciclo editorial. Solo `published` puede entrar en exposición pública, sujeto a visibilidad y validaciones. |
| Visibilidad narrativa | `private`, `summary-only`, `public` | Describe la profundidad autorizada. `private` no es publicación pública; `summary-only` limita la pieza a un resumen; `public` permite una ficha dentro de sus límites de evidencia y privacidad. |

Reglas de combinación:

* Un proyecto tiene un único estado de proyecto canónico; prioridad estratégica, `portfolioTier`, tipo y tags permanecen separados.
* Un contenido `draft` o `scheduled` no aparece en rutas públicas, listados, navegación ni sitemap. Puede existir una preview técnica solo durante `pnpm dev`, conforme a `docs/cms-editorial-policy.md`, con `noindex, nofollow, noarchive`; esa URL no es secreta ni debe contener información confidencial.
* `archived` se conserva como historial editorial, pero no genera exposición pública.
* Solo una entrada `published` con visibilidad `summary-only` o `public` puede considerarse publicada en el sitio. `private` requiere mantener el contenido fuera de la exposición pública, aunque el proyecto pueda conservar una clasificación interna.
* La visibilidad `public` no autoriza datos sensibles, métricas sin fuente, resultados no verificados ni afirmaciones que excedan el estado de proyecto.

### Criterios de publicación por madurez

| Estado de proyecto | Se puede publicar | Límite obligatorio |
| --- | --- | --- |
| `analysis` | Contexto, problema, hipótesis, objetivo, alcance exploratorio y un resumen limitado de la dirección del trabajo. | No presentarlo como solución construida, flujo usable, MVP, producto o sistema operativo. Si solo existe exploración, la publicación debe quedarse en `summary-only` o permanecer privada. |
| `prototype` | Evidencia técnica acotada, capacidad demostrada, decisiones de viabilidad y aprendizajes verificables. | Etiquetarlo explícitamente como prototipo. No llamarlo MVP, producto listo, solución completa ni evidencia de uso real si no existe pilotaje autorizado. |
| `in-development` | Proyecto en construcción con objetivo, alcance y contribución personal verificables; pueden describirse módulos o avances con fuente. | No presentarlo como operativo, MVP, producto terminado, validado por usuarios o implantado. Debe decir qué está en desarrollo y qué queda pendiente. |
| `mvp` | Flujo usable de extremo a extremo y evidencia de uso real o controlado en contexto de piloto. | Conservar el lenguaje de piloto y aprendizaje temprano. No elevarlo a operación formal, producto consolidado o plataforma madura sin evidencia adicional. |
| `operational` | Implementación real, uso sostenido o soporte vigente a una operación, con alcance y fuente identificables. | No generalizar a plataforma enterprise, producción masiva o solución universal si la evidencia solo cubre un contexto concreto. |
| `architectural-documentation` | Blueprint, decisiones estructurales, modelo o documentación reutilizable como artefacto principal. | No describirlo como software implementado, flujo usable, MVP o producto operativo; si aparece implementación, debe reclasificarse según la madurez del software. |

La diferencia entre `prototype` e `in-development` es la continuidad del trabajo hacia el flujo principal: el prototipo demuestra una capacidad parcial o experimental; el desarrollo construye sostenidamente la solución principal. La diferencia entre `mvp` y `operational` es el uso piloto frente a la adopción sostenida o implantación formal. Si la evidencia no permite distinguir dos estados, el caso queda pendiente de validación manual y no se resuelve con una etiqueta nueva.

### Requisitos mínimos antes de publicar

Una publicación debe contar, como mínimo, con:

* **Problema y objetivo:** necesidad concreta y objetivo verificable, sin contexto restringido ni promesas no respaldadas.
* **Alcance y límites:** incluidos, fuera de alcance, supuestos y pendientes; el resumen no puede ocultar que el proyecto está en evolución.
* **Contribución personal:** acciones y responsabilidad propias separadas de las del equipo, de terceros y de herramientas asistidas.
* **Fuente o evidencia verificable:** repositorio, documento público, fuente autorizada o validación manual identificable para cada afirmación sustantiva.
* **Estado canónico:** exactamente uno de los estados definidos en la taxonomía, con redacción acorde a su significado.
* **Visibilidad y estado editorial:** `private`/`summary-only`/`public` y `draft`/`scheduled`/`published`/`archived` registrados por separado.
* **Advertencia o etiqueta localizada:** ES y EN deben comunicar la madurez y sus límites en el mismo sentido.
* **Paridad ES/EN:** mismo estado, visibilidad, alcance, contribución, evidencia, resultados y restricciones; el inglés no puede elevar madurez, impacto o responsabilidad.
* **Revisión de privacidad y atribución:** confirmación de que no se exponen datos sensibles, secretos, información propietaria ni atribuciones integrales cuando la contribución fue parcial.

La ausencia de un dato se marca como faltante, diferida o no publicable. No se completa por plausibilidad técnica, por el nombre del proyecto ni por una demo.

### Disclaimers localizados

Las siguientes formulaciones son etiquetas mínimas reutilizables. Pueden adaptarse al contexto, pero no deben eliminar la advertencia ni cambiar su significado.

| Estado | ES | EN |
| --- | --- | --- |
| `analysis` | **En análisis.** El proyecto se encuentra en fase de exploración y definición; este resumen describe el problema y la dirección de trabajo, no una solución construida u operativa. | **Concept validation.** This project is in exploration and definition; this summary describes the problem and direction of work, not a built or operational solution. |
| `prototype` | **Prototipo.** Existe evidencia técnica parcial o experimental para validar una dirección; no representa un MVP ni una solución lista para uso. | **Prototype.** The project contains partial or experimental technical evidence to validate a direction; it is not an MVP or a ready-to-use solution. |
| `in-development` | **En desarrollo.** La construcción del proyecto continúa; el alcance y la contribución descritos son verificables, pero todavía no debe interpretarse como una solución operativa o validada en producción. | **In development.** The project is still being built; the described scope and contribution are verifiable, but it should not yet be understood as an operational or production-validated solution. |

Las etiquetas de `mvp`, `operational` y `architectural-documentation` deben conservar las etiquetas públicas de la taxonomía (`MVP en piloto`/`Pilot MVP`, `Operativo`/`Operational solution`, `Documentación arquitectónica`/`Architecture blueprint`) y sus límites narrativos; no se crean disclaimers que funcionen como estados alternativos.

### Contenido que no debe mostrarse

Queda bloqueada la publicación de:

* Datos clínicos, personales, comerciales o institucionales, incluidos documentos reales, identificadores, capturas y ejemplos que permitan reidentificación.
* Documentos internos, diseños sensibles, prompts, reglas propietarias, secretos, tokens, credenciales o URLs privadas.
* Métricas, ahorros, costes, adopción o resultados sin una fuente autorizada y un significado verificable.
* Resultados no verificados, afirmaciones de uso, validación, impacto o rendimiento basadas únicamente en expectativas, demos o inferencias.
* Atribuciones integrales, liderazgo, autoría o responsabilidad sobre un sistema cuando la contribución fue parcial, colaborativa o de apoyo.
* Lenguaje que eleve artificialmente la madurez en inglés, aunque la traducción parezca más comercial o natural.
* Detalles técnicos cuya publicación revele controles, reglas o arquitectura restringida, incluso si el proyecto tiene visibilidad `public`.

### Compatibilidad con `BLG-F3-S06-02`

| Caso | Estado de proyecto | Visibilidad | Tratamiento bajo esta política |
| --- | --- | --- | --- |
| `EpicrisisIA` | `in-development` | `private` | Puede mantenerse como referencia editorial interna con problema y alcance genéricos; no se publica una ficha ni evidencia clínica, diseños, reglas, datos o métricas reservadas. |
| Proyecto educativo de estructuras de datos | `prototype` | `public` | Puede publicarse como evidencia técnica educativa acotada y etiquetada como prototipo; no se presenta como producto, MVP ni solución para usuarios finales. |
| `it-services-contents-unir` | `operational` | Candidato `public` | Su uso operativo puede describirse con la fuente autorizada y sin sobregeneralizar; permanece fuera de `src/data/projects.ts` y del inventario runtime hasta una decisión editorial posterior. |

La combinación de estas tres dimensiones no permite publicar automáticamente ninguno de los casos: cada uno debe cumplir los requisitos mínimos, tener `status: published` cuando aplique el CMS y superar revisión de privacidad, atribución, evidencia y paridad.

**Gherkin ampliado:**

* **Escenario: publicación de un resumen acorde con `analysis`**
  **Dado** un proyecto con estado `analysis`, una fuente verificable del problema y sin flujo usable demostrado
  **Cuando** se prepara una pieza con estado editorial `published`
  **Entonces** la pieza solo comunica contexto, objetivo, alcance exploratorio y dirección de trabajo, incluye el disclaimer de análisis y no usa términos como MVP, producto construido, solución operativa o flujo validado.
* **Escenario: publicación de evidencia técnica de un `prototype`**
  **Dado** un proyecto con evidencia parcial o experimental y estado `prototype`
  **Cuando** se revisa su resumen o ficha para visibilidad `public`
  **Entonces** la pieza identifica la capacidad demostrada, enlaza su fuente, conserva la etiqueta de prototipo y bloquea cualquier redacción que lo presente como MVP, solución completa o resultado de uso real.
* **Escenario: publicación de un proyecto `in-development`**
  **Dado** un proyecto con objetivo, alcance y contribución verificables, pero sin piloto usable validado
  **Cuando** se redacta una pieza `published`
  **Entonces** se describen únicamente los avances respaldados, se declara qué continúa en construcción, se incluye el disclaimer localizado y se bloquea la presentación como operativo, MVP o producto terminado.
* **Escenario: frontera entre `mvp` y `operational`**
  **Dado** un proyecto con un flujo principal usable y evidencia de contexto de uso
  **Cuando** se decide si el resumen puede usar `mvp` u `operational`
  **Entonces** se usa `mvp` si la evidencia corresponde a un piloto real o controlado, `operational` solo si existe uso sostenido o implantación formal, y ninguno se presenta como plataforma generalizada sin evidencia de ese alcance.
* **Escenario: separación entre estado de proyecto y estado editorial**
  **Dado** un proyecto `in-development` con contenido `draft` o `scheduled`
  **Cuando** se calcula la exposición pública
  **Entonces** el estado de madurez permanece `in-development`, pero el contenido no entra en rutas públicas, listados, navegación ni sitemap; cualquier preview técnica mantiene `noindex, nofollow, noarchive` y no se trata como mecanismo de confidencialidad.
* **Escenario: bloqueo de contenido privado o sin evidencia**
  **Dado** una ficha con visibilidad `private`, datos sensibles, una fuente restringida o una afirmación sin evidencia verificable
  **Cuando** se ejecuta la revisión editorial
  **Entonces** la pieza no se publica; el dato queda marcado como no publicable, resumible o diferido y no se sustituye por una inferencia, una demo o una métrica no autorizada.
* **Escenario: paridad ES/EN**
  **Dado** un resumen ES validado para un proyecto en evolución y una versión EN propuesta
  **Cuando** se comparan ambos locales antes de publicar
  **Entonces** conservan el mismo estado de proyecto, estado editorial, visibilidad, alcance, contribución, fuentes, resultados y disclaimers semánticamente equivalentes, y EN no aumenta madurez, impacto o responsabilidad.
* **Escenario: compatibilidad con los tres casos priorizados**
  **Dado** el cierre de `BLG-F3-S06-02`
  **Cuando** se aplica esta política al inventario de continuidad
  **Entonces** `EpicrisisIA` conserva `in-development` + `private`, estructuras de datos conserva `prototype` + `public` e `it-services-contents-unir` conserva `operational` + candidato `public`, sin crear rutas ni incorporar el tercer caso al runtime.

**Desglose de tareas:**

* **Arquitectura**
  * Reutilizar la taxonomía cerrada, la política CMS y la plantilla de caso como fuentes normativas.
  * Mantener estado de proyecto, estado editorial y visibilidad narrativa como dimensiones independientes, sin fijar nuevos campos ni contratos TypeScript/CMS en este WI.
  * Documentar que `draft` y `scheduled` solo pueden tener preview técnica local conforme a la política CMS y nunca exposición pública.
* **Negocio/valor**
  * Proteger credibilidad mediante lenguaje proporcional a evidencia, contribución y madurez.
  * Permitir que el portfolio muestre aprendizaje y dirección de proyectos en evolución sin venderlos como productos terminados.
  * Mantener la posición narrativa de `EpicrisisIA`, estructuras de datos e `it-services-contents-unir` definida en S06-02.
* **Funcional**
  * Aplicar la matriz de publicación y los requisitos mínimos a resúmenes, fichas y futuras entradas CMS.
  * Incorporar disclaimers localizados para `analysis`, `prototype` e `in-development`.
  * Bloquear contenido sensible, sin fuente, no verificado, mal atribuido o divergente entre ES y EN.
* **No funcional**
  * Preservar privacidad, confidencialidad, secreto profesional y redacción no inflada.
  * Mantener trazabilidad desde la afirmación hasta su evidencia y hacer explícitos faltantes, límites y decisiones manuales.
  * Evitar que una URL de preview se interprete como control de acceso o canal seguro.
* **Pruebas**
  * Revisar los escenarios de publicación por madurez, separación de dimensiones, privacidad, evidencia, paridad y exclusión de estados editoriales no publicados.
  * Confirmar que los tres casos de S06-02 conservan sus estados y visibilidades sin cambios runtime.
  * Ejecutar `git diff --check` y verificar que el cambio se limita al backlog.
* **Documentación/aceptación**
  * Enlazar la taxonomía, la política CMS, la plantilla y el cierre de S06-02 como evidencia normativa.
  * Dejar resueltas las preguntas de definición y cierre y registrar el estado final del WI.

**Checklist de implementación:**

* [ ] Cada pieza distingue estado de proyecto, estado editorial y visibilidad narrativa; no usa una dimensión como sustituto de otra.
* [ ] Solo se utilizan estados canónicos; no aparecen variantes ad hoc ni estados editoriales mezclados con madurez.
* [ ] `analysis` se limita a contexto o resumen; `prototype` está etiquetado y no se llama MVP; `in-development` no se llama operativo; `mvp` conserva el límite de piloto; `operational` no se generaliza sin evidencia; `architectural-documentation` no se presenta como software usable.
* [ ] Cada publicación tiene problema/objetivo, alcance/límites, contribución personal, fuente o evidencia, estado canónico, visibilidad, estado editorial y revisión de privacidad/atribución.
* [ ] Las advertencias ES/EN están presentes para `analysis`, `prototype` e `in-development` y son semánticamente equivalentes.
* [ ] No se publican datos sensibles, documentos internos, diseños, prompts, reglas propietarias, secretos, URLs privadas, métricas no autorizadas ni resultados no verificados.
* [ ] La contribución parcial no se convierte en autoría integral, liderazgo o responsabilidad total.
* [ ] EN no aumenta madurez, alcance, resultados, impacto ni responsabilidad frente a ES.
* [ ] `draft` y `scheduled` no entran en rutas públicas, listados, navegación ni sitemap; las previews locales de `pnpm dev` tienen `noindex, nofollow, noarchive` y no se consideran confidenciales.
* [ ] `archived` no se expone públicamente y `published` no se interpreta como autorización para ignorar los límites de visibilidad o evidencia.
* [ ] `EpicrisisIA` conserva `in-development` + `private`; estructuras de datos, `prototype` + `public`; e `it-services-contents-unir`, `operational` + candidato `public` fuera del inventario runtime.
* [ ] No se crean rutas, fichas, CTAs, cambios bajo `src/`, interfaces TypeScript, esquemas CMS, colecciones ni datos runtime como parte de este WI.
* [ ] El diff solo modifica `docs/portfolio-backlog.md` y pasa `git diff --check`.

**Preguntas de definición y cierre:**

* **¿Qué dimensión define la madurez?** Resuelto: el estado de proyecto canónico de [`docs/project-status-taxonomy.md`](./project-status-taxonomy.md); prioridad, tipo, `portfolioTier`, tags, estado editorial y visibilidad permanecen separados.
* **¿Qué estados se pueden usar?** Resuelto: únicamente `analysis`, `prototype`, `in-development`, `mvp`, `operational` y `architectural-documentation`; no se crean variantes para análisis, prototipos o desarrollos parciales.
* **¿Cuándo puede publicarse un proyecto en evolución?** Resuelto: solo con problema/objetivo, alcance/límites, contribución, fuente/evidencia, estado, visibilidad, estado editorial, disclaimer localizado, paridad ES/EN y revisión de privacidad/atribución.
* **¿Qué diferencia `summary-only` de `public`?** Resuelto: `summary-only` permite únicamente una exposición resumida y limitada; `public` permite una ficha con mayor profundidad, siempre dentro de la evidencia y los límites autorizados. Ninguno reemplaza `published`.
* **¿Qué ocurre con `draft` y `scheduled`?** Resuelto por [`docs/cms-editorial-policy.md`](./cms-editorial-policy.md): no son publicación pública, no entran en listados, navegación ni sitemap, y sus previews locales no son mecanismos de confidencialidad.
* **¿Qué debe bloquearse aunque el proyecto sea `public`?** Resuelto: datos sensibles, documentos o diseños restringidos, prompts, reglas propietarias, secretos, métricas sin fuente, resultados no verificados y atribuciones que excedan la contribución real.
* **¿Qué evidencia permite cerrar el WI?** Resuelto: la política queda alineada con la taxonomía, la política CMS, la plantilla y el [cierre de S06-02](#blg-f3-s06-02--definir-backlog-de-los-tres-casos-siguientes), incluye reglas ejecutables y confirma que no requiere cambios runtime.

**Estado del WI:** `Cerrado — política editorial para proyectos en evolución definida` (2026-09-11).

**Cierre de implementación:**

* Se definieron separadamente estado de proyecto, estado editorial y visibilidad narrativa, con reglas de combinación y límites de exposición pública.
* Se establecieron criterios de publicación para `analysis`, `prototype`, `in-development`, `mvp`, `operational` y `architectural-documentation`, incluyendo límites explícitos contra la sobreventa de madurez.
* Se fijaron requisitos mínimos de evidencia, alcance, contribución, privacidad, atribución y paridad ES/EN, junto con disclaimers localizados para los estados en evolución.
* Se bloquearon datos sensibles, secretos, documentos internos, métricas sin fuente, resultados no verificados, atribuciones infladas y lenguaje EN que aumente artificialmente la madurez.
* Se conservaron los casos de S06-02: `EpicrisisIA` como `in-development` + `private`, estructuras de datos como `prototype` + `public` e `it-services-contents-unir` como `operational` + candidato `public` fuera del inventario runtime.
* No se crearon rutas, fichas, CTAs, cambios bajo `src/`, interfaces TypeScript, esquemas CMS, colecciones ni datos runtime; el entregable queda limitado a este backlog.

**Cierre del Sprint 06:**

* `BLG-F3-S06-01` deja una ficha editorial bilingüe de referencia para `TrazalITA`, con estado `in-development`, visibilidad `private` y límites de publicación explícitos.
* `BLG-F3-S06-02` deja definidos y secuenciados los tres casos siguientes, con prioridades, estados, visibilidades, fuentes, faltantes, riesgos, dependencias y requisitos mínimos de ficha.
* `BLG-F3-S06-03` deja definida la política para publicar proyectos en evolución sin inflar su madurez, separando estado de proyecto, estado editorial y visibilidad narrativa.
* El Sprint 06 queda cerrado como trabajo documental: no incorpora nuevas rutas, fichas públicas, CTAs, contratos TypeScript/CMS ni datos runtime.

**Evidencia de cierre del sprint:** [`docs/project-status-taxonomy.md`](./project-status-taxonomy.md), [`docs/cms-editorial-policy.md`](./cms-editorial-policy.md), [`docs/case-study-template.md`](./case-study-template.md), las fichas ES/EN de [`TrazalITA`](./case-studies/trazalita.es.md) ([EN](./case-studies/trazalita.en.md)) y los cierres de `BLG-F3-S06-01`, `BLG-F3-S06-02` y `BLG-F3-S06-03` en este backlog.

**Estado del Sprint 06:** `Cerrado — casos de estudio y política editorial definidos` (2026-09-11). El cierre confirma el alcance documental del sprint y no equivale a publicar nuevas rutas ni a completar la implementación runtime de los casos.

### Continuidad posterior al Sprint 06

#### BLG-F3-CONT-01 — Publicar fichas de proyectos y conectarlas con la landing

**Objetivo:** convertir el contenido editorial bilingüe de los proyectos en fichas públicas indexables, conectadas con las tarjetas de la landing y con el catálogo completo de `/projects`.

**Alcance:** integrar los cuerpos Markdown de `src/content/projects/` como fuente runtime canónica para `trazalita`, `epicrisisia`, `estructuras-de-datos` e `it-services-contents-unir`; crear rutas estáticas ES/EN `/projects/<slug>` y `/en/projects/<slug>`; mantener dos destacados en la landing y cuatro proyectos en el catálogo; separar visibilidad pública, estado de madurez y disponibilidad del repositorio; publicar solo repositorios/demos públicos; y validar paridad ES/EN, estado `published`, cuerpos no vacíos, coincidencia de catálogos, URLs públicas, ausencia de secretos y slugs coherentes.

**Fuentes y límites:** la matriz de insumos, las fichas documentales y la evidencia pública de repositorios/demos. `docs/case-studies/` se conserva como soporte histórico y no como fuente runtime. El blog continúa reservado para Fase 4.

**Criterios de aceptación:** los cuatro proyectos tienen fichas ES/EN visibles; la landing enlaza los dos destacados y `/projects` enlaza los cuatro; TrazalITA y EpicrisisIA conservan `in-development`, estructuras de datos conserva `prototype` e `it-services-contents-unir` conserva `operational`; las fichas son indexables y no contienen URLs privadas, previews, drafts ni rutas Keystatic; pasan `pnpm cms:check`, `pnpm lint`, `pnpm build` y `git diff --check`.

**Tipo de ejecución:** Codex con supervisión.

**Estado del WI:** `Implementado — fichas públicas bilingües integradas` (2026-09-11).

---

## Fase 4 — Blog gestionado con Keystatic e integrado con Medium

### Sprint 07

#### BLG-F4-S07-01 — Definir decisión técnica de integración con Medium
**Objetivo:** cerrar la relación entre Keystatic como fuente editorial y Medium como canal externo de distribución o referencia.
**Descripción:** la fase de blog depende de elegir un mecanismo estable y proporcional al alcance del MVP, sin duplicar innecesariamente el cuerpo de los artículos ni confundir autoría, publicación y sindicación.
**Actividades:**
* Revisar las alternativas de enlace manual, RSS/feed, artículos nativos en Keystatic y estrategia híbrida.
* Determinar si Keystatic será la fuente canónica de los artículos, si Medium será el canal canónico o si cada canal tendrá una responsabilidad distinta.
* Determinar qué datos necesita el sitio para mostrar publicaciones y cómo se mantiene la paridad entre locales.
* Decidir si la integración será manual, por feed o híbrida, documentando cómo evitar duplicados y divergencias.
**Entregable esperado:** decisión técnica documentada para Keystatic + Medium, incluyendo fuente canónica, flujo de publicación y tratamiento de enlaces externos.
**Dependencias:** `BLG-CMS-01` y, si el blog se edita desde el panel, `BLG-CMS-03`; backlog narrativo inicial y priorización de contenido.
**Tipo de ejecución:** Mixto
**Notas de validación:** la solución elegida debe ser mantenible, suficiente para el MVP y compatible con el aprendizaje buscado sobre CMS Git-based.

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

### Cierre del Sprint 09

Los tres WI del sprint quedaron cerrados con documentación y cambios verificables:

* `BLG-F5-S09-01` — `Cerrado`: se creó [`docs/portfolio-technical-trust-backlog.md`](./portfolio-technical-trust-backlog.md) con prioridades, dependencias, responsables y separación entre código y acciones externas. La 404 y el SEO complementario quedan diferidos al Sprint 10.
* `BLG-F5-S09-02` — `Cerrado`: se creó [`docs/portfolio-analytics-requirements.md`](./portfolio-analytics-requirements.md). La decisión explícita es no implementar analytics en este sprint; se documentaron métricas futuras y condiciones de privacidad para una eventual reapertura.
* `BLG-F5-S09-03` — `Cerrado`: se creó [`docs/professional-footer-spec.md`](./professional-footer-spec.md) y se implementó `src/components/Footer.astro` desde `src/layouts/Layout.astro`, con paridad ES/EN, navegación reutilizada, contacto, CV localizado y criterios de accesibilidad.

La implementación centraliza las URLs personales y la ruta del CV en `src/i18n/site.ts`. No se modificaron las páginas, el contenido ni la integración del blog; tampoco se añadieron scripts, cookies, variables de entorno o llamadas de analytics.

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

**Estado:** `Cerrado` con implementación runtime. Se creó una única salida global `dist/404.html` mediante `src/pages/404.astro`, con copy ES/EN, un solo `h1`, enlaces a inicio, proyectos y contacto en ambos idiomas, reutilización del layout/footer y `noindex,nofollow,noarchive`. No se creó `/en/404` ni se incluyó la salida en el sitemap.

#### BLG-F5-S10-02 — Definir backlog de SEO complementario y validación de metadatos
**Objetivo:** completar los elementos SEO que no quedaron cubiertos por la base actual.
**Descripción:** el sitio ya tiene metadata básica, pero esta tarea busca revisar consistencia, cobertura y calidad.
**Actividades:**
* Revisar títulos y descripciones por página.
* Definir si hacen falta metadatos adicionales.
* Incluir validación de enlaces sociales y CV.
**Entregable esperado:** checklist SEO complementario del MVP.
**Dependencias:** backlog de confianza técnica
**Tipo de ejecución:** Codex con supervisión
**Notas de validación:** no debe introducir complejidad desproporcionada para un sitio estático personal.

**Estado:** `Cerrado` con implementación y documentación. Se añadieron `robots.txt`, `sitemap.xml`, la corrección del canonical de fichas de blog y [`docs/portfolio-seo-checklist.md`](./portfolio-seo-checklist.md). El sitemap mantiene los índices del blog, pero excluye entradas mientras no tengan estado `published`; no se añadió analytics, JSON-LD ni una imagen social nueva.

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

**Estado:** `Cerrado` con documentación y validación automatizada. Se creó [`docs/portfolio-prelaunch-checklist.md`](./portfolio-prelaunch-checklist.md) y `scripts/cms-check.mjs` ahora verifica los artefactos SEO, XML, rutas, metadata, exclusiones y la 404 después del build. La revisión de navegador, despliegue, DNS, Search Console y validación externa permanece manual.

---

## Fase 6 — Lanzamiento y validación

### Sprint 11

#### BLG-F6-S11-01 — Definir requerimientos de publicación y dominio
**Objetivo:** aterrizar qué falta para considerar el portfolio verdaderamente publicado y presentable.
**Descripción:** el sitio compila y puede desplegarse, y ya están fijados el dominio y el proveedor de VPS; deben ejecutarse y verificarse las tareas manuales y mixtas ligadas al entorno público y la presentación final.
**Actividades:**
* Comprar `henkoconsulting.com.co` y confirmar disponibilidad, renovación e impuestos; mantener `smaje.com.co` bajo la cuenta personal/profesional definida.
* Contratar y provisionar un Contabo Cloud VPS 4 Core en USA-East; confirmar variante Core frente a Plus 4, SSD/NVMe, recargo de ubicación, renovación, impuestos y Auto Backup.
* Instalar Ubuntu 24.04 LTS y configurar Docker, Caddy, firewall, backups, snapshot y subdominios en el VPS.
* Apuntar los DNS de Cloudflare al VPS y verificar HTTPS, redirecciones y dominios canónicos para el portfolio y Henko.
* Configurar Zoho Mail para Henko con MX, SPF, DKIM y DMARC, sin sustituir `smajefranco@gmail.com` en el portfolio.
* Identificar los pasos manuales de compra/configuración y conservar las credenciales fuera del repositorio.
* Diferenciar tareas de despliegue técnico vs tareas de contratación o acceso.
**Entregable esperado:** entorno público provisionado, plan de publicación y dominio del MVP.
**Dependencias:** backlog de confianza técnica y checklist pre-lanzamiento.
**Tipo de ejecución:** Mixto
**Notas de validación:** debe quedar explícito qué parte depende enteramente de ti; la compra de cuentas, dominio y VPS no se automatiza desde el repositorio.

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

Los puntos de esta cola quedaron implementados o cerrados como contrato/documentación. Con `BLG-CMS-04` cerrado, la continuidad abierta pasa a la provisión manual del entorno público y a la validación de lanzamiento.

* Consolidar inventario estratégico de proyectos — `cerrado`.
* Definir taxonomía de estados — `cerrado`.
* Formalizar mapa del sitio objetivo del MVP — `cerrado`.
* Refinar propuesta de valor y capacidades — `cerrado como especificación editorial validada`; la implementación runtime mantiene el mismo alcance semántico.
* Realinear el inventario visible de proyectos — `cerrado` en `BLG-F3-S05-01`.
* Diseñar la plantilla base del primer caso de estudio — `cerrado` en `BLG-F3-S05-02`.
* Levantar información fuente para los primeros casos — `cerrado` en `BLG-F3-S05-03`.
* Cerrar `BLG-CMS-01` y preparar el piloto local de Keystatic — `cerrado` en `BLG-CMS-01` y `BLG-CMS-02`.
* Migrar y consumir la primera colección editorial — `cerrado` en `BLG-CMS-03`.
* Definir el backlog de los tres casos siguientes — `cerrado` en `BLG-F3-S06-02`.
* Definir criterios de publicación de proyectos en evolución — `cerrado` en `BLG-F3-S06-03`.
* Cerrar la publicación y el gobierno editorial de Keystatic — `cerrado` en `BLG-CMS-04`; la provisión externa queda pendiente.

**Siguiente acción habilitada:** ejecutar `BLG-F6-S11-01` para registrar y
confirmar los dominios, provisionar el VPS y activar manualmente el entorno
público. La política de publicación de proyectos en evolución ya quedó cerrada
en `BLG-F3-S06-03`; los detalles no capturados de cada caso permanecen
diferidos y no deben rellenarse con supuestos.

### Prioridad siguiente

* Ejecutar `BLG-F6-S11-01`: registrar el dominio de Henko, confirmar el dominio personal del portfolio y provisionar el Contabo Cloud VPS 4 Core en USA-East.
* Definir decisión técnica de integración con Medium.
* Especificar arquitectura de información del blog.
* Preparar backlog editorial inicial.
* Resolver la 404 y el SEO complementario en Sprint 10.
* Ejecutar la revisión externa y el checklist pre-lanzamiento en los sprints de lanzamiento.

### Dependencias externas

* Compra y configuración de `henkoconsulting.com.co` en Cloudflare, manteniendo `smaje.com.co` como dominio independiente del portfolio.
* Contratación y provisión del Contabo Cloud VPS 4 Core en USA-East, incluyendo Ubuntu LTS, Docker, Caddy, firewall, Auto Backup, snapshot y subdominios.
* Configuración de Zoho Mail para Henko; el portfolio continúa usando `smajefranco@gmail.com`.
* Accesos o cuentas necesarias para Medium; analytics no se activa en Sprint 09 y solo se reabre mediante una decisión futura documentada.
* Validación externa con revisores reales.
* Ajustes de narrativa en GitHub y LinkedIn fuera del repositorio.
* Activación del despliegue manual desde `main` mediante rsync/SSH y configuración de sus credenciales fuera del repositorio.

### Trabajo bloqueado por decisiones manuales

* Integración final con Medium si depende de confirmar usuario, feed o estrategia editorial.
* GitHub mode de Keystatic queda fuera del lanzamiento actual y solo se reabrirá como decisión futura.
* Publicación con dominio propio.
* Redacción final de artículos de voz personal.
* Validación externa y registro de resultados.

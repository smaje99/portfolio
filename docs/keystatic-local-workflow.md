# Flujo local de Keystatic

Este repositorio usa Keystatic en modo local como piloto para la colección
`projects`, `experiences` y `blog`. El panel edita archivos del repositorio; no
usa una base de datos, GitHub Mode ni secretos.

La colección `projects` es ahora la fuente editorial canónica del sitio. Cada
proyecto tiene un par obligatorio de archivos Markdown, uno por locale. El
registro estratégico de `src/data/projects.ts` conserva la clasificación,
prioridad, estado, visibilidad, enlaces, orden y demás decisiones de portfolio;
esos campos no se editan desde Keystatic.

## Iniciar el panel

Instala las dependencias con `pnpm install` y arranca Astro:

```bash
pnpm dev
```

El panel está disponible en <http://127.0.0.1:4321/keystatic> durante `pnpm dev`.
La integración se carga únicamente en el servidor de desarrollo local: el
build público sigue siendo estático y no incorpora las rutas server-rendered
del panel. `/keystatic` no se publica; GitHub Mode queda como opción futura no
activada.

## Crear una entrada bilingüe

Cada proyecto requiere dos entradas vinculadas:

```text
src/content/projects/<slug>.es.md
src/content/projects/<slug>.en.md
```

Usa el mismo slug base y añade el sufijo del locale. Por ejemplo:

```text
src/content/projects/simigs.es.md
src/content/projects/simigs.en.md
```

En el panel, el campo `File slug` debe ser `simigs.es` o `simigs.en`, y el
campo `Locale` debe coincidir con ese sufijo. La configuración valida el formato
del slug, pero la existencia del par ES/EN y su correspondencia semántica siguen
siendo una revisión editorial manual durante este piloto.

Los campos editoriales obligatorios son `title`, `description`, `focus`, `tags`
y `locale`. El cuerpo `Content` es Markdoc opcional. Al guardar, Keystatic
genera un único archivo Markdown con frontmatter y cuerpo Markdoc dentro de
`src/content/projects/`. El sitio consume estos archivos mediante la colección
`projects` de Astro; no mantiene una copia editorial activa en TypeScript.

El build valida que cada proyecto estratégico y cada experiencia tenga
exactamente su par ES/EN, que el sufijo del slug coincida con `locale`, que los
estados sean válidos y que los `draftSlug` sean únicos. Las entradas del blog
no necesitan par; una referencia Medium publicada sí necesita `externalUrl`.
Cualquier incumplimiento bloquea el build con un error; no hay fallback
silencioso.

## Revisar, guardar y revertir

Después de guardar, revisa el diff y valida el build antes de publicar:

```bash
git diff -- src/content
pnpm cms:check
```

Una edición incorrecta se revierte con Git, por ejemplo restaurando los archivos
concretos desde el commit anterior y ejecutando de nuevo `pnpm build`:

```bash
git restore --source=<commit-conocido> -- src/content/projects/<slug>.es.md src/content/projects/<slug>.en.md
pnpm build
```

No existe una base de datos que requiera una migración o rollback separado. Las
rutas `/projects` y `/en/projects` consumen el mismo inventario estratégico y
su contenido editorial localizado desde Astro. Las experiencias y el blog forman
parte de `BLG-CMS-04`. Los estados no publicados permanecen fuera de rutas y
listados públicos. Durante `pnpm dev`, una previsualización draft usa
`/draft/<draftSlug>/<locale>` con `noindex,nofollow,noarchive`; el build de
producción no genera esa ruta y la preview local no ofrece confidencialidad.

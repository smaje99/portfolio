# Flujo local de Keystatic

Este repositorio usa Keystatic en modo local como piloto para la colección
`projects`. El panel edita archivos del repositorio; no usa una base de datos,
GitHub Mode ni secretos.

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
del panel. La decisión de publicación remota queda pendiente de
`BLG-CMS-04`.

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

El build valida que cada proyecto estratégico tenga exactamente su par ES/EN,
que el sufijo del slug coincida con `locale` y que no existan archivos CMS sin
registro estratégico. Cualquier incumplimiento bloquea el build con un error;
no hay fallback silencioso.

## Revisar, guardar y revertir

Después de guardar, revisa el diff y valida el build antes de publicar:

```bash
git diff -- src/content/projects
pnpm build
```

Una edición incorrecta se revierte con Git, por ejemplo restaurando los archivos
concretos desde el commit anterior y ejecutando de nuevo `pnpm build`:

```bash
git restore --source=<commit-conocido> -- src/content/projects/<slug>.es.md src/content/projects/<slug>.en.md
pnpm build
```

No existe una base de datos que requiera una migración o rollback separado. Las
rutas `/projects` y `/en/projects` consumen el mismo inventario estratégico y
su contenido editorial localizado desde Astro. Las experiencias, los casos de
estudio y el blog permanecen fuera de esta migración y quedan diferidos a
`BLG-CMS-04`.
La política definitiva de `/keystatic` en producción queda pendiente de
`BLG-CMS-04`, que deberá decidir hosting, autenticación y si el panel será solo
local o también remoto.

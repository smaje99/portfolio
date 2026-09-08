# Flujo local de Keystatic

Este repositorio usa Keystatic en modo local como piloto para la colección
`projects`. El panel edita archivos del repositorio; no usa una base de datos,
GitHub Mode ni secretos.

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
`src/content/projects/`.

## Revisar, guardar y revertir

Después de guardar, revisa el diff y valida el build antes de publicar:

```bash
git diff -- src/content/projects
pnpm build
```

Una edición incorrecta se revierte con Git, por ejemplo restaurando el archivo
concreto desde el commit anterior o descartando el cambio antes de confirmarlo.
No existe una base de datos que requiera una migración o rollback separado.

El piloto no migra los proyectos reales de `src/data/projects.ts`; las rutas
`/projects` y `/en/projects` continúan usando esa fuente hasta `BLG-CMS-03`.
La política definitiva de `/keystatic` en producción queda pendiente de
`BLG-CMS-04`, que deberá decidir hosting, autenticación y si el panel será solo
local o también remoto.

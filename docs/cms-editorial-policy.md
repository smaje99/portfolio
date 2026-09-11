# Política editorial y gobierno de contenido

**Work item:** `BLG-CMS-04`

## Alcance

Keystatic permanece en modo local. El panel `/keystatic` solo se carga durante
`pnpm dev`; no se publica, no usa GitHub Mode y no contiene OAuth, GitHub Apps,
tokens ni secretos. `projects` conserva su migración actual. `experiences` y
`blog` también se gestionan como Markdown versionado.

La persona editora y revisora es la misma: Sergio Majé. La publicación es una
decisión manual después de revisar el diff, ejecutar `pnpm cms:check` y aceptar
el resultado del build.

## Estados

| Estado | Sitio público | Ruta draft | Regla |
| --- | --- | --- | --- |
| `draft` | No | Sí, solo en `pnpm dev`, si tiene `draftSlug` | Trabajo editorial todavía no aprobado. |
| `scheduled` | No | Sí, solo en `pnpm dev`, si tiene `draftSlug` | Reservado para una publicación futura; no hay publicación automática. |
| `published` | Sí, según el canal | No requerida | Único estado que entra en rutas, listados y enlaces públicos. |
| `archived` | No | No | Se conserva en Git/CMS como historial, sin página pública. |

`draftSlug` es obligatorio para `draft` y `scheduled`, debe tener al menos 24
caracteres, usar minúsculas/números/guiones y ser único entre las tres
colecciones. La unicidad se valida en el build.

## Colecciones

### Projects

Cada proyecto mantiene el par obligatorio:

```text
src/content/projects/<slug>.es.md
src/content/projects/<slug>.en.md
```

La clasificación estratégica continúa en `src/data/projects.ts`; Keystatic
solo gestiona el contenido editorial y el estado de publicación.

### Experiences

Cada experiencia debe tener el par equivalente:

```text
src/content/experiences/<slug>.es.md
src/content/experiences/<slug>.en.md
```

No hay fallback de idioma ni traducciones en `src/i18n/site.ts`. Un locale
faltante, duplicado o desalineado bloquea el build.

### Blog

Las entradas del blog son independientes por locale: no necesitan pareja ES/EN.
`channel: site` genera una página local; `channel: medium` conserva el trabajo
editorial y, cuando está publicado, muestra un enlace externo a `externalUrl`.
No existe sincronización automática con Medium.

Las páginas locales publicadas usan `/blog/<slug>` y
`/en/blog/<slug>`. Las referencias Medium aparecen en el listado como enlaces
externos y no intentan renderizar contenido local como si fuera la fuente
publicada.

## Previsualizaciones draft

Durante `pnpm dev`, una entrada `draft` o `scheduled` puede verse en:

```text
/draft/<draftSlug>/<locale>
```

Estas páginas incluyen `noindex, nofollow, noarchive`, no se generan para
estados archivados, no se incluyen en navegación, listados ni sitemap, y no
exponen el `draftSlug` como enlace. El build de producción no genera rutas
`/draft/`, por lo que las previews no se publican en el artefacto estático. La
URL local no es un mecanismo de confidencialidad ni un control de acceso
criptográfico; el contenido tampoco debe contener información sensible.

## Reglas de publicación

Ningún estado distinto de `published` puede entrar en rutas o listados públicos.
Un artículo Medium se publica primero manualmente en Medium y después se cambia
su referencia local a `published` con la URL final. Un artículo `scheduled` no
se activa por fecha.

El rollback consiste en revertir el commit que publicó el cambio y reconstruir
el sitio. El contenido sigue siendo recuperable mediante Git.

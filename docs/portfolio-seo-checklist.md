# Checklist SEO del portfolio

## Estado actual

El sitio se genera como Astro estático en `https://smaje.com.co`. Las páginas ES usan las rutas raíz y las páginas EN usan `/en/`. `Layout.astro` centraliza título, descripción, canonical, `hreflang`, `x-default`, Open Graph, Twitter y `robots`.

Sprint 10 añade los artefactos de rastreo y cierre técnico:

- `GET /robots.txt` permite el sitio público, bloquea `/draft/` y `/keystatic/`, y declara el sitemap.
- `GET /sitemap.xml` incluye páginas principales, fichas de proyectos publicadas, índices `/blog` y `/en/blog`, y artículos locales con estado `published`.
- `GET /404.html` es una salida global bilingüe con `noindex,nofollow,noarchive`; no es una página localizada ni aparece en el sitemap.
- No se añadieron JSON-LD, una imagen social nueva, cookies, analytics ni dependencias.

## Reglas de metadata

- Cada página pública indexable debe tener un título único, una descripción específica, canonical absoluto bajo `https://smaje.com.co` y `robots=index,follow`.
- Las páginas bilingües deben declarar alternates `es`, `en` y `x-default`, apuntando a la misma ruta funcional en cada idioma.
- Las fichas de proyecto usan `/projects/<slug>` y `/en/projects/<slug>` como canonical según el locale.
- Las fichas de blog deben usar `/blog/<slug>` o `/en/blog/<slug>`, nunca solo `/blog` para una entrada.
- La 404 usa canonical técnico `/404`, no alternates de idioma y `noindex,nofollow,noarchive`.
- Las descripciones SEO deben ser concretas, corresponder al contenido visible y mantenerse en una longitud razonable; no se modifica el copy editorial principal solo para cumplir una métrica.

## Inclusión y exclusión del sitemap

Incluidas:

- `/`, `/en/`, `/about`, `/en/about`, `/projects`, `/en/projects`, `/experience`, `/en/experience`.
- `/blog` y `/en/blog`, aunque el listado actual no tiene artículos publicados.
- Las fichas ES/EN de proyectos cuyo estado editorial sea `published`.
- Las fichas locales de blog (`channel: site`) cuyo estado sea `published`.

Excluidas:

- Estados `draft`, `scheduled` y `archived`.
- Previews bajo `/draft/`, rutas Keystatic y la salida `/404.html`.
- Referencias `Medium` como URLs externas; el sitemap solo representa rutas canónicas del sitio.
- Rutas privadas, de desarrollo, parámetros y anchors internos.

## Validación local

Ejecutar desde la raíz del repositorio:

```bash
pnpm cms:check
pnpm lint
pnpm build
git diff --check
```

`pnpm cms:check` construye el sitio y verifica `dist/404.html`, `dist/robots.txt`, `dist/sitemap.xml`, la forma básica del XML, rutas públicas, exclusiones, metadata obligatoria, la directiva de la 404 y la referencia al sitemap.

Para una revisión manual, ejecutar `pnpm preview` y comprobar una ruta inexistente, navegación ES/EN, foco visible, enlaces sociales, correo y descarga del CV. Revisar el XML con un validador externo antes de una publicación real si el proveedor lo requiere.

## Dependencias externas pendientes

La configuración de dominio, despliegue, DNS, Search Console, envío del sitemap y validación externa no se resuelve dentro del repositorio. Debe realizarlas la persona responsable del despliegue y registrar cualquier incidencia antes del lanzamiento.

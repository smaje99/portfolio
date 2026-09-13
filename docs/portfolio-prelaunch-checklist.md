# Checklist de revisión pre-lanzamiento

Usar esta lista antes de publicar cambios relevantes. Cada bloque distingue entre validación técnica automatizable y revisión manual.

| Bloque | Verificación | Responsable |
| --- | --- | --- |
| Build y código | Ejecutar `pnpm cms:check`, `pnpm lint`, `pnpm build` y `git diff --check`; confirmar que no hay secretos ni errores de formato. | Técnico |
| SEO y rastreo | Revisar title, description, canonical, alternates, Open Graph y Twitter en las páginas públicas; confirmar `robots.txt`, sitemap, RSS y exclusión de drafts, Keystatic y 404. | Técnico |
| Rutas públicas | Abrir `/`, `/about`, `/projects`, `/experience`, `/blog` y sus equivalentes `/en/...`; abrir las ocho fichas de proyectos y confirmar que responden. | Técnico + manual |
| Navegación bilingüe | Recorrer header, footer, selector ES/EN, enlaces de inicio, proyectos, experiencia, blog y contacto; confirmar que no haya enlaces rotos ni cambios de idioma incorrectos. | Manual |
| 404 | En `pnpm preview`, visitar una ruta inexistente; comprobar copy bilingüe, único `h1`, recuperación a home/proyectos/contacto, foco visible y ausencia de indexación. | Técnico + manual |
| Contacto y evidencia | Probar enlaces de LinkedIn, GitHub, correo, CV ES/EN y los repositorios/demos públicos de proyectos. No validar repositorios privados como si fueran públicos. | Manual |
| Accesibilidad | Navegar solo con teclado, revisar orden de foco, contraste, nombres accesibles y estado `:focus-visible`. Probar viewport móvil y escritorio. | Manual |
| Contenido editorial | Confirmar que no se publicaron drafts, scheduled, archived, previews o entradas Medium-only por accidente; el blog puede permanecer vacío hasta Fase 4. | Técnico + responsable editorial |
| Privacidad y operación | Confirmar ausencia de scripts, cookies, llamadas de analytics y secretos; revisar que rutas Keystatic no formen parte del build público. | Técnico |
| Externo | Tras el despliegue, comprobar HTTPS, DNS, respuesta real de 404, Search Console y envío del sitemap. | Responsable de despliegue |

## Criterio de salida

El lanzamiento puede pasar a revisión externa cuando todos los bloques técnicos estén verdes, la revisión manual no tenga enlaces o problemas de foco pendientes y las acciones de dominio, despliegue y Search Console tengan responsable asignado. Analytics continúa fuera de alcance en este sprint y no debe aparecer como condición técnica oculta.

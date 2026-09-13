# Sitemap objetivo del MVP del portfolio

**Work item:** `BLG-F1-S02-01`
**Fecha de corte:** 13 de julio de 2026
**Fuentes contrastadas:** `docs/portfolio-backlog.md`, `docs/portfolio-roadmap.md`, `docs/portfolio-information-architecture-audit.md`, `src/pages/`, `src/i18n/site.ts`, `src/components/BasePage.astro`, `src/layouts/Layout.astro` y `src/data/projects.ts`.

## Propósito y alcance

Este documento formaliza el mapa objetivo del portfolio v1 a partir de la arquitectura pública ya implementada y de los gaps estructurales identificados en Sprint 01.

El documento conserva la decisión estructural del MVP y se actualiza con la implementación de `BLG-F3-CONT-01` y Sprint 10: las fichas de proyectos y las rutas del blog ya son públicas; el contenido editorial publicado del blog y su integración con Medium siguen pendientes de Fase 4.

## Taxonomía de nodos

| Estado | Criterio |
| --- | --- |
| `página independiente` | Existe o debe existir como ruta pública indexable con contenido propio y paridad ES/EN. |
| `bloque interno` | Vive dentro de una página existente y se navega por anchor o CTA contextual, sin ruta propia en v1. |
| `nodo reservado` | Forma parte de la arquitectura objetivo, pero no debe exponerse en navegación pública hasta que una fase posterior cierre su contenido y soporte técnico. |
| `diferido fuera de v1` | No pertenece al alcance funcional del MVP inicial, aunque condiciona percepción de cierre o evolución posterior. |

## Reglas de arquitectura

1. Las rutas públicas del MVP deben conservar paridad bilingüe: español en la raíz y inglés bajo `/en/`.
2. Las páginas indexables del MVP deben usar las convenciones actuales de `BasePage` y `Layout`: canonical, alternates `hreflang`, `x-default` y `meta robots` indexable.
3. Los anchors internos pueden aparecer en navegación pública si ya existen como bloques de la home y tienen equivalente ES/EN.
4. Los nodos reservados no se agregan a `src/i18n/site.ts` ni al header mientras no exista ruta, contenido y criterio de publicación.
5. La navegación actual conserva el contrato simple `{ label, href }[]`; el catálogo de proyectos enlaza sus fichas desde las tarjetas y el blog ya tiene enlaces públicos, aunque su contenido publicado continúa pendiente.
6. Ningún nodo futuro debe tratarse como cobertura pública hasta que exista una ruta Astro o una sección visible equivalente.

## Sitemap objetivo

| Nodo | Estado | Ruta ES | Ruta EN | Navegación v1 | Propósito narrativo | Evidencia actual | SEO/i18n | Dependencia | Trazabilidad |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Inicio / identidad | `página independiente` | `/` | `/en/` | Pública principal | Presentar identidad profesional, posicionamiento, propuesta de valor, proyectos destacados, experiencia resumida y contacto. | `src/pages/index.astro`, `src/pages/en/index.astro`, `PortfolioPage`. | Indexable, canonical por locale y alternates ES/EN. | Refinamiento narrativo y CTAs en Fase 2. | `BLG-F2-S03-01`, `BLG-F2-S04-02`. |
| Perfil / sobre mí | `página independiente` | `/about` | `/en/about` | Pública | Explicar criterio profesional, formación aplicada, principios de trabajo y capacidades de base. | `src/pages/about.astro`, `src/pages/en/about.astro`, copy en `src/i18n/site.ts`. | Indexable, canonical por locale y alternates ES/EN. | Revisión narrativa posterior, sin cambio estructural. | `BLG-F2-S04-01`. |
| Proyectos | `página independiente` | `/projects` | `/en/projects` | Pública | Mostrar inventario público base y evidencia de sistemas, procesos y capacidad técnica. | `src/pages/projects.astro`, `src/pages/en/projects.astro`, `src/data/projects.ts`. | Indexable, canonical por locale y alternates ES/EN. | Fase 3 debe definir profundidad de casos sin sustituir el listado base. | `BLG-F3-S05-01`, `BLG-F3-S05-02`. |
| Experiencia | `página independiente` | `/experience` | `/en/experience` | Pública | Aportar confianza profesional, contexto laboral y evidencia de trayectoria. | `src/pages/experience.astro`, `src/pages/en/experience.astro`, colección de experiencias. | Indexable, canonical por locale y alternates ES/EN. | Mantener como ruta independiente; no degradar a bloque. | `BLG-F2-S04-01`. |
| Enfoque / capacidades | `bloque interno` | `/#focus` | `/en/#focus` | Pública por anchor | Sintetizar áreas de capacidad y orientar la lectura hacia servicios, procesos, datos y arquitectura. | `focusSection` en `src/i18n/site.ts` y bloque visible en home. | No requiere canonical propio; hereda indexabilidad de home. | Consolidar mensaje de capacidades en Fase 2; no crear ruta propia en v1. | `BLG-F2-S03-02`, `BLG-F2-S03-03`. |
| Contacto | `bloque interno` | `/#contact` | `/en/#contact` | Pública por anchor y CTA | Facilitar conversión profesional con correo y perfiles externos. | `contactSection`, hero actions y enlaces sociales en home. | No requiere canonical propio; hereda indexabilidad de home. | Ajustar CTAs y cierre de confianza en Fase 2/Fase 5. | `BLG-F2-S04-02`, `BLG-F5-S09-03`. |
| Casos de estudio | `páginas públicas asociadas a proyectos` | `/projects/<slug>` | `/en/projects/<slug>` | Pública | Dar profundidad técnica a los cuatro proyectos con contexto, alcance, decisiones, estado, aprendizajes y evidencia pública proporcional. | `src/content/projects/`, `src/components/ProjectDetailPage.astro` y rutas dinámicas bilingües. | Indexable, canonical por locale, alternates ES/EN y `index,follow`. | Los cuerpos Markdown son la fuente runtime; el índice del blog ya existe, pero su contenido editorial sigue pendiente de Fase 4. | `BLG-F3-CONT-01`. |
| Blog / autoridad técnica | `página independiente` | `/blog` | `/en/blog` | Pública | Sostener autoridad técnica y criterio profesional mediante artículos publicados en el sitio o referencias a Medium. | `src/pages/blog.astro`, `src/pages/en/blog.astro`, `src/data/blog.ts` y `src/content/blog/`; el listado actual está vacío porque el contenido local sigue en `draft`. | Indexable, canonical por locale, alternates ES/EN y sitemap; solo las fichas locales `published` pueden publicarse y entrar al sitemap. | Fase 4 debe cerrar integración con Medium, backlog editorial y primera publicación válida. | `BLG-F4-S07-01`, `BLG-F4-S07-02`, `BLG-F4-S07-03`, `BLG-F5-S10-02`. |
| Footer profesional | `bloque global` | Global | Global | Público | Cerrar navegación secundaria, identidad, confianza y enlaces relevantes. | `src/components/Footer.astro` está integrado en `Layout.astro`. | Los enlaces internos se localizan; correo, GitHub, LinkedIn y CV tienen destinos públicos verificados por el checklist. | Mantener validación de enlaces en cada lanzamiento. | `BLG-F5-S09-03`, `BLG-F5-S10-03`. |
| Analytics | `diferido fuera de v1` | Global | Global | No aplica | Medir señales mínimas de uso sin bloquear el sitemap. | No hay instrumentación observable. | No afecta indexabilidad del sitemap. | Fase 5. | `BLG-F5-S09-02`. |
| Página 404 | `página global no indexable` | `/404.html` de salida | Sin ruta localizada independiente | No aplica | Recuperar navegación y percepción de producto terminado ante rutas inexistentes. | `src/pages/404.astro` y `src/components/NotFoundPage.astro`; Astro genera un único `dist/404.html` bilingüe. | `noindex,nofollow,noarchive`, canonical técnico `/404`, excluida del sitemap. | Mantener enlaces de recuperación y revisión visual de la respuesta del hosting. | `BLG-F5-S10-01`, `BLG-F5-S10-03`. |

## Estructura jerárquica

```txt
/
├── Inicio / identidad
│   ├── Enfoque / capacidades (#focus)
│   ├── Proyectos destacados
│   ├── Experiencia resumida
│   └── Contacto (#contact)
├── Perfil (/about)
├── Proyectos (/projects)
│   └── Casos de estudio públicos por proyecto
├── Experiencia (/experience)
└── Blog (/blog)
```

```txt
/en/
├── Home / identity
│   ├── Focus / capabilities (#focus)
│   ├── Featured projects
│   ├── Experience summary
│   └── Contact (#contact)
├── About (/en/about)
├── Projects (/en/projects)
│   └── Public project case studies
├── Experience (/en/experience)
└── Blog (/en/blog)
```

## Decisiones cerradas

1. `Experiencia` se conserva como página independiente porque ya es una ruta madura y refuerza confianza profesional.
2. `Contacto` permanece como bloque interno de la home; no hay justificación estructural para una página independiente en v1.
3. `Enfoque/capacidades` permanece como bloque de home con soporte narrativo en perfil; una ruta propia sería prematura.
4. `Casos de estudio` se publica como profundidad asociada a `/projects`; cada ficha conserva los límites de evidencia y confidencialidad del proyecto.
5. `Blog` ya tiene rutas públicas y aparece en el sitemap como índice bilingüe. Las entradas de artículo solo se incorporan cuando una entrada local tenga estado `published`; el borrador actual no se expone.
6. Footer y 404 ya están implementados como piezas de cierre técnico. Analytics permanece fuera de alcance y la validación externa sigue siendo manual.

## Impactos futuros sobre interfaces y datos

| Área | Impacto previsto | Momento de decisión |
| --- | --- | --- |
| `src/i18n/site.ts` | Mantener copy localizado del blog y de la 404; las rutas públicas del blog ya forman parte del contrato de navegación. | Fase 4/Fase 5. |
| Navegación | Considerar un contrato más expresivo que distinga enlaces públicos, anchors, nodos reservados y enlaces contextuales. | Solo si la lista simple deja de representar el producto publicado. |
| `src/data/projects.ts` | Mantener la relación entre el inventario, las fichas Markdown y la disponibilidad pública de repositorios/demos. | `BLG-F3-CONT-01`, implementado. |
| SEO técnico | Mantener canonical, alternates, sitemap XML y robots para páginas públicas; excluir drafts, previews, Keystatic y 404. | Sprint 10, con revisión por lanzamiento. |
| Contenido editorial | Separar copy final de home/perfil/proyectos/blog/casos en piezas trazables del backlog narrativo. | `BLG-F1-S02-03` y fases posteriores. |

## Criterio de cierre de `BLG-F1-S02-01`

El work item se considera cerrado porque:

* Cada función exigida por el backlog quedó clasificada como `página independiente`, `bloque interno`, `nodo reservado` o `diferido fuera de v1`.
* Las rutas públicas actuales conservan paridad ES/EN y no requieren cambios de implementación para representar el MVP base.
* Blog y casos de estudio aparecen en la arquitectura objetivo; el índice del blog ya se expone, pero el contenido editorial publicado sigue pendiente de Fase 4.
* Contacto, experiencia y capacidades tienen tratamiento estructural explícito.
* Las dependencias hacia Fases 2, 3, 4 y 5 quedaron trazadas sin mezclar cierre documental con ejecución de rutas nuevas.

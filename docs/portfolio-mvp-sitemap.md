# Sitemap objetivo del MVP del portfolio

**Work item:** `BLG-F1-S02-01`
**Fecha de corte:** 13 de julio de 2026
**Fuentes contrastadas:** `docs/portfolio-backlog.md`, `docs/portfolio-roadmap.md`, `docs/portfolio-information-architecture-audit.md`, `src/pages/`, `src/i18n/site.ts`, `src/components/BasePage.astro`, `src/layouts/Layout.astro` y `src/data/projects.ts`.

## Propósito y alcance

Este documento formaliza el mapa objetivo del portfolio v1 a partir de la arquitectura pública ya implementada y de los gaps estructurales identificados en Sprint 01.

El sitemap no implementa rutas, componentes, copy final, integración con Medium ni casos de estudio. Su función es establecer una referencia operativa para priorización de contenido, backlog narrativo, navegación futura y trazabilidad entre fases.

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
5. La navegación actual conserva el contrato simple `{ label, href }[]`; una interfaz más expresiva solo se justifica cuando blog o casos de estudio pasen de reserva a publicación.
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
| Casos de estudio | `nodo reservado` | Reservada | Reservada | Sin enlace público en v1 | Dar profundidad técnica a proyectos prioritarios con contexto, problema, solución, arquitectura, estado y aprendizajes. | No existe ruta, detalle ni colección de casos. | No indexable hasta tener rutas reales y contenido publicable. | Fase 3 debe definir plantilla, insumos, primer caso y continuidad. | `BLG-F3-S05-02`, `BLG-F3-S05-03`, `BLG-F3-S06-01`, `BLG-F3-S06-02`. |
| Blog / autoridad técnica | `nodo reservado` | Reservada | Reservada | Sin enlace público en v1 | Sostener autoridad técnica y criterio profesional mediante artículos o integración con Medium. | No existe ruta, listado, tarjetas ni integración externa. | No indexable hasta decidir arquitectura, fuente y URLs. | Fase 4 debe cerrar integración con Medium, IA del blog y backlog editorial. | `BLG-F4-S07-01`, `BLG-F4-S07-02`, `BLG-F4-S07-03`. |
| Footer profesional | `diferido fuera de v1` | Global | Global | Pendiente | Cerrar navegación secundaria, identidad, confianza y enlaces relevantes. | No existe footer global. | Debe respetar enlaces localizados cuando se implemente. | Fase 5. | `BLG-F5-S09-03`. |
| Analytics | `diferido fuera de v1` | Global | Global | No aplica | Medir señales mínimas de uso sin bloquear el sitemap. | No hay instrumentación observable. | No afecta indexabilidad del sitemap. | Fase 5. | `BLG-F5-S09-02`. |
| Página 404 | `diferido fuera de v1` | `/404` futura | `/en/404` futura o equivalente | No aplica | Recuperar navegación y percepción de producto terminado ante rutas inexistentes. | No existe página 404 dedicada. | Debe evitar indexación de error cuando se implemente. | Fase 5. | `BLG-F5-S10-01`. |

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
│   └── Casos de estudio (reservado para Fase 3)
├── Experiencia (/experience)
└── Blog (reservado para Fase 4)
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
│   └── Case studies (reserved for Phase 3)
├── Experience (/en/experience)
└── Blog (reserved for Phase 4)
```

## Decisiones cerradas

1. `Experiencia` se conserva como página independiente porque ya es una ruta madura y refuerza confianza profesional.
2. `Contacto` permanece como bloque interno de la home; no hay justificación estructural para una página independiente en v1.
3. `Enfoque/capacidades` permanece como bloque de home con soporte narrativo en perfil; una ruta propia sería prematura.
4. `Casos de estudio` queda reservado como profundidad futura conectada a proyectos, no como enlace público en el MVP inicial.
5. `Blog` queda reservado hasta que Fase 4 cierre integración, fuente editorial, listados y comportamiento de enlaces.
6. Footer, analytics y 404 no forman parte del sitemap funcional de contenido de Sprint 02; se difieren como piezas de cierre técnico en Fase 5.

## Impactos futuros sobre interfaces y datos

| Área | Impacto previsto | Momento de decisión |
| --- | --- | --- |
| `src/i18n/site.ts` | Agregar labels y enlaces localizados para blog o casos solo cuando pasen a navegación pública. | Fase 3/Fase 4. |
| Navegación | Considerar un contrato más expresivo que distinga enlaces públicos, anchors, nodos reservados y enlaces contextuales. | Solo si la lista simple deja de representar el producto publicado. |
| `src/data/projects.ts` | Relacionar proyectos listados con casos publicables mediante un campo o colección futura. | Fase 3. |
| SEO técnico | Incluir nuevas rutas en canonical, alternates, sitemap XML y navegación interna solo cuando sean publicables. | Fase 3/Fase 4/Fase 5. |
| Contenido editorial | Separar copy final de home/perfil/proyectos/blog/casos en piezas trazables del backlog narrativo. | `BLG-F1-S02-03` y fases posteriores. |

## Criterio de cierre de `BLG-F1-S02-01`

El work item se considera cerrado porque:

* Cada función exigida por el backlog quedó clasificada como `página independiente`, `bloque interno`, `nodo reservado` o `diferido fuera de v1`.
* Las rutas públicas actuales conservan paridad ES/EN y no requieren cambios de implementación para representar el MVP base.
* Blog y casos de estudio aparecen en la arquitectura objetivo sin exponerse prematuramente en navegación pública.
* Contacto, experiencia y capacidades tienen tratamiento estructural explícito.
* Las dependencias hacia Fases 2, 3, 4 y 5 quedaron trazadas sin mezclar cierre documental con ejecución de rutas nuevas.

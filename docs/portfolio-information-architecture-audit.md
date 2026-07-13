# Auditoría de arquitectura de información del portfolio

**Work item:** `BLG-F1-S01-03`
**Fecha de corte:** 11 de julio de 2026
**Fuentes contrastadas:** `docs/portfolio-roadmap.md`, `docs/portfolio-backlog.md`, rutas bajo `src/pages/`, componentes de página, `src/i18n/site.ts` y datos públicos del sitio.

## Propósito y alcance

Este documento compara la estructura pública realmente implementada con la estructura mínima recomendada por la Fase 1 del roadmap. Su función es establecer una línea base para el sitemap del MVP, la priorización de contenido y los sprints posteriores.

La auditoría no diseña ni implementa rutas, componentes o copy nuevos. Tampoco convierte contenido presente en el repositorio, pero no expuesto en la interfaz, en cobertura pública implícita.

## Criterios de evaluación

| Estado | Criterio |
| --- | --- |
| `completa` | Existe una ruta o sección pública navegable que cumple suficientemente la función estructural esperada en español e inglés. |
| `parcial` | Existe cobertura pública, pero falta profundidad, contenido o una función necesaria para cumplir el objetivo del roadmap. |
| `ausente` | No existe una ruta ni una sección pública equivalente. |
| `reubicable` | El contenido existe, pero está fragmentado o su ubicación definitiva debe resolverse en el sitemap del MVP. |

Los gaps se clasifican por su dependencia principal: `contenido`, `navegación`, `estructura` o `implementación futura`.

## Inventario público observado

| Función actual | Español | Inglés | Implementación observable |
| --- | --- | --- | --- |
| Inicio | `/` | `/en/` | Hero, propuesta de valor, enfoque, proyectos destacados, experiencia reciente y contacto. |
| Perfil | `/about` | `/en/about` | Presentación profesional, principios y evidencia de formación/capacidades. |
| Proyectos | `/projects` | `/en/projects` | Listado localizado alimentado por `src/data/projects.ts`; no hay páginas de detalle. |
| Experiencia | `/experience` | `/en/experience` | Historial localizado alimentado por la colección de experiencias. |
| Contacto | `/#contact` | `/en/#contact` | Bloque interno de la home con LinkedIn, GitHub y correo. |
| Enfoque | `/#focus` | `/en/#focus` | Bloque interno con cuatro áreas de enfoque. |

La navegación de `src/i18n/site.ts` presenta equivalentes en ambos idiomas para inicio, perfil, enfoque, proyectos, experiencia y contacto. No se observaron rutas públicas para blog, artículos, casos de estudio, detalles de proyecto o página 404 dedicada. Tampoco se observó un footer global ni instrumentación de analytics en el layout.

## Matriz de correspondencia con la estructura mínima

| Elemento del roadmap | Cobertura pública actual | Estado | Gap y dependencia | Decisión de tratamiento | Trazabilidad principal |
| --- | --- | --- | --- | --- | --- |
| Inicio | `/` y `/en/`; reúne identidad, propuesta de valor, capacidades resumidas, proyectos, experiencia y contacto. | `parcial` | La estructura existe; falta cerrar jerarquía narrativa, capacidades/servicios y CTAs. Dependencia: `contenido`. | Resolver en el MVP después de formalizar sitemap y prioridades. | `BLG-F1-S02-01` a `03`; Fase 2, Sprints 03 y 04. |
| Sobre mí | `/about` y `/en/about`; perfil, principios y formación aplicada. | `completa` | No hay gap estructural. La coherencia externa del relato sigue siendo editorial. Dependencia: `contenido`. | Conservar como página independiente y revisar narrativa en el MVP. | `BLG-F2-S04-01`. |
| Proyectos | `/projects` y `/en/projects`; listado localizado y selección destacada en home. | `parcial` | El listado existe, pero debe mantenerse alineado con el inventario estratégico y no ofrece profundidad individual. Dependencias: `contenido` y `estructura`. | Conservar la ruta en el MVP; realinear datos antes de publicar casos. | `BLG-F3-S05-01`. |
| Casos de estudio | No existe ruta, sección ni detalle público equivalente. | `ausente` | Falta el modelo narrativo y la presentación de contexto, problema, solución, arquitectura, estado y aprendizajes. Dependencias: `estructura`, `contenido` e `implementación futura`. | Incluir la capacidad en el sitemap del MVP y ejecutarla de forma incremental en Fase 3; no implementarla en este WI. | Fase 3, Sprints 05 y 06. |
| Blog | No existe ruta, navegación, tarjetas ni integración con Medium. | `ausente` | Falta decidir la integración, la arquitectura editorial y el comportamiento de listados/enlaces. Dependencias: `estructura`, `contenido` e `implementación futura`. | Incluirlo en el sitemap objetivo; diferir implementación y operación a Fase 4. | Fase 4, Sprints 07 y 08. |
| Stack / habilidades | `/#focus` resume áreas; `/about` y `/en/about` contienen formación, pilares, prácticas y habilidades. | `reubicable` | La evidencia existe, pero la función está repartida y la navegación solo nombra “Enfoque”. Falta decidir si será bloque de home, parte de perfil o página propia. Dependencias: `navegación` y `contenido`. | Resolver ubicación en `BLG-F1-S02-01`; consolidar el mensaje como capacidades/servicios en Fase 2 sin asumir una ruta nueva. | `BLG-F1-S02-01`; `BLG-F2-S03-02` y `03`. |
| Contacto | `/#contact` y `/en/#contact` con correo y enlaces profesionales; CTA desde el hero. | `completa` | Cumple la función mínima como bloque interno. Falta validar la orientación final de CTAs y el cierre global del sitio. Dependencias: `contenido` y `navegación`. | Conservar como bloque de home; no requiere página independiente para el MVP salvo decisión posterior del sitemap. | `BLG-F2-S04-02`; `BLG-F5-S09-03`. |

## Elementos actuales fuera de la estructura mínima

| Elemento | Estado | Decisión |
| --- | --- | --- |
| Experiencia | Ruta completa y bilingüe (`/experience`, `/en/experience`), además de resumen en home. | Conservar como página independiente: aporta evidencia y confianza a los objetivos 1 y 4, aunque no aparezca en la lista mínima de siete elementos. Debe incorporarse explícitamente al sitemap de `BLG-F1-S02-01`. |
| Descarga de CV | Acción disponible desde el hero con PDF localizado. | Conservar como CTA secundario; no necesita ruta propia. Su jerarquía se decide en `BLG-F2-S04-02`. |

## Gaps de cierre y lanzamiento

Estos elementos no pertenecen a la estructura mínima de contenido de Fase 1, pero sí condicionan que el sitio se perciba como un producto terminado:

| Gap observado | Estado | Tratamiento |
| --- | --- | --- |
| Footer profesional | `ausente` | Definir función y contenido en `BLG-F5-S09-03`; después implementarlo como cierre global. |
| Analytics | `ausente` | Definir señales e instrumentación en `BLG-F5-S09-02`. |
| Página 404 dedicada | `ausente` | Especificar experiencia y navegación de recuperación en `BLG-F5-S10-01`. |
| Validación pre-lanzamiento y externa | `ausente` como evidencia documental | Cubrir en `BLG-F5-S10-03`, `BLG-F6-S11-02` y `BLG-F6-S12-01`. |

## Decisiones para el sitemap del MVP

1. Mantener como páginas independientes inicio, perfil, proyectos y experiencia, con paridad entre español e inglés.
2. Mantener contacto como bloque interno de la home; una página independiente no está justificada por el estado actual.
3. Resolver stack/capacidades como una función narrativa antes de decidir su forma. El sitemap puede conservarla como bloque de home o perfil sin crear una ruta prematuramente.
4. Reservar en el sitemap una solución explícita para casos de estudio, pero dejar a Fase 3 la decisión entre detalle bajo proyectos o una agrupación propia.
5. Reservar una entrada de navegación para blog, condicionada a la decisión de integración con Medium de Fase 4.
6. Incorporar experiencia a la arquitectura objetivo aunque no figure en la lista mínima original, porque ya es una ruta madura y refuerza confianza profesional.

## Impactos previsibles de interfaz y datos

- `src/i18n/site.ts` necesitará nuevos labels y enlaces localizados cuando blog o casos de estudio pasen a la navegación pública.
- La decisión sobre capacidades puede requerir reagrupar copy hoy distribuido entre `focusSection`, `aboutSection` y `learningSection`; no exige todavía un tipo o componente nuevo.
- Los casos de estudio necesitarán un artefacto de contenido estructurado distinto de la tarjeta actual de proyecto, con campos para problema, contexto, solución, arquitectura, tecnologías, estado y aprendizajes.
- El blog necesitará copy localizado y un modelo de entrada o adaptador de datos acorde con la decisión de integración con Medium.
- Cualquier ruta nueva debe conservar la correspondencia `/...` y `/en/...`, canonical y alternates ya usados por `BasePage` y `Layout`.

## Justificación de las fases posteriores

| Fase | Hallazgo que la justifica |
| --- | --- |
| Fase 1 — Fundamento | La base existe, pero stack/capacidades está fragmentada y aún falta formalizar el sitemap y la prioridad de contenido. |
| Fase 2 — Home | La home está implementada, aunque su jerarquía narrativa, capacidades explícitas y CTAs siguen parciales. |
| Fase 3 — Casos de estudio | Proyectos solo ofrece tarjetas/listado; no existe profundidad técnica ni rutas de detalle. |
| Fase 4 — Blog | No existe ninguna cobertura pública y la integración con Medium sigue sin decisión técnica. |
| Fase 5 — Confianza | No se observan footer, analytics ni 404 dedicada; el cierre técnico sigue incompleto. |
| Fase 6 — Lanzamiento | No hay evidencia documental de dominio, revisión externa, medición o criterio formal de cierre. |

## Criterio de cierre

La arquitectura actual cubre suficientemente identidad, perfil, proyectos, experiencia y contacto para usarlos como base del MVP. Los únicos vacíos estructurales de contenido son blog y casos de estudio. Inicio y proyectos son coberturas parciales por profundidad narrativa, mientras que stack/capacidades es principalmente un problema de agrupación y navegación, no de ausencia total de contenido.

Con esta línea base, `BLG-F1-S02-01` puede definir la arquitectura objetivo sin confundir lo deseado con lo ya implementado.

# Roadmap 1: Portfolio profesional

## Estado actual

El portfolio ya empezó. Falta una pieza importante: **diseñar e integrar la sección de blog conectada con Medium**. Además, falta definir claramente qué proyectos mostrar y cómo clasificarlos.

### Actualización de estado real al 14 de junio de 2026

Con base en la revisión del repositorio y de la implementación actual del sitio:

* Ya existe una base funcional en Astro con versión pública estática.
* Ya existe versión bilingüe en español e inglés.
* Ya existe una propuesta de valor visible en la home.
* Ya existe una página “Sobre mí”, una sección de proyectos, una sección de experiencia y una vía clara de contacto.
* Ya existe descarga de CV en PDF y automatización de su publicación.

Pero siguen abiertas varias brechas estratégicas:

* No existe todavía sección de blog ni integración con Medium.
* No existen casos de estudio reales con profundidad técnica.
* Los proyectos visibles actualmente en el sitio no están totalmente alineados con la selección priorizada por este roadmap.
* No hay evidencia en el repositorio de analytics, página 404 dedicada, footer profesional o validación externa documentada.

Este proyecto debe funcionar como la cara pública de tu perfil, pero no como una simple hoja de vida. Debe presentar tu posicionamiento como:

> Ingeniería de soluciones para sistemas de información.

Y debe conectar tus líneas reales de trabajo:

* Procesos (Diplomado BPM para la TD).
* Datos (Diplomado en Analítica de Datos en la Gestión Empresarial).
* Desarrollo (Cursos realizados + experiencia estudiantil en la uniamazonia + proyectos personales).
* Arquitectura. (Cursos + Libros)
* Transformación digital (Diplomado BPM para la TD).
* Consultoría de sistemas de información (UNIR + Diplomado BPM + Libros).
* Productos SaaS (Proyectos).
* Automatización e IA aplicada (Cursos + UNIR + Diplomado en Analítica de Datos en la Gestión Empresarial).

---

# Objetivo estratégico del Portfolio

Construir una plataforma profesional que centralice tu identidad, proyectos, artículos, experiencia técnica y propuesta de valor como futuro consultor de soluciones informáticas.

El portfolio debe responder tres preguntas:

1. **Quién eres profesionalmente.**
2. **Qué problemas sabes convertir en sistemas.** (-> Definir mediante una gráfica de araña mediante tus capacidades técnicas y de consultoría).
3. **Por qué alguien debería confiar en ti para diseñar o construir una solución.**

---

# Horizonte operativo

Trabajaremos el portfolio en un horizonte de **90 días**, con avance principalmente los fines de semana.

Como el portfolio es de fin de semana, no conviene diseñar un roadmap por días, sino por **bloques de fin de semana**.

Un bloque útil sería:

* **Sábado mañana:** diseño, contenido o implementación.
* **Viernes o domingo buffer:** revisión ligera, publicación o ajustes.

---

# Estado real del proyecto al 14 de junio de 2026

## Lo que ya está implementado

1. **Base técnica estable**
   * El sitio compila correctamente y tiene una base mantenible.
   * La estructura pública actual funciona en Astro con salida estática.
   * Existe soporte de i18n para español e inglés.

2. **Narrativa principal visible**
   * Ya está publicada una propuesta de valor alineada con “Ingeniería de soluciones para sistemas de información”.
   * Ya existe hero, CTA principal, acceso al CV y una capa básica de contacto.

3. **Estructura pública mínima**
   * Inicio
   * Sobre mí
   * Proyectos
   * Experiencia
   * Contacto

4. **Pulido técnico parcial**
   * Metadata básica por página.
   * Open Graph básico.
   * Identidad visual consistente.
   * Responsive general funcional.
   * CV disponible en español e inglés.

## Lo que sigue incompleto o desalineado

1. **Blog y autoridad técnica**
   * No hay sección de blog.
   * No hay integración con Medium.
   * No hay artículos destacados, categorías ni tarjetas de contenido.

2. **Casos de estudio**
   * La sección de proyectos actual funciona más como listado que como caso de estudio.
   * No existe todavía la estructura de contexto, problema, solución, arquitectura, estado y aprendizajes.

3. **Inventario de proyectos**
   * Este roadmap prioriza una selección estratégica concreta.
   * El sitio actual todavía requiere realinearse con esa selección para que la narrativa pública coincida con el objetivo consultivo.

4. **Cierre de lanzamiento**
   * No hay evidencia documentada de analytics.
   * No hay evidencia documentada de página 404 dedicada.
   * No hay evidencia documentada de footer profesional.
   * No hay evidencia documentada de validación externa formal.

## Lectura ejecutiva del avance

El portfolio **sí avanzó técnicamente**, pero todavía **no cumple por completo la intención estratégica** de este documento. La base del sistema ya existe; el reto principal actual ya no es “construir el sitio”, sino **alinear el contenido, los proyectos y la autoridad profesional con el posicionamiento definido**.

---

# OKRs del Portfolio

## Objetivo 1: Consolidar una identidad profesional clara y vendible

**KR1.** Tener definida y publicada una propuesta de valor principal en la página de inicio.
**KR2.** Tener una sección “Sobre mí” que explique tu perfil sin sonar genérica ni académica.
**KR3.** Tener una narrativa coherente entre GitHub, LinkedIn y portfolio.
**KR4.** Tener una estructura visual que comunique ingeniería, claridad y confianza.

### Evaluación actual

**Cumplimiento estimado:** 75%

* La propuesta de valor principal ya está visible.
* La sección “Sobre mí” ya existe.
* La estructura visual ya transmite claridad y confianza.
* La coherencia narrativa completa con GitHub y LinkedIn aún debe revisarse mejor.

---

## Objetivo 2: Convertir proyectos reales en casos de estudio

**KR1.** Publicar al menos 4 casos de estudio iniciales.
**KR2.** Documentar cada caso con problema, contexto, solución, arquitectura, tecnologías y estado actual.
**KR3.** Diferenciar proyectos construidos, en desarrollo y en fase de análisis.
**KR4.** Evitar que los proyectos parezcan ideas sueltas; deben verse como líneas reales de trabajo.

### Evaluación actual

**Cumplimiento estimado:** 15%

* Ya existe una sección de proyectos.
* No existen todavía casos de estudio completos.
* El inventario público base del MVP ya quedó delimitado en Sprint 01, pero los casos de estudio prioritarios de esta estrategia siguen pendientes de maduración y publicación.
* La profundidad actual de presentación aún no demuestra criterio técnico al nivel esperado.

Casos iniciales recomendados:

1. **ITA**
2. **Cognark**
3. **Media Report CLI**
4. **Proyecto jurídico/documental**
5. Opcional: proyecto de estructuras de datos en Java
6. Opcional: trabajos de BI / BPM / automatización

Estos casos conforman el pipeline recomendado para la Fase 3. No equivalen automáticamente al inventario público base ya visible en el MVP actual.

---

## Objetivo 3: Integrar el blog como motor de autoridad técnica

**KR1.** Diseñar una sección de blog conectada con Medium.
**KR2.** Mostrar artículos por categoría: arquitectura, procesos, datos, desarrollo, IA aplicada y transformación digital.
**KR3.** Publicar al menos 3 artículos base durante los primeros 90 días.
**KR4.** Hacer que cada artículo refuerce tu posicionamiento profesional, no que sea contenido aislado.

### Evaluación actual

**Cumplimiento estimado:** 0%

* Este objetivo sigue sin implementación visible.
* Continúa siendo la brecha más importante del roadmap.

Artículos iniciales sugeridos:

1. **Ingeniería de soluciones para sistemas de información: mi enfoque profesional**
2. **Por qué los proyectos de software deben empezar por procesos, datos y arquitectura**
3. **Cómo convierto una idea de producto en requisitos, arquitectura y roadmap**
4. **De la documentación al producto: el valor de una arquitectura bien pensada**
5. **Automatización, IA y sistemas de información: oportunidades para pequeñas organizaciones**

---

## Objetivo 4: Lanzar una versión pública funcional

**KR1.** Tener una versión 1.0 desplegada.
**KR2.** Tener dominio o subdominio profesional configurado.
**KR3.** Tener enlaces funcionales a GitHub, LinkedIn, Medium y correo.
**KR4.** Tener una sección de contacto orientada a oportunidades, proyectos y consultoría.
**KR5.** Tener al menos una medición básica: visitas, clics o formularios recibidos.

### Evaluación actual

**Cumplimiento estimado:** 40%

* Ya existe una base pública funcional.
* Ya existen enlaces funcionales a GitHub, LinkedIn y correo.
* Ya existe descarga de CV.
* No hay evidencia en el repositorio de Medium, analytics, dominio documentado ni validación posterior al lanzamiento.

---

# Evaluación general del roadmap

## Diagnóstico

El roadmap sigue siendo correcto como visión estratégica, pero hoy debe leerse en dos niveles:

1. Como la visión del portfolio que se quiere consolidar.
2. Como una referencia para corregir desalineaciones del estado actual.

## Cumplimiento global estimado

**Avance general estimado:** 35% a 45%

Hay mejor progreso en:

* base técnica
* estructura pública
* narrativa inicial
* bilingüismo
* identidad visual

Los mayores retrasos están en:

* blog y Medium
* casos de estudio
* realineación de proyectos
* medición y validación externa

---

# Roadmap operativo de 90 días

## Fase 1 — Fundamento narrativo y estructura

**Duración:** semanas 1 y 2
**Bloques principales:** 2 fines de semana

### Entregables

* Mapa del sitio.
* Propuesta de valor final.
* Estructura de navegación.
* Lista priorizada de secciones.
* Inventario de proyectos a mostrar.
* Criterios para clasificar proyectos.

### Estructura mínima recomendada

1. Inicio
2. Sobre mí
3. Proyectos
4. Casos de estudio
5. Blog
6. Stack / habilidades
7. Contacto

### Resultado esperado

Al final de esta fase debes tener claridad absoluta sobre qué va en el portfolio y qué no.

### Estado actual de la fase

**Avance estimado:** 80%

La estructura base ya está bastante definida, pero todavía falta alinear por completo el inventario de proyectos y añadir la capa de blog y casos de estudio prevista desde esta etapa.

### Qué no hacer todavía

No pulir animaciones, detalles visuales ni microinteracciones. Primero debe quedar sólida la estructura.

---

## Fase 2 — Página de inicio y mensaje profesional

**Duración:** semanas 3 y 4
**Bloques principales:** 2 fines de semana

### Entregables

* Hero section.
* Texto principal.
* Subtítulo profesional.
* Bloque de servicios/capacidades.
* Bloque de proyectos destacados.
* CTA principal.

### Mensaje base sugerido

**Sergio Andrés Majé Franco**
**Ingeniería de soluciones para sistemas de información**

Diseño y desarrollo sistemas de información que conectan procesos, datos y operación para transformar necesidades reales en soluciones digitales claras, mantenibles y útiles.

### Capacidades a mostrar

* Planeación de sistemas de información.
* Diseño de producto.
* Arquitectura de software.
* Desarrollo web.
* Automatización de procesos.
* Análisis de datos.
* Documentación técnica.
* Transformación digital.

### Resultado esperado

La página de inicio debe dejar claro que tu perfil no es simplemente “desarrollador web”, sino alguien que piensa sistemas completos.

### Estado actual de la fase

**Avance estimado:** 85%

Esta fase es una de las más sólidas del proyecto actual. La home ya comunica bastante bien el enfoque de sistemas, el mensaje central y una dirección profesional clara.

---

## Fase 3 — Casos de estudio iniciales

**Duración:** semanas 5 y 6
**Bloques principales:** 2 fines de semana

### Entregables

Publicar mínimo 3 casos de estudio iniciales:

1. **ITA**
2. **Media Report CLI**
3. **Cognark**

El proyecto jurídico puede aparecer como “en análisis” si todavía no está suficientemente maduro.

### Estructura de cada caso

Cada caso debería tener esta estructura:

1. Contexto
2. Problema
3. Objetivo del proyecto
4. Usuarios o beneficiarios
5. Solución propuesta
6. Arquitectura o enfoque técnico
7. Tecnologías
8. Estado actual
9. Próximos pasos
10. Aprendizajes

### Resultado esperado

El visitante debe poder ver tu forma de pensar, no solo una captura o un enlace a GitHub.

### Estado actual de la fase

**Avance estimado:** 20%

La sección de proyectos existe, pero todavía no alcanza el nivel de profundidad necesario para llamarse “casos de estudio” en el sentido de este roadmap.

---

## Fase 4 — Blog integrado con Medium

**Duración:** semanas 7 y 8
**Bloques principales:** 2 fines de semana

### Entregables

* Diseño visual de la sección blog.
* Integración con Medium.
* Vista de listado de artículos.
* Categorías o etiquetas.
* Página o tarjeta individual por artículo.
* Enlaces hacia Medium.

### Decisión técnica pendiente

Hay que decidir si la integración será:

1. **Simple:** enlazar manualmente artículos destacados.
2. **Intermedia:** consumir feed RSS de Medium.
3. **Avanzada:** crear un sistema propio de blog y usar Medium solo como canal secundario.

Para tu caso, recomiendo comenzar con la opción intermedia:

> Portfolio como vitrina principal + Medium como fuente de artículos.

### Categorías sugeridas

* Arquitectura de software
* Sistemas de información
* Procesos y BPM
* Datos y BI
* IA aplicada
* Producto digital
* Transformación digital

### Resultado esperado

El blog no debe verse como un añadido; debe funcionar como una sección de autoridad profesional.

### Estado actual de la fase

**Avance estimado:** 0%

Esta fase no muestra implementación visible al día de hoy.

---

## Fase 5 — Pulido técnico y confianza

**Duración:** semanas 9 y 10
**Bloques principales:** 2 fines de semana

### Entregables

* Responsive design.
* SEO básico.
* Metadata por página.
* Open Graph para compartir enlaces.
* Optimización de rendimiento.
* Revisión de accesibilidad.
* Página 404.
* Footer profesional.
* Enlaces sociales verificados.
* Formulario o correo de contacto.

### Métricas técnicas mínimas

* Carga rápida.
* Buena visualización móvil.
* Navegación clara.
* Sin enlaces rotos.
* Textos consistentes.
* Proyectos correctamente clasificados.

### Resultado esperado

El portfolio debe sentirse suficientemente serio para enviarlo a un cliente, profesor, empresa o contacto profesional.

### Estado actual de la fase

**Avance estimado:** 50%

El sitio ya transmite seriedad y una base defendible, pero todavía le faltan piezas de cierre como analytics, 404, footer y una capa más completa de confianza operativa.

---

## Fase 6 — Lanzamiento y validación

**Duración:** semanas 11 y 12
**Bloques principales:** 2 fines de semana

### Entregables

* Versión 1.0 publicada.
* README del portfolio actualizado.
* Enlace agregado a GitHub.
* Enlace agregado a LinkedIn.
* Primer artículo publicado o destacado.
* 3 a 5 personas revisando el sitio.
* Lista de mejoras post-lanzamiento.

### Validación mínima

Pide retroalimentación a perfiles distintos:

* Un desarrollador.
* Una persona no técnica.
* Un profesor o mentor.
* Un posible cliente.
* Un compañero de universidad.

### Preguntas de validación

* ¿Se entiende qué hago?
* ¿Se entiende qué tipo de proyectos puedo construir?
* ¿El perfil genera confianza?
* ¿Los proyectos parecen reales y serios?
* ¿Qué sección sobra?
* ¿Qué sección falta?
* ¿Me contactarías para una solución informática?

### Estado actual de la fase

**Avance estimado:** 10%

No hay evidencia documentada en el repositorio de una ronda formal de validación externa ni de revisión estructurada por perfiles distintos.

---

# Backlog operativo del Portfolio

## Pendiente crítico

* Diseñar sección de blog.
* Integrar Medium.
* Conectar el inventario público base ya definido con el pipeline de casos de estudio priorizados por este roadmap.
* Convertir los proyectos prioritarios en casos de estudio reales.
* Revisar coherencia narrativa entre portfolio, GitHub y LinkedIn.
* Refinar el copy principal desde una óptica más consultiva.

## Pendiente importante

* Sección de tecnologías.
* Sección de servicios/capacidades.
* Analytics.
* Página 404.
* Footer profesional.
* Evidencia de validación externa.

## Pendiente futuro

* Newsletter.
* Sistema propio de artículos.
* Página específica para consultoría.
* Página específica para productos.

## Ya resuelto o parcialmente resuelto

* Descarga de CV.
* Versión en inglés.
* Página “Sobre mí”.
* Contacto básico.
* Metadata básica y Open Graph.

---

# Métricas de avance

Para este proyecto, no mediría solo commits. Mediría:

| Métrica                          | Meta 90 días |
| -------------------------------- | ------------ |
| Páginas principales publicadas   | 5 a 7        |
| Casos de estudio publicados      | 3 a 5        |
| Artículos integrados o enlazados | 3            |
| Proyectos destacados             | 4            |
| Revisiones externas recibidas    | 3 a 5        |
| Versión pública estable          | 1            |
| Actualización de LinkedIn/GitHub | Sí           |

## Lectura actual de métricas al 14 de junio de 2026

| Métrica                          | Meta 90 días | Estado actual estimado |
| -------------------------------- | ------------ | ---------------------- |
| Páginas principales publicadas   | 5 a 7        | 4 principales + versión en inglés |
| Casos de estudio publicados      | 3 a 5        | 0 |
| Artículos integrados o enlazados | 3            | 0 |
| Proyectos destacados             | 4            | 3 visibles, pero desalineados |
| Revisiones externas recibidas    | 3 a 5        | 0 documentadas |
| Versión pública estable          | 1            | Parcialmente lograda |
| Actualización de LinkedIn/GitHub | Sí           | Parcial, no verificable completamente desde el repo |

---

# Criterio para considerar terminado el MVP

El MVP del portfolio estará terminado cuando puedas enviar un solo enlace y esa persona pueda entender:

1. Quién eres.
2. Qué haces.
3. Qué tipo de problemas resuelves.
4. Qué proyectos has trabajado.
5. Cómo piensas técnicamente.
6. Cómo contactarte.

No necesita estar perfecto. Necesita ser **claro, navegable, serio y defendible**.

## Evaluación actual frente al MVP

Hoy el portfolio ya permite comunicar con bastante claridad:

1. quién eres
2. qué haces
3. cómo contactarte

Pero todavía no comunica con suficiente fuerza:

1. qué proyectos prioritarios has trabajado según esta estrategia
2. cómo piensas técnicamente a través de casos de estudio
3. tu autoridad intelectual mediante blog o artículos

Por lo tanto, **el MVP estratégico aún no puede considerarse terminado**.

---

# Qué NO hacer todavía

No conviene caer ahora en:

* Rediseñar indefinidamente la estética.
* Agregar demasiadas animaciones.
* Crear un blog propio complejo desde el inicio.
* Meter todos los proyectos sin jerarquía.
* Publicar proyectos sin explicación.
* Convertir el portfolio en una hoja de vida larga.
* Sobrecargarlo con tecnologías sin contexto.
* Esperar a que todos los proyectos estén terminados para mostrarlos.

La clave es mostrar también proyectos en evolución, pero con honestidad: **en desarrollo**, **en análisis**, **MVP**, **prototipo**, **documentación arquitectónica**, etc.

---

# Próxima acción concreta

Con base en el estado real del proyecto, la siguiente prioridad ya no debería ser solo definir estructura general. Esa base ya avanzó. Ahora el foco debe estar en convertir la base narrativa ya delimitada en una arquitectura objetivo del MVP y en un pipeline ejecutable de casos de estudio y blog.

## Sprint Portfolio 02

### Objetivo

Formalizar el sitemap del MVP sobre la base ya delimitada y preparar la ejecución real de casos de estudio y blog.

### Tareas

1. Formalizar la relación entre inventario público base y pipeline priorizado de casos de estudio.
2. Definir sitemap y priorización de contenido del MVP.
3. Diseñar una plantilla base de caso de estudio.
4. Crear al menos el primer caso de estudio real.
5. Definir la arquitectura mínima de la sección blog.
6. Elegir el mecanismo de integración con Medium.
7. Preparar backlog técnico de analytics, 404 y footer.

### Entregable mínimo

1. Sitemap funcional del MVP con reglas de cobertura y navegación.
2. Matriz de priorización de contenido y relación explícita entre inventario público base y pipeline de casos.
3. Primera plantilla o página de caso de estudio.
4. Decisión técnica documentada sobre Medium.
5. Lista priorizada de tareas de cierre para MVP.

---

## Referencia histórica conservada

La siguiente sección se conserva como referencia del primer sprint conceptual y sigue siendo útil como origen del roadmap:

La selección `ITA` / `Cognark` / `Media Report CLI` / `Proyecto Jurídico` se preserva aquí como referencia histórica y como pipeline sugerido de casos de estudio. No representa por sí sola el inventario público base que Sprint 01 cerró para el MVP actual.

Este fin de semana deberías cerrar únicamente esto:

## Sprint Portfolio 01

### Objetivo

Dejar definida la estructura base del portfolio y el diseño conceptual del blog.

### Tareas

1. Definir mapa del sitio.
2. Definir secciones principales.
3. Elegir qué proyectos entran en la primera versión.
4. Escribir el copy principal de la home.
5. Diseñar la estructura de la sección blog.
6. Decidir si Medium se integra por enlace manual o feed.
7. Crear un archivo `portfolio-roadmap.md` o una página en Notion con este roadmap.

### Entregable mínimo

Una estructura así:

```txt
/
├── Inicio
├── Sobre mí
├── Proyectos
│   ├── ITA
│   ├── Cognark
│   ├── Media Report CLI
│   └── Proyecto Jurídico
├── Blog
├── Stack
└── Contacto
```

Y una tabla de proyectos:

```txt
Proyecto | Estado | Tipo | Qué demuestra | Prioridad en portfolio
ITA | Análisis | Producto/consultoría | Normativa, educación, arquitectura | Alta
Cognark | Desarrollo inicial | Producto técnico | Requerimientos, IA, modularidad | Alta
Media Report CLI | Scaffold + CLI básica | Herramienta open source | Python, CLI, IA, automatización | Alta
Jurídico | Ideación/análisis | Producto sectorial | Gestión documental, procesos, Azure, IA | Media
```

---

# Resumen ejecutivo del roadmap del Portfolio

El portfolio será la pieza que conecte tu identidad profesional con tus proyectos reales. Su función no es decorar tu perfil, sino convertir tu experiencia dispersa en una narrativa clara de consultoría: procesos, datos, desarrollo, arquitectura y transformación digital.

Durante los próximos 90 días, el objetivo es lanzar una versión pública estable con página de inicio, proyectos, casos de estudio, blog integrado con Medium y contacto profesional. El avance se hará los fines de semana, evitando perfeccionismo visual y priorizando claridad, estructura y confianza.

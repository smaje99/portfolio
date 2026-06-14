# Backlog del Portfolio

## Propósito y uso

Este documento traduce el roadmap estratégico del portfolio a un backlog operativo de ingeniería de requisitos. Su función no es reemplazar [portfolio-roadmap.md](/home/smaje/Documentos/Projects/portfolio/docs/portfolio-roadmap.md), sino convertirlo en trabajo ejecutable, trazable y priorizable.

La lectura del documento se hace en dos niveles:

1. **Fase**, para entender el objetivo macro del avance.
2. **Sprint**, para agrupar trabajo acotado y verificable dentro de cada fase.

Cada ítem del backlog está redactado con un nivel de detalle medio, suficiente para ejecutar, revisar y validar sin convertir el documento en una especificación exhaustiva.

## Convenciones

### Estados de ejecución

* **Manual**: actividad que depende principalmente de ti, de terceros, de accesos externos o de decisiones personales no automatizables.
* **Codex con supervisión**: actividad que puedo desarrollar técnicamente dentro del repositorio con tu revisión o aprobación.
* **Mixto**: actividad donde puedo preparar artefactos o implementar parte del trabajo, pero tú debes completar una decisión, contenido clave o acción externa.

### Estructura de los identificadores

Cada ítem usa el formato:

`BLG-F{fase}-S{sprint}-{consecutivo}`

Ejemplo:

`BLG-F1-S01-01`

### Criterio de priorización

* Los ítems que corrigen desalineación estratégica tienen prioridad sobre los de pulido visual.
* Los ítems que desbloquean otros entregables deben resolverse antes que los ítems dependientes.
* Los ítems manuales que bloquean trabajo técnico deben resolverse lo antes posible para evitar cuellos de botella.

---

## Fase 1 — Fundamento narrativo y estructura

### Sprint 01

#### BLG-F1-S01-01 — Consolidar inventario estratégico de proyectos
**Objetivo:** definir el conjunto oficial de proyectos que deben aparecer en la primera versión alineada del portfolio.  
**Descripción:** el sitio actual muestra proyectos, pero no coincide completamente con la selección prioritaria del roadmap. Este ítem establece el inventario de referencia para contenido, navegación y futuros casos de estudio.  
**Actividades:**
* Revisar la lista priorizada del roadmap y confirmar cuáles proyectos entran en la primera versión pública.
* Definir por cada proyecto: nombre público, estado, tipo de proyecto y qué capacidad demuestra.
* Marcar proyectos a retirar de la narrativa principal o pasar a segundo plano.
**Entregable esperado:** tabla consolidada de proyectos oficiales para el portfolio v1.  
**Dependencias:** roadmap actualizado y criterio estratégico vigente.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** la lista final debe coincidir con la narrativa consultiva del roadmap y no contradecir el contenido actual del sitio.

#### BLG-F1-S01-02 — Definir taxonomía de estados de proyecto
**Objetivo:** estandarizar cómo se clasifica cada proyecto dentro del portfolio.  
**Descripción:** la comunicación pública debe diferenciar análisis, desarrollo, MVP, prototipo y documentación arquitectónica para evitar ambigüedad o sobreventa.  
**Actividades:**
* Definir un catálogo corto de estados válidos.
* Asignar definición operativa a cada estado.
* Asociar cada estado con el tono narrativo que debe usar el portfolio.
**Entregable esperado:** taxonomía de estados con definiciones y reglas de uso.  
**Dependencias:** inventario estratégico de proyectos.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** cada proyecto debe poder clasificarse sin ambigüedad y sin requerir estados nuevos improvisados.

#### BLG-F1-S01-03 — Revisar la arquitectura de información actual frente al roadmap
**Objetivo:** identificar qué secciones actuales se conservan, ajustan o amplían.  
**Descripción:** el sitio ya tiene estructura base, pero necesita contrastarse contra el roadmap para decidir qué entra en el MVP real.  
**Actividades:**
* Comparar secciones actuales del sitio con la estructura mínima recomendada.
* Identificar vacíos: blog, casos de estudio, stack/capacidades, cierre de lanzamiento.
* Marcar secciones completas, parciales o ausentes.
**Entregable esperado:** matriz de correspondencia entre roadmap y estructura actual.  
**Dependencias:** revisión del repositorio y del roadmap.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** la matriz debe permitir justificar por qué cada fase del backlog existe.

### Sprint 02

#### BLG-F1-S02-01 — Formalizar mapa del sitio objetivo del MVP
**Objetivo:** definir la estructura pública objetivo del portfolio v1.  
**Descripción:** este ítem aterriza la navegación y las páginas finales que el MVP debe exponer, considerando lo ya construido y lo faltante.  
**Actividades:**
* Definir páginas obligatorias y secciones internas por página.
* Señalar qué irá como página independiente y qué irá como bloque dentro de otra página.
* Incluir rutas bilingües cuando aplique.
**Entregable esperado:** sitemap funcional del MVP.  
**Dependencias:** inventario de proyectos y matriz de correspondencia.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** el mapa debe cubrir identidad, proyectos, experiencia, blog, contacto y futuros casos de estudio.

#### BLG-F1-S02-02 — Definir criterio de priorización de contenido público
**Objetivo:** decidir qué contenido entra en v1, qué se posterga y qué se reserva para fases futuras.  
**Descripción:** evita inflar el alcance del MVP con piezas todavía inmaduras o innecesarias para el objetivo consultivo.  
**Actividades:**
* Clasificar contenido en crítico, importante y futuro.
* Marcar contenidos bloqueados por falta de información o madurez.
* Relacionar prioridades con los OKRs del roadmap.
**Entregable esperado:** matriz de priorización de contenido del MVP.  
**Dependencias:** sitemap funcional y backlog del roadmap.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** los contenidos críticos deben explicar claramente quién eres, qué haces, qué proyectos puedes construir y cómo contactarte.

#### BLG-F1-S02-03 — Definir backlog narrativo inicial
**Objetivo:** convertir la estrategia discursiva del portfolio en piezas concretas de contenido.  
**Descripción:** la narrativa del sitio debe pasar de intención general a unidades redactables: hero, capacidades, proyectos, autoridad técnica y contacto.  
**Actividades:**
* Listar piezas de copy pendientes por sección.
* Priorizar el copy que bloquea diseño o implementación.
* Definir qué piezas pueden prepararse técnicamente y cuáles requieren tu voz directa.
**Entregable esperado:** lista priorizada de piezas narrativas por sección.  
**Dependencias:** mapa del sitio y priorización de contenido.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** cada pieza narrativa debe quedar asociada a una página o sección concreta del MVP.

---

## Fase 2 — Página de inicio y mensaje profesional

### Sprint 03

#### BLG-F2-S03-01 — Refinar propuesta de valor principal de la home
**Objetivo:** consolidar un mensaje central más consultivo y menos genérico.  
**Descripción:** la home ya tiene una propuesta de valor funcional, pero este ítem busca afinarla para que conecte mejor con soluciones, sistemas y transformación organizacional.  
**Actividades:**
* Revisar el copy actual de hero, subtítulo y summary.
* Identificar términos vagos o demasiado amplios.
* Proponer una versión ajustada al enfoque consultivo del roadmap.
**Entregable esperado:** versión refinada del mensaje principal de la home.  
**Dependencias:** backlog narrativo inicial.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el copy debe responder con claridad quién eres, qué resuelves y por qué tu enfoque es sistémico.

#### BLG-F2-S03-02 — Definir bloque explícito de capacidades/servicios
**Objetivo:** hacer visible la relación entre tus capacidades y los problemas que puedes abordar.  
**Descripción:** el roadmap pide un bloque de servicios o capacidades; actualmente el sitio comunica enfoque, pero no una propuesta operacional claramente separada.  
**Actividades:**
* Definir catálogo inicial de capacidades o servicios.
* Relacionar cada capacidad con valor para cliente u organización.
* Proponer estructura de contenido para presentarlas sin sonar a lista de buzzwords.
**Entregable esperado:** definición funcional del bloque de capacidades/servicios.  
**Dependencias:** propuesta de valor refinada.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** las capacidades deben ser consistentes con proyectos, experiencia y formación.

#### BLG-F2-S03-03 — Definir criterio para la gráfica de araña o visual equivalente
**Objetivo:** decidir si se implementa una visualización comparativa de capacidades y cómo se justificaría.  
**Descripción:** el roadmap sugiere una gráfica de araña para explicar qué problemas sabes convertir en sistemas. Este ítem define si se mantiene esa idea o si conviene otro recurso más claro.  
**Actividades:**
* Evaluar utilidad comunicativa de la gráfica.
* Definir dimensiones, escalas y fuentes de información si se conserva.
* Definir alternativa si la visualización no aporta claridad suficiente.
**Entregable esperado:** decisión documentada sobre uso o descarte de la visualización.  
**Dependencias:** bloque de capacidades/servicios.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** la decisión debe priorizar comprensión real, no solo estética.

### Sprint 04

#### BLG-F2-S04-01 — Revisar coherencia narrativa entre portfolio, GitHub y LinkedIn
**Objetivo:** alinear identidad profesional en los principales puntos públicos de visibilidad.  
**Descripción:** el roadmap exige consistencia entre fuentes. El portfolio no debe prometer una cosa mientras los perfiles externos cuentan otra.  
**Actividades:**
* Comparar encabezados, enfoque profesional y selección de proyectos entre portfolio, GitHub y LinkedIn.
* Detectar contradicciones o enfoques fragmentados.
* Proponer lista concreta de ajustes por plataforma.
**Entregable esperado:** matriz de coherencia narrativa entre plataformas.  
**Dependencias:** propuesta de valor refinada.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** deben quedar claros los cambios que harías tú manualmente fuera del repo y los que puedo materializar en el sitio.

#### BLG-F2-S04-02 — Definir CTA principal y CTAs secundarios del MVP
**Objetivo:** estandarizar la intención de conversión del sitio.  
**Descripción:** el portfolio ya tiene acciones visibles, pero este ítem formaliza qué acción principal buscas provocar y cuáles son los caminos secundarios.  
**Actividades:**
* Definir CTA principal orientada a contacto u oportunidad.
* Definir CTAs secundarios para CV, proyectos o blog.
* Relacionar cada CTA con una intención de usuario.
**Entregable esperado:** catálogo de CTAs del MVP con jerarquía clara.  
**Dependencias:** revisión de coherencia narrativa.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** la acción principal del sitio debe quedar inequívoca.

#### BLG-F2-S04-03 — Consolidar especificación funcional de la home v1
**Objetivo:** dejar la página de inicio completamente especificada antes de futuros ajustes visuales o técnicos.  
**Descripción:** este ítem cierra la fase de identidad dejando definidas sus piezas, orden, intención y validación.  
**Actividades:**
* Enumerar secciones definitivas de la home.
* Definir propósito y contenido mínimo de cada sección.
* Relacionar cada sección con al menos un OKR del roadmap.
**Entregable esperado:** especificación funcional de la home v1.  
**Dependencias:** CTA principal y definición de capacidades.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** no deben quedar decisiones abiertas de contenido estructural para la home.

---

## Fase 3 — Casos de estudio iniciales

### Sprint 05

#### BLG-F3-S05-01 — Realinear el inventario visible de proyectos del sitio
**Objetivo:** sustituir o reorganizar los proyectos actuales para que el sitio refleje la estrategia definida.  
**Descripción:** antes de escribir casos de estudio, el listado visible debe mostrar la selección correcta de proyectos.  
**Actividades:**
* Mapear proyectos actuales vs proyectos priorizados.
* Definir qué proyectos salen, entran o cambian de prioridad.
* Definir metadatos mínimos por proyecto para exposición pública.
**Entregable esperado:** especificación del nuevo set de proyectos visibles.  
**Dependencias:** inventario estratégico y taxonomía de estados.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el set final debe apoyar el posicionamiento consultivo y no dispersarlo.

#### BLG-F3-S05-02 — Diseñar plantilla base de caso de estudio
**Objetivo:** crear una estructura estándar reutilizable para documentar proyectos con profundidad técnica.  
**Descripción:** sin una plantilla unificada, cada caso de estudio tenderá a quedar incompleto o inconsistente.  
**Actividades:**
* Definir secciones obligatorias del caso de estudio.
* Definir qué información es pública, qué es resumida y qué debe omitirse por sensibilidad o madurez.
* Definir longitud esperada por sección.
**Entregable esperado:** plantilla funcional de caso de estudio.  
**Dependencias:** especificación del nuevo set de proyectos.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** la plantilla debe permitir comparar proyectos distintos sin perder profundidad.

#### BLG-F3-S05-03 — Levantar información fuente para los primeros casos
**Objetivo:** reunir los insumos necesarios para completar los primeros casos de estudio.  
**Descripción:** este ítem organiza la captura de información faltante antes de redactar páginas finales.  
**Actividades:**
* Identificar por proyecto qué información ya existe y cuál falta.
* Definir preguntas de levantamiento para cada proyecto.
* Clasificar vacíos críticos vs vacíos tolerables para una primera publicación.
**Entregable esperado:** matriz de insumos por caso de estudio.  
**Dependencias:** plantilla base de caso de estudio.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** cada proyecto prioritario debe tener claro su nivel de completitud documental.

### Sprint 06

#### BLG-F3-S06-01 — Documentar el primer caso de estudio completo
**Objetivo:** producir una primera pieza de referencia que marque el estándar del resto.  
**Descripción:** el primer caso de estudio debe servir como patrón de calidad narrativa y técnica para los siguientes.  
**Actividades:**
* Seleccionar el proyecto más adecuado para el primer caso.
* Redactar el caso usando la plantilla base.
* Revisar consistencia entre narrativa, tecnologías, estado y próximos pasos.
**Entregable esperado:** primer caso de estudio completo y listo para implementación.  
**Dependencias:** matriz de insumos por caso.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el caso debe mostrar claramente tu forma de pensar, no solo describir tecnología.

#### BLG-F3-S06-02 — Definir backlog de los tres casos siguientes
**Objetivo:** preparar la continuidad de la fase sin depender de improvisación posterior.  
**Descripción:** tras el primer caso, los siguientes deben quedar secuenciados y con requisitos mínimos identificados.  
**Actividades:**
* Priorizar los siguientes tres casos de estudio.
* Definir nivel de madurez de cada uno.
* Marcar riesgos, faltantes y dependencias narrativas.
**Entregable esperado:** backlog de continuidad de casos de estudio.  
**Dependencias:** primer caso documentado.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** los próximos casos deben cubrir diversidad de capacidades, no repetirse entre sí.

#### BLG-F3-S06-03 — Definir criterios de publicación de proyectos en análisis
**Objetivo:** establecer cómo mostrar proyectos no terminados sin debilitar credibilidad.  
**Descripción:** el roadmap permite mostrar proyectos en evolución, pero exige honestidad sobre su estado real.  
**Actividades:**
* Definir criterios para publicar proyectos en análisis, desarrollo o prototipo.
* Definir disclaimers o etiquetas necesarias.
* Definir qué no debe mostrarse aún.
**Entregable esperado:** política editorial para proyectos en evolución.  
**Dependencias:** taxonomía de estados y backlog de continuidad de casos.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el resultado debe proteger credibilidad y claridad al mismo tiempo.

---

## Fase 4 — Blog integrado con Medium

### Sprint 07

#### BLG-F4-S07-01 — Definir decisión técnica de integración con Medium
**Objetivo:** cerrar la decisión entre enlace manual, RSS o estrategia híbrida.  
**Descripción:** la fase de blog depende de elegir un mecanismo estable y proporcional al alcance del MVP.  
**Actividades:**
* Revisar ventajas y costos de las alternativas planteadas en el roadmap.
* Determinar qué datos necesita el sitio para mostrar publicaciones.
* Decidir si la integración será manual, por feed o híbrida.
**Entregable esperado:** decisión técnica documentada para integración con Medium.  
**Dependencias:** backlog narrativo inicial y priorización de contenido.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** la solución elegida debe ser mantenible y suficiente para el MVP.

#### BLG-F4-S07-02 — Definir arquitectura de información de la sección blog
**Objetivo:** especificar cómo se organiza el blog dentro del portfolio.  
**Descripción:** el blog no debe ser un añadido aislado; debe integrarse al posicionamiento general del sitio.  
**Actividades:**
* Definir si habrá página índice, bloque destacado en home o ambos.
* Definir categorías, etiquetas y estructura visual mínima.
* Definir qué contenido vive en el portfolio y qué contenido solo enlaza a Medium.
**Entregable esperado:** especificación funcional del blog v1.  
**Dependencias:** decisión técnica de integración.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** la arquitectura debe reforzar autoridad profesional y no duplicar complejidad innecesaria.

#### BLG-F4-S07-03 — Definir backlog editorial inicial del blog
**Objetivo:** seleccionar y ordenar los primeros artículos que deben alimentar la autoridad técnica del portfolio.  
**Descripción:** antes de implementar la sección, debe quedar claro qué contenido se espera mostrar y por qué.  
**Actividades:**
* Priorizar los primeros tres artículos base.
* Asignar categoría y propósito estratégico a cada uno.
* Distinguir artículos que puedes escribir tú manualmente de piezas que puedo ayudarte a estructurar.
**Entregable esperado:** backlog editorial inicial del blog.  
**Dependencias:** especificación funcional del blog.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** cada artículo debe reforzar al menos una línea de posicionamiento del roadmap.

### Sprint 08

#### BLG-F4-S08-01 — Especificar listados, tarjetas y enlaces del blog
**Objetivo:** dejar completamente definida la capa funcional de exposición del contenido.  
**Descripción:** este ítem describe cómo deben verse y comportarse los elementos principales de la sección blog.  
**Actividades:**
* Definir datos mínimos por artículo.
* Definir comportamiento de enlaces a Medium.
* Definir criterios de orden, visibilidad y destaque.
**Entregable esperado:** especificación de componentes funcionales del blog.  
**Dependencias:** arquitectura de información del blog.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** los componentes deben permitir crecimiento futuro sin rediseño conceptual total.

#### BLG-F4-S08-02 — Preparar primer contenido destacado del blog
**Objetivo:** asegurar que la futura sección no salga vacía.  
**Descripción:** la implementación del blog debe acompañarse de al menos una pieza o placeholder editorial con suficiente valor.  
**Actividades:**
* Seleccionar el primer artículo a destacar.
* Definir título, resumen, categoría y llamado a lectura.
* Preparar versión resumida para exposición en el portfolio.
**Entregable esperado:** ficha del primer contenido destacado del blog.  
**Dependencias:** backlog editorial inicial.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el contenido debe verse coherente con el perfil consultivo, no como publicación casual.

#### BLG-F4-S08-03 — Definir criterios de calidad y mantenimiento del blog
**Objetivo:** evitar que la sección blog se vuelva estática, vacía o inconsistente.  
**Descripción:** se necesita una política mínima de actualización y curaduría editorial.  
**Actividades:**
* Definir cuándo agregar nuevos artículos.
* Definir reglas de categorización.
* Definir criterio para retirar, ocultar o destacar publicaciones.
**Entregable esperado:** política mínima de mantenimiento del blog.  
**Dependencias:** componentes funcionales del blog.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el mantenimiento debe ser realista para un ritmo de trabajo de fin de semana.

---

## Fase 5 — Pulido técnico y confianza

### Sprint 09

#### BLG-F5-S09-01 — Definir backlog de confianza técnica del MVP
**Objetivo:** consolidar todos los pendientes técnicos de cierre que afectan percepción profesional.  
**Descripción:** esta fase agrupa piezas que no son el núcleo narrativo, pero sí son necesarias para un producto serio y enviable.  
**Actividades:**
* Consolidar pendientes: analytics, 404, footer, enlaces, SEO complementario, revisión de accesibilidad.
* Priorizar por impacto y dependencia.
* Señalar cuáles pueden resolverse solo con código y cuáles requieren acciones externas.
**Entregable esperado:** backlog priorizado de confianza técnica.  
**Dependencias:** estado real del proyecto y roadmap.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** la lista debe cubrir todo lo necesario para que el sitio se perciba como producto cuidado.

#### BLG-F5-S09-02 — Definir requerimientos de analytics e instrumentación mínima
**Objetivo:** establecer qué medir y con qué nivel de complejidad.  
**Descripción:** no basta con “tener analytics”; debe quedar definido qué señales importan para este portfolio.  
**Actividades:**
* Definir eventos o métricas mínimas: visitas, clics en CV, clics de contacto, clics a proyectos.
* Evaluar si la implementación depende de una cuenta externa.
* Definir criterio de privacidad y simplicidad para el MVP.
**Entregable esperado:** especificación mínima de analytics del portfolio.  
**Dependencias:** backlog de confianza técnica.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** la medición debe responder al objetivo consultivo del sitio y no ser una integración arbitraria.

#### BLG-F5-S09-03 — Definir contenido y función del footer profesional
**Objetivo:** especificar el footer como pieza de cierre informativo y de confianza.  
**Descripción:** el footer debe apoyar navegación, identidad y contacto sin redundancia.  
**Actividades:**
* Definir elementos mínimos del footer.
* Determinar si incluirá navegación secundaria, datos de contacto, derechos, o enlaces estratégicos.
* Relacionar el footer con accesibilidad y cierre visual.
**Entregable esperado:** especificación funcional del footer.  
**Dependencias:** sitemap funcional del MVP.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** el footer no debe ser un relleno decorativo; debe tener una función real.

### Sprint 10

#### BLG-F5-S10-01 — Definir requisitos de página 404 y manejo de rutas inexistentes
**Objetivo:** asegurar una experiencia coherente cuando el usuario llegue a una ruta inválida.  
**Descripción:** una 404 dedicada contribuye a percepción de profesionalismo y evita rupturas de experiencia.  
**Actividades:**
* Definir mensaje, CTA y enlaces de recuperación.
* Definir tono visual coherente con el sitio.
* Determinar si debe incluir acceso rápido a home, proyectos o contacto.
**Entregable esperado:** especificación funcional de la 404.  
**Dependencias:** backlog de confianza técnica.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** el usuario debe poder recuperarse fácilmente sin perder contexto.

#### BLG-F5-S10-02 — Definir backlog de SEO complementario y validación de metadatos
**Objetivo:** completar los elementos SEO que no quedaron cubiertos por la base actual.  
**Descripción:** el sitio ya tiene metadata básica, pero esta tarea busca revisar consistencia, cobertura y calidad.  
**Actividades:**
* Revisar títulos y descripciones por página.
* Definir si hacen falta metadatos adicionales.
* Incluir validación de enlaces sociales y CV.
**Entregable esperado:** checklist SEO complementario del MVP.  
**Dependencias:** backlog de confianza técnica.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** no debe introducir complejidad desproporcionada para un sitio estático personal.

#### BLG-F5-S10-03 — Definir checklist de revisión pre-lanzamiento
**Objetivo:** dejar un protocolo corto y repetible para revisar calidad antes de publicar cambios importantes.  
**Descripción:** sirve como filtro antes de cierre de MVP y futuras iteraciones.  
**Actividades:**
* Definir pruebas funcionales mínimas.
* Definir validaciones de contenido, navegación, enlaces y descargas.
* Definir responsable por cada validación cuando aplique.
**Entregable esperado:** checklist de revisión pre-lanzamiento.  
**Dependencias:** especificaciones de analytics, footer y 404.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** el checklist debe ser corto, realista y ejecutable en una sesión de revisión.

---

## Fase 6 — Lanzamiento y validación

### Sprint 11

#### BLG-F6-S11-01 — Definir requerimientos de publicación y dominio
**Objetivo:** aterrizar qué falta para considerar el portfolio verdaderamente publicado y presentable.  
**Descripción:** el sitio compila y puede desplegarse, pero deben aclararse las tareas manuales y mixtas ligadas a dominio, entorno público y presentación final.  
**Actividades:**
* Definir si habrá dominio propio o subdominio.
* Identificar proveedor, costos y pasos manuales de compra/configuración.
* Diferenciar tareas de despliegue técnico vs tareas de contratación o acceso.
**Entregable esperado:** plan de publicación y dominio del MVP.  
**Dependencias:** backlog de confianza técnica y checklist pre-lanzamiento.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** debe quedar explícito qué parte depende enteramente de ti.

#### BLG-F6-S11-02 — Definir protocolo de revisión externa
**Objetivo:** estructurar la validación con terceros como actividad de ingeniería y no como retroalimentación informal aislada.  
**Descripción:** el roadmap pide validación con distintos perfiles; aquí se formaliza esa actividad.  
**Actividades:**
* Seleccionar perfiles de revisión.
* Definir preguntas o guion de evaluación.
* Definir cómo registrar hallazgos y decisiones derivadas.
**Entregable esperado:** protocolo de validación externa del portfolio.  
**Dependencias:** checklist pre-lanzamiento y home consolidada.  
**Tipo de ejecución:** Mixto  
**Notas de validación:** el protocolo debe producir hallazgos accionables, no opiniones dispersas.

#### BLG-F6-S11-03 — Definir backlog de ajustes post-validación
**Objetivo:** preparar la forma en que se absorberán observaciones sin perder control de alcance.  
**Descripción:** después de revisión externa, el equipo debe saber cómo clasificar y priorizar cambios.  
**Actividades:**
* Definir categorías de hallazgos: crítico, importante, opcional.
* Definir criterio de aceptación o descarte.
* Definir cómo registrar ajustes para una iteración posterior.
**Entregable esperado:** criterio de gestión de feedback post-validación.  
**Dependencias:** protocolo de validación externa.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** los cambios sugeridos no deben romper la estrategia definida por el roadmap.

### Sprint 12

#### BLG-F6-S12-01 — Definir criterio formal de cierre del MVP
**Objetivo:** establecer cuándo el portfolio puede considerarse terminado en su primera versión útil.  
**Descripción:** el cierre del MVP no debe depender de intuición; debe relacionarse con criterios observables.  
**Actividades:**
* Reescribir los criterios de cierre en forma verificable.
* Relacionarlos con los OKRs y la evaluación actual del roadmap.
* Diferenciar cierre funcional de cierre estratégico ideal.
**Entregable esperado:** criterio formal de cierre del MVP.  
**Dependencias:** protocolo de validación y backlog de ajustes post-validación.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** el criterio debe ser lo bastante exigente para dar confianza, pero no tan amplio que bloquee indefinidamente el lanzamiento.

#### BLG-F6-S12-02 — Consolidar backlog de continuidad posterior al MVP
**Objetivo:** separar claramente lo que pertenece al MVP de lo que se moverá a una iteración posterior.  
**Descripción:** evita que el portfolio siga creciendo sin cierre por acumulación de ideas.  
**Actividades:**
* Mover a continuidad las ideas no críticas para v1.
* Ordenar próximos incrementos: newsletter, sistema propio de artículos, páginas específicas de consultoría o productos.
* Mantener trazabilidad con el roadmap original.
**Entregable esperado:** backlog post-MVP priorizado.  
**Dependencias:** criterio formal de cierre del MVP.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** la continuidad debe quedar desacoplada del cierre del MVP.

#### BLG-F6-S12-03 — Emitir resumen ejecutivo de estado y siguiente iteración
**Objetivo:** dejar una pieza de cierre que resuma qué se logró, qué quedó pendiente y cuál es la siguiente ruta.  
**Descripción:** este resumen sirve como puente entre el MVP y la siguiente etapa del portfolio.  
**Actividades:**
* Consolidar estado de cumplimiento por fase y por objetivo.
* Resumir dependencias externas aún abiertas.
* Proponer la siguiente línea de trabajo dominante.
**Entregable esperado:** resumen ejecutivo de cierre de iteración.  
**Dependencias:** backlog post-MVP y criterio formal de cierre.  
**Tipo de ejecución:** Codex con supervisión  
**Notas de validación:** debe poder leerse como documento de gestión, no solo como nota técnica.

---

## Priorización ejecutiva

### Prioridad inmediata

* Consolidar inventario estratégico de proyectos.
* Definir taxonomía de estados.
* Formalizar mapa del sitio objetivo del MVP.
* Refinar propuesta de valor y capacidades.
* Realinear el inventario visible de proyectos.
* Diseñar la plantilla base del primer caso de estudio.

### Prioridad siguiente

* Definir decisión técnica de integración con Medium.
* Especificar arquitectura de información del blog.
* Preparar backlog editorial inicial.
* Definir backlog de confianza técnica del MVP.
* Especificar analytics, footer y 404.

### Dependencias externas

* Compra y configuración de dominio o subdominio.
* Accesos o cuentas necesarias para Medium y analytics, si aplican.
* Validación externa con revisores reales.
* Ajustes de narrativa en GitHub y LinkedIn fuera del repositorio.

### Trabajo bloqueado por decisiones manuales

* Integración final con Medium si depende de confirmar usuario, feed o estrategia editorial.
* Publicación con dominio propio.
* Redacción final de artículos de voz personal.
* Validación externa y registro de resultados.

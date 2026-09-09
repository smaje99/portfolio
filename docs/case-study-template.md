# Plantilla base de caso de estudio

**Work item:** `BLG-F3-S05-02`
**Estado:** plantilla editorial aprobada; los casos concretos requieren
levantamiento manual de información.
**Visibilidad:** esta plantilla no crea una ruta pública ni una colección CMS.

## Propósito

Usar esta estructura para convertir un proyecto en una pieza técnica profunda,
comparable y publicable sin presentar como hecho lo que todavía es una hipótesis,
una contribución parcial o información confidencial. El texto se redacta primero
en español y se adapta al inglés después de validar alcance, estado y límites.

La plantilla sirve como contrato editorial previo a cualquier implementación en
Astro o Keystatic. No obliga a publicar todos los campos: una sección puede
omitirse cuando no exista evidencia suficiente, pero debe registrarse la razón
en la ficha de insumos del caso.

## Ficha de control

Completar antes de redactar el cuerpo:

| Campo | Valor | Regla |
| --- | --- | --- |
| Proyecto | `<!-- slug o nombre interno -->` | Debe corresponder al inventario estratégico. |
| Locale | `es` / `en` | Español primero; inglés después de validar ES. |
| Estado editorial | `draft` / `scheduled` / `published` / `archived` | Sigue la política de `docs/cms-editorial-policy.md` si se migra al CMS. |
| Estado del proyecto | `analysis` / `prototype` / `in-development` / `mvp` / `operational` / `architectural-documentation` | Reutilizar la taxonomía canónica; no crear variantes. |
| Visibilidad | `public` / `summary-only` / `private` | La información privada nunca se incluye en el texto público. |
| Responsable de revisión | Sergio Majé | Editor y revisor único en el flujo actual. |
| Evidencia revisada | `<!-- fuentes, commits, CV, documentación o validación manual -->` | Cada afirmación sustantiva debe tener una fuente. |

## Estructura obligatoria

### 1. Resumen ejecutivo

En 2–4 frases, explicar qué es el proyecto, qué problema aborda, cuál fue la
contribución real y en qué estado se encuentra. No usar resultados, métricas o
lenguaje de operación si no hay evidencia publicada.

### 2. Contexto y problema

Describir el contexto necesario para entender el proyecto sin revelar nombres
de clientes, instituciones, usuarios, documentos, datos clínicos, comerciales o
identificadores internos que no tengan autorización de publicación.

Responder:

- ¿Qué necesidad o proceso motivó el trabajo?
- ¿Qué limitación existía antes de la solución?
- ¿Qué parte del problema quedó dentro y fuera del alcance?

### 3. Objetivo y alcance

Separar el objetivo del proyecto de la contribución personal. Registrar:

- objetivo verificable;
- funcionalidades o entregables incluidos;
- elementos explícitamente fuera de alcance;
- supuestos y restricciones relevantes.

### 4. Contribución personal

Usar verbos precisos: `contribuí`, `implementé`, `propuse`, `documenté`,
`participé` o `apoyé`. Indicar colaboración, supervisión y límites de autoría.
No convertir participación parcial en propiedad integral, liderazgo técnico o
responsabilidad sobre resultados no demostrados.

### 5. Decisiones de solución

Explicar las decisiones que ayuden a comprender el razonamiento técnico:

- decisiones de modelado y estructura de información;
- decisiones de arquitectura o integración;
- decisiones de desarrollo, validación y operación;
- alternativas consideradas y motivo de descarte, si es publicable.

Cada decisión debe distinguir hecho observado, criterio utilizado y resultado
conocido. Si el resultado todavía no está medido, declararlo como pendiente.

### 6. Arquitectura y flujo

Describir únicamente los componentes y flujos que puedan publicarse. Se puede
usar una lista o diagrama futuro, pero el caso debe seguir siendo comprensible
sin una imagen.

Incluir, cuando aplique:

- entrada y salida principal del flujo;
- componentes o módulos relevantes;
- persistencia e integración de datos;
- validaciones, límites y dependencias;
- separación entre implementación actual y evolución prevista.

### 7. Implementación y evidencia

Relacionar la narrativa con evidencia concreta:

| Afirmación | Evidencia | Madurez | Publicable |
| --- | --- | --- | --- |
| `<!-- afirmación -->` | `<!-- fuente verificable -->` | `aplicada` / `contextual` / `pendiente` | `sí` / `resumida` / `no` |

No incluir secretos, tokens, URLs internas, datos personales, documentos
reales, capturas no autorizadas ni fragmentos de código con información
confidencial.

### 8. Estado actual y próximos pasos

Usar el estado canónico del inventario y explicar qué significa en este caso.
Separar claramente:

- lo construido o validado;
- lo que está en desarrollo;
- lo que se propone como siguiente paso;
- lo que no debe presentarse todavía como resultado.

### 9. Aprendizajes

Registrar 2–4 aprendizajes técnicos o de proceso que puedan sostenerse con la
experiencia del proyecto. Deben mostrar criterio transferible, no una lista de
tecnologías ni una promesa de especialización.

### 10. Límites de publicación

Antes de solicitar revisión, confirmar que el caso:

- no expone información sensible o propietaria;
- no atribuye resultados sin medición o validación;
- no aumenta el nivel de responsabilidad en la versión inglesa;
- no presenta un prototipo, análisis o contribución parcial como producto
  operativo;
- conserva el mismo estado, alcance y madurez en ES y EN.

## Longitud orientativa

| Sección | Extensión sugerida |
| --- | --- |
| Resumen ejecutivo | 80–150 palabras |
| Contexto y problema | 150–300 palabras |
| Objetivo y alcance | 100–200 palabras |
| Contribución personal | 150–300 palabras |
| Decisiones de solución | 250–500 palabras |
| Arquitectura y flujo | 200–450 palabras |
| Implementación y evidencia | 200–400 palabras |
| Estado y próximos pasos | 100–200 palabras |
| Aprendizajes | 100–250 palabras |

Estas cantidades orientan la profundidad; no justifican rellenar una sección sin
fuentes ni convertir un caso breve en una descripción exhaustiva.

## Checklist de publicación

- [ ] El proyecto existe en el inventario y tiene estado canónico.
- [ ] La contribución personal está separada de la del equipo.
- [ ] Cada afirmación importante tiene fuente o validación manual registrada.
- [ ] El alcance y el estado coinciden con la tarjeta pública del proyecto.
- [ ] Se eliminaron datos sensibles, secretos y contexto no autorizado.
- [ ] El resumen no promete resultados, operación o seniority no demostrados.
- [ ] La versión ES fue revisada antes de adaptar EN.
- [ ] ES y EN conservan el mismo significado, alcance, responsabilidad y madurez.
- [ ] El estado editorial está definido y la ruta draft, si aplica, usa un
      `draftSlug` largo, único y no confidencial.
- [ ] `pnpm cms:check` y `pnpm build` pasan antes de publicar.

## Relación con los siguientes WIs

Esta plantilla cierra la estructura de `BLG-F3-S05-02`. No cierra la captura de
fuentes de `BLG-F3-S05-03`, la selección del primer caso de `BLG-F3-S06-01` ni
la publicación de una ruta de detalle. Esos pasos requieren información y
validación manual del proyecto correspondiente.

# Especificación del footer profesional

## Objetivo

Cerrar cada página con una pieza útil de identidad, navegación y contacto. El footer debe reforzar la confianza técnica sin competir con el contenido principal ni introducir una nueva arquitectura de información.

## Estructura funcional

1. **Identidad:** marca/nombre de Sergio, enlace a la home localizada y una descripción breve tomada del copy principal.
2. **Navegación:** reutilización de la navegación existente, con las mismas rutas ES/EN que el header. Se conserva el enlace al blog sin añadir contenido ni cambiar su integración.
3. **Contacto:** LinkedIn, GitHub y correo electrónico; los perfiles externos se abren en una pestaña nueva con `rel="noopener noreferrer"`.
4. **CV:** enlace de descarga al PDF correspondiente al locale activo (`.es.pdf` o `.en.pdf`).
5. **Cierre:** copyright y referencia visual bilingüe ES · EN.

## Paridad ES/EN

La estructura, orden, enlaces y comportamiento son iguales en ambos idiomas. Solo cambian las etiquetas y la descripción localizada. La navegación y la ruta del CV se calculan con el locale activo; no se crean rutas nuevas.

## Contrato técnico

- El componente vive en `src/components/Footer.astro`.
- `src/layouts/Layout.astro` lo renderiza después del contenido principal, por lo que cubre home, páginas informativas, catálogo y fichas de proyecto.
- Las etiquetas viven en `src/i18n/site.ts`.
- Las URLs personales y el helper de CV también viven en `src/i18n/site.ts` para compartir fuente con el hero y la sección de formación.
- El componente no carga scripts, imágenes remotas ni proveedores externos; solo usa el asset local de marca y enlaces explícitos.

## Accesibilidad y responsive

- El footer usa el landmark nativo `<footer>` y una navegación `<nav>` con nombre accesible.
- El logo es decorativo (`alt=""`, `aria-hidden="true"`); los enlaces tienen texto visible y nombres comprensibles.
- Todos los enlaces son operables con teclado, tienen foco visible y objetivos táctiles de tamaño cómodo.
- El diseño pasa de tres columnas a una composición de dos columnas en pantallas pequeñas sin ocultar contenido.
- Los estados `hover` y `focus-visible` usan tokens semánticos y no dependen únicamente del color.
- Las transiciones se desactivan para `prefers-reduced-motion: reduce`.
- El texto mantiene contraste con el fondo oscuro y el CV sigue siendo accesible como descarga directa.

## Criterios de aceptación

- El footer aparece en todas las páginas públicas ES/EN y en las fichas de proyecto.
- La navegación conserva exactamente las rutas existentes, incluido el enlace al blog.
- LinkedIn, GitHub, correo y ambos PDFs resuelven a sus destinos esperados.
- El teclado puede recorrer identidad, navegación, contacto y CV en orden lógico.
- El footer no añade analytics, cookies, scripts ni llamadas externas automáticas.

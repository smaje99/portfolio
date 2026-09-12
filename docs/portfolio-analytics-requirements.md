# Requerimientos de analytics del portfolio

## Decisión vigente

Analytics no está implementado en el portfolio. Esta es una decisión explícita del Sprint 09: el sitio no necesita todavía un proveedor de medición para cumplir su objetivo consultivo y se priorizan simplicidad, privacidad y ausencia de dependencias externas.

No se añadieron scripts de analytics, píxeles, cookies de medición, variables de entorno, SDKs ni llamadas externas automáticas. Los enlaces a LinkedIn, GitHub, correo, CV y proyectos son navegación iniciada por la persona usuaria; no constituyen instrumentación de analytics.

## Métricas futuras mínimas

Si la decisión se reabre, el primer alcance debe limitarse a:

- visitas a páginas públicas;
- clics en la descarga del CV localizado;
- clics de contacto, diferenciando correo y perfiles profesionales;
- clics hacia proyectos y, cuando aplique, sus repositorios o demos públicas.

La medición debe responder a preguntas concretas de alcance y comunicación del portfolio. No se requiere un embudo comercial complejo ni seguimiento individual de navegación.

## Condiciones para activar un proveedor

Antes de implementar cualquier proveedor deben quedar resueltos, fuera del código o junto con la implementación correspondiente:

1. Selección de un proveedor proporcional a un sitio estático pequeño y revisión de sus condiciones de privacidad y tratamiento de datos.
2. Definición de si la medición es estrictamente necesaria o si requiere consentimiento previo en las jurisdicciones aplicables.
3. Aviso de privacidad y, si corresponde, banner o mecanismo de consentimiento sin bloqueo de navegación esencial.
4. No enviar nombres, correos, contenido de formularios ni identificadores innecesarios; minimizar IP, retención y datos de dispositivo.
5. Variables de entorno y configuración fuera del repositorio cuando el proveedor lo requiera, sin publicar claves secretas.
6. Pruebas de que el proveedor no rompe el build estático, rendimiento, navegación, foco ni el comportamiento con `prefers-reduced-motion`.
7. Documentación de los eventos, retención, responsable de revisión y procedimiento para desactivar la medición.

## Criterio de reapertura

El tema puede volver al backlog cuando exista una pregunta de negocio o comunicación que no pueda responderse con revisión cualitativa, cuando el sitio tenga tráfico suficiente para justificarlo o cuando se defina una necesidad de lanzamiento que lo requiera. La activación futura debe ser una decisión nueva, no una consecuencia implícita de este documento.

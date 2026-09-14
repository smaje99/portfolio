# Estrategia de contacto del portfolio

**Fecha:** 2026-09-13
**Estado:** vigente para la home bilingüe y la transición operativa de Henko.

## Propósito

`#contact` es una entrada clara a tres conversaciones distintas. La identidad personal de Sergio sigue siendo el punto de contacto principal; Henko funciona como identidad comercial para consultoría, sin mezclar oportunidades personales, conversaciones comerciales y colaboraciones técnicas.

| Intención | Canal principal | Canal secundario | Asunto sugerido |
| --- | --- | --- | --- |
| Oportunidades laborales o incorporación técnica | LinkedIn personal | Correo personal | `[Oportunidad] Conversación profesional` |
| Consultoría o necesidades organizacionales | Correo personal durante la transición | Sitio y LinkedIn de Henko | `[Consultoría] Posible solución para [organización]` |
| Colaboraciones técnicas, educativas u open source | GitHub o LinkedIn | Correo personal | `[Colaboración] Propuesta sobre [tema]` |

## Política de implementación

- `Hablemos` sigue siendo el CTA principal del hero y lleva a `#contact` en español y `/en/#contact` en inglés.
- La interfaz ofrece tres bloques localizados: Oportunidades, Consultoría y Colaboraciones.
- No se añade formulario ni backend. El flujo permanece estático, privado y sin analytics.
- `smajefranco@gmail.com` es el canal operativo hasta verificar el correo profesional de Henko.
- Henko se presenta como identidad comercial para consultoría, pero no se publica una dirección de correo de Henko antes de configurar Zoho Mail.
- Los enlaces externos se abren en una pestaña nueva con `noopener noreferrer`; los enlaces de correo usan asuntos codificados y no incluyen tracking ni datos sensibles.

## Información esperada

Cuando corresponda, cada contacto debe aportar:

- persona u organización;
- contexto y problema;
- objetivo esperado;
- alcance aproximado;
- plazo;
- enlaces relevantes.

La ausencia de alguno de estos datos no bloquea una primera conversación, pero sí debe resolverse antes de estimar una solución, colaboración o alcance de trabajo.

## Estado de canales y lanzamiento

- La auditoría propia de perfiles, proyectos y canales externos está completada en [`external-profile-copy.md`](./external-profile-copy.md).
- El dominio `henkoconsulting.com.co` está comprado.
- Siguen pendientes la provisión del VPS, la configuración de DNS en Cloudflare, Caddy, Zoho Mail y la publicación efectiva del entorno público.
- La revisión de terceros y el registro de sus observaciones son el único pendiente de validación humana posterior de esta iteración.

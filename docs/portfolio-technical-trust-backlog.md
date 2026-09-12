# Backlog de confianza técnica del portfolio

## Propósito

Este documento concentra los pendientes técnicos que influyen en la percepción de un portfolio profesional sin ampliar el alcance narrativo del sitio. El blog permanece fuera de este sprint; las páginas y rutas de blog existentes no se modifican.

## Priorización

| Prioridad | Pendiente | Dependencia | Responsable | Tipo | Estado |
|---|---|---|---|---|---|
| P0 | Footer global bilingüe | Navegación y contratos de locale actuales | Codex con supervisión | Código | Cerrado en Sprint 09 |
| P0 | Revisión de enlaces, CV y accesibilidad del footer | Footer integrado en `Layout.astro` | Codex con supervisión | Código | Cerrado en Sprint 09 |
| P1 | Decidir si conviene analytics | Criterio de privacidad y proveedor | Sergio | Decisión externa/manual | Cerrado: no implementar ahora |
| P1 | Página 404 y recuperación de rutas | Footer y navegación estable | Codex con supervisión | Código | Diferido a Sprint 10 |
| P1 | SEO complementario y revisión de metadatos | Inventario final de rutas públicas | Codex con supervisión | Código | Diferido a Sprint 10 |
| P2 | Validación externa del portfolio | Sitio publicado y revisores disponibles | Sergio | Externo/manual | Pendiente |
| P2 | Publicación con dominio propio | Provisión de dominio, VPS, DNS y correo | Sergio | Externo/manual | Pendiente |

## Trabajo de código

1. Mantener el footer en `src/components/Footer.astro`, montado desde `src/layouts/Layout.astro` para cubrir las páginas públicas ES/EN y las fichas de proyecto.
2. Mantener la navegación del footer derivada del mismo contrato que usa el header. Esto incluye el enlace existente al blog, pero no crea ni cambia contenido, rutas o integración con Medium.
3. Mantener las URLs personales y la ruta del CV en `src/i18n/site.ts`, evitando copias divergentes entre hero, trayectoria y footer.
4. Validar enlaces externos, correo y PDFs localizados con `pnpm cms:check`, `pnpm lint`, `pnpm build` y `git diff --check`.
5. Resolver en Sprint 10 la 404, SEO complementario y el checklist pre-lanzamiento definido por el backlog general.

## Acciones externas o manuales

- Confirmar públicamente los enlaces personales cuando se haga la revisión de lanzamiento.
- Comprar/provisionar dominio, DNS, VPS, Caddy, backups y correo según `BLG-F6-S11-01`; nada de esto se automatiza desde este repositorio.
- Organizar una revisión con terceros y registrar hallazgos antes de considerar cerrado el lanzamiento.
- Si en el futuro se activa analytics, crear la cuenta del proveedor, revisar sus condiciones de tratamiento de datos y ejecutar la activación con consentimiento y documentación de privacidad.

## Fuera de alcance de Sprint 09

- Página 404.
- SEO complementario.
- Implementación de analytics, cookies, scripts de medición o llamadas de tracking.
- Cambios en el blog, Medium, Keystatic o contenido editorial.
- Despliegue público y compra de servicios externos.

## Criterio de salida

El sprint se considera cerrado cuando el footer bilingüe aparece en las rutas públicas y fichas de proyecto, los enlaces y descargas funcionan, la navegación no cambia sus rutas, el sitio conserva su accesibilidad básica y la decisión sobre analytics queda documentada como una no implementación explícita.

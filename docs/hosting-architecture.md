# Arquitectura de hosting recomendada

La decisión de compra y provisión es manual y queda fuera del repositorio.

## Opción recomendada

Un VPS de Hetzner Cloud con Docker y Caddy permite servir este portfolio y
futuros proyectos en contenedores separados, manteniendo una sola máquina
operativa. El sitio Astro puede publicarse como artefacto estático detrás de
Caddy; otros proyectos pueden usar sus propios servicios y redes internas.

La referencia inicial es un modelo pequeño como CX23. Verifica la tarifa vigente
antes de contratar en la [documentación de precios de Hetzner](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/).

## Dominio y DNS

Se recomienda revisar primero Cloudflare Registrar para un `.com.co` disponible:
centraliza registrador, DNS, HTTPS, proxy y protección básica sin margen de
registro según su [FAQ de Registrar](https://developers.cloudflare.com/registrar/faq/).
Porkbun queda como alternativa si el TLD deseado no está disponible; consulta
su [catálogo de precios](https://porkbun.com/products/domains/) antes de comprar.

El nombre exacto del dominio, la compra, las cuentas y la provisión no se
automatizan desde este repositorio.

## Operación mínima del VPS

- Docker Compose para separar el portfolio de los futuros proyectos.
- Caddy como reverse proxy y terminación TLS automática.
- Firewall con solo SSH restringido y los puertos HTTP/HTTPS públicos.
- Backups del VPS y de los volúmenes fuera de la máquina.
- Subdominios separados, por ejemplo `www`, `app` y `staging`, sin mezclar
  credenciales ni redes internas.
- Variables y secretos únicamente en el entorno del despliegue, nunca en Git.

## Despliegue

El contrato actual es `main → build/deploy → verificación pública`. La
automatización futura puede usar GitHub Actions para construir y desplegar al
VPS, pero GitHub Mode de Keystatic no se activa por ello: el CMS sigue siendo
local y el servidor solo recibe el artefacto desplegado.

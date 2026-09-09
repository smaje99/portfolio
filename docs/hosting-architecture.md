# Arquitectura de hosting recomendada

La decisión de compra y provisión es manual y queda fuera del repositorio.

## Opción recomendada

Se utilizará un VPS Hostinger KVM 2 en Brasil con Docker y Caddy. Este plan
ofrece 2 vCPU, 8 GB de RAM, 100 GB NVMe y 8 TB de transferencia según la
[página de VPS de Hostinger](https://www.hostinger.com/vps-hosting). La ubicación
en Brasil prioriza la latencia para visitantes de Colombia y permite alojar el
portfolio y futuros proyectos en contenedores separados.

El sitio Astro se publicará como artefacto estático detrás de Caddy; otros
proyectos pueden usar sus propios servicios y redes internas. La tarifa
promocional, el plazo de contratación, la renovación y los impuestos deben
confirmarse en el checkout antes de comprar. El VPS seguirá siendo
administrado por nosotros: sistema operativo, Docker, Caddy, actualizaciones,
firewall y secretos.

Hetzner queda como alternativa futura si aparece capacidad cost-optimized
disponible o si cambian las necesidades de infraestructura.

## Dominio y DNS

El dominio `smaje.com.co` se comprará en Cloudflare Registrar por el precio
confirmado manualmente de aproximadamente USD 15, sujeto a disponibilidad,
renovación e impuestos. Cloudflare centraliza registrador, DNS, HTTPS, proxy y
protección básica sin margen de registro según su
[FAQ de Registrar](https://developers.cloudflare.com/registrar/faq/).
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

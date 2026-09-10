# Arquitectura de hosting recomendada

La decisión de compra, registro de dominios y provisión es manual y queda
fuera del repositorio.

## Opción recomendada

Se utilizará un **Contabo Cloud VPS 4 Core en USA-East**, con Ubuntu 24.04 LTS,
Docker Compose y Caddy. La ficha del portafolio oficial de Contabo identifica
para este producto:

- 4 vCPU.
- 8 GB de RAM.
- 100 GB SSD.
- Puerto de 200 Mbit/s.
- 1 snapshot.

La [documentación del portafolio de Contabo](https://help.contabo.com/en/support/solutions/articles/103000408463-can-i-get-more-information-about-contabo-s-server-portfolio-)
debe usarse para confirmar la variante contratada. En particular, Cloud VPS 4
Core no debe confundirse con Cloud VPS Plus 4, que ofrece NVMe y una capacidad
de red distinta.

Cloud VPS 4 es suficiente para el portfolio estático y los servicios iniciales
de Henko mientras las bases de datos sean pequeñas o moderadas, las
automatizaciones no sean intensivas y no se alojen modelos de IA localmente.
Si el uso de disco, las bases de datos o los procesos de CI/CD crecen de forma
sostenida, se reevaluará Cloud VPS Plus 4 por su almacenamiento NVMe.

USA-East es una ubicación razonable para visitantes y administración desde
Colombia. La latencia real debe comprobarse desde la conexión que utilizará
Henko antes de fijar la compra, y el [recargo de ubicación de Contabo](https://help.contabo.com/en/support/solutions/articles/103000269774-what-is-the-location-fee-)
debe incluirse en el coste mensual. La página de [ubicaciones de Contabo](https://contabo.com/en/locations/)
identifica la región de Estados Unidos y sus centros de datos disponibles.

El VPS será autoadministrado por Henko: sistema operativo, Docker, Caddy,
actualizaciones, firewall, logs, secretos y recuperación operativa. Contabo
proporciona la máquina y servicios de infraestructura, pero no administrará la
configuración de dominios, el Caddyfile ni los contenedores de las
aplicaciones.

## Dominios y DNS

Se mantendrán dos dominios con propósitos separados:

- `smaje.com.co`: portfolio e identidad personal de Sergio.
- `henkoconsulting.com.co`: dominio principal de Henko Consulting, servicios y
  comunicaciones comerciales.

Cloudflare administrará el registro y DNS de los dominios, además del proxy,
HTTPS, CDN y DNSSEC cuando corresponda. La disponibilidad, renovación,
impuestos y precio final deben confirmarse manualmente en el checkout y no se
automatizan desde este repositorio.

## Correo

El portfolio conservará el correo personal existente:
`smajefranco@gmail.com`. El sitio y los CV publicados deben seguir apuntando a
esa dirección; no se migrará el correo personal a Contabo ni a la organización
de Henko.

Henko usará Zoho Mail para `henkoconsulting.com.co`. Inicialmente se recomienda
crear el buzón real `sergio@henkoconsulting.com.co` y dejar como alias
`contacto@`, `info@` y `admin@`. Zoho gestionará almacenamiento, entrega,
antispam y acceso al buzón; el VPS no alojará correo.

La configuración de Henko debe incluir registros MX, SPF, DKIM y DMARC. El plan
de Zoho elegido debe revisarse si se necesita más de un dominio, IMAP/POP o
ActiveSync; el [detalle de precios y limitaciones de Zoho Mail](https://www.zoho.com/mail/zohomail-pricing.html)
se confirma antes de contratar.

## Operación mínima del VPS

La arquitectura de aplicaciones será:

```text
Contabo Cloud VPS 4 — USA-East
├── Caddy
├── portfolio.smaje.com.co / smaje.com.co
├── henkoconsulting.com.co
├── servicios Henko
├── bases de datos
└── automatizaciones Docker
```

Caddy enruta por hostname y termina TLS automáticamente. Cada aplicación
permanece en su propio contenedor y red interna; las bases de datos y sus
credenciales no se comparten sin una decisión explícita.

La configuración mínima es:

- Docker Compose para separar el portfolio, servicios Henko, bases de datos y
  automatizaciones.
- Caddy como reverse proxy y terminación TLS con Let’s Encrypt.
- Firewall de Contabo activado y firewall del sistema configurado con SSH
  restringido y solo HTTP/HTTPS públicos.
- Variables y secretos únicamente en el entorno de despliegue, nunca en Git.
- Logs y comprobaciones de salud para cada servicio público.

## Snapshots y backups

El snapshot es una captura puntual del estado completo del VPS. Sirve como
rollback rápido antes de actualizar Ubuntu, Docker o Caddy, pero no sustituye un
backup: en Cloud VPS 4 solo hay un snapshot, no se descarga, se elimina después
de 30 días y todo lo creado después de la captura se pierde al restaurarlo.
La [documentación para crear snapshots](https://help.contabo.com/en/support/solutions/articles/103000270385-how-do-i-create-a-snapshot-of-my-server-)
y [hacer rollback](https://help.contabo.com/en/support/solutions/articles/103000270389-how-do-i-rollback-my-server-to-a-snapshot-)
define el procedimiento del proveedor.

Se contratará **Auto Backup**, verificando en el checkout el incremento de
aproximadamente USD 2 al mes. Debe probarse una restauración antes de depender
de él. Además, se mantendrá un backup externo e independiente de Contabo para
proteger datos y configuración frente a errores operativos, cancelación de la
cuenta o incidentes del proveedor.

## Cuentas y responsabilidades

- Cuenta propietaria de Contabo: Henko Consulting.
- Cuenta propietaria de Cloudflare: Henko Consulting.
- Cuenta administradora de Zoho: `admin@henkoconsulting.com.co`.
- Correo de recuperación: una cuenta personal externa e independiente de
  `henkoconsulting.com.co`.
- 2FA activo en Contabo, Cloudflare, Zoho y GitHub.
- Credenciales y códigos de recuperación guardados en un gestor de contraseñas.

## Configuración inicial obligatoria

1. Comprar `henkoconsulting.com.co` y verificar disponibilidad y renovación.
2. Contratar Contabo Cloud VPS 4 Core en USA-East y añadir Auto Backup.
3. Confirmar en el checkout que el almacenamiento es SSD o reevaluar Plus 4 si
   se necesita NVMe.
4. Instalar Ubuntu 24.04 LTS, configurar claves SSH, usuario administrativo y
   firewalls.
5. Instalar Docker Compose y Caddy.
6. Configurar `smaje.com.co` y `henkoconsulting.com.co` en Caddy, con
   contenedores y redes separadas.
7. Configurar Zoho Mail para Henko con MX, SPF, DKIM y DMARC; crear el buzón y
   los alias.
8. Verificar que el portfolio continúe usando `smajefranco@gmail.com` y probar
   envío y recepción del correo de Henko desde web, móvil y cliente compatible.
9. Crear un snapshot antes de cambios importantes.
10. Ejecutar una restauración de prueba desde Auto Backup.
11. Configurar y probar el backup externo independiente.

## Despliegue

El contrato de publicación del portfolio continúa siendo
`main → build/deploy → verificación pública`. El sitio Astro se publica como
artefacto estático detrás de Caddy; los servicios Henko pueden usar sus propios
contenedores y redes internas. La automatización futura puede usar GitHub
Actions para construir y desplegar al VPS.

Keystatic seguirá en modo local: `/keystatic` no se publica y el servidor solo
recibe el artefacto desplegado. El despliegue no convierte al VPS en fuente de
verdad para el contenido ni para los documentos LaTeX del CV.

# Flujo local de edición y publicación

## Edición

1. Ejecuta `pnpm dev` y abre `http://127.0.0.1:4321/keystatic`.
2. Edita el contenido con Keystatic o directamente en los Markdown versionados.
3. Revisa que el estado, locale, slug y `draftSlug` cumplan la política editorial.
4. Revisa el diff de los archivos modificados.

El panel y las previews draft solo existen durante `pnpm dev`. El build de
producción no incorpora `/keystatic` ni rutas `/draft/`; una URL de preview no
es un mecanismo de confidencialidad.

## Validación

```bash
git diff -- src/content
pnpm cms:check
pnpm lint
pnpm build
```

`pnpm cms:check` verifica estados, locales, pares ES/EN, unicidad de
`draftSlug`, referencias Medium, detección básica de secretos, `git diff
--check`, el build estático, el dominio canónico `https://smaje.com.co` y la
ausencia de rutas Keystatic o previews draft en `dist/`. El esquema de Astro
añade la validación tipada de los campos.

## Publicación manual

El flujo operativo es:

```text
Keystatic local
→ revisión del diff
→ pnpm cms:check
→ pnpm build
→ rsync por SSH a /srv/portfolio
→ verificación pública
```

Desde la raíz del repositorio, con una cuenta de despliegue no root:

```bash
rsync -az --delete dist/ <usuario-deploy>@<host-vps>:/srv/portfolio/
```

La clave privada debe estar fuera del repositorio, por ejemplo en
`~/.ssh/portfolio-deploy_ed25519`, con permisos restrictivos. No se guardan
claves, tokens, contraseñas ni hosts privados en Git. La cuenta remota debe
tener permisos de escritura sobre `/srv/portfolio` sin convertirse en root.

Después de copiar el artefacto, verifica el dominio canónico y la redirección
opcional de `www`:

```bash
curl -fsSI https://smaje.com.co/
curl -fsSI https://www.smaje.com.co/
```

La segunda comprobación debe devolver una redirección permanente a
`https://smaje.com.co/`. Si `www` no se habilita en DNS, se omite esa prueba.

## Caddy en el VPS

La configuración versionada está en [`deploy/Caddyfile`](../deploy/Caddyfile).
En el host, cópiela a `/etc/caddy/Caddyfile`, confirma que `/srv/portfolio`
pertenece al usuario o grupo que Caddy puede leer y valida antes de recargar:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
sudo systemctl reload caddy
```

Caddy sirve directamente el artefacto estático, habilita `zstd`/`gzip` y
gestiona HTTPS automáticamente para `smaje.com.co` y, si existe su registro
DNS, `www.smaje.com.co`. El portfolio no necesita un contenedor Docker.

## Rollback y recuperación

El rollback de contenido es una nueva versión Git, no una reescritura de
historia. Para reconstruir una versión publicada anterior sin alterar el árbol
de trabajo actual:

```bash
git worktree add /tmp/portfolio-rollback <commit-publicado>
cd /tmp/portfolio-rollback
pnpm install --frozen-lockfile
pnpm cms:check
pnpm build
rsync -az --delete dist/ <usuario-deploy>@<host-vps>:/srv/portfolio/
```

Después de verificar el servicio público, elimina el worktree temporal y, si
la corrección debe permanecer, crea un commit de reversión en la rama principal.
Para recuperar una entrada eliminada, localiza su último commit con
`git log -- src/content` y restaura el archivo en una nueva edición.

## Medium y enlaces draft

Medium no se sincroniza automáticamente. La URL se copia en `externalUrl` solo
después de publicar manualmente el artículo. Las URLs draft se usan únicamente
en el entorno local, no son secretas y nunca deben contener datos sensibles.

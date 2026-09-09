# Flujo local de edición y publicación

## Edición

1. Ejecuta `pnpm dev` y abre `http://127.0.0.1:4321/keystatic`.
2. Edita el contenido con Keystatic o directamente en los Markdown versionados.
3. Revisa que el estado, locale, slug y `draftSlug` cumplan la política editorial.
4. Revisa el diff de los archivos modificados.

## Validación

```bash
git diff -- src/content
pnpm cms:check
pnpm lint
```

`pnpm cms:check` verifica estados, locales, pares ES/EN, unicidad de
`draftSlug`, campos de Medium, detección básica de secretos, `git diff --check`
y el build completo de Astro. El esquema de Astro añade la validación tipada de
los campos.

## Publicación

El flujo acordado es:

```text
Keystatic local
→ revisión del diff
→ pnpm cms:check
→ git push origin main
→ build/deploy del hosting
→ verificación pública
```

El push directo a `main` es deliberado para este proyecto de editor único. No
se guardan credenciales en el repositorio. Un despliegue futuro con GitHub
Actions debe usar secretos protegidos del entorno de despliegue.

## Rollback y recuperación

```bash
git log --oneline -- src/content
git revert <commit-publicado>
pnpm cms:check
git push origin main
```

Un rollback es otro commit: no reescribe la historia y vuelve a generar el sitio
con la versión anterior. Para recuperar una entrada eliminada, localiza su
último commit en `git log` y restaura el archivo en una nueva edición.

## Medium y enlaces draft

Medium no se sincroniza automáticamente. La URL se copia en `externalUrl` solo
después de publicar manualmente el artículo. Las URLs draft se comparten como
previsualizaciones editoriales de baja confidencialidad y nunca deben contener
datos sensibles.

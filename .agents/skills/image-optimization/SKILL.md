---
name: image-optimization
description: Optimize raster images for this Astro portfolio when adding or replacing site imagery, especially article covers and project visuals.
---

# Image optimization for the portfolio

Use the repository script to prepare raster assets before referencing them from Astro content or components:

```sh
pnpm images:optimize -- <source-image> --output-dir public/images
```

The script uses ImageMagick's `convert` command. It writes a WebP into the requested output directory, applies EXIF orientation, strips metadata, caps the largest dimension at 1200 pixels, and uses WebP quality 82 by default. Adjust `--max-dimension` or `--quality` when the rendered size or image detail calls for it. The script's header documents supported formats, all CLI options, overwrite behavior, and source-file handling.

After conversion:

1. Check the generated file size and dimensions; use `identify <file.webp>` when available.
2. Update content or component references to the generated `.webp` under `public/`.
3. Remove an obsolete oversized copy from `public/` once no references use it. Keep an original source outside `public/` only when it is useful for future edits.
4. Run `pnpm build` and inspect the affected page at desktop, tablet, and mobile widths when browser preview is available.

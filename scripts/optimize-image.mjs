#!/usr/bin/env node

/**
 * Convert local raster assets to optimized WebP files for the portfolio.
 *
 * Usage:
 *   pnpm images:optimize -- <image> [image ...] [options]
 *
 * Inputs: PNG, JPEG, TIFF, and BMP. Requires ImageMagick `convert` with WebP
 * support. Defaults to a 1200 px maximum edge and WebP quality 82. Outputs use
 * the input basename with a `.webp` extension, in the input directory unless
 * `--output-dir` is provided. Existing outputs are overwritten; source images
 * are never modified or deleted.
 *
 * Options:
 *   --output-dir <path>   Output directory (default: each input's directory)
 *   --max-dimension <px>  Maximum width and height (default: 1200)
 *   --quality <1-100>     WebP quality (default: 82)
 *   --help                Print usage information
 */
import { spawnSync } from 'node:child_process';
import { mkdirSync, statSync } from 'node:fs';
import { basename, dirname, extname, join, resolve } from 'node:path';

const supportedExtensions = new Set(['.png', '.jpg', '.jpeg', '.tif', '.tiff', '.bmp']);

function usage() {
  console.log(`Usage: pnpm images:optimize -- <image> [image ...] [options]

Options:
  --output-dir <path>   Directory for generated WebP files (default: next to each input)
  --max-dimension <px>  Maximum width or height (default: 1200)
  --quality <1-100>     WebP quality (default: 82)
`);
}

/** Parse image paths and CLI options, validating values before conversion. */
function parseArgs(args) {
  const inputs = [];
  let outputDir;
  let maxDimension = 1200;
  let quality = 82;

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === '--') {
      continue;
    } else if (argument === '--output-dir') {
      outputDir = args[++index];
      if (!outputDir) throw new Error('--output-dir requires a path.');
    } else if (argument === '--max-dimension') {
      maxDimension = Number(args[++index]);
    } else if (argument === '--quality') {
      quality = Number(args[++index]);
    } else if (argument.startsWith('--')) {
      throw new Error(`Unknown option: ${argument}`);
    } else {
      inputs.push(argument);
    }
  }

  if (inputs.length === 0) throw new Error('Provide at least one source image.');
  if (!Number.isInteger(maxDimension) || maxDimension < 1) {
    throw new Error('--max-dimension must be a positive integer.');
  }
  if (!Number.isInteger(quality) || quality < 1 || quality > 100) {
    throw new Error('--quality must be an integer from 1 to 100.');
  }

  return { inputs, outputDir: outputDir ? resolve(outputDir) : undefined, maxDimension, quality };
}

/** Convert one source image, then report its output path and size reduction. */
function optimizeImage(input, options) {
  const source = resolve(input);
  const extension = extname(source).toLowerCase();
  if (!supportedExtensions.has(extension)) {
    throw new Error(`Unsupported image format "${extension || '(none)'}": ${input}`);
  }

  const destinationDirectory = options.outputDir ?? dirname(source);
  mkdirSync(destinationDirectory, { recursive: true });
  const output = join(destinationDirectory, `${basename(source, extension)}.webp`);
  const result = spawnSync(
    'convert',
    [
      source,
      '-auto-orient',
      '-colorspace',
      'sRGB',
      '-strip',
      '-resize',
      `${options.maxDimension}x${options.maxDimension}>`,
      '-define',
      'webp:method=6',
      '-quality',
      String(options.quality),
      output,
    ],
    { encoding: 'utf8' },
  );

  if (result.error) {
    throw new Error(`Could not run ImageMagick convert: ${result.error.message}`);
  }
  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || `Image conversion failed for ${input}.`);
  }

  const sourceBytes = statSync(source).size;
  const outputBytes = statSync(output).size;
  const reduction = Math.max(0, Math.round((1 - outputBytes / sourceBytes) * 100));
  console.log(
    `${input} -> ${output} (${(sourceBytes / 1024).toFixed(0)} KB -> ${(outputBytes / 1024).toFixed(0)} KB, ${reduction}% smaller)`,
  );
}

try {
  if (process.argv.length <= 2 || process.argv.includes('--help')) {
    usage();
    process.exitCode = process.argv.includes('--help') ? 0 : 1;
  } else {
    const options = parseArgs(process.argv.slice(2));
    for (const input of options.inputs) optimizeImage(input, options);
  }
} catch (error) {
  console.error(`Image optimization failed: ${error.message}`);
  process.exitCode = 1;
}

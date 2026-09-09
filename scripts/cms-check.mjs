import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const contentRoot = join(root, 'src', 'content');
const collections = ['projects', 'experiences', 'blog'];
const statuses = new Set(['draft', 'scheduled', 'published', 'archived']);
const locales = new Set(['es', 'en']);
const entries = [];

function filesIn(directory) {
  try {
    return readdirSync(directory, { withFileTypes: true }).flatMap((item) => {
      const path = join(directory, item.name);
      return item.isDirectory() ? filesIn(path) : item.name.endsWith('.md') ? [path] : [];
    });
  } catch {
    return [];
  }
}

function parseScalar(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function readFrontmatter(path) {
  const source = readFileSync(path, 'utf8');
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  const data = {};

  if (!match) {
    throw new Error(`${relative(root, path)} has no frontmatter.`);
  }

  for (const line of match[1].split('\n')) {
    const separator = line.indexOf(':');
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    data[key] = parseScalar(line.slice(separator + 1));
  }

  return { data, source };
}

function fail(message) {
  throw new Error(`[cms-check] ${message}`);
}

for (const collection of collections) {
  for (const path of filesIn(join(contentRoot, collection))) {
    const { data, source } = readFrontmatter(path);
    const file = relative(root, path);
    const match = data.slug?.match(/^([a-z0-9]+(?:-[a-z0-9]+)*)\.(es|en)$/);

    if (!data.slug || !match) fail(`${file} must define slug as <slug>.es or <slug>.en.`);
    if (!locales.has(data.locale)) fail(`${file} has unsupported locale "${data.locale}".`);
    if (!statuses.has(data.status)) fail(`${file} has unsupported status "${data.status}".`);
    if (data.slug !== path.split('/').pop().replace(/\.md$/, '')) {
      fail(`${file} filename and frontmatter slug must match.`);
    }
    if (match[2] !== data.locale) fail(`${file} slug locale and locale field do not match.`);
    if ((data.status === 'draft' || data.status === 'scheduled') && (!data.draftSlug || data.draftSlug.length < 24)) {
      fail(`${file} requires a draftSlug with at least 24 characters.`);
    }
    if (data.draftSlug && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.draftSlug)) {
      fail(`${file} has an invalid draftSlug.`);
    }
    if (collection === 'blog' && data.channel === 'medium' && data.status === 'published' && !data.externalUrl) {
      fail(`${file} is a published Medium reference without externalUrl.`);
    }
    if (/\b(?:api[_-]?key|secret|token|password|private[_-]?key)\b\s*:/i.test(source) || /sk-[A-Za-z0-9]/.test(source)) {
      fail(`${file} appears to contain a secret.`);
    }

    entries.push({ collection, file, data });
  }
}

const draftSlugs = new Map();
for (const entry of entries) {
  if (!entry.data.draftSlug) continue;
  if (draftSlugs.has(entry.data.draftSlug)) {
    fail(`draftSlug "${entry.data.draftSlug}" is duplicated by ${draftSlugs.get(entry.data.draftSlug)} and ${entry.file}.`);
  }
  draftSlugs.set(entry.data.draftSlug, entry.file);
}

for (const collection of ['projects', 'experiences']) {
  const grouped = new Map();
  for (const entry of entries.filter((item) => item.collection === collection)) {
    const base = entry.data.slug.replace(/\.(?:es|en)$/, '');
    const localesForSlug = grouped.get(base) ?? new Set();
    localesForSlug.add(entry.data.locale);
    grouped.set(base, localesForSlug);
  }
  for (const [slug, localesForSlug] of grouped) {
    for (const locale of locales) {
      if (!localesForSlug.has(locale)) fail(`${collection} entry "${slug}" is missing ${locale}.`);
    }
  }
}

execFileSync('git', ['diff', '--check'], { cwd: root, stdio: 'inherit' });
execFileSync('pnpm', ['build'], { cwd: root, stdio: 'inherit' });
console.log(`[cms-check] Validated ${entries.length} editorial files.`);

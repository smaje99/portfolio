import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, join, relative, sep } from 'node:path';

const root = process.cwd();
const contentRoot = join(root, 'src', 'content');
const collections = ['projects', 'experiences', 'blog'];
const statuses = new Set(['draft', 'scheduled', 'published', 'archived']);
const locales = new Set(['es', 'en']);
const channels = new Set(['site', 'medium']);
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

function allFilesIn(directory) {
  try {
    return readdirSync(directory, { withFileTypes: true }).flatMap((item) => {
      const path = join(directory, item.name);
      return item.isDirectory() ? allFilesIn(path) : [path];
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

function assertNoSecrets(file, source) {
  const patterns = [
    /\b(?:api[_-]?key|secret|token|password|private[_-]?key)\b\s*:/i,
    /\bsk-[A-Za-z0-9]{16,}\b/,
    /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  ];

  if (patterns.some((pattern) => pattern.test(source))) {
    fail(`${file} appears to contain a secret.`);
  }
}

function assertPublicUrl(file, value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    fail(`${file} contains an invalid URL: ${value}`);
  }

  if (!['http:', 'https:'].includes(url.protocol)) {
    fail(`${file} contains a URL that does not use http or https: ${value}`);
  }

  const hostname = url.hostname.toLowerCase();
  const isPrivateIp =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '0.0.0.0' ||
    hostname.endsWith('.local') ||
    /^10\./.test(hostname) ||
    /^192\.168\./.test(hostname) ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname);

  if (isPrivateIp || /private|internal|secret/i.test(url.href)) {
    fail(`${file} contains a private or internal URL: ${value}`);
  }
}

function assertPublicUrls(file, source) {
  for (const value of source.match(/https?:\/\/[^\s)\]}>'"]+/g) ?? []) {
    assertPublicUrl(file, value.replace(/[.,;:]+$/, ''));
  }
}

function strategicProjectSlugs() {
  const source = readFileSync(join(root, 'src', 'data', 'projects.ts'), 'utf8');
  return [...source.matchAll(/^\s+slug:\s+'([^']+)'/gm)].map((match) => match[1]);
}

function assertStrategicCatalog(projectEntries) {
  const strategicSlugs = strategicProjectSlugs();
  const editorialSlugs = [...new Set(
    projectEntries.map((entry) => entry.data.slug.replace(/\.(?:es|en)$/, '')),
  )];

  if (strategicSlugs.length !== new Set(strategicSlugs).size) {
    fail('src/data/projects.ts contains duplicate strategic project slugs.');
  }

  if (
    strategicSlugs.length !== editorialSlugs.length ||
    strategicSlugs.some((slug) => !editorialSlugs.includes(slug))
  ) {
    fail(`strategic project catalog does not match CMS projects: strategic=${strategicSlugs.join(',')}; editorial=${editorialSlugs.join(',')}.`);
  }

  for (const slug of strategicSlugs) {
    if (!existsSync(join(root, 'src', 'pages', 'projects', '[slug].astro'))) {
      fail(`missing Spanish project detail route for "${slug}".`);
    }
    if (!existsSync(join(root, 'src', 'pages', 'en', 'projects', '[slug].astro'))) {
      fail(`missing English project detail route for "${slug}".`);
    }
  }
}

function assertStaticArtifact() {
  const distRoot = join(root, 'dist');
  const distFiles = allFilesIn(distRoot);
  const relativeDistFiles = distFiles.map((path) => relative(distRoot, path));
  const htmlFiles = distFiles.filter((path) => path.endsWith('.html'));

  if (!existsSync(distRoot) || !htmlFiles.length) {
    fail('the static build must produce dist/ with at least one HTML page.');
  }

  const keystaticArtifacts = relativeDistFiles.filter((path) =>
    path.toLowerCase().split(sep).includes('keystatic'),
  );
  if (keystaticArtifacts.length) {
    fail(`production build contains Keystatic routes or artifacts: ${keystaticArtifacts.join(', ')}.`);
  }

  const draftArtifacts = relativeDistFiles.filter((path) =>
    path.toLowerCase().split(sep).includes('draft'),
  );
  if (draftArtifacts.length) {
    fail(`production build contains draft preview artifacts: ${draftArtifacts.join(', ')}.`);
  }

  for (const path of htmlFiles) {
    const file = relative(root, path);
    const source = readFileSync(path, 'utf8');
    if (!source.includes('<link rel="canonical" href="https://smaje.com.co')) {
      fail(`${file} is missing the smaje.com.co canonical URL.`);
    }
    assertNoSecrets(file, source);
    assertPublicUrls(file, source);
  }

  const expectedPages = [
    'projects/estructuras-de-datos/index.html',
    'projects/trazalita/index.html',
    'projects/epicrisisia/index.html',
    'projects/it-services-contents-unir/index.html',
    'en/projects/estructuras-de-datos/index.html',
    'en/projects/trazalita/index.html',
    'en/projects/epicrisisia/index.html',
    'en/projects/it-services-contents-unir/index.html',
  ];

  for (const expectedPage of expectedPages) {
    if (!existsSync(join(distRoot, expectedPage))) {
      fail(`static build is missing expected project page: ${expectedPage}.`);
    }
  }

  const structuresPage = readFileSync(join(distRoot, 'projects', 'estructuras-de-datos', 'index.html'), 'utf8');
  const unirPage = readFileSync(join(distRoot, 'projects', 'it-services-contents-unir', 'index.html'), 'utf8');
  for (const url of [
    'https://github.com/smaje99/ds-tdd-uniamazonia',
    'https://github.com/smaje99/sorting-comparator',
    'https://github.com/smaje99/SimuladorTDA',
    'https://github.com/smaje99/Calc2',
  ]) {
    if (!structuresPage.includes(url)) fail(`structures detail page is missing public repository ${url}.`);
  }
  for (const url of [
    'https://github.com/smaje99/it-services-contents-unir',
    'https://it-services-contents-unir.vercel.app',
  ]) {
    if (!unirPage.includes(url)) fail(`UNIR detail page is missing public evidence URL ${url}.`);
  }
}

for (const collection of collections) {
  for (const path of filesIn(join(contentRoot, collection))) {
    const { data, source } = readFrontmatter(path);
    const file = relative(root, path);
    const match = data.slug?.match(/^([a-z0-9]+(?:-[a-z0-9]+)*)\.(es|en)$/);

    if (!data.slug || !match) fail(`${file} must define slug as <slug>.es or <slug>.en.`);
    if (!locales.has(data.locale)) fail(`${file} has unsupported locale "${data.locale}".`);
    if (!statuses.has(data.status)) fail(`${file} has unsupported status "${data.status}".`);
    if (data.slug !== basename(path, '.md')) {
      fail(`${file} filename and frontmatter slug must match.`);
    }
    if (match[2] !== data.locale) fail(`${file} slug locale and locale field do not match.`);
    if ((data.status === 'draft' || data.status === 'scheduled') && (!data.draftSlug || data.draftSlug.length < 24)) {
      fail(`${file} requires a draftSlug with at least 24 characters.`);
    }
    if (data.draftSlug && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.draftSlug)) {
      fail(`${file} has an invalid draftSlug.`);
    }
    if (collection === 'blog' && !channels.has(data.channel)) {
      fail(`${file} has unsupported channel "${data.channel}".`);
    }
    if (collection === 'blog' && data.externalUrl) {
      let externalUrl;
      try {
        externalUrl = new URL(data.externalUrl);
      } catch {
        fail(`${file} has an invalid externalUrl.`);
      }
      if (!['http:', 'https:'].includes(externalUrl.protocol)) {
        fail(`${file} externalUrl must use http or https.`);
      }
    }
    if (collection === 'blog' && data.channel === 'medium' && data.status === 'published' && !data.externalUrl) {
      fail(`${file} is a published Medium reference without externalUrl.`);
    }
    assertNoSecrets(file, source);
    assertPublicUrls(file, source);

    entries.push({ collection, file, data, source });
  }
}

const projectEntries = entries.filter((entry) => entry.collection === 'projects');
assertStrategicCatalog(projectEntries);

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
    if (localesForSlug.has(entry.data.locale)) {
      fail(`${collection} entry "${base}.${entry.data.locale}" is duplicated.`);
    }
    localesForSlug.add(entry.data.locale);
    grouped.set(base, localesForSlug);
  }
  for (const [slug, localesForSlug] of grouped) {
    for (const locale of locales) {
      if (!localesForSlug.has(locale)) fail(`${collection} entry "${slug}" is missing ${locale}.`);
    }
  }
}

for (const entry of projectEntries) {
  if (entry.data.status !== 'published') {
    fail(`${entry.file} must be published to be part of the public project catalog.`);
  }

  const body = entry.source.replace(/^---\n[\s\S]*?\n---\s*/, '').trim();
  if (!body) fail(`${entry.file} must contain a non-empty editorial body.`);
}

execFileSync('git', ['diff', '--check'], { cwd: root, stdio: 'inherit' });
execFileSync('pnpm', ['build'], { cwd: root, stdio: 'inherit' });
assertStaticArtifact();
console.log(`[cms-check] Validated ${entries.length} editorial files.`);

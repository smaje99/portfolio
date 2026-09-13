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

function expectedPathForHtml(path, distRoot) {
  const relativePath = relative(distRoot, path).split(sep).join('/');
  if (relativePath === 'index.html') return '/';
  if (relativePath.endsWith('/index.html')) {
    return `/${relativePath.slice(0, -'/index.html'.length)}/`;
  }
  return `/${relativePath.replace(/\.html$/, '')}`;
}

function extractCanonical(file, source) {
  const match = source.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!match) fail(`${file} is missing its canonical URL.`);
  return match[1];
}

function assertHtmlMetadata(file, source, expectedPath, publicPaths) {
  if (!/<title>[^<]+<\/title>/i.test(source)) fail(`${file} is missing a non-empty title.`);
  const description = source.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1];
  if (!description) {
    fail(`${file} is missing a non-empty meta description.`);
  }
  if (description.length > 160) fail(`${file} has an SEO description longer than 160 characters.`);

  const canonical = extractCanonical(file, source);
  let canonicalUrl;
  try {
    canonicalUrl = new URL(canonical);
  } catch {
    fail(`${file} contains an invalid canonical URL: ${canonical}`);
  }

  if (canonicalUrl.origin !== 'https://smaje.com.co') {
    fail(`${file} canonical must use https://smaje.com.co: ${canonical}`);
  }

  const normalizePath = (path) => path.replace(/\/$/, '') || '/';
  if (normalizePath(canonicalUrl.pathname) !== normalizePath(expectedPath)) {
    fail(`${file} canonical does not match its public route: ${canonical}`);
  }

  if (expectedPath !== '/404') {
    for (const hreflang of ['es', 'en', 'x-default']) {
      const alternate = source.match(
        new RegExp(`<link\\s+rel="alternate"\\s+hreflang="${hreflang}"\\s+href="([^"]+)"`, 'i'),
      );
      if (!alternate) fail(`${file} is missing a ${hreflang} alternate URL.`);

      let alternateUrl;
      try {
        alternateUrl = new URL(alternate[1]);
      } catch {
        fail(`${file} contains an invalid ${hreflang} alternate URL: ${alternate[1]}`);
      }
      if (alternateUrl.origin !== 'https://smaje.com.co') {
        fail(`${file} ${hreflang} alternate must use https://smaje.com.co: ${alternate[1]}`);
      }
      const alternatePath = alternateUrl.pathname.replace(/\/$/, '') || '/';
      if (!publicPaths.has(alternatePath)) {
        fail(`${file} ${hreflang} alternate does not resolve to a built public route: ${alternate[1]}`);
      }
    }
  }

  for (const metadata of [
    '<meta property="og:title"',
    '<meta property="og:description"',
    '<meta property="og:url"',
    '<meta name="twitter:title"',
    '<meta name="twitter:description"',
  ]) {
    if (!source.includes(metadata)) fail(`${file} is missing ${metadata} metadata.`);
  }
}

function assertSitemap(distRoot, projectEntries) {
  const sitemapPath = join(distRoot, 'sitemap.xml');
  const source = readFileSync(sitemapPath, 'utf8');
  const match = source.match(
    /^<\?xml version="1\.0" encoding="UTF-8"\?>\n<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">\n([\s\S]*?)\n<\/urlset>\n$/,
  );
  if (!match) fail('dist/sitemap.xml is not a well-formed sitemap document.');

  const blocks = match[1].match(/  <url><loc>[^<]+<\/loc><\/url>/g) ?? [];
  if (!blocks.length || blocks.join('\n') !== match[1]) {
    fail('dist/sitemap.xml contains malformed or unexpected URL entries.');
  }

  const urls = blocks.map((block) => block.match(/<loc>([^<]+)<\/loc>/)[1]);
  const paths = new Set();
  for (const value of urls) {
    let url;
    try {
      url = new URL(value);
    } catch {
      fail(`dist/sitemap.xml contains an invalid URL: ${value}`);
    }
    if (url.origin !== 'https://smaje.com.co') {
      fail(`dist/sitemap.xml contains a non-canonical origin: ${value}`);
    }
    if (/\/draft\/|\/keystatic\/|\/404(?:\/|$)/i.test(url.pathname)) {
      fail(`dist/sitemap.xml exposes a private, preview, or error route: ${value}`);
    }
    paths.add(url.pathname.replace(/\/$/, '') || '/');
  }

  const expectedPaths = new Set([
    '/',
    '/en',
    '/about',
    '/en/about',
    '/projects',
    '/en/projects',
    '/experience',
    '/en/experience',
    '/blog',
    '/en/blog',
  ]);
  for (const entry of projectEntries.filter((item) => item.data.status === 'published')) {
    const slug = entry.data.slug.replace(/\.(?:es|en)$/, '');
    expectedPaths.add(`/${entry.data.locale === 'en' ? 'en/' : ''}projects/${slug}`);
  }
  for (const entry of entries.filter(
    (item) =>
      item.collection === 'blog' &&
      item.data.status === 'published' &&
      item.data.channel === 'site',
  )) {
    const slug = entry.data.slug.replace(/\.(?:es|en)$/, '');
    expectedPaths.add(`/${entry.data.locale === 'en' ? 'en/' : ''}blog/${slug}`);
  }

  for (const expectedPath of expectedPaths) {
    if (!paths.has(expectedPath)) fail(`dist/sitemap.xml is missing public route: ${expectedPath}.`);
  }
  for (const path of paths) {
    if (!expectedPaths.has(path)) fail(`dist/sitemap.xml contains an unexpected route: ${path}.`);
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

  for (const artifact of ['404.html', 'robots.txt', 'sitemap.xml', 'rss.xml']) {
    if (!existsSync(join(distRoot, artifact))) {
      fail(`static build is missing required artifact: dist/${artifact}.`);
    }
  }

  const rss = readFileSync(join(distRoot, 'rss.xml'), 'utf8');
  if (!/^<\?xml version="1\.0" encoding="UTF-8"\?>\s*<rss version="2\.0">[\s\S]*<\/rss>\s*$/.test(rss)) {
    fail('dist/rss.xml is not a well-formed RSS 2.0 document.');
  }
  if (/\/draft\/|\/keystatic\//i.test(rss)) {
    fail('dist/rss.xml exposes a private or preview route.');
  }

  const robots = readFileSync(join(distRoot, 'robots.txt'), 'utf8');
  for (const directive of ['User-agent: *', 'Allow: /', 'Disallow: /draft/', 'Disallow: /keystatic/']) {
    if (!robots.includes(directive)) fail(`dist/robots.txt is missing directive: ${directive}.`);
  }
  if (!/^Sitemap:\s+https:\/\/smaje\.com\.co\/sitemap\.xml\s*$/m.test(robots)) {
    fail('dist/robots.txt does not reference the canonical sitemap.');
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

  const publicPaths = new Set(htmlFiles.map((path) => {
    const expectedPath = expectedPathForHtml(path, distRoot);
    return expectedPath.replace(/\/$/, '') || '/';
  }));

  for (const path of htmlFiles) {
    const file = relative(root, path);
    const source = readFileSync(path, 'utf8');
    const expectedPath = expectedPathForHtml(path, distRoot);
    assertHtmlMetadata(file, source, expectedPath, publicPaths);
    if (expectedPath === '/404') {
      if (!/<meta\s+name="robots"\s+content="noindex,nofollow,noarchive"/i.test(source)) {
        fail(`${file} must use noindex,nofollow,noarchive.`);
      }
      if (source.match(/<link\s+rel="alternate"\s+hreflang=/g)?.length) {
        fail(`${file} must not expose hreflang alternates.`);
      }
    } else if (!/<meta\s+name="robots"\s+content="index,follow"/i.test(source)) {
      fail(`${file} must be indexable with index,follow.`);
    }
    assertNoSecrets(file, source);
    assertPublicUrls(file, source);
  }

  assertSitemap(distRoot, projectEntries);

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

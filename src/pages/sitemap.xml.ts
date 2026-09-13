import { getRelativeLocaleUrl } from 'astro:i18n';
import type { APIRoute } from 'astro';

import { getPublishedLocalBlogEntries } from '@/data/blog';
import { getProjects } from '@/data/projects';
import type { Locale } from '@/i18n/site';

const locales = ['es', 'en'] as const satisfies Locale[];
const publicSections = ['', 'about', 'projects', 'experience', 'blog'];

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function absoluteUrl(site: URL, path: string) {
  return new URL(path, site).toString();
}

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('Astro.site is required to generate sitemap.xml.');
  }

  const paths = new Set<string>();

  for (const locale of locales) {
    for (const section of publicSections) {
      paths.add(getRelativeLocaleUrl(locale, section));
    }

    const projects = await getProjects(locale);
    for (const project of projects) {
      paths.add(getRelativeLocaleUrl(locale, `projects/${project.slug}`));
    }

    const blogEntries = await getPublishedLocalBlogEntries(locale);
    for (const entry of blogEntries) {
      const slug = entry.data.slug.replace(/\.(?:es|en)$/, '');
      paths.add(getRelativeLocaleUrl(locale, `blog/${slug}`));
    }
  }

  const urls = [...paths]
    .sort()
    .map((path) => `  <url><loc>${escapeXml(absoluteUrl(site, path))}</loc></url>`)
    .join('\n');

  const body = urls ? `\n${urls}\n` : '\n';
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>\n`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

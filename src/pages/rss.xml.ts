import { getRelativeLocaleUrl } from 'astro:i18n';
import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

import { getPublishedLocalBlogEntries } from '@/data/blog';
import type { Locale } from '@/i18n/site';

const locales = ['es', 'en'] as const satisfies Locale[];

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('Astro.site is required to generate rss.xml.');
  }

  const entries = (
    await Promise.all(
      locales.map(async (locale) => {
        const blogEntries = await getPublishedLocalBlogEntries(locale);

        return blogEntries.map((entry) => ({ entry, locale }));
      }),
    )
  ).flat();

  return rss({
    title: 'Sergio Majé — Blog',
    description:
      'Artículos sobre desarrollo de software, datos, procesos y arquitectura de sistemas de información.',
    site,
    items: entries.map(({ entry, locale }) => {
      const slug = entry.data.slug.replace(/\.(?:es|en)$/, '');

      return {
        title: entry.data.title,
        description: entry.data.description,
        link: new URL(getRelativeLocaleUrl(locale, `blog/${slug}`), site).toString(),
        categories: entry.data.tags,
      };
    }),
  });
};

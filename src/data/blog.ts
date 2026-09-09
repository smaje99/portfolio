import { getEditorialCatalog, isDraftPreview, isPubliclyPublished } from '@/data/editorial';
import type { Locale } from '@/i18n/site';

export async function getPublishedBlogEntries(locale: Locale) {
  const catalog = await getEditorialCatalog();

  return catalog.blog.filter(
    (entry) =>
      isPubliclyPublished(entry) &&
      entry.data.locale === locale &&
      (entry.data.channel === 'site' || entry.data.channel === 'medium'),
  );
}

export async function getPublishedLocalBlogEntries(locale: Locale) {
  const entries = await getPublishedBlogEntries(locale);

  return entries.filter((entry) => entry.data.channel === 'site');
}

export async function getBlogDrafts() {
  const catalog = await getEditorialCatalog();

  return catalog.blog.filter(isDraftPreview);
}

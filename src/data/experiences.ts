import type { CollectionEntry } from 'astro:content';

import { getEditorialCatalog, isDraftPreview, isPubliclyPublished } from '@/data/editorial';
import type { Locale } from '@/i18n/site';

export type ExperienceEntry = CollectionEntry<'experiences'>;

export async function getExperiences(locale: Locale) {
  const catalog = await getEditorialCatalog();

  return catalog.experiences
    .filter((entry) => isPubliclyPublished(entry) && entry.data.locale === locale)
    .map((entry) => entry.data)
    .sort((left, right) => right.startDate.getTime() - left.startDate.getTime());
}

export async function getExperienceDrafts() {
  const catalog = await getEditorialCatalog();

  return catalog.experiences.filter(isDraftPreview);
}

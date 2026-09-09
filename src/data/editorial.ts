import { type CollectionEntry, getCollection } from 'astro:content';

import type { Locale } from '@/i18n/site';

export type EditorialCollection = 'projects' | 'experiences' | 'blog';
export type EditorialEntry =
  | CollectionEntry<'projects'>
  | CollectionEntry<'experiences'>
  | CollectionEntry<'blog'>;

export type EditorialCatalog = {
  projects: CollectionEntry<'projects'>[];
  experiences: CollectionEntry<'experiences'>[];
  blog: CollectionEntry<'blog'>[];
};

const localizedSlugPattern = /^(?<slug>[a-z0-9]+(?:-[a-z0-9]+)*)\.(?<locale>es|en)$/;

function getIdentity(entry: EditorialEntry) {
  const match = localizedSlugPattern.exec(entry.data.slug);

  if (!match?.groups) {
    throw new Error(
      `Invalid ${entry.collection} entry "${entry.id}": slug "${entry.data.slug}" must use <slug>.es or <slug>.en.`,
    );
  }

  const { slug, locale } = match.groups as { slug: string; locale: Locale };

  if (entry.data.locale !== locale) {
    throw new Error(
      `Invalid ${entry.collection} entry "${entry.id}": slug locale ".${locale}" does not match locale "${entry.data.locale}".`,
    );
  }

  if (entry.id !== entry.data.slug) {
    throw new Error(
      `Invalid ${entry.collection} entry "${entry.id}": filename slug must match frontmatter slug "${entry.data.slug}".`,
    );
  }

  return { slug, locale };
}

function validateBilingualPairs(collection: 'projects' | 'experiences', entries: EditorialEntry[]) {
  const pairs = new Map<string, Set<Locale>>();

  for (const entry of entries) {
    const { slug, locale } = getIdentity(entry);
    const localesForSlug = pairs.get(slug) ?? new Set<Locale>();

    if (localesForSlug.has(locale)) {
      throw new Error(`Duplicate ${collection} entry for "${slug}.${locale}".`);
    }

    localesForSlug.add(locale);
    pairs.set(slug, localesForSlug);
  }

  for (const [slug, localesForSlug] of pairs) {
    for (const locale of ['es', 'en'] as const) {
      if (!localesForSlug.has(locale)) {
        throw new Error(
          `${collection} entry "${slug}" is missing its ${locale.toUpperCase()} locale.`,
        );
      }
    }
  }
}

export function validateEditorialCatalog(catalog: EditorialCatalog) {
  const draftSlugs = new Map<string, string>();

  for (const entries of Object.values(catalog)) {
    for (const entry of entries) {
      getIdentity(entry);

      if (
        (entry.data.status === 'draft' || entry.data.status === 'scheduled') &&
        !entry.data.draftSlug
      ) {
        throw new Error(
          `${entry.collection} entry "${entry.id}" requires draftSlug for ${entry.data.status} status.`,
        );
      }

      if (entry.data.draftSlug) {
        const previousEntry = draftSlugs.get(entry.data.draftSlug);

        if (previousEntry) {
          throw new Error(
            `draftSlug "${entry.data.draftSlug}" is not unique: ${previousEntry} and ${entry.collection}/${entry.id}.`,
          );
        }

        draftSlugs.set(entry.data.draftSlug, `${entry.collection}/${entry.id}`);
      }
    }
  }

  validateBilingualPairs('projects', catalog.projects);
  validateBilingualPairs('experiences', catalog.experiences);

  for (const entry of catalog.blog) {
    if (
      entry.data.channel === 'medium' &&
      entry.data.status === 'published' &&
      !entry.data.externalUrl
    ) {
      throw new Error(`Published Medium entry "${entry.id}" requires externalUrl.`);
    }
  }

  return catalog;
}

export async function getEditorialCatalog() {
  return validateEditorialCatalog({
    projects: await getCollection('projects'),
    experiences: await getCollection('experiences'),
    blog: await getCollection('blog'),
  });
}

export function isPubliclyPublished(entry: EditorialEntry) {
  return entry.data.status === 'published';
}

export function isDraftPreview(entry: EditorialEntry) {
  return entry.data.status === 'draft' || entry.data.status === 'scheduled';
}

export function getLocalizedEntry<T extends EditorialEntry>(entries: T[], locale: Locale) {
  return entries.filter((entry) => entry.data.locale === locale);
}

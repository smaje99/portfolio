import { getRelativeLocaleUrl } from 'astro:i18n';

import { getAlternateLocale, getHomeCopy, type Locale, locales } from '@/i18n/site';

/**
 * Builds the shared localized page context used by route-level views.
 *
 * This helper centralizes the repetitive setup required by each page:
 * localized copy, locale switching, canonical and alternate URLs, and
 * navigation links resolved against the current locale's base path.
 *
 * @param locale - Active locale for the current page.
 * @param slug - Route segment relative to the locale root. Use an empty string
 * for the locale home page, or values such as `"about"` or `"projects"` for
 * secondary views.
 * @returns A normalized page context object with:
 * - `copy`: localized site copy for the active locale.
 * - `alternateLocale`: the counterpart locale used by the language switcher.
 * - `basePath`: the localized home path for the active locale.
 * - `canonicalPath`: the localized path for the current route.
 * - `alternatePath`: the equivalent path in the alternate locale.
 * - `navigation`: navigation items with locale-aware hrefs.
 * - `alternates`: the localized URLs used for alternate/hreflang metadata.
 */
export function getPageContext(locale: Locale, slug = '') {
  const copy = getHomeCopy(locale);
  const alternateLocale = getAlternateLocale(locale);
  const basePath = getRelativeLocaleUrl(locale, '');
  const canonicalPath = getRelativeLocaleUrl(locale, slug);
  const alternatePath = getRelativeLocaleUrl(alternateLocale, slug);
  const navigation = copy.navigation.map((item) => ({
    label: item.label,
    href: item.href.startsWith('/') ? item.href : `${basePath}${item.href}`,
  }));
  const alternates = locales.map((localeCode) => ({
    hreflang: localeCode,
    href: getRelativeLocaleUrl(localeCode, slug),
  }));

  return {
    copy,
    alternateLocale,
    basePath,
    canonicalPath,
    alternatePath,
    navigation,
    alternates,
  };
}

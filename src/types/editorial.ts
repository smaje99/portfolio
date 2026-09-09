import { z } from 'astro/zod';

export const editorialStatusSchema = z.enum(['draft', 'scheduled', 'published', 'archived']);
export type EditorialStatus = z.infer<typeof editorialStatusSchema>;

export const localeSchema = z.enum(['es', 'en']);
export type ContentLocale = z.infer<typeof localeSchema>;

const draftSlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const draftSlugSchema = z
  .string()
  .min(24, 'draftSlug must have at least 24 characters')
  .regex(draftSlugPattern, 'draftSlug must use lowercase letters, numbers, and hyphens');

export const editorialFields = {
  locale: localeSchema,
  status: editorialStatusSchema.default('draft'),
  draftSlug: draftSlugSchema.optional(),
};

export function validateDraftStatus(
  value: { status: EditorialStatus; draftSlug?: string },
  context: z.RefinementCtx,
) {
  if ((value.status === 'draft' || value.status === 'scheduled') && !value.draftSlug) {
    context.addIssue({
      code: 'custom',
      path: ['draftSlug'],
      message: `draftSlug is required for ${value.status} content`,
    });
  }
}

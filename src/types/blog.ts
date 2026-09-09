import { z } from 'astro/zod';

import { editorialFields, validateDraftStatus } from './editorial';

export const blogSchema = z
  .object({
    ...editorialFields,
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    channel: z.enum(['site', 'medium']),
    externalUrl: z.url().optional(),
  })
  .superRefine((value, context) => {
    validateDraftStatus(value, context);

    if (value.channel === 'medium' && value.status === 'published' && !value.externalUrl) {
      context.addIssue({
        code: 'custom',
        path: ['externalUrl'],
        message: 'externalUrl is required for a published Medium reference',
      });
    }
  });

export type Blog = z.infer<typeof blogSchema>;

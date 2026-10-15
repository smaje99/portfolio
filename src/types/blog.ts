import { z } from 'astro/zod';

import { editorialFields, validateDraftStatus } from './editorial';

export const blogSchema = z
  .object({
    ...editorialFields,
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    channel: z.enum(['site', 'medium', 'devto', 'linkedin']),
    externalUrl: z.url().optional(),
    coverImage: z.union([z.url(), z.string().startsWith('/')]).optional(),
    coverAlt: z.string().trim().min(1).optional(),
  })
  .superRefine((value, context) => {
    validateDraftStatus(value, context);

    if (value.channel !== 'site' && value.status === 'published' && !value.externalUrl) {
      context.addIssue({
        code: 'custom',
        path: ['externalUrl'],
        message: 'externalUrl is required for a published external channel reference',
      });
    }

    if (value.coverImage && !value.coverAlt) {
      context.addIssue({
        code: 'custom',
        path: ['coverAlt'],
        message: 'coverAlt is required when coverImage is provided',
      });
    }
  });

export type Blog = z.infer<typeof blogSchema>;

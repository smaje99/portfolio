import { z } from 'astro/zod';

import { editorialFields, validateDraftStatus } from './editorial';

export const projectSchema = z
  .object({
    slug: z.string(),
    ...editorialFields,
    title: z.string(),
    description: z.string(),
    focus: z.string(),
    tags: z.array(z.string()),
  })
  .superRefine(validateDraftStatus);

export type Project = z.infer<typeof projectSchema>;

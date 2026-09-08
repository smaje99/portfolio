import { z } from 'astro/zod';

export const projectSchema = z.object({
  slug: z.string(),
  locale: z.enum(['es', 'en']),
  title: z.string(),
  description: z.string(),
  focus: z.string(),
  tags: z.array(z.string()),
});

export type Project = z.infer<typeof projectSchema>;

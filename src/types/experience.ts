import { z } from 'astro:content';

export const experienceSchema = z.object({
  position: z.string(),
  company: z.string(),
  description: z.string(),
  startDate: z.string().transform((str) => new Date(str)),
  endDate: z.string().transform((str) => new Date(str)).optional(),
  typeOfEmployment: z.string(),
  link: z.string().optional(),
  current: z.boolean().default(false),
  latest: z.boolean().default(false),
  skills: z.array(z.string())
});

export type Experience = z.infer<typeof experienceSchema>;

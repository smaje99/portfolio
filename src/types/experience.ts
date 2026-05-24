import { z } from 'astro/zod';

function parseDateOnly(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day, 12);
}

export const experienceSchema = z.object({
  position: z.string(),
  company: z.string(),
  description: z.string(),
  startDate: z.string().transform(parseDateOnly),
  endDate: z.string().transform(parseDateOnly).optional(),
  typeOfEmployment: z.string(),
  link: z.string().optional(),
  current: z.boolean().default(false),
  latest: z.boolean().default(false),
  skills: z.array(z.string()),
});

export type Experience = z.infer<typeof experienceSchema>;

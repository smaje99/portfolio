import { defineCollection, z } from 'astro:content';

const experiencesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    position: z.string(),
    company: z.string(),
    description: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    typeOfEmployment: z.string(),
    link: z.string().optional(),
    current: z.boolean().default(false),
    latest: z.boolean().default(false),
    skills: z.array(z.string())
  }),
});

export const collections = {
  experiences: experiencesCollection,
};

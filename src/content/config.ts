import { defineCollection } from 'astro:content';
import { experienceSchema } from '../types/experience';

const experiencesCollection = defineCollection({
  type: 'content',
  schema: experienceSchema,
});

export const collections = {
  experiences: experiencesCollection,
};

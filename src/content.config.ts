import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

import { experienceSchema } from './types/experience';

const experiencesCollection = defineCollection({
  loader: glob({
    base: './src/content/experiences',
    pattern: '**/*.md',
  }),
  schema: experienceSchema,
});

export const collections = {
  experiences: experiencesCollection,
};

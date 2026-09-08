import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

import { experienceSchema } from './types/experience';
import { projectSchema } from './types/project';

const experiencesCollection = defineCollection({
  loader: glob({
    base: './src/content/experiences',
    pattern: '**/*.md',
  }),
  schema: experienceSchema,
});

const projectsCollection = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.md',
  }),
  schema: projectSchema,
});

export const collections = {
  experiences: experiencesCollection,
  projects: projectsCollection,
};

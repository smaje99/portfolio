import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogSchema } from './types/blog';
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

const blogCollection = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.md',
  }),
  schema: blogSchema,
});

export const collections = {
  experiences: experiencesCollection,
  projects: projectsCollection,
  blog: blogCollection,
};

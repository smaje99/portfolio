import { collection, config, fields } from '@keystatic/core';

const localeOptions = [
  { label: 'Español', value: 'es' },
  { label: 'English', value: 'en' },
] as const;

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      path: 'src/content/projects/*',
      slugField: 'slug',
      format: { contentField: 'content' },
      columns: ['title', 'locale', 'focus'],
      schema: {
        slug: fields.slug({
          name: {
            label: 'File slug',
            description:
              'Use the shared project slug plus the locale suffix, for example simigs.es or simigs.en.',
            validation: {
              isRequired: true,
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*\.(?:es|en)$/,
                message: 'Use the format project-slug.es or project-slug.en.',
              },
            },
          },
          slug: {
            label: 'Generated filename slug',
            description: 'This value becomes the Markdown filename.',
            validation: {
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*\.(?:es|en)$/,
                message: 'Use the format project-slug.es or project-slug.en.',
              },
            },
          },
        }),
        locale: fields.select({
          label: 'Locale',
          options: localeOptions,
          defaultValue: 'es',
          description: 'Must match the locale suffix in the file slug.',
        }),
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
        focus: fields.text({
          label: 'Focus',
          validation: { isRequired: true },
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          validation: { length: { min: 1 } },
        }),
        content: fields.markdoc({
          label: 'Content',
          description: 'Optional Markdoc body for future editorial use.',
          extension: 'md',
        }),
      },
    }),
  },
});

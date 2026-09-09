import { collection, config, fields } from '@keystatic/core';

const localeOptions = [
  { label: 'Español', value: 'es' },
  { label: 'English', value: 'en' },
] as const;

const statusOptions = [
  { label: 'Draft', value: 'draft' },
  { label: 'Scheduled', value: 'scheduled' },
  { label: 'Published', value: 'published' },
  { label: 'Archived', value: 'archived' },
] as const;

const channelOptions = [
  { label: 'Local site', value: 'site' },
  { label: 'Medium reference', value: 'medium' },
] as const;

const editorialFields = {
  locale: fields.select({
    label: 'Locale',
    options: localeOptions,
    defaultValue: 'es',
    description: 'Must match the locale suffix in the file slug.',
  }),
  status: fields.select({
    label: 'Editorial status',
    options: statusOptions,
    defaultValue: 'draft',
    description: 'Draft and scheduled entries require a long, unique draft slug.',
  }),
  draftSlug: fields.text({
    label: 'Draft slug',
    description: 'Use at least 24 lowercase characters separated by hyphens.',
    validation: {
      length: { min: 24 },
      pattern: {
        regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        message: 'Use lowercase letters, numbers, and hyphens only.',
      },
    },
  }),
};

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
        ...editorialFields,
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
    experiences: collection({
      label: 'Experiences',
      path: 'src/content/experiences/*',
      slugField: 'slug',
      columns: ['position', 'company', 'locale', 'status'],
      schema: {
        slug: fields.slug({
          name: {
            label: 'File slug',
            description: 'Use the shared experience slug plus .es or .en.',
            validation: {
              isRequired: true,
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*\.(?:es|en)$/,
                message: 'Use the format experience-slug.es or experience-slug.en.',
              },
            },
          },
        }),
        ...editorialFields,
        position: fields.text({ label: 'Position', validation: { isRequired: true } }),
        company: fields.text({ label: 'Company', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
        startDate: fields.date({ label: 'Start date', validation: { isRequired: true } }),
        endDate: fields.date({ label: 'End date' }),
        typeOfEmployment: fields.text({ label: 'Employment type', validation: { isRequired: true } }),
        link: fields.url({ label: 'External link' }),
        current: fields.checkbox({ label: 'Current position', defaultValue: false }),
        latest: fields.checkbox({ label: 'Latest highlight', defaultValue: false }),
        skills: fields.array(fields.text({ label: 'Skill' }), { label: 'Skills' }),
      },
    }),
    blog: collection({
      label: 'Blog',
      path: 'src/content/blog/*',
      slugField: 'slug',
      format: { contentField: 'content' },
      columns: ['title', 'locale', 'channel', 'status'],
      schema: {
        slug: fields.slug({
          name: {
            label: 'File slug',
            description: 'Use article-slug.es or article-slug.en.',
            validation: {
              isRequired: true,
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*\.(?:es|en)$/,
                message: 'Use the format article-slug.es or article-slug.en.',
              },
            },
          },
        }),
        ...editorialFields,
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        channel: fields.select({
          label: 'Channel',
          options: channelOptions,
          defaultValue: 'site',
        }),
        externalUrl: fields.url({
          label: 'Medium URL',
          description: 'Required when a Medium reference is published.',
        }),
        content: fields.markdoc({
          label: 'Content',
          description: 'Working content for local articles or Medium drafts.',
          extension: 'md',
        }),
      },
    }),
  },
});

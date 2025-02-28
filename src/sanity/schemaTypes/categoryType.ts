// sanity/schema/categoryType.ts

import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        defineField({
          name: 'pt',
          type: 'string',
          title: 'Título (PT)',
        }),
        defineField({
          name: 'en',
          type: 'string',
          title: 'Title (EN)',
        }),
        defineField({
          name: 'es',
          type: 'string',
          title: 'Título (ES)',
        }),
      ],
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'object',
      fields: [
        defineField({
          name: 'pt',
          type: 'slug',
          title: 'Slug (PT)',
          options: { source: 'title.pt' },
        }),
        defineField({
          name: 'en',
          type: 'slug',
          title: 'Slug (EN)',
          options: { source: 'title.en' },
        }),
        defineField({
          name: 'es',
          type: 'slug',
          title: 'Slug (ES)',
          options: { source: 'title.es' },
        }),
      ],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        defineField({
          name: 'pt',
          type: 'text',
          title: 'Descrição (PT)',
        }),
        defineField({
          name: 'en',
          type: 'text',
          title: 'Description (EN)',
        }),
        defineField({
          name: 'es',
          type: 'text',
          title: 'Descripción (ES)',
        }),
      ],
    }),
  ],
});

// sanity/schema/postType.ts

import { DocumentTextIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: [
        defineField({
          name: 'pt',
          title: 'Conteúdo (PT)',
          type: 'blockContent',
        }),
        defineField({
          name: 'en',
          title: 'Content (EN)',
          type: 'blockContent',
        }),
        defineField({
          name: 'es',
          title: 'Contenido (ES)',
          type: 'blockContent',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title.pt',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author ? `by ${author}` : '',
      };
    },
  },
});

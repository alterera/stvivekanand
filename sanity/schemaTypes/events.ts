// schemas/event.js
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'relatedPosts',
      title: 'Related Blog Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }], // Reference to blog posts
        },
      ],
    },
  ],
});
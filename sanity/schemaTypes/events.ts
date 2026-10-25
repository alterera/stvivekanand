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
      name: 'eventDate',
      title: 'Event date & time',
      type: 'datetime',
      description: 'When the event takes place (shown on the website). Include date and time.',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
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
// schemas/legal.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'legal',
  title: 'Legal Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'The title of the legal page (e.g., "Terms of Use", "Privacy Policy")',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule: any) => Rule.required(),
      description: 'The URL slug for the page',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(160),
      description: 'SEO meta description (max 160 characters)',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'SEO keywords for the page',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
      description: 'The main content of the legal page using rich text',
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
      description: 'The last updated date for this legal page',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'effectiveDate',
      title: 'Effective Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
      description: 'The date this policy became effective',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Terms of Use', value: 'terms-of-use' },
          { title: 'Privacy Policy', value: 'privacy-policy' },
          { title: 'Disclaimer', value: 'disclaimer' },
          { title: 'Refund Policy', value: 'refund-policy' },
          { title: 'Cookie Policy', value: 'cookie-policy' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
      description: 'The type of legal page',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pageType',
      lastUpdated: 'lastUpdated',
    },
    prepare(selection) {
      const { title, subtitle, lastUpdated } = selection;
      return {
        title: title,
        subtitle: `${subtitle} - Last updated: ${lastUpdated ? new Date(lastUpdated).toLocaleDateString() : 'N/A'}`,
      };
    },
  },
});


import { defineType } from "sanity";

export default defineType({
  name: "notice",
  title: "Notices",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Optional short summary for listings.",
    },
    {
      name: "article",
      title: "Article",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
  ],
});

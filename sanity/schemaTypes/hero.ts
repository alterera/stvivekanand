import { defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Slide Order",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "url",
      title: "Button URL",
      type: "url",
    },
  ],
  orderings: [
    {
      title: "Sort by Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});

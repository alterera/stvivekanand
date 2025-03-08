import { defineType } from "sanity";

export default defineType({
  name: "sports",
  title: "Sports",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "intro",
      title: "Introduction",
      type: "text",
    },
    {
      name: "atSchoolTitle",
      title: "At School Title",
      type: "string",
    },
    {
      name: "atSchoolIntro",
      title: "At School Introduction",
      type: "text",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "faq", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
          ],
        },
      ],
    },
    {
      name: "sportId",
      title: "Sport ID (for navigation)",
      type: "slug",
      options: { source: "title", maxLength: 100 },
    },
  ],
});

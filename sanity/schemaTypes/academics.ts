import { defineType } from "sanity";

export default defineType({
  name: "section",
  title: "Academics",
  type: "document",
  fields: [
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
      name: "listContent",
      title: "List Content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", title: "Text", type: "string" },
            { name: "icon", title: "Icon Name", type: "string" },
          ],
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "sectionId",
      title: "Section ID (for navigation)",
      type: "slug",
      options: { source: "title", maxLength: 100 },
    },
  ],
});

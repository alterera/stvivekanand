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
      type: "array", // ✅ Change from "text" to "array"
      of: [{ type: "block" }], // ✅ Enables rich text formatting
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

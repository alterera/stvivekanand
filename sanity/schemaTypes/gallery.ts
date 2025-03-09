import { defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Sports", value: "sports" },
          { title: "Events", value: "events" },
          { title: "Cultural", value: "cultural" },
          { title: "Academics", value: "academics" },
        ],
        layout: "radio", // Optional: Displays options as radio buttons
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }]
    }
  ]
});

import { defineType } from "sanity";

export default defineType({
  name: "transferCertificate",
  title: "Transfer Certificate",
  type: "document",
  fields: [
    {
      name: "serialNo",
      title: "Sl No",
      type: "number",
      validation: (Rule) => Rule.required().integer().positive(),
    },
    {
      name: "studentName",
      title: "Student Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "certificate",
      title: "Certificate PDF",
      type: "file",
      options: {
        accept: "application/pdf",
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: "Serial No, Ascending",
      name: "serialNoAsc",
      by: [{ field: "serialNo", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "studentName",
      subtitle: "serialNo",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Sl No: ${subtitle}` : undefined,
      };
    },
  },
});

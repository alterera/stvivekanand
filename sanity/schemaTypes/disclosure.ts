import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'mandatoryDisclosure',
  title: 'Mandatory Disclosure',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tables',
      title: 'Tables',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'order', title: 'Order', type: 'number' },
            {
              name: 'tableName',
              title: 'Table Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'tableType',
              title: 'Table Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text Table', value: 'text' },
                  { title: 'File Table', value: 'file' },
                  { title: 'Link Table', value: 'link' }
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'srNo', title: 'Sr No', type: 'number' },
                    { name: 'information', title: 'Information', type: 'string' },
                    { name: 'detail', title: 'Detail', type: 'string' },
                    { 
                      name: 'file', 
                      title: 'File', 
                      type: 'file' 
                    },
                    { 
                      name: 'link', 
                      title: 'Link', 
                      type: 'url' 
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});

export default {
    name: 'feeStructure',
    title: 'Fee Structure',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'e.g., New Student Fee 2025-26'
      },
      {
        name: 'fees',
        title: 'Fee Details',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'class',
                title: 'Class',
                type: 'string',
                description: 'e.g., NUR - UKG'
              },
              {
                name: 'emi1',
                title: '1st EMI',
                type: 'string'
              },
              {
                name: 'emi2',
                title: '2nd EMI',
                type: 'string'
              },
              {
                name: 'emi3',
                title: '3rd EMI',
                type: 'string'
              },
              {
                name: 'yearly',
                title: 'Yearly Total',
                type: 'string'
              }
            ]
          }
        ]
      }
    ]
  }
  
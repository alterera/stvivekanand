export default {
    name: 'feeStructure',
    title: 'Fee Structure',
    type: 'document',
    fields: [
      {
        name: 'category',
        title: 'Category',
        type: 'string'
      },
      {
        name: 'annualFee',
        title: 'Annual Fee',
        type: 'string'
      },
      {
        name: 'tuitionFee',
        title: 'Tuition Fee',
        type: 'string'
      },
      {
        name: 'otherCharges',
        title: 'Other Charges',
        type: 'string'
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'string', // Store the icon's identifier, e.g., 'FaSchool'
      }
    ]
  }
  
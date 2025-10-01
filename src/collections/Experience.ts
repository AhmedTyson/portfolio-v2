import type { CollectionConfig } from 'payload/types'

export const Experience: CollectionConfig = {
  slug: 'experience',
  admin: {
    useAsTitle: 'position',
    defaultColumns: ['position', 'company', 'startDate', 'endDate', 'current'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'companyUrl',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
      admin: {
        elements: [
          'ul',
          'ol',
          'link',
        ],
        leaves: [
          'bold',
          'italic',
        ],
      },
    },
    {
      name: 'achievements',
      type: 'array',
      fields: [
        {
          name: 'achievement',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'technology',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
        },
        condition: (data) => !data.current,
      },
    },
    {
      name: 'current',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'work',
      options: [
        {
          label: 'Work Experience',
          value: 'work',
        },
        {
          label: 'Education',
          value: 'education',
        },
        {
          label: 'Internship',
          value: 'internship',
        },
        {
          label: 'Freelance',
          value: 'freelance',
        },
        {
          label: 'Volunteer',
          value: 'volunteer',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Lower numbers appear first',
      },
    },
  ],
}
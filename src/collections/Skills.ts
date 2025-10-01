import type { CollectionConfig } from 'payload/types'

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'proficiency'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Programming Languages',
          value: 'programming',
        },
        {
          label: 'Frameworks & Libraries',
          value: 'frameworks',
        },
        {
          label: 'Databases',
          value: 'databases',
        },
        {
          label: 'Tools & Technologies',
          value: 'tools',
        },
        {
          label: 'Cloud & DevOps',
          value: 'cloud',
        },
      ],
    },
    {
      name: 'proficiency',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Beginner',
          value: 'beginner',
        },
        {
          label: 'Intermediate',
          value: 'intermediate',
        },
        {
          label: 'Advanced',
          value: 'advanced',
        },
        {
          label: 'Expert',
          value: 'expert',
        },
      ],
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Icon name from Lucide React or custom icon path',
      },
    },
    {
      name: 'color',
      type: 'text',
      admin: {
        description: 'Hex color code for the skill badge',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Lower numbers appear first within category',
      },
    },
  ],
}
import type { GlobalConfig } from 'payload/types'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Site Settings',
  admin: {
    description: 'Global site configuration and SEO settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              required: true,
              defaultValue: 'Ahmed Elsayed - Portfolio',
            },
            {
              name: 'siteDescription',
              type: 'textarea',
              required: true,
              defaultValue: 'Full Stack .NET Developer specializing in modern web applications, database design, and AI integration.',
            },
            {
              name: 'siteUrl',
              type: 'text',
              required: true,
            },
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
              filterOptions: {
                mimeType: {
                  contains: 'image',
                },
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seo',
              type: 'group',
              fields: [
                {
                  name: 'metaTitle',
                  type: 'text',
                },
                {
                  name: 'metaDescription',
                  type: 'textarea',
                },
                {
                  name: 'metaImage',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'keywords',
                  type: 'array',
                  fields: [
                    {
                      name: 'keyword',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Theme',
          fields: [
            {
              name: 'theme',
              type: 'group',
              fields: [
                {
                  name: 'primaryColor',
                  type: 'text',
                  defaultValue: '#3b82f6',
                  admin: {
                    description: 'Primary brand color (hex)',
                  },
                },
                {
                  name: 'secondaryColor',
                  type: 'text',
                  defaultValue: '#1e293b',
                  admin: {
                    description: 'Secondary color (hex)',
                  },
                },
                {
                  name: 'defaultTheme',
                  type: 'select',
                  defaultValue: 'system',
                  options: [
                    { label: 'Light', value: 'light' },
                    { label: 'Dark', value: 'dark' },
                    { label: 'System', value: 'system' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Analytics',
          fields: [
            {
              name: 'analytics',
              type: 'group',
              fields: [
                {
                  name: 'googleAnalyticsId',
                  type: 'text',
                  admin: {
                    description: 'Google Analytics tracking ID (e.g., G-XXXXXXXXXX)',
                  },
                },
                {
                  name: 'googleTagManagerId',
                  type: 'text',
                  admin: {
                    description: 'Google Tag Manager ID (e.g., GTM-XXXXXXX)',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'contact',
              type: 'group',
              fields: [
                {
                  name: 'enableContactForm',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'contactEmail',
                  type: 'email',
                  required: true,
                },
                {
                  name: 'autoReply',
                  type: 'richText',
                  admin: {
                    description: 'Auto-reply message for contact form submissions',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
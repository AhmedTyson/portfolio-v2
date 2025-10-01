import { buildConfig } from 'payload/config'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Collections
import { Users } from './collections/Users'
import { Projects } from './collections/Projects'
import { Skills } from './collections/Skills'
import { Experience } from './collections/Experience'
import { BlogPosts } from './collections/BlogPosts'
import { Media } from './collections/Media'

// Globals
import { About } from './globals/About'
import { Settings } from './globals/Settings'

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- Ahmed Elsayed Portfolio',
      favicon: '/favicon.ico',
      ogImage: '/portfolio-og.jpg',
    },
  },
  collections: [
    Users,
    Projects,
    Skills, 
    Experience,
    BlogPosts,
    Media,
  ],
  globals: [
    About,
    Settings,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN || '',
        acl: 'public-read',
      },
    }),
  ],
  cors: [
    'http://localhost:3000',
    'https://your-portfolio-domain.com',
  ],
  csrf: [
    'http://localhost:3000',
    'https://your-portfolio-domain.com',
  ],
})
import { Metadata } from 'next'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { BlogCard } from '@/components/blog-card'

export const metadata: Metadata = {
  title: 'Blog | Ahmed Elsayed',
  description: 'Thoughts on development, technology, and building great software.',
}

export default async function BlogPage() {
  const payload = await getPayloadHMR({ config })
  
  const posts = await payload.find({
    collection: 'blog-posts',
    where: {
      status: {
        equals: 'published'
      }
    },
    sort: '-publishedDate',
    limit: 12
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts on development, technology, and building great software.
            </p>
          </div>
          
          {posts.docs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.docs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
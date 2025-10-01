import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RichText } from '@/components/rich-text'
import { formatDate } from '@/lib/utils'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const payload = await getPayloadHMR({ config })
  
  const posts = await payload.find({
    collection: 'blog-posts',
    where: {
      slug: {
        equals: params.slug
      }
    }
  })

  const post = posts.docs[0]

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Ahmed Elsayed`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [
        {
          url: typeof post.featuredImage === 'object' ? post.featuredImage.url || '' : '',
          width: 1200,
          height: 630,
        }
      ] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const payload = await getPayloadHMR({ config })
  
  const posts = await payload.find({
    collection: 'blog-posts',
    where: {
      slug: {
        equals: params.slug
      }
    }
  })

  const post = posts.docs[0]

  if (!post) {
    notFound()
  }

  const featuredImage = typeof post.featuredImage === 'object' ? post.featuredImage : null

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {formatDate(post.publishedDate)}
              </div>
              {post.readingTime && (
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {post.readingTime} min read
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags?.map((tag: any, index: number) => (
                <Badge key={index} variant="outline">
                  {tag.tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {featuredImage && (
            <div className="mb-8">
              <Image
                src={featuredImage.url || ''}
                alt={featuredImage.alt || post.title}
                width={800}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          )}
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content && <RichText content={post.content} />}
          </div>
        </div>
      </div>
    </div>
  )
}
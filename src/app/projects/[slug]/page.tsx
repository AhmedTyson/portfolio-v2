import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RichText } from '@/components/rich-text'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const payload = await getPayloadHMR({ config })
  
  const projects = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: params.slug
      }
    }
  })

  const project = projects.docs[0]

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Ahmed Elsayed`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.featuredImage ? [
        {
          url: typeof project.featuredImage === 'object' ? project.featuredImage.url || '' : '',
          width: 1200,
          height: 630,
        }
      ] : [],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const payload = await getPayloadHMR({ config })
  
  const projects = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: params.slug
      }
    }
  })

  const project = projects.docs[0]

  if (!project) {
    notFound()
  }

  const featuredImage = typeof project.featuredImage === 'object' ? project.featuredImage : null

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/#projects">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {project.githubUrl && (
                <Button asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="outline" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech: any, index: number) => (
                <Badge key={index} variant="secondary">
                  {tech.technology}
                </Badge>
              ))}
            </div>
          </div>
          
          {featuredImage && (
            <div className="mb-8">
              <Image
                src={featuredImage.url || ''}
                alt={featuredImage.alt || project.title}
                width={800}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          )}
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {project.content && <RichText content={project.content} />}
          </div>
          
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((item: any, index: number) => {
                  const image = typeof item.image === 'object' ? item.image : null
                  if (!image) return null
                  
                  return (
                    <Image
                      key={index}
                      src={image.url || ''}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
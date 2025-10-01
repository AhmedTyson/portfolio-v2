'use client'

import React from 'react'

interface RichTextProps {
  content: any
  className?: string
}

export function RichText({ content, className }: RichTextProps) {
  if (!content) return null

  // This is a simplified rich text renderer
  // In a real implementation, you'd want to use Payload's rich text renderer
  // or build a more comprehensive one based on the Lexical editor structure
  
  const renderNode = (node: any, index: number): React.ReactNode => {
    if (!node) return null

    switch (node.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-4">
            {node.children?.map((child: any, childIndex: number) =>
              renderNode(child, childIndex)
            )}
          </p>
        )

      case 'heading':
        const HeadingTag = `h${node.tag}` as keyof JSX.IntrinsicElements
        return (
          <HeadingTag key={index} className="font-bold mb-4">
            {node.children?.map((child: any, childIndex: number) =>
              renderNode(child, childIndex)
            )}
          </HeadingTag>
        )

      case 'text':
        let textElement = node.text
        
        if (node.bold) {
          textElement = <strong>{textElement}</strong>
        }
        if (node.italic) {
          textElement = <em>{textElement}</em>
        }
        if (node.underline) {
          textElement = <u>{textElement}</u>
        }
        if (node.code) {
          textElement = <code className="bg-muted px-1 rounded">{textElement}</code>
        }
        
        return <React.Fragment key={index}>{textElement}</React.Fragment>

      case 'link':
        return (
          <a
            key={index}
            href={node.url}
            target={node.newTab ? '_blank' : undefined}
            rel={node.newTab ? 'noopener noreferrer' : undefined}
            className="text-primary underline hover:no-underline"
          >
            {node.children?.map((child: any, childIndex: number) =>
              renderNode(child, childIndex)
            )}
          </a>
        )

      case 'list':
        const ListTag = node.listType === 'number' ? 'ol' : 'ul'
        return (
          <ListTag key={index} className="mb-4 ml-6 list-disc">
            {node.children?.map((child: any, childIndex: number) =>
              renderNode(child, childIndex)
            )}
          </ListTag>
        )

      case 'listitem':
        return (
          <li key={index} className="mb-2">
            {node.children?.map((child: any, childIndex: number) =>
              renderNode(child, childIndex)
            )}
          </li>
        )

      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-4">
            {node.children?.map((child: any, childIndex: number) =>
              renderNode(child, childIndex)
            )}
          </blockquote>
        )

      default:
        return null
    }
  }

  return (
    <div className={className}>
      {content?.root?.children?.map((node: any, index: number) =>
        renderNode(node, index)
      )}
    </div>
  )
}
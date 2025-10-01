import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Ahmed Elsayed - Full Stack Developer Portfolio',
  description: 'Business Information Systems student and Full Stack .NET Developer specializing in modern web applications, database design, and AI integration.',
  keywords: ['Full Stack Developer', '.NET', 'C#', 'Python', 'React', 'Next.js', 'Portfolio', 'Ahmed Elsayed'],
  authors: [{ name: 'Ahmed Elsayed' }],
  creator: 'Ahmed Elsayed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-domain.com',
    siteName: 'Ahmed Elsayed Portfolio',
    title: 'Ahmed Elsayed - Full Stack Developer Portfolio',
    description: 'Business Information Systems student and Full Stack .NET Developer specializing in modern web applications.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmed Elsayed - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Elsayed - Full Stack Developer Portfolio',
    description: 'Business Information Systems student and Full Stack .NET Developer specializing in modern web applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
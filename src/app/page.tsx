import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { BlogSection } from '@/components/sections/blog-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  )
}
'use client'

import { useRef } from 'react'
import HeroSection from '@/components/hero-section'
import ExperienceSection from '@/components/experience-section'
import SkillsSection from '@/components/skills-section'
import CapabilitiesSection from '@/components/capabilities-section'
import Footer from '@/components/footer'

export default function Home() {
  const experienceRef = useRef<HTMLDivElement>(null)

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onViewWorkClick={scrollToExperience} />
      <ExperienceSection ref={experienceRef} />
      <SkillsSection />
      <CapabilitiesSection />
      <Footer />
    </main>
  )
}

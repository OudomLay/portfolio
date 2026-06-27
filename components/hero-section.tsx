'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface HeroSectionProps {
  onViewWorkClick: () => void
}

export default function HeroSection({ onViewWorkClick }: HeroSectionProps) {
  return (
    <section className="px-6 py-16 md:px-8 md:py-24 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                Available for work
              </span>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-balance">
                Hello, I&apos;m <span className="text-primary">Dom</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                UX/UI Designer
              </h2>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* <Button
                // onClick={onViewWorkClick}
                
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full font-semibold"
              >
                View My Work →
              </Button> */}
              <a
                href="https://www.figma.com/design/NxFrDS0CtIksSUm1j9FBcD/Personal-Project?node-id=1-2&t=ycVD511RUNzS8kXE-1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full font-semibold hover:bg-primary/90 bg-primary text-primary-foreground  flex items-center"
              >
                View My Work
              </a>
              <a
                href="https://t.me/Oudo3"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full font-semibold border border-foreground hover:bg-foreground hover:text-background transition-colors flex items-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl flex items-center justify-center overflow-hidden">
              <Image
                src="/Dom.png"
                alt="Dom - UX/UI Designer"
                width={400}
                height={500}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

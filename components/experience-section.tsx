'use client'

import { forwardRef } from 'react'

const ExperienceSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="px-6 py-16 md:px-8 md:py-24 lg:px-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content - Heading */}
          <div>
            <h3 className="text-sm font-semibold text-primary tracking-wide uppercase mb-2">
              About
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Crafting Digital
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-1">
              Experiences
            </h2>
            <div className="w-12 h-1 bg-primary mt-6 rounded-full" />
          </div>

          {/* Right Content - Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Hello, my name is <span className="font-semibold text-foreground text-primary">Lay Oudom</span>. I am 24 years old and graduate from the
                <span className="font-semibold text-foreground"> Royal University of Phnom Penh (RUPP)</span>.
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm a UX/UI Designer with 1 year of experience creating user-friendly and visually appealing mobile and web applications. I also have 6 months of experience in Graphic Design, which strengthens my understanding of visual design, branding, and layout.
                In my current role, I design user flows, wireframes, and high-fidelity interfaces using Figma while collaborating with cross-functional teams. I also support application and website testing, review user flows, and prepare design documentation to ensure a smooth development process. With a background in Computer Science, I enjoy creating intuitive digital experiences that balance user needs with business goals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-xs font-semibold text-primary tracking-wide uppercase mb-2">
                  Education
                </h4>
                <p className="text-base md:text-lg font-semibold text-foreground">
                  Computer Science, RUPP
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-primary tracking-wide uppercase mb-2">
                  Location
                </h4>
                <p className="text-base md:text-lg font-semibold text-foreground">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

ExperienceSection.displayName = 'ExperienceSection'

export default ExperienceSection

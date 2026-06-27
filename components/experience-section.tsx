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
                Hello, my name is <span className="font-semibold text-foreground text-primary">Lay Oudom</span>. I am 24 years old and a proud graduate from the
                <span className="font-semibold text-foreground"> Royal University of Phnom Penh (RUPP)</span>.
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                As a dedicated UXUI Designer, I specialize in translating complex problems into intuitive, user-centric digital solutions. Beyond design, I actively assist with web frontend development, ensuring that the visual integrity of my concepts is maintained through implementation and rigorous testing activities.
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

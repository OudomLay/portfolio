'use client'

const SkillItem = ({ title, percentage }: { title: string; percentage: number }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-base md:text-lg font-semibold text-foreground whitespace-nowrap">
        {title}
      </h3>
      <div className="w-full max-w-xs h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-bold text-primary">{percentage}%</span>
    </div>
  )
}

export default function SkillsSection() {
  const skills = [
    { title: 'UX/UI Design', percentage: 80 },
    { title: 'Web Development', percentage: 70 },
    { title: 'Quality Testing', percentage: 80 },
    { title: 'Graphic Design', percentage: 70 },
  ]

  return (
    <section className="px-6 py-16 md:px-8 md:py-24 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold text-primary tracking-wide uppercase mb-4">
            Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technical Proficiency
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillItem key={skill.title} title={skill.title} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  )
}

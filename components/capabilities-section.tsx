'use client'

const CapabilityCard = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: string[]
}) => {
  return (
    <div className="p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span className="text-sm md:text-base text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: (
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">🎨</span>
        </div>
      ),
      title: 'UX/UI Design',
      items: [
        'Design Mobile App',
        'Design Web',
        'Interactive Prototyping (Figma)',
      ],
    },
    {
      icon: (
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">💻</span>
        </div>
      ),
      title: 'Web Frontend Assistant',
      items: [
        'Component Implementation',
        'Responsive Layout Design',
        'CSS/Tailwind Styling',
      ],
    },
    {
      icon: (
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">✓</span>
        </div>
      ),
      title: 'QA & Testing',
      items: [
        'Processing Flow',
        'Functional Verification',
        'Bug Tracking & Reporting',
      ],
    },
    {
      icon: (
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">📊</span>
        </div>
      ),
      title: 'Graphic Design',
      items: [
        'Experience on Photoshop & Illustrator',
        'Assistant Cameraman',
        'Technical Requirements',
      ],
    },
  ]

  return (
    <section className="px-6 py-16 md:px-8 md:py-24 lg:px-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Experience & Capabilities
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
            A multidisciplinary approach to building modern digital products from conception to
            delivery.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((capability, idx) => (
            <CapabilityCard key={idx} {...capability} />
          ))}
        </div>
      </div>
    </section>
  )
}

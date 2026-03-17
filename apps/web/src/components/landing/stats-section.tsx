import { MotionDiv } from "../motion/motion-elements"

const stats = [
  { value: "2,000+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "45%", label: "Avg. Cost Reduction" },
  { value: "150+", label: "Countries Supported" },
]

const StatsSection = () => (
  <section className="bg-hero relative overflow-hidden py-20">
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    />
    <div className="relative z-10 container mx-auto px-4">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <MotionDiv
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-gradient-gold mb-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {s.value}
            </div>
            <div className="text-sm text-muted-foreground/60">{s.label}</div>
          </MotionDiv>
        ))}
      </div>
    </div>
  </section>
)

export default StatsSection

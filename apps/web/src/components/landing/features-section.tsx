"use client"
import {
  AlignBottomIcon,
  LightningIcon,
  ShieldIcon,
  ShoppingCartIcon,
  UsersIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react"
import { MotionDiv } from "../motion/motion-elements"

const features = [
  {
    icon: AlignBottomIcon,
    title: "Financial Management",
    desc: "Real-time accounting, budgeting, and financial reporting with multi-currency support.",
    color: "text-primary dark:text-secondary",
  },
  {
    icon: ShoppingCartIcon,
    title: "Supply Chain",
    desc: "End-to-end procurement, inventory, and logistics management across global operations.",
    color: "text-primary dark:text-secondary",
  },
  {
    icon: UsersIcon,
    title: "Human Capital",
    desc: "Payroll, talent acquisition, performance tracking, and employee self-service portals.",
    color: "text-primary dark:text-secondary",
  },
  {
    icon: UsersThreeIcon,
    title: "Project Management",
    desc: "Resource planning, timeline tracking, and collaboration tools for complex projects.",
    color: "text-primary dark:text-accent",
  },
  {
    icon: ShieldIcon,
    title: "Compliance & Risk",
    desc: "Automated regulatory compliance, audit trails, and enterprise risk management.",
    color: "text-primary dark:text-accent",
  },
  {
    icon: LightningIcon,
    title: "AI-Powered Insights",
    desc: "Predictive analytics, intelligent automation, and actionable business recommendations.",
    color: "text-primary dark:text-accent",
  },
]

const FeaturesSection = () => (
  <section id="features" className="bg-background py-24">
    <div className="container mx-auto px-4">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="text-sm font-semibold tracking-wider text-primary uppercase dark:text-secondary">
          Core Modules
        </span>
        <h2 className="font-display mt-3 mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          Everything you need,
          <br />
          <span className="text-gradient-gold">nothing you don't</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Six powerful modules that work together seamlessly, replacing dozens
          of disconnected tools.
        </p>
      </MotionDiv>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <MotionDiv
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group hover:shadow-elevated rounded-xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-muted ${f.color} transition-transform group-hover:scale-110`}
            >
              {f.icon && <f.icon size={24} />}
            </div>
            <h3 className="font-display mb-2 text-lg font-semibold text-foreground">
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {f.desc}
            </p>
          </MotionDiv>
        ))}
      </div>
    </div>
  </section>
)

export default FeaturesSection

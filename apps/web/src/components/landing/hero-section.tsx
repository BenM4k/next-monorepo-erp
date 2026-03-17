"use client"
import { ArrowRightIcon, PlayIcon } from "@phosphor-icons/react"
import { Button } from "@workspace/ui/components/button"
import { MotionDiv, MotionP } from "../motion/motion-elements"
import Link from "next/link"
// import { ArrowRight, Play } from "lucide-react"

const HeroSection = () => (
  <section className="bg-hero relative flex min-h-[90vh] items-center overflow-hidden">
    {/* Grid pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Glowing orbs */}
    <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />
    <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />

    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-3xl">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/80 px-4 py-1.5 text-sm font-medium text-secondary-foreground dark:bg-secondary/20">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary dark:bg-accent" />
            Enterprise-grade ERP Platform
          </span>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display mb-6 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-7xl dark:text-primary-foreground"
        >
          Unify your
          <br />
          <span className="text-gradient-gold">entire business</span>
          <br />
          in one platform
        </MotionDiv>

        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 max-w-xl text-lg leading-relaxed text-secondary-foreground/70 sm:text-xl"
        >
          Quantix connects finance, supply chain, HR, and operations into a
          single intelligent system — built for enterprises that move fast.
        </MotionP>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-4"
        >
          <Button variant="hero" size="lg" className="px-8 text-base" asChild>
            <Link href="/auth/sign-up">
              Start Free Trial <ArrowRightIcon size={18} />
            </Link>
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            className="border-muted-foreground/30 px-8 text-base text-muted-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="/demo">
              <PlayIcon size={16} /> Watch Demo
            </Link>
          </Button>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex items-center gap-6 text-sm dark:text-primary-foreground/50"
        >
          <span>Trusted by 2,000+ enterprises</span>
          <span className="h-4 w-px dark:bg-primary-foreground/20" />
          <span>99.9% uptime SLA</span>
          <span className="hidden h-4 w-px sm:block dark:bg-primary-foreground/20" />
          <span className="hidden sm:block">SOC 2 Certified</span>
        </MotionDiv>
      </div>
    </div>
  </section>
)

export default HeroSection

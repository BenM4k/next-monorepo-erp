"use client"

import { ArrowRightIcon } from "@phosphor-icons/react"
import { Button } from "@workspace/ui/components/button"
import { MotionDiv } from "../motion/motion-elements"

const CTASection = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-4">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-hero relative overflow-hidden rounded-2xl p-12 text-center sm:p-16"
      >
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-secondary/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />
        <div className="relative z-10">
          <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl dark:text-primary-foreground">
            Ready to transform your operations?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground/70">
            Join 2,000+ enterprises already running smarter with Quantix. Start
            your free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="px-8 text-base">
              Start Free Trial <ArrowRightIcon size={18} />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="border-muted-foreground/30 px-8 text-base text-muted-foreground"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </MotionDiv>
    </div>
  </section>
)

export default CTASection

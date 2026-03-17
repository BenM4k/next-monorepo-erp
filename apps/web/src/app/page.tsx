import CTASection from "@/components/landing/cta-section"
import FeaturesSection from "@/components/landing/features-section"
import Footer from "@/components/landing/footer"
import HeroSection from "@/components/landing/hero-section"
import Navbar from "@/components/landing/navbar"
import StatsSection from "@/components/landing/stats-section"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

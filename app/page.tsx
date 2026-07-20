import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProductGridSection } from "@/components/product-grid-section"
import { AmbassadorSection } from "@/components/ambassador-section"
import { MissionSection } from "@/components/mission-section"
import { MacroDetails } from "@/components/macro-details"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <SiteHeader />
      <HeroSection />
      <ProductGridSection />
      <AmbassadorSection />
      <MissionSection />
      <MacroDetails />
      <SiteFooter />
    </main>
  )
}

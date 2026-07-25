import { SiteHeader } from "@/components/site-header"
import { SplashScreen } from "@/components/splash-screen"
import { HeroSection } from "@/components/hero-section"
import { FounderWordSection } from "@/components/founder-word-section"
import { ThreeDSection } from "@/components/three-d-section"
import { ProductGridSection } from "@/components/product-grid-section"
import { AmbassadorSection } from "@/components/ambassador-section"
import { MissionSection } from "@/components/mission-section"
import { MacroDetails } from "@/components/macro-details"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <SplashScreen />
      <SiteHeader />
      <HeroSection />
      <ThreeDSection />
      <FounderWordSection />
      <ProductGridSection />
      <AmbassadorSection />
      <MissionSection />
      <MacroDetails />
      <SiteFooter />
    </main>
  )
}

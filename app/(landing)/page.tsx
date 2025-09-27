import About from "@/components/about";
import FAQ from "@/components/Faq";
import GaleriSection from "@/components/GaleriSection";
import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";
import PricingPage from "@/components/Pricing";
import Team from "@/components/Team";
export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <PricingPage/>
      <About/>
      <Team/>
      <GaleriSection />
      <FAQ/>
    </>
  );
}

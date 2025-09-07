import About from "@/components/about";
import Footer from "@/components/Footer";
import GaleriSection from "@/components/GaleriSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import PricingPage from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnerSection />
      <PricingPage/>
      <GaleriSection />
      <About/>
      <Team/>

      <Footer/>
    </>
  );
}

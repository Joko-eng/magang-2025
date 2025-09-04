import GaleriSection from "@/components/GaleriSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnerSection />
      <GaleriSection />
    </>
  );
}

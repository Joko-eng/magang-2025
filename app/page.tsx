import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnerSection />
    </>
  );
}

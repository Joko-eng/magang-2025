import Image from "next/image";
import React from "react";
import { Marquee } from "@/components/magicui/marquee";

const PartnerCard = ({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-start gap-2 sm:gap-3 mx-6 sm:mx-8 md:mx-12 flex-shrink-0 h-16 sm:h-auto">
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        className="w-8 sm:w-6 md:w-8 h-auto flex-shrink-0"
      />
      <p className="text-gray-900 text-xs sm:text-sm md:text-base text-center sm:text-left whitespace-nowrap mt-auto sm:mt-0">
        {label}
      </p>
    </div>
  );
};

function PartnerSection() {
  const partners = [
    {
      src: "/image/blockchain.png",
      alt: "Digital Blockchain Indonesia",
      label: "Digital Blockchain Indonesia",
    },
    {
      src: "/image/pavo.png",
      alt: "Official Pavo",
      label: "Official Pavo",
    },
    {
      src: "/image/nagapara.png",
      alt: "Nagapoin",
      label: "Nagapoin",
    },
    {
      src: "/image/gasvin.png",
      alt: "Gaswin Acha Suar",
      label: "Gaswin Acha Suar",
    },
  ];

  return (
    <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6">
      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          className="[--duration:25s] sm:[--duration:20s] md:[--duration:30s]"
        >
          {partners.map((partner, index) => (
            <PartnerCard key={`partner-${index}`} {...partner} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default PartnerSection;

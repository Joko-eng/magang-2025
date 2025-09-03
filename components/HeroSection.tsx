"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden px-4 sm:px-8">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <Image
          src="/image/backround.png"
          alt="Laptop Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col justify-start min-h-[70vh] container mx-auto px-4 sm:px-6 text-left pt-24 sm:pt-32 lg:pt-40">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Kecepatan dalam Industri Web3,
            <br /> Blockchain, dan Kripto.
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            Kami adalah perusahaan rintisan yang berada di jantung Web3,
            blockchain, dan kripto, tempat teknologi dan kreativitas berpadu.
            Tim kami membangun solusi inovatif yang membantu bisnis berkembang
            di dunia desentralisasi.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-sm sm:text-base">
            Gabung Sekarang
          </Button>
        </div>
      </main>

      {/* Partner Logos */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12">
        {[
          { src: "/image/dbi.png", alt: "Digital Blockchain Indonesia", label: "Digital Blockchain Indonesia" },
          { src: "/image/pavo.png", alt: "Official Pavo", label: "Official Pavo" },
          { src: "/image/nagapara.png", alt: "Nagapoin", label: "Nagapoin" },
          { src: "/image/gasvin.png", alt: "Gaswin Acha Suar", label: "Gaswin Acha Suar" },
        ].map((partner) => (
          <div key={partner.label} className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={32}
              height={32}
              className="w-6 sm:w-8 h-auto"
            />
            <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">{partner.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;

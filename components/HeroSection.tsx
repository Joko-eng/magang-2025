"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden px-4 sm:px-8">
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


      <main className="relative z-10 flex flex-col justify-start min-h-[70vh] container mx-auto px-4 sm:px-6 text-left pt-36 sm:pt-40 lg:pt-52">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
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
            {/* <Button className="bg-primary dark:bg-primary dark:text-white hover:bg-blue-700 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-sm sm:text-base">
            Gabung Sekarang
          </Button> */}
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default HeroSection;

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { networks, packagesData, Network } from "./../lib/pricing";
import { motion } from "framer-motion";

export default function PricingPage() {
  const [activeNetwork, setActiveNetwork] = useState<Network>("SOLANA");

  return (
    
    <div id="harga" className="p-6 max-w-7xl mx-auto bg-transparent text-white">
      <h2 className="text-center text-primary dark:text-white text-2xl sm:text-3xl font-bold mb-6">
        Buat Token Baru
      </h2>
      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-8 px-4 sm:px-0 flex-wrap">
        {networks.map((net) => (
          <Button
            key={net}
            variant={activeNetwork === net ? "default" : "outline"}
            onClick={() => setActiveNetwork(net)}
            className={`px-4 rounded-full transition-all duration-200 ${
              activeNetwork === net
                ? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary dark:text-white"
                : "bg-white text-primary dark:text-black dark:bg-white hover:bg-white dark:hover:bg-white"
            }`}
          >
            {net}
          </Button>
        ))}
      </div>

      {/* Pricing Cards */}
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {packagesData[activeNetwork]?.map((pkg, idx) => (
          <Card
            key={idx}
            className="bg-primary text-primary-foreground shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-border p-3 sm:p-4 flex flex-col"
          >
            <CardHeader className="text-center flex-shrink-0">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl dark:text-white font-bold">
                {pkg.name}
              </CardTitle>
              <p className="text-xs sm:text-sm lg:text-base text-white dark:text-white mt-2">
                {pkg.desc}
              </p>
            </CardHeader>
            <CardContent className="text-center flex-grow flex flex-col justify-between">
              <div className="mb-4 sm:mb-6">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white dark:text-blue-400">
                  {pkg.price}
                </p>
                <p className="text-xs sm:text-sm text-white dark:text-white">
                  /proyek
                </p>
              </div>

              <Button className="mb-4 sm:mb-6 bg-secondary hover:bg-primary-700 text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition-colors duration-200 text-sm sm:text-base">
                Beli Paket
              </Button>

              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-left flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-blue-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white dark:text-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      </motion.div>
    </div>
  );
}

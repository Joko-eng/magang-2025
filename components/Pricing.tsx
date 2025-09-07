"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const networks = ["SOLANA", "SUI", "ETH", "BNB", "TRON"];

const packagesData = {
  SOLANA: [
    {
      name: "Paket Dasar",
      price: "$2.000",
      desc: "Fitur penting untuk membuat token dasar.",
      features: [
        "Pembuatan token di jaringan SOLANA",
        "Kon Paskoin 1M",
        "Tambahkan Likuiditas $50 USD",
        "Media Sosial (Twitter)",
        "Telegram (5 anggota)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Putih & Peta Jalan",
        "Daftar NusaDex & Bursa Efek Lainnya",
      ],
    },
    {
      name: "Paket Standar",
      price: "$2.000",
      desc: "Fitur penting untuk membuat token standar.",
      features: [
        "Pembuatan token di jaringan SOLANA",
        "Kon Paskoin 5M",
        "Tambahkan Likuiditas $75 USD",
        "Media Sosial (Twitter)",
        "Telegram (50 anggota)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Putih & Peta Jalan",
        "Daftar NusaDex & Bursa Efek Lainnya",
        "2 postingan pertama untuk promosi",
      ],
    },
    {
      name: "Paket Lanjutan",
      price: "$2.000",
      desc: "Fitur penting untuk membuat token canggih.",
      features: [
        "Pembuatan token di jaringan SOLANA",
        "Kon Paskoin 10M",
        "Tambahkan Likuiditas $100 USD",
        "Media Sosial (Twitter, Telegram 100 anggota)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Putih & Peta Jalan",
        "Daftar NusaDex & Bursa Efek Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan Eksekutif NusaDex dan Bursa Efek Lainnya",
      ],
    },
  ],

  SUI: [
    {
      name: "Basic Package",
      price: "$1.500",
      desc: "Essential features for creating a basic token.",
      features: [
        "Token creation on the SUI network",
        "Supply Coin 1M",
        "Add Liquidity $30 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
      ],
    },
    {
      name: "Standard Package ",
      price: "$3.000",
      desc: "Essential features for creating a standard token.",
      features: [
        "Token creation on the SUI network",
        "Supply Coin 5M",
        "Add Liquidity $50 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
        "First 3 posts for promotion",
      ],
    },
    {
      name: "Advance Package",
      price: "$4.500",
      desc: "Essential features for creating an advance token.",
      features: [
        "Token creation on the SUI network",
        "Supply Coin 10M",
        "Add Liquidity $75 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
        "First 10 posts for promotion",
        "Exclusive Listing of NusaDex and other Exchanges",
        "Additional features such as:",
        "Social Media X Verified",
        "Request custom Supply",
        "50 Wallet Holder",
      ],
    },
  ],

  ETH: [
    {
      name: "Basic Package",
      price: "$12.500",
      desc: "Essential features for creating a basic token.",
      features: [
        "Token creation on the ETHEREUM network",
        "Supply Coin 1M",
        "Add Liquidity $70 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
      ],
    },
    {
      name: "Standard Package ",
      price: "$37.000",
      desc: "Essential features for creating a standard token.",
      features: [
        "Token creation on the ETHEREUM network",
        "Supply Coin 5M",
        "Add Liquidity $100 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
        "First 3 posts for promotion",
      ],
    },
    {
      name: "Advance Package",
      price: "$74.000",
      desc: "Essential features for creating an advance token.",
      features: [
        "Token creation on the ETHEREUM network",
        "Supply Coin 10M",
        "Add Liquidity $130 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
        "First 10 posts for promotion",
        "Exclusive Listing of NusaDex and other Exchanges",
        "Additional features such as:",
        "Social Media X Verified",
        "Request custom Supply",
        "50 Wallet Holder",
      ],
    },
  ],

  BNB: [
    {
      name: "Basic Package",
      price: "$4.500",
      desc: "Essential features for creating a basic token.",
      features: [
        "Token creation on the BNB network",
        "Supply Coin 1M",
        "Add Liquidity $50 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
      ],
    },
    {
      name: "Standard Package ",
      price: "$9.000",
      desc: "Essential features for creating a standard token.",
      features: [
        "Token creation on the BNB network",
        "Supply Coin 5M",
        "Add Liquidity $75 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
        "First 3 posts for promotion",
      ],
    },
    {
      name: "Advance Package",
      price: "$12.500",
      desc: "Essential features for creating an advance token.",
      features: [
        "Token creation on the BNB network",
        "Supply Coin 10M",
        "Add Liquidity $100 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
        "First 10 posts for promotion",
        "Exclusive Listing of NusaDex and other Exchanges",
        "Additional features such as:",
        "Social Media X Verified",
        "Request custom Supply",
        "50 Wallet Holder",
      ],
    },
  ],

  TRON: [
    {
      name: "Basic Package",
      price: "$4.000",
      desc: "Essential features for creating a basic token.",
      features: [
        "Token creation on the TRON network",
        "Supply Coin 1M",
        "Add Liquidity $50 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
      ],
    },
    {
      name: "Standard Package ",
      price: "$7.000",
      desc: "Essential features for creating a standard token.",
      features: [
        "Token creation on the TRON network",
        "Supply Coin 5M",
        "Add Liquidity $75 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
        "First 3 posts for promotion",
      ],
    },
    {
      name: "Advance Package",
      price: "$9.500",
      desc: "Essential features for creating an advance token.",
      features: [
        "Token creation on the TRON network",
        "Supply Coin 10M",
        "Add Liquidity $100 USD",
        "Social Media (X/Twitter, Telegram, and Instagram)",
        "Website + Free Domain 1 Year",
        "Manual Book",
        "Whitepaper & Roadmap",
        "NusaDex & Other Exchange Listings",
        "First 10 posts for promotion",
        "Exclusive Listing of NusaDex and other Exchanges",
        "Additional features such as:",
        "Social Media X Verified",
        "Request custom Supply",
      ],
    },
  ],
};

export default function PricingPage() {
  const [activeNetwork, setActiveNetwork] = useState("SOLANA");

  return (
    <div className="p-6 max-w-7xl mx-auto 
      bg-white text-gray-900 
      dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 dark:text-gray-100 
      transition-colors duration-300 rounded-2xl shadow-lg"
    >
      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-8 px-4 sm:px-0">
        {networks.map((net) => (
          <Button
            key={net}
            variant={activeNetwork === net ? "default" : "outline"}
            onClick={() => setActiveNetwork(net)}
            className={`w-auto px-4 rounded-full transition-all duration-200
              ${
                activeNetwork === net
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-200 
                     dark:bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
          >
            {net}
          </Button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packagesData[activeNetwork].map((pkg, idx) => (
          <Card
            key={idx}
            className="bg-gray-100 text-gray-900 shadow-xl rounded-2xl transition-colors duration-300
              dark:bg-slate-900/80 dark:text-gray-100 dark:border dark:border-gray-700"
          >
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold">
                {pkg.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-4 text-gray-600 dark:text-gray-300">{pkg.desc}</p>
              <p className="text-center text-2xl font-bold mb-2">{pkg.price}</p>
              <p className="text-center mb-4">/project</p>
              <div className="flex justify-center mb-6">
                <Button
                  variant="secondary"
                  className="rounded-full px-6 py-2 font-semibold 
                    bg-blue-600 text-white hover:bg-blue-700 
                    dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Buy Plan
                </Button>
              </div>
              <ul className="space-y-2 text-sm">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
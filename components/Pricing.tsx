"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const networks = ["SOLANA", "SUI", "ETH", "BNB", "TRON"];

const packages = [
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
];

export default function PricingPage() {
  const [activeNetwork, setActiveNetwork] = useState("SOLANA");

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-8">
        {networks.map((net) => (
          <Button
            key={net}
            variant={activeNetwork === net ? "default" : "outline"}
            onClick={() => setActiveNetwork(net)}
            className="rounded-full"
          >
            {net}
          </Button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, idx) => (
          <Card key={idx} className="bg-primary text-white shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold">
                {pkg.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-4">{pkg.desc}</p>
              <p className="text-center text-2xl font-bold mb-2">{pkg.price}</p>
              <p className="text-center mb-4">/proyek</p>
              <div className="flex justify-center mb-6">
                <Button variant="secondary" className="rounded-full text-white">Beli Paket</Button>
              </div>
              <ul className="space-y-2 text-sm">
                {pkg.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

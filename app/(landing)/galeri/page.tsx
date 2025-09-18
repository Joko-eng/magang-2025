"use client";
import React from "react";
import next from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const galeris = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
    tittle:
      "Mudapediaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    href: "#",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    tittle: "Mudapedia",
    href: "#",
  },
];

export default function Galeri() {
  return (
    <div className="">
      <div className="flex items-center justify-between px-4 sm:px-8 py-6 sm:py-10 mt-12 sm:mt-20">
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-bold dark:text-white">
          Galeri Instagram
        </h1>
      </div>

      <div className="flex justify-center p-4">
        <div className="relative w-full max-w-[500px] mx-4 sm:mx-0">
          <input
            type="text"
            placeholder="Cari..."
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-200"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8 gap-4 sm:gap-x-6 sm:gap-y-14 px-4 sm:px-8 lg:px-20 mb-10">
        {galeris.map((galeri) => (
          <div
            key={galeri.id}
            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer"
          >
            <img
              src={galeri.image}
              alt={`Galeri ${galeri.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end text-center sm:text-left p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                <h3 className="font-semibold text-white text-sm sm:text-lg mb-2 sm:mb-0 max-w-full truncate sm:line-clamp-2 sm:overflow-hidden sm:text-ellipsis">
                  {galeri.tittle}
                </h3>
                <Link href={galeri.href} className="sm:ml-2">
                  <Button className="w-full sm:w-auto font-medium text-white text-xs sm:text-sm bg-primary hover:bg-primary/80 px-4 py-2 whitespace-nowrap">
                    Lihat Postingan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

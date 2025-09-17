"use client";
import React from "react";
import next from "next";
import Link from "next/link";
import { Search } from "lucide-react";

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
    tittle: "Mudapedia",
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
    <>
      <div className="flex items-center justify-between px-8 py-6 mt-24">
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl md:text-2xl lg:text-3xl text-primary font-bold dark:text-white">
          Galeri Instagram
        </h1>
      </div>

      <div className="flex justify-center p-4">
        <div className="relative w-[500px]">
          <input
            type="text"
            placeholder="Cari..."
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-8 gap-x-8 gap-y-20 px-20 mb-10">
        {galeris.map((galeri) => (
          <div key={galeri.id}>
            <div className="aspect-square overflow-hidden">
              <img
                src={galeri.image}
                alt={`Galeri ${galeri.id}`}
                className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-200 cursor-pointer dark:text-white"
              />
            </div>
            <div className="mt-2 text-center">
              <h3 className="font-semibold text-primary dark:text-white">
                {galeri.tittle}
              </h3>
              <Link
                href={galeri.href}
                className="font-medium text-primary hover:underline text-xs dark:text-white"
              >
                Lihat Postingan →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

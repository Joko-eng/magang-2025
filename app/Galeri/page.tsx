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
      <div>
        <h1 className=" text-3xl text-blue-600 text-center font-bold">
          Galeri Instagram
        </h1>
      </div>
      <div className="max-w-md mx-8 justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-60 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
          />
          <button className="absolute top-1/2 transform -translate-y-1/2">
            <Search className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 mt-4 gap-x-8 gap-y-20">
        {galeris.map((galeri) => (
          <div key={galeri.id}>
            <div className="aspect-square overflow-hidden">
              <img
                src={galeri.image}
                alt={`Galeri ${galeri.id}`}
                className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              />
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-sm font-semibold text-blue-600">
                {galeri.tittle}
              </h3>
              <Link
                href={galeri.href}
                className="font-semibold text-blue-600 hover:underline"
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

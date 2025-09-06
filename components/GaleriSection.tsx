"use client";
import React from "react";

const galeris = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
];

export default function GaleriSection() {
  return (
    <>
      <div>
        <h1 className=" text-xl text-blue-600 text-center font-bold">Galeri</h1>
      </div>
      <div className="grid grid-cols-3 mt-4 gap-1">
        {galeris.map((galeri) => (
          <div key={galeri.id} className="aspect-square overflow-hidden">
            <img
              src={galeri.image}
              alt={`Galeri ${galeri.id}`}
              className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
}

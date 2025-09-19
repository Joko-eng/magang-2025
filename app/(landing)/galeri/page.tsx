"use client";
import React, { useState, useEffect } from "react";
import next from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { IInstagram } from "@/types/schemaTypes";

export default function Galeri() {
  const [posts, setPosts] = useState<IInstagram[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("/api/instagram");

      console.log("API Response:", res);
      if (res) {
        setPosts(res.data?.data?.posts as IInstagram[]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      toast.error("Gagal memuat postingan", {
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const filtered = posts.filter((galeri) =>
    galeri.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);

  const galeris = posts;

  return (
    <div className="">
      <div className="px-4 py-10 mt-16">
        <h1 className="text-center text-lg md:text-2xl lg:text-3xl text-primary font-bold dark:text-white">
          Galeri Instagram
        </h1>
      </div>

      <div className="flex justify-center p-4">
        <div className="relative w-full max-w-[500px] mx-4 sm:mx-0">
          <input
            type="text"
            placeholder="Cari..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-200"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-8 gap-4 sm:gap-x-6 sm:gap-y-14 px-4 sm:px-8 lg:px-20 mb-10">
        {filtered.length > 0 ? (
          filtered.map((galeri, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={galeri.thumbnail}
                alt={`Galeri ${galeri.title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end text-center sm:text-left p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="font-semibold text-white text-sm sm:text-lg mb-2 sm:mb-0 max-w-full truncate sm:line-clamp-2 sm:overflow-hidden sm:text-ellipsis">
                    {galeri.title}
                  </h3>
                  <Link href={galeri.url} target="_blank" className="sm:ml-2">
                    <Button className="w-full sm:w-auto font-medium text-white text-xs sm:text-sm bg-primary hover:bg-primary/80 px-4 py-2 whitespace-nowrap">
                      Lihat Postingan
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Tidak ada hasil
          </p>
        )}
      </div>
    </div>
  );
}

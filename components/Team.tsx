"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import CardPagination from "./CardPagination";

export default function Team() {
  const [filter, setFilter] = useState<"all" | "tim" | "magang">("all");

  return (
    <section className="py-10 md:py-26">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="py-4 text-center text-lg font-medium lg:text-xl">
            Tim Kami
          </p>
          <h2 className="text-balance text-2xl font-semibold lg:text-2xl">
            Meet Our Team
          </h2>
          <p className="mt-4">
            Bersatu dalam visi, beragam dalam karya. Tim Mudapedia hadir untuk
            menghadirkan pengetahuan, kreativitas, dan solusi digital bagi
            generasi muda Indonesia.
          </p>

          {/* Filter buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setFilter("all")}
              className={`rounded-full ${
                filter === "all"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-black"
              }`}
            >
              Semua
            </Button>

            <Button
              size="lg"
              onClick={() => setFilter("tim")}
              className={`rounded-full ${
                filter === "tim"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-black"
              }`}
            >
              Tim
            </Button>

            <Button
              size="lg"
              onClick={() => setFilter("magang")}
              className={`rounded-full ${
                filter === "magang"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-black"
              }`}
            >
              Magang
            </Button>
          </div>
        </div>

        {/* Swipe Cards */}
        <div className="mt-6 flex justify-center">
          <CardPagination filter={filter} />
        </div>
      </div>
    </section>
  );
}

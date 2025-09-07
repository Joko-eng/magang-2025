"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import CardPagination from "./CardPagination";

export default function Team() {
  const [filter, setFilter] = useState<"all" | "tim" | "magang">("all");

  return (
    <section className="py-10 md:py-26">
      <div className="mx-auto max-w-5xl px-6 dark:text-white">
        <div className="text-center">
          <p className="py-4 text-center text-lg font-medium lg:text-xl text-primary dark:text-white">
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
              className={`rounded-full border ${
                filter === "all"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary dark:text-white"
                  : "bg-white text-black dark:text-black dark:bg-white hover:bg-white dark:hover:bg-white border-gray-300"
              }`}
            >
              Semua
            </Button>

            <Button
              size="lg"
              onClick={() => setFilter("tim")}
              className={`rounded-full border ${
                filter === "tim"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary dark:text-white"
                  : "bg-white text-black dark:text-black dark:bg-white hover:bg-white dark:hover:bg-white border-gray-300"
              }`}
            >
              Tim
            </Button>

            <Button
              size="lg"
              onClick={() => setFilter("magang")}
              className={`rounded-full border ${
                filter === "magang"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary dark:text-white"
                  : "bg-white text-black dark:text-black dark:bg-white hover:bg-white dark:hover:bg-white border-gray-300"
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

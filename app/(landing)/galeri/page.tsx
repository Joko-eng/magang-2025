"use client";
import React, { useState, useEffect } from "react";
import next from "next";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { IInstagram } from "@/types/schemaTypes";

export default function Galeri() {
  const [posts, setPosts] = useState<IInstagram[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const updateItemsPerPage = () => {
    setItemsPerPage(window.innerWidth <= 768 ? 4 : 8);
  };

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

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filtered.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  useEffect(() => {
    updateItemsPerPage();

    const handleResize = () => {
      updateItemsPerPage();
      setCurrentPage(1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

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
        {currentItems.length > 0 ? (
          currentItems.map((galeri, index) => (
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

      {filtered.length > itemsPerPage && (
        <div className="flex justify-center items-center space-x-2 pb-10 px-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>

          <div className="flex space-x-1">
            {getPageNumbers().map((pageNumber, index) => (
              <React.Fragment key={index}>
                {pageNumber === "..." ? (
                  <span className="px-3 py-2 text-sm font-medium text-gray-500">
                    ...
                  </span>
                ) : (
                  <button
                    onClick={() => handlePageClick(pageNumber as number)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === pageNumber
                        ? "text-white bg-primary hover:bg-primary/80"
                        : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}

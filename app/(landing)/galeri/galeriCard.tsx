import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IInstagram } from "@/types/schemaTypes";

interface Props {
  posts: IInstagram[];
  currentPage: number;
  totalPages: number;
}

export default function Galeri({ posts, currentPage, totalPages }: Props) {
  return (
    <div>
      <div className="px-4 py-10 mt-16">
        <h1 className="text-center text-lg md:text-2xl lg:text-3xl text-primary font-bold dark:text-white">
          Galeri Instagram
        </h1>
      </div>

      {/* Grid Galeri */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-8 gap-4 sm:gap-x-6 sm:gap-y-14 px-4 sm:px-8 lg:px-20 mb-10">
        {posts.length > 0 ? (
          posts.map((galeri, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={galeri.thumbnail}
                alt={galeri.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end text-center sm:text-left p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="font-semibold text-white text-sm sm:text-lg mb-2 sm:mb-0 max-w-full truncate sm:line-clamp-2 sm:overflow-hidden sm:text-ellipsis">
                    {galeri.title}
                  </h3>
                  <Link href={galeri.url} target="_blank">
                    <Button className="sm:w-auto font-medium text-white text-xs sm:text-sm bg-primary hover:bg-primary/80 px-4 py-2 whitespace-nowrap">
                      Lihat Postingan
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Tidak ada postingan
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 pb-10">
          <Link href={`?page=${currentPage - 1}`} scroll={false}>
            <button
              disabled={currentPage === 1}
              className={`flex items-center px-3 py-2 text-sm font-medium border rounded-lg 
          ${
            currentPage === 1
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
          }`}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
            </button>
          </Link>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link key={page} href={`?page=${page}`} scroll={false}>
                <button
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === page
                      ? "text-white bg-primary hover:bg-primary/80"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  {page}
                </button>
              </Link>
            ))}
          </div>

          <Link href={`?page=${currentPage + 1}`} scroll={false}>
            <button
              disabled={currentPage === totalPages}
              className={`flex items-center px-3 py-2 text-sm font-medium border rounded-lg 
          ${
            currentPage === totalPages
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
          }`}
            >
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

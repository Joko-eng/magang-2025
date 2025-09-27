import { ExternalLink } from "lucide-react";
import fetchInstagramPosts from "@/lib/fetchInstagramPosts";
import Link from "next/link";

export default async function GaleriSection() {
  const { posts } = await fetchInstagramPosts(5);

  const bentoLayout = [
    { span: "col-span-2 row-span-2", index: 0 },
    { span: "col-span-1 row-span-1", index: 2 },
    { span: "col-span-1 row-span-2", index: 1 },
    { span: "col-span-1 row-span-1", index: 3 },
    { span: "col-span-1 row-span-1", index: 4 },
  ];

  return (
    <div id="galeri" className="pt-6">
      <div className="mb-6">
        <h1 className="text-xl text-blue-600 dark:text-blue-400 text-center font-bold">
          Galeri Instagram
        </h1>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Tidak ada data dari database</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 grid-rows-3 gap-2 mb-6 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] px-12 sm:px-14 md:px-16">
          {bentoLayout.map((item, layoutIndex) => {
            const post = posts[layoutIndex];

            if (!post) {
              return (
                <div
                  key={layoutIndex}
                  className={`${item.span} relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}
                >
                  <span className="text-gray-500 text-xs">
                    No post #{item.index + 1}
                  </span>
                </div>
              );
            }

            return (
              <div
                key={layoutIndex}
                className={`${item.span} relative cursor-pointer rounded-lg overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:z-10`}
              >
                <Link href={post.url} key={layoutIndex}>
                  <img
                    src={post.thumbnail}
                    alt={post.title || `Post Instagram ${item.index + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 flex items-center gap-1 sm:gap-2 text-white font-medium text-xs sm:text-sm">
                      <span className="hidden sm:inline">Lihat Postingan</span>
                      <span className="sm:hidden">Lihat</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

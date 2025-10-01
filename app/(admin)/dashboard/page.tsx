// import fetchInstagramPosts from "@/lib/fetchInstagramPosts";
// import PostCard from "./PostCard";
// import CreatePostBtn from "./CreatePostBtn";

// const DashboardPage = async () => {
//   const { posts } = await fetchInstagramPosts();

//   return (
//     <div className="py-6 px-14">
//       <div className="flex justify-end items-center mb-6">
//         <CreatePostBtn />
//       </div>

//       {posts.length === 0 ? (
//         <div className="flex justify-center items-center min-h-64">
//           <div className="text-center space-y-2">
//             <div className="text-lg text-gray-500">Tidak ada postingan</div>
//             <div className="text-sm text-gray-400">
//               Tambahkan postingan pertama Anda
//             </div>
//           </div>
//         </div>
//       ) : (
//         posts.map((post) => <PostCard key={post._id} post={post} />)
//       )}
//     </div>
//   );
// };

// export default DashboardPage;

//PAGINATE

import PostCard from "./PostCard";
import CreatePostBtn from "./CreatePostBtn";
import fetchInstagramPosts from "@/lib/fetchInstagramPosts";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DashboardPage = async ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);

  // Ambil data dari server dengan pagination
  const { posts, pageInfo } = await fetchInstagramPosts({ page, limit: 6 });

  return (
    <div className="py-6 px-14">
      <div className="flex justify-end items-center mb-6">
        <CreatePostBtn />
      </div>

      {posts.length === 0 ? (
        <div className="flex justify-center items-center min-h-64">
          <div className="text-center space-y-2">
            <div className="text-lg text-gray-500">Tidak ada postingan</div>
            <div className="text-sm text-gray-400">
              Tambahkan postingan pertama Anda
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post: any) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}

      {pageInfo.totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 pb-10 mt-8">
          <Link href={`/dashboard`} scroll={false}>
            <button
              disabled={page === 1}
              className={`flex items-center px-3 py-2 text-sm font-medium border rounded-lg 
                ${
                  page === 1
                    ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                }`}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
            </button>
          </Link>

          <div className="flex space-x-1">
            {Array.from({ length: pageInfo.totalPages }, (_, i) => i + 1).map(
              (p) => {
                const href = p === 1 ? "/dashboard" : `?page=${p}`;
                return (
                  <Link key={p} href={href} scroll={false}>
                    <button
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        page === p
                          ? "text-white bg-primary hover:bg-primary/80"
                          : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                    >
                      {p}
                    </button>
                  </Link>
                );
              }
            )}
          </div>

          <Link href={`?page=${page + 1}`} scroll={false}>
            <button
              disabled={page === pageInfo.totalPages}
              className={`flex items-center px-3 py-2 text-sm font-medium border rounded-lg 
                ${
                  page === pageInfo.totalPages
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
};

export default DashboardPage;

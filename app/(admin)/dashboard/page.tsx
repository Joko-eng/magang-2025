import fetchInstagramPosts from "@/lib/fetchInstagramPosts";
import PostCard from "./PostCard";
import CreatePostBtn from "./CreatePostBtn";

const DashboardPage = async () => {
  const { posts } = await fetchInstagramPosts();

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
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
};

export default DashboardPage;



//PAGINATE

// import PostCard from "./PostCard";
// import CreatePostBtn from "./CreatePostBtn";
// import fetchInstagramPosts from "@/lib/fetchInstagramPosts";
// import Link from "next/link";

// const DashboardPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
//   const page = parseInt(searchParams.page || "1", 10);

//   // Ambil data dari server
//   const { posts, pageInfo } = await fetchInstagramPosts({ page, limit: 4 });

//   return (
//     <div className="py-6 px-14">
//       <div className="flex justify-end items-center mb-6">
//         <CreatePostBtn />
//       </div>

//       {posts.length === 0 ? (
//         <div className="flex justify-center items-center min-h-64">
//           <div className="text-center space-y-2">
//             <div className="text-lg text-gray-500">Tidak ada postingan</div>
//             <div className="text-sm text-gray-400">Tambahkan postingan pertama Anda</div>
//           </div>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {posts.map((post) => (
//             <PostCard key={post._id} post={post} />
//           ))}
//         </div>
//       )}

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-4 mt-8">
//         {pageInfo.hasPrevPage && (
//           <Link
//             href={`?page=${pageInfo.page - 1}`}
//             className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//           >
//             Prev
//           </Link>
//         )}

//         <span>
//           Page {pageInfo.page} of {pageInfo.totalPages}
//         </span>

//         {pageInfo.hasNextPage && (
//           <Link
//             href={`?page=${pageInfo.page + 1}`}
//             className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//           >
//             Next
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

import { Instagram } from '@/models/instagram';
import { connectDB } from './connectDB';

const fetchInstagramPosts = async (limit?: number) => {
  try {
    await connectDB();

    let query = Instagram.find({})
      .select('-updatedAt -__v')
      .sort({ createdAt: -1 });
    
    if (limit) {
      query = query.limit(limit);
    }

    const posts = await query.lean();

    const serializedPosts = posts.map((post: any) => ({
      ...post,
      _id: post._id.toString(),
      userId: post.userId?.toString() ?? null,
    }));

    return {
      message: 'sukses',
      posts: serializedPosts,
      totalPosts: serializedPosts.length,
    };
  } catch (error: any) {
    console.error('Tidak dapat mengambil data: ', error);
    return { message: 'Terjadi kesalahan pada server', posts: [], totalPosts: 0 };
  }
};

export default fetchInstagramPosts;


// import { Instagram } from '@/models/instagram';
// import { connectDB } from './connectDB';

// const fetchInstagramPosts = async ({ page = 1, limit = 4 }: { page?: number; limit?: number }) => {
//   try {
//     await connectDB();

//     const currentPage = Math.max(1, page); // minimal halaman 1
//     const skip = (currentPage - 1) * limit;

//     
//     const [posts, total] = await Promise.all([
//       Instagram.find({})
//         .select('-updatedAt -__v')
//         .sort({ createdAt: -1 })
//         .skip(skip)
//         .limit(limit)
//         .lean(),
//       Instagram.countDocuments({}),
//     ]);

//    
//     const serializedPosts = posts.map((post: any) => ({
//       ...post,
//       _id: post._id.toString(),
//       userId: post.userId?.toString() ?? null,
//     }));

//     return {
//       message: 'sukses',
//       posts: serializedPosts,
//       pageInfo: {
//         total,
//         page: currentPage,
//         totalPages: Math.ceil(total / limit),
//         hasNextPage: currentPage * limit < total,
//         hasPrevPage: currentPage > 1,
//       },
//     };
//   } catch (error: any) {
//     console.error('Tidak dapat mengambil data: ', error);
//     return {
//       message: 'Terjadi kesalahan pada server',
//       posts: [],
//       pageInfo: {
//         total: 0,
//         page: 1,
//         totalPages: 1,
//         hasNextPage: false,
//         hasPrevPage: false,
//       },
//     };
//   }
// };

// export default fetchInstagramPosts;
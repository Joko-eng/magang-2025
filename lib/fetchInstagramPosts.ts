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
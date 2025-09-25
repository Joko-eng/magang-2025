import { Instagram } from '@/models/instagram';
import { connectDB } from './connectDB';

const fetchInstagramPosts = async () => {
  try {
    await connectDB();

    const posts = await Instagram.find({})
      .select('-createdAt -updatedAt') 
      .sort({ createdAt: -1 })
      .lean();

    return {
      message: 'sukses',
      posts: posts,
      totalPosts: posts.length,
    };
  } catch (error: any) {
    console.error('Tidak dapat mengambil data: ', error);

    return { message: 'Terjadi kesalahan pada server', posts: [], totalPosts: 0 };
  }
};

export default fetchInstagramPosts;

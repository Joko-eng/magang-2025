import fetchInstagramPosts from '@/lib/fetchInstagramPosts';
import PostCard from './PostCard';
import CreatePostBtn from './CreatePostBtn';

const DashboardPage = async () => {
  const { posts } = await fetchInstagramPosts();

  return (
    <div className="py-6 px-14">
      {/* Tombol Tambah Baru */}
      <div className="flex justify-end items-center mb-6">
        <CreatePostBtn />
      </div>

      {posts.length === 0 ? (
        <div className="flex justify-center items-center min-h-64">
          <div className="text-center space-y-2">
            <div className="text-lg text-gray-500">Tidak ada postingan</div>
            <div className="text-sm text-gray-400">Tambahkan postingan pertama Anda</div>
          </div>
        </div>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
};

export default DashboardPage;

import PostCard from './PostCard';

interface DashboardCompProps {
  posts: any[];
}

const DashboardComp = ({ posts }: DashboardCompProps) => {
  return (
    <div className="py-6 px-14">
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

export default DashboardComp;

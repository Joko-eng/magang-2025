import fetchInstagramPosts from '@/lib/fetchInstagramPosts';

const DashboardServerComp = async () => {
  const res = await fetchInstagramPosts();
  console.log('posts: ', res.posts);
  return <div>DashboardServerComp</div>;
};

export default DashboardServerComp;

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import PostActions from './PostActions';

interface PostCardProps {
  post: {
    _id: string;
    title: string;
    url: string;
    thumbnail: string;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="p-4 mb-4 dark:bg-primary">
      <div className="flex flex-col md:grid md:grid-cols-4 md:items-center gap-4">
        
        <div className="flex justify-center items-center mb-3 md:mb-0">
          <Image
            className="w-24 aspect-square rounded-md bg-white object-cover"
            src={post.thumbnail}
            width={300}
            height={300}
            alt={post.title}
          />
        </div>

        <div className="md:col-span-2 gap-2 p-2 rounded-md flex flex-col justify-center">
          <h2 className="font-semibold text-base text-center md:text-left dark:text-white">
            {post.title}
          </h2>
          <div className="flex items-center mt-2">
            <input
              type="text"
              value={post.url}
              readOnly
              className="text-xs sm:text-sm border rounded-md px-3 py-1 bg-blue-50 text-gray-600 w-full"
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-3 md:mt-0">
          <PostActions post={post} />
        </div>
      </div>
    </Card>
  );
};

export default PostCard;

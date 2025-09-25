'use client';

import { Button } from '@/components/ui/button';
import { Copy, ExternalLink, Trash2, Edit2 } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';
import { useState } from 'react';
import EditPostDialog from '@/components/admin/dialogEdit';

interface PostActionsProps {
  post: {
    _id: string;
    title: string;
    url: string;
    thumbnail: string;
  };
}

const PostActions = ({ post }: PostActionsProps) => {
  const [loading, setLoading] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(post.url);
      toast.success('URL berhasil disalin!', { description: post.url });
    } catch (err) {
      toast.error('Gagal menyalin URL', { description: String(err) });
    }
  };

  const handleOpen = () => {
    window.open(post.url, '_blank');
  };

  const handleDelete = async () => {
    if (!confirm('Apakah yakin ingin menghapus post ini?')) return;
    setLoading(true);
    try {
      const res = await axios.delete(`/api/instagram/delete?id=${post._id}`);
      if (res.status === 200) {
        toast.success('Post berhasil dihapus! ✅');
        window.location.reload();
      }
    } catch (err: any) {
      toast.error('Gagal menghapus post', {
        description: err?.response?.data?.message || err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2 ml-2">
      <Button variant="ghost" size="icon" onClick={handleCopy}>
        <Copy className="w-4 h-4 dark:text-white" />
      </Button>
      <Button variant="ghost" size="icon" onClick={handleOpen}>
        <ExternalLink className="w-4 h-4 dark:text-white" />
      </Button>
    <Button
        onClick={handleDelete}
        disabled={loading}
        className="flex items-center gap-2 text-white bg-red-500 hover:bg-red-600"
      >
        <Trash2 className="w-4 h-4" />
        Delete
      </Button>

      {/* Edit */}
      <Button
        onClick={() => setIsEditOpen(true)}
        className="flex items-center gap-2 text-white bg-primary hover:bg-blue-600"
      >
        <Edit2 className="w-4 h-4" />
        Edit
      </Button>

      {isEditOpen && (
        <EditPostDialog
          open={isEditOpen}
          onOpenChange={setIsEditOpen}
          post={post}
          onSuccess={() => window.location.reload()}
        />
      )}
    </div>
  );
};

export default PostActions;

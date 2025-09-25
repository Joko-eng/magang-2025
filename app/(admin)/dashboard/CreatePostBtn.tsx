
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import CreatePostDialog from '@/components/admin/dialogPost';

const CreatePostBtn = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        className="flex items-center gap-2 bg-primary hover:bg-blue-500 text-white"
        onClick={() => setIsDialogOpen(true)}
      >
        <Plus size={16} />
        <span className="text-sm font-medium">Tambah Baru</span>
      </Button>

      <CreatePostDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSuccess={() => window.location.reload()}
      />
    </>
  );
};

export default CreatePostBtn;

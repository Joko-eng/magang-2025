"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import axios from "axios";

interface EditPostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  post: any | null;
  onSuccess: () => void;
}

const EditPostDialog: React.FC<EditPostDialogProps> = ({
  open,
  onOpenChange,
  post,
  onSuccess,
}) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setUrl(post.url || "");
      setFile(null);
      setPreviewImage(post.thumbnail || null);
    }
  }, [post]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      setPreviewImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpdate = async () => {
    if (!title || !url) {
      toast.error("Judul dan URL wajib diisi!");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("url", url);
      if (file) formData.append("file", file);

      const res = await axios.put(`/api/instagram/${post._id}`, formData);

      if (res.status === 200) {
        toast.success("Postingan berhasil diperbarui!");
        onSuccess();
        onOpenChange(false);
      } else {
        toast.error(res.data?.message || "Gagal memperbarui postingan");
      }
    } catch (error: any) {
      toast.error("Terjadi kesalahan", {
        description: error?.response?.data?.message || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Post Instagram</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Thumbnail</label>
            <div
              className="w-full h-40 border-2 border-dashed rounded-md flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={() => document.getElementById("editFileInput")?.click()}
            >
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview Baru"
                  className="w-full h-full object-cover"
                />
              ) : post?.thumbnail ? (
                <img
                  src={post.thumbnail}
                  alt="Thumbnail Lama"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400">Klik untuk memilih gambar</span>
              )}
            </div>
            <Input
              id="editFileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Judul</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Masukkan judul post"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">URL</label>
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Masukkan URL post"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-primary text-white hover:bg-primary/80"
          >
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditPostDialog;

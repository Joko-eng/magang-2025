"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Camera, Plus } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

interface CreatePostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void; // callback ke dashboard
}

const CreatePostDialog: React.FC<CreatePostDialogProps> = ({ open, onOpenChange, onSuccess }) => {
  const [judul, setJudul] = useState("");
  const [link, setLink] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleCloseDialog = () => {
    setJudul("");
    setLink("");
    setPreviewImage(null);
    setFile(null);
    onOpenChange(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!judul || !link || !file) {
      toast.error("Semua field wajib diisi!");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", judul);
      formData.append("url", link);
      formData.append("file", file);

      const res = await axios.post("/api/instagram", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Postingan berhasil dibuat!", {
        description: res.data?.message || "Sukses",
      });

      handleCloseDialog();
      onSuccess?.(); // refresh data di dashboard
    } catch (err: any) {
      console.error("Create post error:", err);
      toast.error("Gagal membuat postingan", {
        description: err.response?.data?.message || err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg dark:text-white">
        <DialogHeader>
          <DialogTitle>Tambah Postingan Baru</DialogTitle>
          <DialogDescription>
            Isi form berikut untuk menambahkan postingan baru.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="foto"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden"
            >
              {previewImage ? (
                <img src={previewImage} alt="Preview" className="object-cover w-full h-full" />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Camera className="w-8 h-8 text-blue-500 mb-2" />
                  <p className="text-sm text-gray-500">Tambahkan foto disini</p>
                </div>
              )}
              <input id="foto" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="judul">Judul Postingan</Label>
            <Input
              id="judul"
              placeholder="Masukkan judul"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="dark:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="link">Link</Label>
            <Input
              id="link"
              placeholder="Masukkan link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="dark:bg-white"
            />
          </div>

          <div className="flex justify-end gap-6 mt-4">
            <Button
              type="button"
              variant="outline"
              className="text-red-400 dark:bg-red-500 dark:text-white"
              onClick={handleCloseDialog}
            >
              Batal
            </Button>
            <Button type="submit" className="bg-blue-500 text-white" disabled={loading}>
              {loading ? "Menyimpan..." : "Simpan"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;

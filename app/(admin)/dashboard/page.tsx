"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { Copy, Edit2, ExternalLink, Plus, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import CreatePostDialog from "@/components/admin/dialogPost";

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [judul, setJudul] = useState("");
  const [link, setLink] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Redirect jika tidak login
  useEffect(() => {
    if (status === "loading") return; // Masih loading
    if (!session) {
      router.push("/login");
      return;
    }
  }, [session, status, router]);

  useEffect(() => {
    // Hanya fetch jika sudah ada session
    if (session) {
      fetchPosts();
    }
  }, [session]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get("/api/instagram");

      console.log("API Response:", res);
      if (res) {
        setPosts(res.data?.data?.posts);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      toast.error("Gagal memuat postingan", {
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  // const handleDelete = async (id: string) => {
  //   if (!confirm("Apakah yakin ingin menghapus post ini?")) return;

  //   try {
  //    const res = await axios.delete(`/api/instagram/${id}/delete`);

  //     if (res.status === 200) {
  //       toast.success("Post berhasil dihapus!");
  //       fetchPosts(); // refresh list setelah delete
  //     } else {
  //       toast.error(res.data?.message || "Gagal menghapus post");
  //     }
  //   } catch (err: any) {
  //     console.error("Delete error:", err);
  //     toast.error("Terjadi kesalahan saat menghapus post", {
  //       description: err?.response?.data?.message || err.message,
  //     });
  //   }
  // };

  // Loading state untuk session
  if (status === "loading") {
    return (
      <div className="py-6 px-14">
        <div className="flex justify-center items-center min-h-64">
          <div className="text-lg">Memuat session...</div>
        </div>
      </div>
    );
  }

  // Tidak ada session
  if (!session) {
    return null; 
  }

  // Loading posts
  if (loading) {
    return (
      <div className="py-6 px-14">
        <div className="flex justify-center items-center min-h-64">
          <div className="text-lg">Memuat postingan...</div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="py-6 px-14">
        <div className="flex flex-col justify-center items-center min-h-64 space-y-4">
          <div className="text-lg text-red-500 text-center max-w-2xl">
            <h2 className="font-bold mb-2">Error:</h2>
            <pre className="text-sm bg-red-50 p-4 rounded border text-left overflow-auto">
              {error}
            </pre>
          </div>
          <div className="space-x-4">
            <Button
              onClick={() => fetchPosts()}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Coba Lagi
            </Button>
            <Button
              onClick={() => window.open("/api/instagram", "_blank")}
              variant="outline"
            >
              Test API
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="py-6 px-14">
        <div className="flex justify-end items-center mb-6 sm:items-end">
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
            onSuccess={fetchPosts}
          />
        </div>

        {posts.length === 0 ? (
          <div className="flex justify-center items-center min-h-64">
            <div className="text-center space-y-2">
              <div className="text-lg text-gray-500">Tidak ada postingan</div>
              <div className="text-sm text-gray-400">
                Tambahkan postingan pertama Anda
              </div>
            </div>
          </div>
        ) : (
          posts.map((post) => (
            <Card key={post._id} className="p-4 mb-4 dark:bg-primary">
              <div className="flex flex-col md:grid md:grid-cols-4 md:items-center gap-4">
                <div className="flex justify-center items-center mb-3 md:mb-0">
                  <Image
                    className="w-24 aspect-square flex items-center justify-center rounded-md bg-white object-cover"
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
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-2 hover:bg-gray-100"
                      onClick={() => {
                        try {
                          navigator.clipboard.writeText(post.url);
                          toast.success("URL berhasil disalin!", {
                            description: post.url,
                          });
                        } catch (err) {
                          toast.error("Gagal menyalin URL", {
                            description: String(err),
                          });
                        }
                      }}
                    >
                      <Copy className="w-4 h-4 dark:text-white" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-2 hover:bg-gray-100"
                      onClick={() => window.open(post.url, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 dark:text-white" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center md:justify-end mt-3 md:mt-0">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-md">
                    <Button
                      // onClick={() => handleDelete(post._id)}
                      className="flex items-center gap-2 text-white bg-red-500 hover:bg-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>

                    <Button className="flex items-center gap-2 text-white bg-primary hover:bg-blue-600">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </>
  );
};

export default Dashboard;

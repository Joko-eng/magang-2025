"use client";
import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import axios from "axios";
import { IInstagram } from "@/types/schemaTypes";

export default function GaleriSection() {
  const [posts, setPosts] = useState<IInstagram[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/instagram");

      console.log("=== GaleriSection API Debug ===");
      console.log("Full response:", res);
      console.log("Response status:", res.status);
      console.log("Response data:", res.data);
      console.log("Response data type:", typeof res.data);
      console.log("res.data?.data:", res.data?.data);
      console.log("res.data?.data?.posts:", res.data?.data?.posts);
      console.log("Is posts array?", Array.isArray(res.data?.data?.posts));

      if (res.data?.data?.posts && Array.isArray(res.data.data.posts)) {
        const postsData = res.data.data.posts as IInstagram[];
        console.log("Posts data from API:", postsData);
        console.log("Number of posts:", postsData.length);
        console.log("First post:", postsData[0]);
        setPosts(postsData);
      } else {
        console.error("Posts data not found or not array");
        console.log("Setting empty posts array");
        setPosts([]);
      }
    } catch (err) {
      console.error("=== API Error ===");
      console.error("Error:", err);
      if (axios.isAxiosError(err)) {
        console.error("Response status:", err.response?.status);
        console.error("Response data:", err.response?.data);
        console.error("Error message:", err.message);
      }
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Ambil hanya 5 gambar pertama
  const firstFivePosts = posts.slice(0, 5);

  console.log("=== GaleriSection Render Debug ===");
  console.log("Posts state length:", posts.length);
  console.log("First five posts:", firstFivePosts);
  console.log("Loading state:", loading);

  const bukaPost = (postUrl: string) => {
    window.open(postUrl, "_blank");
  };

  const bentoLayout = [
    { span: "col-span-2 row-span-2", index: 0 },
    { span: "col-span-1 row-span-1", index: 2 },
    { span: "col-span-1 row-span-2", index: 1 },
    { span: "col-span-1 row-span-1", index: 3 },
    { span: "col-span-1 row-span-1", index: 4 },
  ];

  if (loading) {
    return (
      <div id="galeri" className="pt-6">
        <div className="mb-6">
          <h1 className="text-xl text-blue-600 dark:text-blue-400 text-center font-bold">
            Galeri Instagram
          </h1>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-2 mb-6 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] px-12 sm:px-14 md:px-16">
          {bentoLayout.map((item, layoutIndex) => (
            <div
              key={layoutIndex}
              className={`${item.span} relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 animate-pulse`}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div id="galeri" className="pt-6">
      <div className="mb-6">
        <h1 className="text-xl text-blue-600 dark:text-blue-400 text-center font-bold">
          Galeri Instagram
        </h1>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Tidak ada data dari API</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 grid-rows-3 gap-2 mb-6 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] px-12 sm:px-14 md:px-16">
          {bentoLayout.map((item, layoutIndex) => {
            const post = firstFivePosts[item.index];

            console.log(`=== Layout ${layoutIndex} Debug ===`);
            console.log(`Looking for post at index ${item.index}`);
            console.log(`Post found:`, post);
            console.log(`Post thumbnail:`, post?.thumbnail);
            console.log(`Post URL:`, post?.url);
            console.log(`Post title:`, post?.title);

            if (!post) {
              return (
                <div
                  key={layoutIndex}
                  className={`${item.span} relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}
                >
                  <span className="text-gray-500 text-xs">
                    No post #{item.index + 1}
                  </span>
                </div>
              );
            }

            return (
              <div
                key={layoutIndex}
                className={`${item.span} relative cursor-pointer rounded-lg overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:z-10`}
                onClick={() => bukaPost(post.url)}
              >
                <img
                  src={post.thumbnail}
                  alt={post.title || `Post Instagram ${item.index + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
                  onLoad={() =>
                    console.log(
                      `✅ Image loaded successfully: ${post.thumbnail}`
                    )
                  }
                  onError={(e) => {
                    console.error(`❌ Image failed to load: ${post.thumbnail}`);
                    console.error("Image error event:", e);
                  }}
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 flex items-center gap-1 sm:gap-2 text-white font-medium text-xs sm:text-sm">
                    <span className="hidden sm:inline">Lihat Postingan</span>
                    <span className="sm:hidden">Lihat</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

export default function GaleriSection() {
  const instagramPosts = [
    "https://www.instagram.com/p/DODQS-qEl4K/",
    "https://www.instagram.com/p/DN76Dcokuel/",
    "https://www.instagram.com/p/DN7tIIrkZK_/",
    "https://www.instagram.com/p/DNxwj9A5Ltc/",
    "https://www.instagram.com/p/DNpnFHAy52o/",
  ];

  const bukaPost = (postUrl: string) => {
    window.open(postUrl, "_blank");
  };

  const getThumbnail = (postUrl: string) => {
    const thumbnails = [
      "/thumbnail/one.png",
      "/thumbnail/two.png",
      "/thumbnail/three.png",
      "/thumbnail/five.png",
      "/thumbnail/six.png",
    ];

    const index = instagramPosts.indexOf(postUrl);
    return thumbnails[index] || thumbnails[0];
  };

  const bentoLayout = [
    { span: "col-span-2 row-span-2", index: 0 },
    { span: "col-span-1 row-span-1", index: 2 },
    { span: "col-span-1 row-span-2", index: 1 },
    { span: "col-span-1 row-span-1", index: 3 },
    { span: "col-span-1 row-span-1", index: 4 },
  ];

  return (
    <div className="pt-6">
      <div className="mb-6">
        <h1 className="text-xl text-blue-600 dark:text-blue-400 text-center font-bold">
          Galeri Instagram
        </h1>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-2 mb-6 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] px-12 sm:px-14 md:px-16">
        {bentoLayout.map((item, layoutIndex) => {
          const postUrl = instagramPosts[item.index];
          return (
            <div
              key={layoutIndex}
              className={`${item.span} relative cursor-pointer rounded-lg overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:z-10`}
              onClick={() => bukaPost(postUrl)}
            >
              <img
                src={getThumbnail(postUrl)}
                alt={`Post Instagram ${item.index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
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
    </div>
  );
}
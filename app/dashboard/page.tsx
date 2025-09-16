"use client";
import React from "react";
import NavbarLayout from "@/components/layouts/navbar-layouts";
import { Button } from "@/components/ui/button";
import { BookText, Camera, Copy, Edit2, Plus, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard: React.FC = () => {
  return (
    <NavbarLayout>
      <div className="py-6 px-14">
        <div className="flex justify-end items-center mb-6 sm:items-end">
          <button className="flex items-center gap-2 px-4 py-2 border bg-primary border-gray-300 rounded-lg hover:bg-blue-500 dark:bg-primary transition-colors">
            <Plus size={16} color="white" />
            <span className="sm:inline text-sm font-medium text-white">
              Tambah Baru
            </span>
          </button>
        </div>
        <Card className="p-4 mb-4 dark:bg-primary">
          <div className="flex flex-col md:grid md:grid-cols-4 md:items-center gap-4">
            {/* Left: Thumbnail */}
            <div className="flex justify-center items-center mb-3 md:mb-0">
              <div className="w-24 aspect-square flex items-center justify-center rounded-md bg-blue-50">
                {/* Kalau ada gambar bisa taruh <img> di sini */}
                <Camera className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            {/* Middle: Title + Link */}
            <div className="md:col-span-2 gap-2 p-2 rounded-md flex flex-col justify-center">
              <h2 className="font-semibold text-base text-center md:text-left dark:text-white">
                Mudapedia Lomba Agustusan
              </h2>
              <div className="flex items-center mt-2">
                <input
                  type="text"
                  value="https://www.instagram.com/p/DOnRIcaEtzq/"
                  readOnly
                  className="text-xs sm:text-sm border rounded-md px-3 py-1 bg-blue-50 text-gray-600 w-full"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 hover:bg-gray-100"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex justify-center md:justify-end mt-3 md:mt-0">
              <div className="flex items-center gap-3 px-4 py-2 rounded-md">
                <Button className="flex items-center gap-2 text-white bg-red-500 hover:bg-red-600">
                  <Trash2 className="w-4 h-4" />
                  Delete
                </Button>
                <Button className="flex items-center gap-2 text-white bg-blue-500 hover:bg-blue-600">
                  <Edit2 className="w-4 h-4" />
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </NavbarLayout>
  );
};

export default Dashboard;

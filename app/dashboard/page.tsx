"use client";
import React from "react";
import NavbarLayout from "@/components/layouts/navbar-layouts";
import { Button } from "@/components/ui/button";
import { BookText, Camera, Copy, Edit2, Plus, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const Dashboard: React.FC = () => {
  return (
    <NavbarLayout>
      <div className="py-6 px-14">
        <div className="flex justify-end items-center mb-6 sm:items-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2 bg-primary hover:bg-blue-500 text-white">
                <Plus size={16} />
                <span className="text-sm font-medium">Tambah Baru</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg dark:text-white">
              <DialogHeader>
                <DialogTitle>Tambah Postingan Baru</DialogTitle>
                <DialogDescription>
                  Isi form berikut untuk menambahkan postingan baru.
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="foto"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Camera className="w-8 h-8 text-blue-500 mb-2" />
                      <p className="text-sm text-gray-500">
                        Tambahkan foto disini
                      </p>
                    </div>
                    <input id="foto" type="file" className="hidden" />
                  </label>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="judul">Judul Postingan</Label>
                  <Input id="judul" placeholder="Masukkan judul" className="dark:bg-white"/>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="link">Link</Label>
                  <Input id="link" placeholder="Masukkan link" className="dark:bg-white" />
                </div>
                <div className="flex justify-end gap-6 mt-4">
                  <Button type="button" variant="outline" className="text-red-400 dark:bg-red-500 dark:text-white">
                    Batal
                  </Button>
                  <Button type="submit" className="bg-blue-500 text-white">
                    Simpan
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <Card className="p-4 mb-4 dark:bg-primary">
          <div className="flex flex-col md:grid md:grid-cols-4 md:items-center gap-4">
            
            <div className="flex justify-center items-center mb-3 md:mb-0">
              <div className="w-24 aspect-square flex items-center justify-center rounded-md bg-blue-50">
               
                <Camera className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            
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

            
            <div className="flex justify-center md:justify-end mt-3 md:mt-0">
              <div className="flex items-center gap-3 px-4 py-2 rounded-md">
                <Button className="flex items-center gap-2 text-white bg-red-500 hover:bg-red-600">
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
      </div>
    </NavbarLayout>
  );
};

export default Dashboard;

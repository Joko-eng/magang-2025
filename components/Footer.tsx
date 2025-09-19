"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 dark:bg-[#0D0B1F] dark:text-gray-300 py-10 px-6 transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Logo + Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/image/mudapedia-logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
              Mudapedia Digital Indonesia
            </h2>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Mari ciptakan obsesi baru dengan diri kita!
          </p>

          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            Senin – Jum’at
          </p>
          <p className="text-sm text-gray-900 dark:text-white">
            08.00 – 16.00 WIB
          </p>
        </div>

        {/* Kolom 2: Hubungi Kami */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-3">
            Hubungi Kami
          </h3>
          <p className="text-sm">Telepon : 0838-6368-5661</p>
          <p className="text-sm">
            Email :{" "}
            <Link
              href="mailto:muudapedia@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              muudapedia@gmail.com
            </Link>
          </p>

          <div className="mt-3 text-sm">
            <p className="font-semibold text-gray-900 dark:text-white">
              Banyuwangi
            </p>
            <p>
              Perum Gedong Blok. D No.5 <br />
              Kertosari, Kec. Banyuwangi, Kabupaten <br />
              Banyuwangi, Jawa Timur 68418
            </p>
          </div>
        </div>

        {/* Kolom 3: Perusahaan */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-3">
            Perusahaan
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#tentang"
                className="hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="#tim"
                className="hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Tim Kami
              </Link>
            </li>
            <li>
              <Link
                href="#harga"
                className="hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Harga
              </Link>
            </li>
            <li>
              <Link
                href="#hubungi"
                className="hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 flex items-center justify-center space-x-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} MudaPedia. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="w-5 h-5 hover:text-gray-900 dark:hover:text-white" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Instagram className="w-5 h-5 hover:text-gray-900 dark:hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

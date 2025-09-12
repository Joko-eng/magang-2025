"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function   Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
        <div className="flex-shrink-0">
          <Image
            src="/image/mudapedia-logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="sm:w-16 h-auto"
            priority
          />
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center space-x-8 xl:space-x-12">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#tim"
                  className="text-white font-medium transition-colors duration-200 text-sm xl:text-base"
                >
                  Tim Kami
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#galeri"
                  className="text-white font-medium transition-colors duration-200 text-sm xl:text-base"
                >
                  Galeri
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#harga"
                  className="text-white font-medium transition-colors duration-200 text-sm xl:text-base"
                >
                  Harga
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#tentang"
                  className="text-white font-medium transition-colors duration-200 text-sm xl:text-base"
                >
                  Tentang Kami
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden xl:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200 hover:scale-105"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button className="bg-primary hover:bg-blue-700 dark:text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 hover:scale-105">
            Hubungi Kami
          </Button>
        </div>

        <Button
          variant="ghost"
          onClick={toggleMenu}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`flex flex-col items-center justify-center h-full w-full transition-all duration-500 transform relative ${
            isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="ghost"
            onClick={closeMenu}
            className={`absolute top-6 right-6 text-white p-3 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 transform ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
            aria-label="Close menu"
          >
            <X size={28} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`absolute top-6 right-20 text-white p-3 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 transform ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
            aria-label="Toggle theme"
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <div className="mb-12 transform transition-all duration-700 delay-200">
            <Image
              src="/image/mudapedia-logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="opacity-90"
              priority
            />
          </div>

          <nav className="flex flex-col items-center space-y-8">
            <Link
              href="#tim"
              className={`text-white text-2xl font-medium hover:text-blue-300 transition-all duration-300 hover:scale-110 transform ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
              onClick={closeMenu}
            >
              Tim Kami
            </Link>
            <Link
              href="#galeri"
              className={`text-white text-2xl font-medium hover:text-blue-300 transition-all duration-300 hover:scale-110 transform ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
              onClick={closeMenu}
            >
              Galeri
            </Link>
            <Link
              href="#harga"
              className={`text-white text-2xl font-medium hover:text-blue-300 transition-all duration-300 hover:scale-110 transform ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
              onClick={closeMenu}
            >
              Harga
            </Link>
            <Link
              href="#tentang"
              className={`text-white text-2xl font-medium hover:text-blue-300 transition-all duration-300 hover:scale-110 transform ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
              onClick={closeMenu}
            >
              Tentang Kami
            </Link>
          </nav>

          <div
            className={`mt-12 transform transition-all duration-500 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              onClick={closeMenu}
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

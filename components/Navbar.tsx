"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between px-12 py-4">
        {/* Logo */}
        
          <Image
            src="/image/mudapedia-logo.png"
            alt="Logo"
            width={70}
            height={70}
            priority
          />
        

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="space-x-6 text-white font-medium">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#portfolio">Portofolio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#proses">Proses Kami</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#harga">Harga</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#tentang">Tentang Kami</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">
          Hubungi Kami
        </Button>
      </div>
    </header>
  )
}

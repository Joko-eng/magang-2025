// app/layout.tsx
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-providers";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mudapedia Digital Indonesia",
  description:
    "Discover the journey behind Mudapedia Digital Indonesia — how we started, our passion for design, and our mission to empower your ideas with stunning visuals.",
  keywords: [
    "Mudapedia Digital Indonesia",
    "Our Story",
    "Digital Blockchain",
    "Web3 Development",
  ],
  authors: [{ name: "Mudapedia Digital Indonesia", url: "" }],
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster position="top-right" richColors />
        </Providers>
      </body>
    </html>
  );
}

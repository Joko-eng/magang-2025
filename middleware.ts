import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;

    // Kalau tidak ada token (belum login) -> redirect ke login
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => true, 
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"], // semua halaman dashboard harus login
};

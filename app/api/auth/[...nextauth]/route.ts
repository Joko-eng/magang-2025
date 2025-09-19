import NextAuth from "next-auth";
import AuthOptions from "@/lib/auth";

const handler = NextAuth(AuthOptions) as never;

export { handler as GET, handler as POST };

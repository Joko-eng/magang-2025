import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectDB } from "@/lib/connectDB";
import { User } from "@/models/Users";
import { AuthUser } from "@/types/sessionTypes";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<AuthUser | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await connectDB();

        const user = await User.findOne({ email: credentials.email }).select(
          "+password"
        );

        if (!user) {
          return null;
        }

        const isValid = await user.comparePassword(credentials.password);
        if (!isValid) {
          return null;
        }

        const returnUser: AuthUser = {
          id: user._id.toString(),
          email: user.email,
          username: user.username,
        };

        return returnUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = (user as AuthUser).username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = token.id;
        session.user.email = token.email as string;
        (session.user as any).username = token.username;
      }
      return session;
    },
  },
};

export default authOptions;

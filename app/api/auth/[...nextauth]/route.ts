import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/connectDB";
import { User } from "@/models/Users";
import { loginSchema } from "@/lib/validation-auth";
import { ZodError } from "zod";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
    } & DefaultSession["user"];
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email dan password harus diisi!");
        }

        try {
          const validatedData = loginSchema.parse({
            email: credentials.email,
            password: credentials.password,
          });

          await connectDB();

          const user = await User.findOne({
            email: validatedData.email,
          }).select("+password");

          if (!user) {
            throw new Error("Email atau password salah!");
          }

          const isValid = await user.comparePassword(validatedData.password);
          if (!isValid) {
            throw new Error("Email atau password salah!");
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.username,
          };
        } catch (error) {
          console.log("Error login:", error);
          if (error instanceof ZodError) {
            const messages = error.issues.map((issue) => issue.message);
            throw new Error(messages.join(", "));
          }

          throw error;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.userId as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };

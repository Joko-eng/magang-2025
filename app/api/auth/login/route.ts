import { generateToken } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import { errorResponse } from "@/lib/response-api";
import { loginSchema } from "@/lib/validation-auth";
import { User } from "@/models/Users";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = loginSchema.parse(body);
    const { email, password } = validatedData;

    await connectDB();
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Email atau password salah!" },
        { status: 401 }
      );
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Email atau password salah!" },
        { status: 401 }
      );
    }

    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
    });

    return NextResponse.json({
      success: true,
      message: "Login berhasil!",
      data: {
        user: {
          id: user._id,
          name: user.username,
          email: user.email,
        },
        token,
      },
    });
  } catch (error: any) {
    console.error("Login Error: ", error);

    if (error instanceof ZodError) {
      const messages = error.issues.map((err) => err.message);
      return NextResponse.json(
        errorResponse("Data tidak valid", messages.join(", ")),
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan pada server",
      },
      { status: 500 }
    );
  }
}

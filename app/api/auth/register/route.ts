import { connectDB } from "@/lib/connectDB";
import { errorResponse, successResponse } from "@/lib/response-api";
import { registerSchema } from "@/lib/validation-auth";
import { User } from "@/models/Users";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = registerSchema.parse(body);
    const { username, email, password } = validatedData;

    await connectDB();
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      return NextResponse.json(errorResponse("Email sudah terdaftar"), {
        status: 409,
      });
    }

    const user = new User({
      username,
      email,
      password,
    });
    await user.save();

    const responseData = {
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };

    return NextResponse.json(
      successResponse(responseData, "Register berhasil"),
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Register Error: ", error);

    if (error instanceof ZodError) {
      const messages = error.issues.map((err) => err.message);
      return NextResponse.json(
        errorResponse("Data tidak valid", messages.join(", ")),
        { status: 400 }
      );
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (err: any) => err.message
      );
      return NextResponse.json(
        errorResponse("Data tidak valid", messages.join(", ")),
        { status: 400 }
      );
    }

    return NextResponse.json(errorResponse("Terjadi Kesalahan Server"), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    await connectDB();
    const users = await User.find()
      .select("-createdAt -updatedAt")
      .sort({ createdAt: -1 });

    const responseData = {
      Users: users.map((user) => ({
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })),
      total: users.length,
    };

    return NextResponse.json(successResponse(responseData, "Success"), {
      status: 200,
    });
  } catch (error) {
    console.error("Tidak dapat mengambil data users: ", error);
    return NextResponse.json(errorResponse("Terjadi Kesalahan Server"), {
      status: 500,
    });
  }
}

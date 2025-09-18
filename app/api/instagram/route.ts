import { connectDB } from "@/lib/connectDB";
import { errorResponse, successResponse } from "@/lib/response-api";
import { Instagram } from "@/models/instagram";
import {  NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const posts = await Instagram.find({})
      .select("-createdAt -updatedAt")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(
      successResponse(
        { posts: posts, totalPosts: posts.length },
        "Data Berhasil Diambil!"
      ),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Tidak dapat mengambil data: ", error);

    return NextResponse.json(errorResponse("Terjadi kesalahan pada server"), {
      status: 500,
    });
  }
}


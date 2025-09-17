import { connectDB } from "@/lib/connectDB";
import { errorResponse, successResponse } from "@/lib/response-api";
import { Instagram } from "@/models/instagram";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const posts = await Instagram.find({})
      .select("-createdAt -updatedAt")
      .sort({ createdAt: -1 })
      .lean();

    const transformedPosts = posts.map((post) => ({
      id: post._id,
      title: post.title,
      thumbnail: post.thumbnail,
      url: post.url,
    }));

    return NextResponse.json(
      successResponse(
        { posts: transformedPosts, totalPosts: transformedPosts.length },
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

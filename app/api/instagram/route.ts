import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { connectDB } from "@/lib/connectDB";
import { errorResponse, successResponse } from "@/lib/response-api";
import { Instagram } from "@/models/instagram";
import cloudinaryImageHandler from "@/lib/cloudinary";
import authOptions from "@/lib/auth";
import { instagramSchema } from "@/lib/validation-instagram";
import { SessionUser } from "@/types/sessionTypes";
import { InstagramData } from "@/types/instagramTypes";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET(): Promise<NextResponse> {
  try {
    await connectDB();

    const posts = await Instagram.find({})
      .select("-createdAt -updatedAt")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(
      successResponse(
        {
          posts: posts,
          totalPosts: posts.length,
        },
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

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        errorResponse("Tidak dapat token. silahkan login kembali"),
        { status: 401 }
      );
    }

    const userId = (session.user as SessionUser).id;
    if (!userId) {
      return NextResponse.json(
        errorResponse("User ID tidak ditemukan. Silahkan login ulang"),
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as Blob | null;
    const title = formData.get("title") as string | null;
    const url = formData.get("url") as string | null;

    if (!file) {
      return NextResponse.json(errorResponse("File gambar wajib diupload!"), {
        status: 400,
      });
    }

    if (!url || !title) {
      return NextResponse.json(errorResponse("URL dan Title wajib diisi!"), {
        status: 400,
      });
    }

    const validationData = { title, url };
    const parsedData = instagramSchema.parse(validationData);

    const cloudinaryResponse = await cloudinaryImageHandler("UPLOAD", file);
    await connectDB();

    const instagramData: InstagramData = {
      title: parsedData.title,
      url: parsedData.url,
      thumbnail: cloudinaryResponse.secure_url,
      thumbnailVersion: "v.1.0.1",
      userId,
    };

    const newPostInstagram = new Instagram(instagramData);
    await newPostInstagram.save();

    return NextResponse.json(
      successResponse(
        {
          posts: {
            id: newPostInstagram._id,
            title: newPostInstagram.title,
            url: newPostInstagram.url,
            thumbnail: newPostInstagram.thumbnail,
            thumbnailVersion: newPostInstagram.thumbnailVersion,
            createdAt: newPostInstagram.createdAt,
          },
        },
        "Post Instagram Telah Dibuat!"
      ),
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating Instagram post: ", error);

    if (error instanceof z.ZodError) {
      const errorMessages = error.issues
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");

      return NextResponse.json(
        errorResponse(`Validation error: ${errorMessages}`),
        { status: 400 }
      );
    }

    if (error.message?.includes("cloudinary") || error.http_code) {
      return NextResponse.json(
        errorResponse("Gagal mengupload gambar ke Cloudinary"),
        { status: 500 }
      );
    }

    if (error.code === 11000) {
      return NextResponse.json(errorResponse("Data duplikat ditemukan"), {
        status: 409,
      });
    }

    if (error.name === "ValidationError") {
      const validationMessages = Object.values(error.errors)
        .map((err: any) => err.message)
        .join(", ");

      return NextResponse.json(
        errorResponse(`Validation failed: ${validationMessages}`),
        { status: 400 }
      );
    }

    return NextResponse.json(errorResponse("Terjadi kesalahan pada server"), {
      status: 500,
    });
  }
}

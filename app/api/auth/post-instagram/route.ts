import { getTokenFromRequest, verifyToken } from "@/lib/auth";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { connectDB } from "@/lib/connectDB";
import { errorResponse, successResponse } from "@/lib/response-api";
import { instagramSchema } from "@/lib/validation-instagram";
import { Instagram } from "@/models/instagram";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  try {
    const token = getTokenFromRequest(req);
    if (!token) {
      return NextResponse.json(
        errorResponse("Token tidak ditemukan"),
        { status: 401 }
      );
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        errorResponse("Token tidak valid"),
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const title = formData.get('title') as string;
    const url = formData.get('url') as string;
    const thumbnail = formData.get('thumbnail') as File;

    if (!title || !url || !thumbnail) {
      return NextResponse.json(
        errorResponse("Title, URL, dan thumbnail wajib diisi"),
        { status: 400 }
      );
    }

    const MAX_FILE_SIZE = 8 * 1024 * 1024;
    const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    
    if (thumbnail.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        errorResponse("Ukuran file maksimal 8MB"),
        { status: 400 }
      );
    }

    if (!ACCEPTED_IMAGE_TYPES.includes(thumbnail.type)) {
      return NextResponse.json(
        errorResponse("File harus berupa gambar (JPG, PNG, WEBP)"),
        { status: 400 }
      );
    }

    const validatedData = instagramSchema.parse({ title, url });
    const bytes = await thumbnail.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await uploadToCloudinary(
      buffer,
      thumbnail.name.replace(/\.[^/.]+$/, ""),
      "instagram-thumbnails"
    );

    await connectDB();
    const instagramPost = new Instagram({
      title: validatedData.title,
      thumbnail: uploadResult.secure_url,
      url: validatedData.url,
      userId: payload.userId,
    });
    await instagramPost.save();

    return NextResponse.json(
      successResponse({
        id: instagramPost._id,
        title: instagramPost.title,
        thumbnail: instagramPost.thumbnail,
        url: instagramPost.url,
        createdAt: instagramPost.createdAt,
      }, "Post Instagram berhasil ditambahkan!"),
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Instagram POST Error: ", error);

    if (error instanceof ZodError) {
      const messages = error.issues.map((err) => err.message);
      return NextResponse.json(
        errorResponse("Data tidak valid", messages.join(", ")),
        { status: 400 }
      );
    }

    if (error.name === 'JsonWebTokenError') {
      return NextResponse.json(
        errorResponse("Token tidak valid"),
        { status: 401 }
      );
    }

    if (error.name === 'TokenExpiredError') {
      return NextResponse.json(
        errorResponse("Token sudah kedaluwarsa"),
        { status: 401 }
      );
    }

    return NextResponse.json(
      errorResponse("Terjadi kesalahan pada server"),
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const token = getTokenFromRequest(req);
    if (!token) {
      return NextResponse.json(
        errorResponse("Token tidak ditemukan"),
        { status: 401 }
      );
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        errorResponse("Token tidak valid"),
        { status: 401 }
      );
    }

    await connectDB();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const posts = await Instagram
      .find({ userId: payload.userId })
      .select('title thumbnail url createdAt updatedAt')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const totalPosts = await Instagram.countDocuments({ userId: payload.userId });
    const totalPages = Math.ceil(totalPosts / limit);

    return NextResponse.json(
      successResponse({
        posts,
        pagination: {
          currentPage: page,
          totalPages,
          totalPosts,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        }
      }, "Data berhasil diambil!"),
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Instagram GET Error: ", error);

    if (error.name === 'JsonWebTokenError') {
      return NextResponse.json(
        errorResponse("Token tidak valid"),
        { status: 401 }
      );
    }

    if (error.name === 'TokenExpiredError') {
      return NextResponse.json(
        errorResponse("Token sudah kedaluwarsa"),
        { status: 401 }
      );
    }

    return NextResponse.json(
      errorResponse("Terjadi kesalahan pada server"),
      { status: 500 }
    );
  }
}
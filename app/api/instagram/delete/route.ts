  import { NextRequest, NextResponse } from "next/server";
  import { v2 as cloudinary } from "cloudinary";
  import { getServerSession } from "next-auth";
  import { connectDB } from "@/lib/connectDB";
  import { errorResponse, successResponse } from "@/lib/response-api";
  import { Instagram } from "@/models/instagram";
  import authOptions from "@/lib/auth";
  import { SessionUser } from "@/types/sessionTypes";

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  export async function DELETE(req: NextRequest): Promise<NextResponse> {
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

      const url = new URL(req.url);
      const postId = url.searchParams.get("id");

      if (!postId) {
        return NextResponse.json(errorResponse("ID post wajib diisi"), {
          status: 400,
        });
      }

      await connectDB();

      const existingPost = await Instagram.findOne({ _id: postId, userId });
      if (!existingPost) {
        return NextResponse.json(
          errorResponse("Post tidak ditemukan atau tidak memiliki akses"),
          { status: 404 }
        );
      }

      const publicId = existingPost.thumbnail
        .split("/")
        .slice(-1)[0]
        .split(".")[0];

      await cloudinary.uploader.destroy(
        `${process.env.CLOUDINARY_PATH}/${publicId}`
      );

      await Instagram.findByIdAndDelete(postId);

      return NextResponse.json(
        successResponse(
          { deletedId: postId },
          "Post Instagram Berhasil Dihapus!"
        ),
        { status: 200 }
      );
    } catch (error: any) {
      console.error("Error deleting Instagram post: ", error);

      if (error.message?.includes("cloudinary") || error.http_code) {
        return NextResponse.json(
          errorResponse("Gagal menghapus gambar dari Cloudinary"),
          { status: 500 }
        );
      }

      if (error.name === "CastError") {
        return NextResponse.json(errorResponse("ID post tidak valid"), {
          status: 400,
        });
      }

      return NextResponse.json(errorResponse("Terjadi kesalahan pada server"), {
        status: 500,
      });
    }
  }

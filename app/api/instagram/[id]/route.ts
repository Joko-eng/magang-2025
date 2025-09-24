import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { getServerSession } from 'next-auth';
import { z } from 'zod';
import { connectDB } from '@/lib/connectDB';
import { errorResponse, successResponse } from '@/lib/response-api';
import { Instagram } from '@/models/instagram';
import cloudinaryImageHandler from '@/lib/cloudinary';
import authOptions from '@/lib/auth';
import { instagramSchema } from '@/lib/validation-instagram';
import { SessionUser } from '@/types/sessionTypes';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(errorResponse('Tidak dapat token. silahkan login kembali'), { status: 401 });
    }

    const userId = (session.user as SessionUser).id;
    if (!userId) {
      return NextResponse.json(errorResponse('User ID tidak ditemukan. Silahkan login ulang'), { status: 401 });
    }

    const { id: postId } = await params;
    if (!postId) {
      return NextResponse.json(errorResponse('ID post wajib diisi'), {
        status: 400,
      });
    }

    await connectDB();
    const existingPost = await Instagram.findOne({ _id: postId, userId });
    if (!existingPost) {
      return NextResponse.json(errorResponse('Post tidak ditemukan atau tidak memiliki akses'), { status: 404 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as Blob | null;
    const title = formData.get('title') as string | null;
    const urlPost = formData.get('url') as string | null;

    if (!urlPost || !title) {
      return NextResponse.json(errorResponse('URL dan Title wajib diisi!'), {
        status: 400,
      });
    }

    const validationData = { title, url: urlPost };
    const parsedData = instagramSchema.parse(validationData);

    let thumbnailUrl = existingPost.thumbnail;
    let thumbnailVersion = existingPost.thumbnailVersion;

    if (file) {
      const currentVersion = existingPost.thumbnailVersion;
      const versionParts = currentVersion.split('.');

      const major = versionParts[1];
      const minor = versionParts[2];
      const patch = parseInt(versionParts[3]) + 1;
      const newVersion = `v.${major}.${minor}.${patch}`;

      const publicId = existingPost.thumbnail.split('/').slice(-1)[0].split('.')[0];

      const cloudinaryResponse = await cloudinaryImageHandler('UPDATE', file, publicId);

      thumbnailUrl = cloudinaryResponse.secure_url;
      thumbnailVersion = newVersion;
    }

    const updatedPost = await Instagram.findByIdAndUpdate(
      postId,
      {
        title: parsedData.title,
        url: parsedData.url,
        thumbnail: thumbnailUrl,
        thumbnailVersion,
      },
      { new: true, runValidators: true }
    );

    return NextResponse.json(
      successResponse(
        {
          posts: {
            id: updatedPost._id,
            title: updatedPost.title,
            url: updatedPost.url,
            thumbnail: updatedPost.thumbnail,
            thumbnailVersion: updatedPost.thumbnailVersion,
            updatedAt: updatedPost.updatedAt,
          },
        },
        'Post Instagram Berhasil Diupdate!'
      ),
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error updating Instagram post: ', error);

    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map((err) => `${err.path.join('.')}: ${err.message}`).join(', ');

      return NextResponse.json(errorResponse(`Validation error: ${errorMessages}`), { status: 400 });
    }

    if (error.message?.includes('cloudinary') || error.http_code) {
      return NextResponse.json(errorResponse('Gagal mengupload gambar ke Cloudinary'), { status: 500 });
    }

    if (error.name === 'ValidationError') {
      const validationMessages = Object.values(error.errors)
        .map((err: any) => err.message)
        .join(', ');

      return NextResponse.json(errorResponse(`Validation failed: ${validationMessages}`), { status: 400 });
    }

    if (error.name === 'CastError') {
      return NextResponse.json(errorResponse('ID post tidak valid'), {
        status: 400,
      });
    }

    return NextResponse.json(errorResponse('Terjadi kesalahan pada server'), {
      status: 500,
    });
  }
}

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  bytes: number;
}

export async function uploadToCloudinary(
  fileBuffer: Buffer,
  fileName: string,
  folder: string = "testing"
): Promise<CloudinaryUploadResult> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto",
          folder: folder,
          public_id: `${folder}/${Date.now()}-${fileName}`,
          transformation: [
            { quality: "auto" },
            { format: "auto" },
          ],
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result as CloudinaryUploadResult);
          }
        }
      )
      .end(fileBuffer);
  });
}

export async function deleteFromCloudinary(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Error deleting from cloudinary: ", error);
    throw error;
  }
}

export default cloudinary;

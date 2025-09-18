import { v2 as cloudinary, UploadApiOptions, UploadApiResponse } from "cloudinary";

type CloudinaryMethod = "UPLOAD" | "UPDATE";

const cloudinaryImageHandler = async (
  method: CloudinaryMethod,
  file: Blob,
  fileName?: string
): Promise<UploadApiResponse> => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const base64 = buffer.toString("base64");
  const dataUri = `data:${file?.type};base64,${base64}`;
  const folder = process.env.CLOUDINARY_PATH;

  const options: UploadApiOptions = {
    overwrite: true,
    invalidate: true,
    resource_type: "image",
    use_filename: false,
    unique_filename: !fileName,
    folder,
  };

  if (fileName) {
    options.public_id = fileName;
  }

  const response = await cloudinary.uploader.upload(dataUri, options);

  return response;
};

export default cloudinaryImageHandler;

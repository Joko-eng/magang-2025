import { IInstagram } from "@/types/schemaInstagramType";
import { model, models, Schema } from "mongoose";

const instagramSchema: Schema<IInstagram> = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title wajib diisi"],
      trim: true,
      minlength: [3, "Title minimal 3 karakter"],
      maxlength: [100, "Title maksimal 100 karakter"],
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail wajib diisi"],
      match: [/^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i, "Thumbnail harus berupa URL gambar yang valid"],
    },
    url: {
      type: String,
      required: [true, "URL Instagram wajib diisi"],
      match: [/instagram\.com/i, "URL harus berupa link Instagram"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID wajib diisi"],
    },
  },
  {
    timestamps: true,
  }
);

instagramSchema.index({ userId: 1, createdAt: -1 });

const instagramModelName = 'Instagram';
export const Instagram = models[instagramModelName] || model<IInstagram>(instagramModelName, instagramSchema);
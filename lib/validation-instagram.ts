import { z } from "zod";

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
] as const;

export const instagramSchema = z.object({
  title: z
    .string()
    .min(3, "Title Minimal 3 Karakter!")
    .max(100, "Title Maksimal 100 Karakter!")
    .trim(),
  url: z
    .string()
    .url("Url tidak valid")
    .refine(
      (url) => url.includes("instagram.com"),
      "URL harus berupa link instagram"
    ),
});

export const instagramFileSchema = z.object({
  file: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Ukuran file maksimal 8MB!")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "File harus berupa gambar (JPEG, JPG, PNG, WEBP)"
    ),
});

export type InstagramInput = z.infer<typeof instagramSchema>;

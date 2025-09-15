import { IPostInstagrams } from '@/types/schemaInstagramType';
import { models, Schema, model } from 'mongoose';

const userSchema = new Schema<IPostInstagrams>(
  {
    thumbnail: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const postInstagramModelName = 'Instagram';
export const PostInstagrams = models[postInstagramModelName] || model<IPostInstagrams>(postInstagramModelName, userSchema);

import { Document, Types } from "mongoose";

export interface IInstagram extends Document {
  title: string;
  thumbnail: string;
  url: string;
  userId: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
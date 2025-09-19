import { Document, Types } from "mongoose";

export interface IUser {
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAdmins {
  username: string;
  password: string;
}

export interface IInstagram extends Document {
  title: string;
  thumbnail: string;
  thumbnailVersion: string;
  url: string;
  userId: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

export default interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

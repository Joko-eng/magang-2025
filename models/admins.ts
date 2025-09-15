import { IAdmins } from '@/types/schemaAdminsType';
import { models, Schema, model } from 'mongoose';

const userSchema = new Schema<IAdmins>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const adminModelName = 'Admin';
export const Admins = models[adminModelName] || model<IAdmins>(adminModelName, userSchema);

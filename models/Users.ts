import { IUser } from '@/types/schemaTypes';
import { model, models, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      requred: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Nama minimal 2 karakter'],
      maxlength: [50, 'Nama maksimal 50 karakter'],
    },

    email: {
      type: String,
      required: [true, 'Email wajib diisi'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email tidak valid'],
    },

    password: {
      type: String,
      required: [true, 'Password wajib diisi'],
      minlength: [8, 'Password minimal 8 karakter'],
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.toJSON = function () {
  const userObj = this.toObject();
  delete userObj.password;
  return userObj;
};

const userModelName = 'User';
export const User = models[userModelName] || model<IUser>(userModelName, userSchema);

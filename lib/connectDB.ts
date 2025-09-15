import mongooseModule from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error('Please define the MONGODB_URL environment variable');
}

const url: string = MONGODB_URL;

declare global {
  var mongoose:
    | {
        conn: typeof mongooseModule | null;
        promise: Promise<typeof mongooseModule> | null;
      }
    | undefined;
}

const globalWithMongoose = global as typeof globalThis & {
  mongoose?: {
    conn: typeof mongooseModule | null;
    promise: Promise<typeof mongooseModule> | null;
  };
};

export async function connectDB() {
  // initialize if not defined
  if (!globalWithMongoose.mongoose) {
    globalWithMongoose.mongoose = {
      conn: null,
      promise: null,
    };
  }

  const cached = globalWithMongoose.mongoose;

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongooseModule.connect(url, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  console.log('connected to DB!');
  return cached.conn;
}

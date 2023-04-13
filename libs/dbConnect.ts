import mongoose, { Connection } from "mongoose";

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
interface Global {
  mongoose: {
    conn: Connection | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let globalThis: Global;
if (typeof window === "undefined") {
  globalThis = global as any as Global;
} else {
  globalThis = window as any as Global;
}

let cached = globalThis.mongoose;

if (!cached) {
  cached = globalThis.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    //@ts-ignore
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  //@ts-ignore
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

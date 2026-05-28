import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

let cached = (global as any).mongoose;

if (!cached) {

  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };

}

async function connectDB() {

  try {

    if (cached.conn) {
      return cached.conn;
    }

    if (!MONGODB_URI) {

      console.log("MongoDB URI missing");

      return null;

    }

    if (!cached.promise) {

      cached.promise = mongoose
        .connect(MONGODB_URI)
        .then((mongoose) => mongoose);

    }

    cached.conn = await cached.promise;

    return cached.conn;

  } catch (error) {

    console.log(error);

    return null;

  }

}

export default connectDB;
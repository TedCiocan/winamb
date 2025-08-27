// database/db.js
import mongoose from "mongoose";

// Use local MongoDB first, with Atlas as fallback only if local is not available
const LOCAL_URI = "mongodb://localhost:27017/musiclab";
const FALLBACK_URI =
  "mongodb+srv://subashneupane2022:America2022@cluster0.wwbxuse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const MONGO_URI = process.env.MONGO_URI || LOCAL_URI;
const DB_NAME = process.env.DB_NAME || "musiclab";

export default async function connectDB() {
  try {
    console.log(`🔗 Attempting to connect to: ${MONGO_URI}`);
    console.log(`📂 Database name: ${DB_NAME}`);
    
    await mongoose.connect(MONGO_URI, {
      dbName: DB_NAME,
      // Optional niceties:
      serverSelectionTimeoutMS: 10000,
      family: 4, // IPv4 (sometimes avoids IPv6 DNS issues)
    });

    const { host, port, name } = mongoose.connection;
    console.log(`✅ MongoDB connected → db: ${name} @ ${host}:${port ?? ""}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }

  // Helpful runtime logs
  mongoose.connection.on("error", (err) =>
    console.error("MongoDB runtime error:", err)
  );
  mongoose.connection.on("disconnected", () =>
    console.warn("MongoDB disconnected")
  );
}

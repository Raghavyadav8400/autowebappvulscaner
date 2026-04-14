const mongoose = require("mongoose");
require("dotenv").config();

const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/autowebappvulscaner";

async function connect() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected successfully");
    return mongoose.connection;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    // Don't exit, allow the app to run in memory as fallback
    return null;
  }
}

module.exports = {
  connect,
  mongoose,
};

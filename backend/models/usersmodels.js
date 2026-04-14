const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// User Schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: true,
    },
    scans: [
      {
        url: String,
        status: String,
        findings: mongoose.Schema.Types.Mixed,
        summary: mongoose.Schema.Types.Mixed,
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

// Fallback in-memory storage for when MongoDB is not available
let inMemoryUsers = [];

async function createUser({ email, password }) {
  try {
    // Try to create in MongoDB
    const newUser = new User({
      email: email.toLowerCase(),
      password,
    });
    await newUser.save();
    return {
      id: newUser._id.toString(),
      email: newUser.email,
      createdAt: newUser.createdAt,
    };
  } catch (mongoError) {
    // Fallback to in-memory storage
    console.warn("MongoDB unavailable, using in-memory storage for user creation");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: `mem_${Date.now()}`,
      email: email.toLowerCase(),
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      scans: [],
    };
    inMemoryUsers.push(newUser);
    return { id: newUser.id, email: newUser.email, createdAt: newUser.createdAt };
  }
}

async function findUser(email) {
  try {
    // Try MongoDB first
    const user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      return user;
    }
  } catch (error) {
    console.warn("MongoDB query failed, checking in-memory storage");
  }

  // Fallback to in-memory
  return inMemoryUsers.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

async function addScanToUser(email, scanData) {
  try {
    // Try MongoDB
    const user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      user.scans.push({
        ...scanData,
        timestamp: new Date(),
      });
      await user.save();
      return user;
    }
  } catch (error) {
    console.warn("MongoDB operation failed, checking in-memory storage");
  }

  // Fallback to in-memory
  const user = inMemoryUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (user) {
    user.scans.push({
      ...scanData,
      timestamp: new Date().toISOString(),
    });
  }
  return user;
}

async function getUserScans(email) {
  try {
    // Try MongoDB
    const user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      return user.scans;
    }
  } catch (error) {
    console.warn("MongoDB query failed, checking in-memory storage");
  }

  // Fallback to in-memory
  const user = inMemoryUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
  return user ? user.scans : [];
}

module.exports = {
  createUser,
  findUser,
  verifyPassword,
  addScanToUser,
  getUserScans,
  User,
};

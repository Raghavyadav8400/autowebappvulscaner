const express = require("express");
const { createUser, findUser } = require("../models/usersmodels");

const router = express.Router();

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const existingUser = findUser(email);
  if (existingUser) {
    return res.status(409).json({ error: "A user with this email already exists" });
  }

  createUser({ email, password });
  res.json({ message: "Signup successful" });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const user = findUser(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ message: "Login successful" });
});

module.exports = router;

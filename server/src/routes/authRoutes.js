import express from "express";
import User from "../models/User.js";

const router = express.Router();

// 1. REGISTER ROUTE
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("--- New Registration Attempt ---");
    console.log("Email:", email);

    // Check if email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Result: Fail - User already exists");
      return res.status(400).json({ error: "User already exists" });
    }

    // Save the new user
    const newUser = new User({ name, email, password });
    await newUser.save();
    console.log("Result: Success - User saved to DB");

    return res.status(201).json({
      result: { name: newUser.name, email: newUser.email, _id: newUser._id },
    });
  } catch (error) {
    console.error("Registration Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
});

// 2. LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("--- Login Attempt ---");
    console.log("Searching for:", email, "with password:", password);

    // Find the user by email AND password
    const user = await User.findOne({ email, password });

    if (!user) {
      console.log("Result: Fail - No match found in Database");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    console.log("Result: Success - User found:", user.name);
    return res.json({
      result: { name: user.name, email: user.email, _id: user._id },
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
});

// 3. DEBUG ROUTE (Temporary - allows you to see all users in browser)
router.get("/all-users-debug", async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;

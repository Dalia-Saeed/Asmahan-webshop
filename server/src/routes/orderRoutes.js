import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("--- ORDER INCOMING ---");
    console.log("Data received:", req.body);

    const newOrder = new Order(req.body);
    await newOrder.save();

    console.log("SUCCESS: Order saved to database");
    return res.status(201).json({ result: "Success" });
  } catch (error) {
    console.error("DATABASE ERROR:", error.message);
    return res.status(500).json({ error: error.message });
  }
});

export default router;

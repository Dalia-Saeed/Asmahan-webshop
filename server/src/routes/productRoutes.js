import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ result: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ result: newProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;

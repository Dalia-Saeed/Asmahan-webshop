import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import Product from "../models/Product.js";

// This tells node exactly where to find the .env file relative to this script
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const sampleProducts = [
  {
    name: "Royal Oud Intense",
    price: 150,
    category: "Perfumes",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800",
  },
  {
    name: "Golden Bakhoor",
    price: 45,
    category: "Bakhoor",
    image:
      "https://images.unsplash.com/photo-1595131838585-2450c527f6da?q=80&w=800",
  },
  {
    name: "Silk Abaya Noir",
    price: 220,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800",
  },
  {
    name: "Rose de Mai",
    price: 110,
    category: "Perfumes",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800",
  },
  {
    name: "Amber Musk",
    price: 95,
    category: "Perfumes",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800",
  },
  {
    name: "Sandalwood Incense",
    price: 35,
    category: "Bakhoor",
    image:
      "https://images.unsplash.com/photo-1601614741214-722137582ba9?q=80&w=800",
  },
  {
    name: "Linen Summer Dress",
    price: 180,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800",
  },
  {
    name: "Gold Shimmer Oil",
    price: 55,
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bf87a931be?q=80&w=800",
  },
];

const seedDB = async () => {
  try {
    // We check for both names just in case
    const dbUrl = process.env.MONGO_URI || process.env.MONGODB_URL;

    if (!dbUrl) {
      throw new Error("Could not find MONGO_URI in .env file");
    }

    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB...");

    await Product.deleteMany({});
    console.log("Old products cleared...");

    await Product.insertMany(sampleProducts);
    console.log("Successfully seeded 8 Luxury Products!");

    process.exit(0);
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
};

seedDB();

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
      "https://www.myperfumeshop.com/cdn/shop/files/korloff-paris-royal-oud-intense-le-parfum-perfume-cologne-264176.jpg?v=1710967845&width=1024",
  },
  {
    name: "Golden Bakhoor",
    price: 45,
    category: "Bakhoor",
    image:
      "https://banafaforoud.com/wp-content/uploads/2025/12/Bakhoor-Bouquet-Gold-with-Copper-Incense-Burner.jpg",
  },
  {
    name: "Silk Abaya Noir",
    price: 220,
    category: "Clothing",
    image:
      "https://i.pinimg.com/736x/4e/0d/6e/4e0d6e469e748176d5624efd9ab50bd8.jpg",
  },
  {
    name: "Rose de Mai",
    price: 110,
    category: "Perfumes",
    image: "https://fimgs.net/himg/o.VmLjLhcesm9.jpg",
  },
  {
    name: "Amber Musk",
    price: 95,
    category: "Perfumes",
    image:
      "https://sgperfumes.com/cdn/shop/files/Data_Set_81_Data_Set_81.jpg?v=1769778574",
  },
  {
    name: "Sandalwood Incense",
    price: 35,
    category: "Bakhoor",
    image:
      "https://kalla.in/cdn/shop/files/Kalla_Sandalwood_Insence_Stick.webp?v=1745582947",
  },
  {
    name: "Linen Summer Dress",
    price: 180,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
  },
  {
    name: "Gold Shimmer Oil",
    price: 55,
    category: "Beauty",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXaLCO5iOfCYwcBQa2vBsMNEotrvWwQklhRR2Nw8uhSP6saPH3xbn5Eq7Lrv57Tz6BA9V4zz7gVBE-4hOUZvcXXLDtT0647KuYes8g70Gy6eJabjsEEE_e",
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

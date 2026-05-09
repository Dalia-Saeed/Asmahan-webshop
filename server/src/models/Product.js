import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Perfumes", "Bakhoor", "Clothing", "Beauty"],
    },
    image: { type: String }, // For now, we will use a URL string
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);
export default Product;

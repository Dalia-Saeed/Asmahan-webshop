import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    items: { type: Array, required: true },
    totalPrice: { type: Number, required: true },
    shippingDetails: {
      address: String,
      city: String,
      phone: String,
    },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);
export default Order;

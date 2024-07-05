import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    trim: true,
  },
  quantity: {
    type: Number,
    require: [true, "Quantity is required"],
    trim: true,
  },
});

export const Order = model<TOrder>("Order", orderSchema);

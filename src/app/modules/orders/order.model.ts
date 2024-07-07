import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import { Product } from "../products/product.model";

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
    required: [true, "ProductId is required"],
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

orderSchema.pre("save", async function (next) {
  const product = await Product.findById(this.productId);

  if (
    !product ||
    product.inventory.quantity === undefined ||
    product.inventory.quantity === null
  ) {
    throw new Error("Invalid product or quantity");
  }

  if ((this.quantity as number) > product.inventory.quantity) {
    throw new Error("Insufficient stock");
  }
  product.inventory.quantity -= this.quantity as number;
  product.inventory.inStock = product.inventory.quantity > 0;
  next();
});
export const Order = model<TOrder>("Order", orderSchema);

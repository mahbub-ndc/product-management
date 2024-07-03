import { Schema, model } from "mongoose";
import { Tproduct } from "./product.interface";

const productVariantSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema({
  name: { type: String, required: [true, "Name is required"], trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [productVariantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

export const Product = model<Tproduct>("Product", productSchema);

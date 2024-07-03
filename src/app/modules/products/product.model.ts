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
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
  price: { type: Number, required: [true, "Price is required"], trim: true },
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true,
  },
  tags: {
    type: [String],
    required: [true, "Tags is required"],
    trime: true,
  },
  variants: {
    type: [productVariantSchema],
    required: [true, "Product variant is required"],
    trim: true,
  },
  inventory: {
    type: inventorySchema,
    required: [true, "Inventory is required"],
    trim: true,
  },
});

export const Product = model<Tproduct>("Product", productSchema);

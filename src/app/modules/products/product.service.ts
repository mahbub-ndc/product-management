import { Tproduct } from "./product.interface";
import { Product } from "./product.model";

const createProductInDb = async (product: Tproduct) => {
  const result = await Product.create(product);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

export const productService = {
  createProductInDb,
  getAllProducts,
};

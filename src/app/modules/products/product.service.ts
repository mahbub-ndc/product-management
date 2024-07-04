import { Tproduct } from "./product.interface";
import { Product } from "./product.model";

const createProductInDb = async (product: Tproduct) => {
  const result = await Product.create(product);
  return result;
};

const getAllProducts = async (query: Record<string, unknown>) => {
  const searchableFields = ["name", "category", "description"];
  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const result = await Product.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateSingleProduct = async (id: string, payload: Partial<Tproduct>) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSingleProduct = async (id: string) => {
  const result = Product.findByIdAndDelete(id);
  return result;
};
export const productService = {
  createProductInDb,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};

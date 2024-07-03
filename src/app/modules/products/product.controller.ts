import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productService.createProductInDb(product);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

export const productController = {
  createProduct,
};

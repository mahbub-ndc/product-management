import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getSingleProduct);
router.put("/:productId", productController.updateSingleProduct);
router.delete("/:productId", productController.deleteSingleProduct);

export const productRoute = {
  router,
};

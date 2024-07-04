import { z } from "zod";

const productVariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string().trim(),
  description: z.string().trim(),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().trim(),
  tags: z.array(z.string()),
  variants: z.array(productVariantSchema),
  inventory: inventorySchema,
});
export default productValidationSchema;

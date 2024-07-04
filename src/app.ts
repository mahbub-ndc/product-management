import cors from "cors";
import express, { Request, Response } from "express";
import { productRoute } from "./app/modules/products/product.route";
import { orderRoute } from "./app/modules/orders/order.route";
const app = express();
//const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", productRoute.router);
app.use("/api/v1/orders", orderRoute.router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

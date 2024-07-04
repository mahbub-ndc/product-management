import { Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.createOrderInDb(order);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrders(req.query);

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
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

export const orderController = {
  createOrder,
  getAllOrders,
};

import { Request, Response } from "express";
import { orderService } from "./order.service";
import orderSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodValidateData = orderSchema.parse(order);
    const result = await orderService.createOrderInDb(zodValidateData);

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

    let message;
    if (Object.keys(req.query).length === 0) {
      message = "Orders fetched successfully!";
    } else if (req.query.email) {
      message = `Orders fetched successfully for ${req.query.email}!`;
    }
    res.status(200).json({
      success: true,
      message: message,
      data: result.result,
      total: result.meta,
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

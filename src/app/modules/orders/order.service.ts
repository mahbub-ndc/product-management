import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderInDb = async (order: TOrder) => {
  const result = await Order.create(order);
  return result;
};

const getAllOrders = async (query: Record<string, unknown>) => {
  const searchableFields = ["email", "id"];
  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = Order.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });

  const result = await searchQuery.find(query);
  const meta = await Order.countDocuments();
  return {
    result,
    meta,
  };
};
export const orderService = {
  createOrderInDb,
  getAllOrders,
};

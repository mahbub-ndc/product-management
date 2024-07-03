export type TProductVariant = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  instock: boolean;
};
export type Tproduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TProductVariant[];
  inventory: TInventory;
};

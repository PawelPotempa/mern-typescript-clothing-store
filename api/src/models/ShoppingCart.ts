import mongoose, { Schema, Document } from "mongoose";

export interface IShoppingCart extends Document {
  userId: string;
  products: {
    productId: {
      type: string;
    };
    quantity: {
      type: number;
      default: number;
    };
  }[];
}

const ShoppingCartSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IShoppingCart>(
  "ShoppingCart",
  ShoppingCartSchema
);

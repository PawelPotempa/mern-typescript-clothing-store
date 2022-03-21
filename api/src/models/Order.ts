import mongoose, { Schema, Document } from "mongoose";

export interface Address extends Document {
  street: string;
  city: string;
  postCode: string;
}

export interface IOrder extends Document {
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
  amount: number;
  address: Address;
  status: string;
}

const OrderSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      postCode: { type: String, required: true },
    },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", OrderSchema);

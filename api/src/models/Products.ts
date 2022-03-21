import mongoose, { Schema, Document, Types } from "mongoose";

export interface IProduct extends Document {
  title: string;
  desc: string;
  img: string;
  categories?: Types.Array<string>;
  size?: string;
  color?: string;
  price: number;
}

const ProductSchema: Schema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);

import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import productRoute from "./routes/product";
import shoppingCartRoute from "./routes/shoppingcart";
import orderRoute from "./routes/order";
import stripeRoute from "./routes/stripe";

const router: Application = express();
dotenv.config();

// Template string required in order to prevent a TS error
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));

router.use(cors());
router.use(express.json());
router.use("/api/users", userRoute);
router.use("/api/auth", authRoute);
router.use("/api/products", productRoute);
router.use("/api/carts", shoppingCartRoute);
router.use("/api/orders", orderRoute);
router.use("/api/checkout", stripeRoute);

// TODO: Fix an error when using: "`${process.env.PORT}` || 5000"
router.listen(5001, () => {
  console.log("Backend server is running!");
});

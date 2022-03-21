import express, { Request, Response } from "express";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_KEY}`, {
  apiVersion: "2020-08-27",
});
const router = express.Router();

router.post("/payment", async (req: Request, res: Response) => {
  try {
    const charge = await stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    });
    res.status(200).json(charge);
  } catch (err) {
    res.status(500).json(err);
  }
});

export = router;

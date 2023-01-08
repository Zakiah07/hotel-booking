import User from "../models/user";
import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET);

export const createConnectAccount = async (req, res) => {
  const user = await User.findById(req.auth._id).exec();
  console.log("USER ===>", user);

  const account = await stripe.account.create({
    type: "express",
  });
  console.log("ACCOUNT ===>", account);
  //   console.log("REQ USER FROM SIGN IN MIDDLEWARE", req.auth);
  //   console.log("YOU HIT CREATE ACCOUNT ENDPOINT");
};

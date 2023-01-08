import { expressjwt } from "express-jwt";

//req.user
export const requireSignin = expressjwt({
  //secret, expiry date
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

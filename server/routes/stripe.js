import express from "express";

//middleware
import { requireSignin } from "../middlewares";

//controllers
import {
  createConnectAccount,
  getAccountStatus,
  getAccountBalance,
  payoutSetting,
  stripeSessionId,
} from "../controllers/stripe";

const router = express.Router();
router.post("/create-connect-account", requireSignin, createConnectAccount);
router.post("/get-account-status", requireSignin, getAccountStatus);
router.post("/get-account-balance", requireSignin, getAccountBalance);
router.post("/payout-setting", requireSignin, payoutSetting);
router.post("/stripe-session-id", requireSignin, stripeSessionId);

module.exports = router;

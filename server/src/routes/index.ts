import { Router } from "express";
import {
  CheckoutController,
  ProductController,
  RulesController,
} from "../controllers";

const router = Router();

router.get("/products", ProductController.getProduct);

router.get("/rules", RulesController.getAllRules);

router.get("/checkout", CheckoutController.getCheckout);

router.post("/checkout", CheckoutController.addItemToCheckout);

router.post("/checkout/info", CheckoutController.getCheckoutInfo);

router.post("/checkout/reset", CheckoutController.resetCheckout);

router.post("/apply_rules", CheckoutController.addRulesToCheckout);

export default router;

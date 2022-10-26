import { Request, Response } from "express";
import { checkoutService, rulesService } from "../Services";
import { STATUS } from "../utils";

const addItemToCheckout = (req: Request, res: Response) => {
  const { productId } = req.body;
  checkoutService.add(productId);
  const totalItems = checkoutService.totalItems();

  res.json({
    stauts: STATUS.SUCCESS,
    data: {
      total_items: totalItems,
    },
  });
};

const getCheckoutInfo = (req: Request, res: Response) => {
  const totalItems = checkoutService.totalItems();

  res.json({
    stauts: STATUS.SUCCESS,
    data: {
      total_items: totalItems,
    },
  });
};

const addRulesToCheckout = (req: Request, res: Response) => {
  const { rulesId } = req.body;
  checkoutService.setRule(rulesId ? rulesId : undefined);

  res.json({
    stauts: STATUS.SUCCESS,
    data: {
      total_price: checkoutService.total(),
    },
  });
};

const getCheckout = (req: Request, res: Response) => {
  res.json({
    stauts: STATUS.SUCCESS,
    data: {
      items: checkoutService.getItems(),
      available_rules: rulesService.getAvailableRule(),
      price: checkoutService.total(),
      selected_rule: checkoutService.getRule(),
    },
  });
};

const resetCheckout = (req: Request, res: Response) => {
  checkoutService.reset();
  res.json({
    stauts: STATUS.SUCCESS,
  });
};

export {
  addItemToCheckout,
  getCheckout,
  addRulesToCheckout,
  getCheckoutInfo,
  resetCheckout,
};

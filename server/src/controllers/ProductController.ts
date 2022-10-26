import { Request, Response } from "express";
import { productService } from "../Services";
import { STATUS } from "../utils";

const getProduct = (req: Request, res: Response) => {
  const product = productService.getProduct();
  res.json({
    status: STATUS.SUCCESS,
    data: product,
  });
};

export { getProduct };

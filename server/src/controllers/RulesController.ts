import { Request, Response } from "express";
import { rulesService } from "../Services";
import { STATUS } from "../utils";

const getAllRules = (req: Request, res: Response) => {
  const rulesList = rulesService.getAllRules();
  res.json({
    status: STATUS.SUCCESS,
    data: {
      items: rulesList,
    },
  });
};

export { getAllRules };

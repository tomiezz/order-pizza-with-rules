import { ruleList } from "../models";
import { checkoutService } from "./CheckoutService";

class RulesService {
  getAllRules() {
    return ruleList;
  }

  getRuleById(ruleId: string) {
    const rule = ruleList.find((item) => item.id === ruleId);

    return rule;
  }

  getAvailableRule() {
    const productIds: string[] = checkoutService.getItemIds();

    return ruleList.filter((item) =>
      item.rules.some((childRule) => productIds.includes(childRule.productId))
    );
  }

  isAvailableRule(rulesId: string): boolean {
    return ruleList.some((item) => item.id === rulesId);
  }
}

const rulesService = new RulesService();

export { rulesService };

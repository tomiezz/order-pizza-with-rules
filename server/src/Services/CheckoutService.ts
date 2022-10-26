import { DetailRule, Product, Rule, Rules } from "../utils/types";
import { productList, ruleList, STATUS } from "../utils";
import { rulesService } from "./RulesService";

class CheckoutServices {
  items: Product[] = [];
  rule?: string;

  constructor(ruleId?: string) {
    this.rule = ruleId;
  }

  add(productId: string) {
    if (this.isProductExisted(productId)) {
      this.updateProductInCheckout(productId);
      return;
    }

    this.addProductToCheckout(productId);
  }

  addProductToCheckout(productId: string) {
    const searchProduct = productList.find((item) => item.id === productId);
    if (searchProduct) {
      const newProduct: Product = { ...searchProduct, quantity: 1 };
      this.items.push(newProduct);
    }
  }

  updateProductInCheckout(productId: string) {
    this.items.forEach((item) => {
      if (productId === item.id && item.quantity) {
        item.quantity++;
      }
    });
  }

  isProductExisted(productId: string): boolean {
    return this.items.map((item) => item.id).includes(productId);
  }

  getRulesMapItems() {
    let currentRules;
    let rulesMap = new Map<string, DetailRule>();

    if (this.rule) {
      currentRules = rulesService.getRuleById(this.rule);
    }

    if (currentRules) {
      const itemIds = this.getItemIds();

      currentRules.rules.map((ruleItem) => {
        if (itemIds.includes(ruleItem.productId)) {
          rulesMap.set(ruleItem.productId, ruleItem.rule);
        }
      });
    }

    return rulesMap;
  }

  total(): string {
    const rulesMap = this.getRulesMapItems();
    console.log(rulesMap);

    return this.items
      .reduce((accu, item) => {
        let currentPrice = item.price * (item.quantity || 0);

        if (rulesMap.has(item.id) && item.quantity) {
          const currentRule = rulesMap.get(item.id);

          switch (currentRule?.type) {
            case "deal":
              const itemNeedToPurchase =
                Math.floor(item.quantity / currentRule.from) * currentRule.to +
                (item.quantity % currentRule.from);
              currentPrice = itemNeedToPurchase * item.price;
              break;
            case "price":
              currentPrice = currentRule.value * item.quantity;
              break;
            default:
              break;
          }
        }

        return accu + currentPrice;
      }, 0)
      .toFixed(2);
  }

  reset() {
    this.items = [];
    this.rule = undefined;
  }
  totalItems(): number {
    return this.items.length;
  }

  getItemIds(): string[] {
    return this.items.map((item) => item.id);
  }

  /** GETTER , SETTER */

  getRule() {
    return this.rule;
  }

  setRule(ruleId?: string) {
    if (ruleId && rulesService.isAvailableRule(ruleId)) {
      this.rule = ruleId;
    }

    if (ruleId === undefined) {
      this.rule = undefined;
    }
  }

  getItems() {
    return this.items;
  }

  setItems() {}

  /** --------------------- */
}

const checkoutService = new CheckoutServices();

export { checkoutService };

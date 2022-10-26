import { SelectionItem } from "components/Selection";
import { Product, Rules } from "utils";
import { CheckoutItem } from "./types";

const formatProductToCheckoutItem = (product: Product): CheckoutItem => {
  return {
    title: product.name,
    price: product.price,
    quantity: product.quantity || 0,
    desc: product.description,
    id: product.id,
  };
};

const formatProductsToCheckoutItems = (product: Product[]): CheckoutItem[] => {
  return product.map(formatProductToCheckoutItem);
};

const formatRuleToSelection = (rule: Rules): SelectionItem => {
  return {
    name: rule.name,
    value: rule.id,
  };
};

const formatRulesToSelections = (rules: Rules[]): SelectionItem[] => {
  return rules.map(formatRuleToSelection);
};

export { formatProductsToCheckoutItems, formatRulesToSelections };

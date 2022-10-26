import React, { useEffect, useMemo, useState } from "react";
import { Api, Product, Rules } from "utils";
import {
  formatProductsToCheckoutItems,
  formatRulesToSelections,
} from "./helper";
import { CheckoutItem, CheckoutViewProps } from "./types";

const useCheckout = (): CheckoutViewProps => {
  const [price, setPrice] = useState<number>(0);
  const [checkoutProducts, setCheckoutProducts] = useState<Product[]>([]);
  const [rulesList, setRulesList] = useState<Rules[]>([]);
  const [selectedRule, setSelectedRule] = useState<string>();

  const getCheckout = async () => {
    try {
      const result = await Api.getCheckout();

      setCheckoutProducts(result.items);
      setPrice(result.price);
      setRulesList(result.available_rules);
      if (result.selected_rule) {
        setSelectedRule(result.selected_rule);
      }
    } catch (err) {}
  };

  const applyRules = async (rulesId: string) => {
    try {
      const result = await Api.applyRules({ rulesId: rulesId });
      setPrice(result.total_price);
    } catch (err) {}
  };

  useEffect(() => {
    getCheckout();
  }, []);

  const checkoutRecords: CheckoutItem[] = useMemo(() => {
    return formatProductsToCheckoutItems(checkoutProducts);
  }, [checkoutProducts]);

  const rulesListSelections = useMemo(() => {
    return formatRulesToSelections(rulesList);
  }, [rulesList]);

  const handleSelect: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const targetValue = e.currentTarget.getAttribute("data-option");
    if (targetValue) {
      setSelectedRule((prev) => {
        const newValue = prev !== targetValue ? targetValue : "";
        applyRules(newValue);
        return newValue;
      });
    }
  };

  return {
    data: checkoutRecords,
    price,
    options: rulesListSelections,
    selectedValue: selectedRule,
    onSelect: handleSelect,
  };
};

export default useCheckout;

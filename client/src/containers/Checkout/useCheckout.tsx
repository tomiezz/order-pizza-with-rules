import React, { useEffect, useMemo, useState } from "react";
import {
  AlertMessageType,
  Api,
  isMeaningfullArray,
  Product,
  Rules,
} from "utils";
import {
  formatProductsToCheckoutItems,
  formatRulesToSelections,
} from "./helper";
import { CheckoutItem, CheckoutViewProps } from "./types";

const useCheckout = (): CheckoutViewProps => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [price, setPrice] = useState<number>(0);
  const [checkoutProducts, setCheckoutProducts] = useState<Product[]>([]);
  const [rulesList, setRulesList] = useState<Rules[]>([]);
  const [selectedRule, setSelectedRule] = useState<string>();
  const [alert, setAlert] = useState<AlertMessageType>();

  const getCheckout = async () => {
    try {
      const result = await Api.getCheckout();

      if (result && isMeaningfullArray(result.items)) {
        setCheckoutProducts(result?.items);
      }

      if (result?.price) {
        setPrice(result.price);
      }
      if (result?.available_rules && result?.available_rules.length > 0) {
        setRulesList(result.available_rules);
      }
      if (result?.selected_rule) {
        setSelectedRule(result.selected_rule);
      }
    } catch (err) {
      setError(new Error("Get chekcout failed"));
    } finally {
      setLoading(false);
    }
  };

  const applyRules = async (rulesId: string) => {
    try {
      const result = await Api.applyRules({ rulesId: rulesId });
      if (result?.total_price) {
        setPrice(result.total_price);
      }
      setAlert({
        type: "success",
        message: "Apply rule success",
      });
    } catch (err) {
      setAlert({
        type: "error",
        message: "Apply rule failed",
      });
    }
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
    error,
    loading,
    data: {
      data: checkoutRecords,
      options: rulesListSelections,
      price: price,
      onSelect: handleSelect,
      selectedValue: selectedRule,
      alert,
    },
  };
};

export default useCheckout;

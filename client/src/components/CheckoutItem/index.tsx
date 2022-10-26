import React from "react";
import CheckoutItemView from "./CheckoutItemVIew";
import { CheckoutItemProps } from "./types";

const CheckoutItem = (props: CheckoutItemProps) => {
  return <CheckoutItemView {...props} />;
};

export default CheckoutItem;
export * from "./types";

import React from "react";
import CheckoutView from "./CheckoutView";
import useCheckout from "./useCheckout";

const Checkout = () => {
  const checkoutViewProps = useCheckout();
  return <CheckoutView {...checkoutViewProps} />;
};

export default Checkout;

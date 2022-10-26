import React from "react";
import { memo } from "react";
import ProductView from "./ProductView";
import useProduct from "./useProduct";

const Product = () => {
  const productViewProps = useProduct();
  return <ProductView {...productViewProps} />;
};

export default memo(Product);

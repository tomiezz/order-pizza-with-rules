import { useFeatureContext } from "contexts/FeatureContext";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Api, ParentProduct } from "utils";
import { formatProductListToOptionList } from "./helper";
import { ProductViewProps } from "./types";

const useProduct = (): ProductViewProps => {
  const { setValue: setFeatureCtxValue } = useFeatureContext();

  const [product, setProduct] = useState<ParentProduct>();
  const [selectedProductId, setSelectedProductId] = useState<string>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const result = await Api.getProduct();
      const firstChildId = result.variant?.[0].id;
      setProduct(result);
      setSelectedProductId(firstChildId);
    } catch (err) {
      setError(new Error("Get product failed"));
    }
  };

  const handleSelectProduct: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const targetValue = e.currentTarget.getAttribute("data-option");
    if (targetValue) {
      setSelectedProductId(targetValue);
    }
  };

  const handleBuy = async () => {
    if (selectedProductId) {
      try {
        const result = await Api.addItemToCheckout({
          productId: selectedProductId,
        });
        setFeatureCtxValue((prev) => ({
          ...prev,
          cartItem: result.total_items,
        }));
      } catch (err) {}
    }
  };

  const childProductsPrice = useMemo(() => {
    const mapProducts = new Map();

    product?.variant.map((item) => {
      mapProducts.set(item.id, item.price);
    }, []);
    return mapProducts;
  }, [product]);

  const productViewProps = useMemo<ProductViewProps>(() => {
    const options = formatProductListToOptionList(product?.variant || []);
    return {
      title: product?.name || "",
      options,
      price: childProductsPrice.get(selectedProductId),
      description: product?.description,
      selectedValue: selectedProductId,
      onSelect: handleSelectProduct,
      onBuy: handleBuy,
      error,
    };
  }, [product, selectedProductId, childProductsPrice, error]);

  return productViewProps;
};

export default useProduct;

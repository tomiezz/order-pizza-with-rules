import { useFeatureContext } from "contexts/FeatureContext";
import React, { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import { AlertMessageType, Api, ParentProduct } from "utils";
import { formatProductListToOptionList } from "./helper";
import { ProductDataViewProps, ProductViewProps } from "./types";

const useProduct = (): ProductViewProps => {
  const { setValue: setFeatureCtxValue } = useFeatureContext();

  const [product, setProduct] = useState<ParentProduct>();

  const [selectedProductId, setSelectedProductId] = useState<string>();

  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [alert, setAlert] = useState<AlertMessageType | null>(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const result = await Api.getProduct();

      setProduct(result);

      const firstChildId = result?.variant?.[0].id;

      setSelectedProductId(firstChildId);
    } catch (err) {
      setError(new Error("Get product failed"));
    } finally {
      setLoading(false);
    }
  };

  const handleSelectProduct: React.MouseEventHandler<HTMLDivElement> =
    useCallback((e) => {
      const targetValue = e.currentTarget.getAttribute("data-option");
      if (targetValue) {
        setSelectedProductId(targetValue);
      }
    }, []);

  const handleBuy = async () => {
    if (selectedProductId) {
      try {
        const result = await Api.addItemToCheckout({
          productId: selectedProductId,
        });
        setFeatureCtxValue((prev) => ({
          ...prev,
          cartItem: result?.total_items,
        }));
        setAlert({
          message: "Add item success",
          type: "success",
        });
      } catch (err) {
        setAlert({
          message: "Add item failed",
          type: "error",
        });
      }
    }
  };

  const price = useMemo(() => {
    const childItem = product?.variant?.find(
      (item) => item.id === selectedProductId
    );

    return childItem && childItem.price ? childItem.price : 0;
  }, [selectedProductId, product]);

  const productData: ProductDataViewProps = useMemo(() => {
    const options =
      product?.variant && product?.variant?.length > 0
        ? formatProductListToOptionList(product?.variant)
        : [];

    return {
      title: product?.name,
      options,
      price,
      selectedValue: selectedProductId,
      description: product?.description,
      onBuy: handleBuy,
      onSelect: handleSelectProduct,
      alert,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, selectedProductId, alert]);

  return {
    error,
    loading,
    data: productData,
  };
};

export default useProduct;

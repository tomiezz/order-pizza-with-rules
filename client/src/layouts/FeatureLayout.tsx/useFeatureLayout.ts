import React from "react";
import { useNavigate } from "react-router";
import { FeatureLayoutViewProps } from "./types";
import { Api, APP_ROUTES } from "utils";
import { useFeatureContext } from "contexts/FeatureContext";

const useFeatureLayout = (): FeatureLayoutViewProps => {
  const navigate = useNavigate();
  const { value } = useFeatureContext();
  const handleReset = async () => {
    console.log("");

    try {
      await Api.reset();
    } catch (err) {}
    navigate(APP_ROUTES.HOME);
  };

  return {
    onReset: handleReset,
    cartSize: value.cartItem,
  };
};

export default useFeatureLayout;

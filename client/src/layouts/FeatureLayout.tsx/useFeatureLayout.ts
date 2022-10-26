import React from "react";
import { useNavigate } from "react-router";
import { FeatureLayoutViewProps } from "./types";
import { Api, APP_ROUTES } from "utils";

const useFeatureLayout = (): FeatureLayoutViewProps => {
  const navigate = useNavigate();
  const handleReset = async () => {
    console.log("");

    try {
      await Api.reset();
    } catch (err) {}
    navigate(APP_ROUTES.HOME);
  };

  return {
    onReset: handleReset,
  };
};

export default useFeatureLayout;

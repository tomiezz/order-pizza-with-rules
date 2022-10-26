import React, { useContext } from "react";
import { FeatureContext } from "./FeatureContextProvider";

const useFeatureContext = () => {
  return useContext(FeatureContext);
};

export { useFeatureContext };

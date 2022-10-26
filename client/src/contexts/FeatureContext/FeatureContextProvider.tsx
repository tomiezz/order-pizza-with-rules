import FeatureLayout from "layouts/FeatureLayout.tsx";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Api } from "utils";
import { FeatureContextState, FeatureContextType } from "./types";

const contextDefaultValue = {
  value: {},
  setValue: () => {},
};

const FeatureContext = createContext<FeatureContextType>(contextDefaultValue);

const FeatureContextProvider = () => {
  const [featureState, setFeatureState] = useState<FeatureContextState>({});

  const getCartSize = async () => {
    try {
      const result = await Api.getCheckoutInfo();
      if (result?.total_items) {
        setFeatureState((prev) => ({ ...prev, cartItem: result.total_items }));
      }
    } catch (err) {}
  };

  useEffect(() => {
    getCartSize();
  }, []);

  return (
    <FeatureContext.Provider
      value={{
        value: featureState,
        setValue: setFeatureState,
      }}
    >
      <FeatureLayout />
    </FeatureContext.Provider>
  );
};

export { FeatureContext, FeatureContextProvider };

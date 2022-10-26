type FeatureContextType = {
  value: FeatureContextState;
  setValue: React.Dispatch<React.SetStateAction<FeatureContextState>>;
};

type FeatureContextState = {
  error?: Error;
  cartItem?: number;
};

export type { FeatureContextType, FeatureContextState };

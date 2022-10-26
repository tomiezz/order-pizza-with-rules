import React, { memo } from "react";
import FeatureLayoutView from "./FeatureLayoutView";
import useFeatureLayout from "./useFeatureLayout";

const FeatureLayout = () => {
  const featureLayoutViewProps = useFeatureLayout();
  return <FeatureLayoutView {...featureLayoutViewProps} />;
};

export default memo(FeatureLayout);

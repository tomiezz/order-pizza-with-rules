import { ProductViewProps } from "./types";
import Loading from "components/Loading";
import ErrorBox from "components/ErrorBox";
import ProductDataView from "./components/ProductDataView";
import { memo } from "react";
import { NoData } from "components/NoData";

const ProductView = ({ error, loading, data }: ProductViewProps) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorBox />;
  }

  if (data === null) {
    return <NoData />;
  }

  return <ProductDataView {...data} />;
};

export default memo(ProductView);

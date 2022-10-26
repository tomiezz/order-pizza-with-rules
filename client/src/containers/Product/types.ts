import { SelectionProps } from "components/Selection";
import { AlertMessageType, CompWithAsyncState } from "utils";

type ProductViewProps = CompWithAsyncState<ProductDataViewProps>;

type ProductDataViewProps = {
  title?: string;
  description?: string;
  price?: number;
  onBuy?: () => void;
  alert: AlertMessageType | null;
} & SelectionProps;

export type { ProductViewProps, ProductDataViewProps };

import { SelectionProps } from "components/Selection";
import { AlertMessageType } from "utils";

type ProductViewProps = {
  loading: boolean;
  error: Error | null;
  data: ProductDataViewProps | null;
};

type ProductDataViewProps = {
  title?: string;
  description?: string;
  price?: number;
  onBuy?: () => void;
  alert: AlertMessageType | null;
} & SelectionProps;

export type { ProductViewProps, ProductDataViewProps };

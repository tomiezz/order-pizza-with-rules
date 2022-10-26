import { SelectionProps } from "components/Selection";
import { AlertMessageType, CompWithAsyncState } from "utils";

type CheckoutViewProps = CompWithAsyncState<CheckoutDataViewProps>;

type CheckoutDataViewProps = SelectionProps & {
  data: CheckoutItem[];
  price: number;
  alert?: AlertMessageType;
};

type CheckoutItem = {
  title: string;
  id: string;
  quantity: number;
  price: number;
  desc?: string;
};

export type { CheckoutViewProps, CheckoutItem, CheckoutDataViewProps };

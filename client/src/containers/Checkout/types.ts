import { SelectionItem, SelectionProps } from "components/Selection";
import { Rules } from "utils";

type CheckoutViewProps = SelectionProps & {
  data: CheckoutItem[];
  price: number;
};

type CheckoutItem = {
  title: string;
  id: string;
  quantity: number;
  price: number;
  desc?: string;
};

export type { CheckoutViewProps, CheckoutItem };

import { SelectionProps } from "components/Selection";

type ProductViewProps = {
  title: string;
  description?: string;
  price: number;
  onBuy?: () => void;
} & SelectionProps;

export type { ProductViewProps };

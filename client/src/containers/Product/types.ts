import { SelectionProps } from "components/Selection";

type ProductViewProps = {
  title: string;
  description?: string;
  price: number;
  error?: Error;
  onBuy?: () => void;
} & SelectionProps;

export type { ProductViewProps };

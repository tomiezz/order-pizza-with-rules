import { SelectionItem } from "components/Selection";
import { Product } from "utils";

const formatProductToOption = (product: Product): SelectionItem => {
  return {
    name: product.name || "",
    value: product.id || "",
    desc: product.description,
  };
};

const formatProductListToOptionList = (product: Product[]): SelectionItem[] => {
  return product.map(formatProductToOption);
};

export { formatProductToOption, formatProductListToOptionList };

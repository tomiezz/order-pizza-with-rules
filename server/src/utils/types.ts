type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  img?: string;
  quantity?: number;
};

type ParentProduct = {
  id: string;
  name: string;
  description?: string;
  variant: Product[];
};

type Rules = {
  id: string;
  name: string;
  rules: Rule[];
};

type Rule = {
  productId: string;
  rule: DetailRule;
};

type DetailRule = DealRule | PriceRule;

type DealRule = {
  type: "deal";
  from: number;
  to: number;
};

type PriceRule = {
  type: "price";
  value: number;
};

export { Product, Rules, Rule, ParentProduct, DetailRule };

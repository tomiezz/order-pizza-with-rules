type ApiResponse<T> = {
  status: string;
  data?: T;
};

type Product = {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  img?: string;
  quantity?: number;
};

type ParentProduct = {
  id?: string;
  name?: string;
  description?: string;
  variant?: Product[];
};

type Rules = {
  id: string;
  name: string;
  rules: Rule[];
};

type Rule = {
  productId: string;
  rule: DealRule | PriceRule;
};

type DealRule = {
  type: "deal";
  from: number;
  to: number;
};

type PriceRule = {
  type: "price";
  value: number;
};

type CheckoutBodyDto = {
  productId: string;
};

type GetCheckoutResDto = {
  items: Product[];
  price: number;
  available_rules: Rules[];
  selected_rule?: string;
};

type ApplyRulesBodyDto = {
  rulesId: string;
};

type ApplyRulesRes = {
  total_price: number;
};

type AlertMessageType = {
  type: "error" | "success";
  message: string;
};

export type {
  ApiResponse,
  ParentProduct,
  Product,
  CheckoutBodyDto,
  GetCheckoutResDto,
  Rules,
  ApplyRulesBodyDto,
  ApplyRulesRes,
  AlertMessageType,
};

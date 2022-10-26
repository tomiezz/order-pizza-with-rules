import { ParentProduct, Product, Rules } from "../utils/types";

const productList: Product[] = [
  {
    id: "small_pizza",
    name: "Small pizza",
    description: "10'' pizza for one person",
    price: 11.99,
  },
  {
    id: "medium_pizza",
    name: "Medium pizza",
    description: "12'' pizza for two persons",
    price: 15.99,
  },
  {
    id: "large_pizza",
    name: "Large pizza",
    description: "15'' Pizza for four persons",
    price: 21.99,
  },
];

const product: ParentProduct = {
  id: "pizza",
  name: "Pizza",
  description: "A delicous pizza",
  variant: productList,
};

const ruleList: Rules[] = [
  {
    id: "default",
    name: "Default",
    rules: [],
  },
  {
    id: "microsoft",
    name: "Microsoft",

    rules: [
      {
        productId: "small_pizza",
        rule: {
          type: "deal",
          from: 3,
          to: 2,
        },
      },
    ],
  },
  {
    id: "amazon",
    name: "Amazon",

    rules: [
      {
        productId: "large_pizza",
        rule: {
          type: "price",
          value: 19.99,
        },
      },
    ],
  },
  {
    id: "facebook",
    name: "Facebook",

    rules: [
      {
        productId: "medium_pizza",
        rule: {
          type: "deal",
          from: 5,
          to: 4,
        },
      },
    ],
  },
];

export { productList, ruleList, product };

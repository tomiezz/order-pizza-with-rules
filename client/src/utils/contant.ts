const APP_ROUTES = {
  HOME: "/",
  PRODUCT: "product",
  CHECKOUT: "checkout",
  NOT_FOUND: "*",
};

const COLOR = {
  GRAY_BACKGROUND: "#efefef",
  WHITE_BACKGROUND: "rgb(245, 245, 250)",
  PRIMARY: "rgb(26, 148, 255)",
  SECONDARY: "rgb(255, 57, 69)",
};

const API_ENDPOINTS = {
  PRODUCTS: "/products",
  CHECKOUT: "/checkout",
  CHECKOUT_INFO: "/checkout/info",
  RULES: "/apply_rules",
  RESET: "/checkout/reset",
};

export { APP_ROUTES, COLOR, API_ENDPOINTS };

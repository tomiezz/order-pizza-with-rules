import { product } from "../models";

class ProductService {
  getProduct() {
    return product;
  }
}

const productService = new ProductService();
export { productService };

import { IProduct } from "../../common/types/product.types";
import { HttpService } from "./implementation/http.service";

export class ProductService extends HttpService {
  getProducts(category: string, search: string) {
    return this.get(`products/all?category=${category}&search=${search}`);
  }

  getProductById(id: string) {
    return this.get(`products/${id}`);
  }

  createProduct(data: IProduct) {}

  updateProduct(data: IProduct) {}

  deleteProduct(id: string) {}
}

export const productService = new ProductService();

import { HttpService } from "./implementation/http.service";
import { ROUTER_KEYS } from "../../modules/common/consts/app-keys.const";

export class ProductService extends HttpService {
  async getProducts(category: string) {
    return await this.get(`${ROUTER_KEYS.PRODUCTS}/?categoryId=${category}`);
  }

  async getProductById(id: string) {
    return await this.get(`${ROUTER_KEYS.PRODUCTS}/${id}`);
  }

  async getCategories() {
    return await this.get(`/categories/products`);
  }

  async updateProduct(productId: string, data: any) {
    return await this.put(`${ROUTER_KEYS.PRODUCTS}/${productId}`, data);
  }
}

export const productService = new ProductService();

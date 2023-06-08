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

  async updateProduct(product: any) {
    return await this.put(`${ROUTER_KEYS.PRODUCTS}/${product.id}`, product);
  }

  async deleteProduct(id: string) {
    return await this.delete(`${ROUTER_KEYS.PRODUCTS}/${id}`);
  }

  async createProduct(product: any) {
    return await this.post(ROUTER_KEYS.PRODUCTS, product);
  }
}

export const productService = new ProductService();

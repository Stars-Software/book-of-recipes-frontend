import { HttpService } from "./implementation/http.service" ;
import { ROUTER_KEYS } from "../../modules/common/consts/app-keys.const" ;

export class ProductService extends HttpService {
  async getProducts(category: string, search: string) {
    return await this.get(`${ROUTER_KEYS.PRODUCTS}/all?category=${category}&search=${search}`);
  }

  async getProductById(id: string) {
    return await this.get(`${ROUTER_KEYS.PRODUCTS}/${id}`);
  }

  async getCategories() {
    return await this.get(`${ROUTER_KEYS.PRODUCTS}/categories`);
  }
}

export const productService = new ProductService();

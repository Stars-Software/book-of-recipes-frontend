import { HttpService } from "./implementation/http.service";

export class ProductService extends HttpService {
  async getProducts(category: string, search: string) {
    return await this.get(`products/all?category=${category}&search=${search}`);
  }

  async getProductById(id: string) {
    return await this.get(`products/${id}`);
  }
}

export const productService = new ProductService();

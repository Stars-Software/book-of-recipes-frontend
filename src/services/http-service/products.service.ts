import { HttpService } from "./implementation/http.service";

export class ProductService extends HttpService {
  async getProducts(id: string) {
    return await this.get(`products/?categoryId=${id}`);
  }

  async getProductById(id: string) {
    return await this.get(`products/${id}`);
  }

  async getCategories() {
    return await this.get("products/categories");
  }
}

export const productService = new ProductService();

import { HttpService } from "./implementation/http.service";
import { ROUTER_KEYS } from "../../modules/common/consts/app-keys.const";

export class RecipeService extends HttpService {
  async getAll(category: string) {
    return await this.get(`${ROUTER_KEYS.RECIPES}/?categoryId=${category}`);
  }

  async getById(id: string) {
    return await this.get(`${ROUTER_KEYS.RECIPES}/${id}`);
  }

  async getCategories() {
    return await this.get(`/categories/recipes`);
  }

  async updateRecipe(recipe: any) {
    return await this.put(`${ROUTER_KEYS.RECIPES}/${recipe.id}`, recipe);
  }

  async deleteRecipe(id: string) {
    return await this.delete(`${ROUTER_KEYS.RECIPES}/${id}`);
  }

  async createRecipe(recipe: any) {
    return await this.post(ROUTER_KEYS.RECIPES, recipe);
  }
}

export const recipeService = new RecipeService();

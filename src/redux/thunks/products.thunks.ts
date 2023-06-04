import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../services/http-service/products.service";
import { setCategories, setProducts } from "../slices/productsSlice";
import { setError } from "../slices/app.slice";

interface IOptions {
  category_id?: string;
  search?: string;
  product_id?: string;
}

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async ({ category_id, search }: IOptions) => {
//     try {
      // const { data} = await productService.getProducts()
//     } catch (error) {}
//   }
// );

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async ({ product_id }: IOptions) => {
    const response = await productService.getProductById(product_id!);
    return setProducts(response);
  }
);

export const fetchProductCategories = createAsyncThunk(
  "products/fetchProductCategories",
  async (_, { dispatch }) => {
    try {
      const { data } = await productService.getCategories();
      dispatch(setCategories(data));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

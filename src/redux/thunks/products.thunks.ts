import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../services/http-service/products.service";
import { setCategories, setProducts } from "../slices/productsSlice";
import { setError } from "../slices/app.slice";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (categoryId: string | undefined, { dispatch }) => {
    try {
      const { data } = await productService.getProducts(categoryId!);
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error)
      dispatch(setError(error));
    }
  }
);

// export const fetchProductById = createAsyncThunk(
//   "products/fetchProductById",
//   async ({ id }: IOptions) => {
//     try {
//       const  = await productService.getProductById(id!);
//       return setProducts(response);
//     } catch (error) {}
//   }
// );

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

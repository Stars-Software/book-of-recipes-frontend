import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../services/http-service/products.service";
import { setCategories, setProducts } from "../slices/productsSlice";
import { setError } from "../slices/app.slice";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (categoryId: string, { dispatch }) => {
    try {
      const { data } = await productService.getProducts(categoryId);
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
      dispatch(setError(error));
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (productId: string, data: any) => {
    try {
      await productService.updateProduct(productId, data);
    } catch (error) {}
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

import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../services/http-service/products.service";
import {
  deleteProduct,
  setCategories,
  setProducts,
  updateProduct,
} from "../slices/productsSlice";
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

export const createProductThunk = createAsyncThunk(
  "products/createProduct",
  async (values: any, { dispatch }) => {
    try {
      await productService.createProduct(values);
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const updateProductThunk = createAsyncThunk(
  "products/updateProduct",
  async (values: any, { dispatch }) => {
    try {
      const { data } = await productService.updateProduct(values);
      dispatch(updateProduct(data));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products/deleProduct",
  async (id: string, { dispatch }) => {
    try {
      await productService.deleteProduct(id);
      dispatch(deleteProduct(id));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const fetchProductCategories = createAsyncThunk(
  "products/fetchProductCategories",
  async (_, { dispatch }) => {
    try {
      const { data } = await productService.getCategories();
      dispatch(setCategories(data));
    } catch (error) {
      console.log(error);
      dispatch(setError(error));
    }
  }
);

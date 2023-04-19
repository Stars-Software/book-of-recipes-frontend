import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../modules/services/http-service/products.service";
import { setProducts } from "../slices/productsSlice";

interface IOptions {
  category_id?: string;
  search?: string;
  product_id?: string;
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ category_id, search }: IOptions) => {
    const response = await productService.getProducts(category_id!, search!);
    return setProducts(response);
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async ({ product_id }: IOptions) => {
    const response = await productService.getProductById(product_id!);
    return setProducts(response);
  }
);

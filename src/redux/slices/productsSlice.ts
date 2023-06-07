import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../modules/common/types/product.types";

type IState = {
  data: any[] | null;
  categories: any[] | null;
};

const initialState: IState = {
  data: null,
  categories: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state: IState, { payload }) {
      state.data = payload;
    },
    updateProduct(state: IState, action) {
      const { id, amount } = action.payload;
      state.data = state.data!.map((item: Product) => {
        if ((item.id = id)) item.amount = amount;
        return item;
      });
    },
    setCategories(state: IState, { payload }) {
      state.categories = payload;
    },
  },
});

export default productsSlice.reducer;
export const {
  setProducts,
  updateProduct,
  setCategories,
} = productsSlice.actions;

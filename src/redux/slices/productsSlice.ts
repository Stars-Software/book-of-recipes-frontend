import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../modules/common/types/product.types";

type IState = {
  data: IProduct[] | null;
  loading: boolean;
  error: Error | null;
};

const initialState: IState = {
  data: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state: IState, action) {
      const { products } = action.payload;
      state.data = products;
    },
    updateProduct(state: IState, action) {
      const { id, amount } = action.payload;
      state.data = state.data!.map((item: IProduct) => {
        if ((item.id = id)) item.amount = amount;
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(
    // );
  },
});

export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../modules/common/types/product.types";

const productsSlice = createSlice({
  name: "products",
  initialState: [] as IProduct[],
  reducers: {
    setProducts(state: IProduct[], action) {
      const { payload } = action;
      state = payload;
    },
    updateProduct(state: IProduct[], action) {
      const { payload } = action;
      const { _id, amount } = payload;
      state = state.map((item: IProduct) => {
        if ((item._id = _id)) item.amount = amount;
        return item;
      });
    },
  },
});

export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions;

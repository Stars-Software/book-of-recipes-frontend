import { createSlice } from "@reduxjs/toolkit";

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
    createProduct(state:IState, { payload}) {
      state.data!.push(payload)
    },
    updateProduct(state: IState, { payload }) {
      const { id } = payload;
      state.data = state.data!.map((item: any) => {
        if (item.id === id) {
          item = payload;
        }
        return item;
      });
    },
    deleteProduct(state: IState, { payload }) {
      state.data = state.data!.filter((item: any) => {
        if (item.id !== payload) return item;
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
  deleteProduct,
  createProduct,
} = productsSlice.actions;

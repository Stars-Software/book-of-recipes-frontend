import { createSlice, isPending } from "@reduxjs/toolkit";

type AppError = {
  message: string;
  code: number;
};

type State = {
  error: AppError | null;
  loading: number;
};

const initialState: State = {
  error: null,
  loading: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setError(state, { payload }) {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => {
        state.error = null;
        state.loading += 1;
      }
    );
    builder.addMatcher(
      (action) =>
        action.type.endsWith("/fulfilled") || action.type.endsWith("/rejected"),
      (state) => {
        state.loading -= 1;
      }
    );
  },
});

export default appSlice.reducer;
export const { setError } = appSlice.actions;

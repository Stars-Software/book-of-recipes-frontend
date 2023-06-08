import { createSlice, isPending } from "@reduxjs/toolkit";

type AppError = {
  message: string;
  code: number;
};

type State = {
  error: AppError | null;
  loading: boolean;
};

const initialState: State = {
  error: null,
  loading: false,
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
        state.loading = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled") || action.type.endsWith("/rejected"),
      (state) => {
        state.loading = Object.keys(state).some(isPending);
      }
    );
  },
});

export default appSlice.reducer;
export const { setError } = appSlice.actions;

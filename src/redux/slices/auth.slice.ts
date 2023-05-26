import { createSlice } from "@reduxjs/toolkit";
import { signUpProfile } from "../thunks/auth.thunks";

const initialState = {
  error: null,
  loading: false,
  authed: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthed(state, action) {
      state.authed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpProfile.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(signUpProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUpProfile.rejected, (state, { payload }: any) => {
      state.authed = false;
      state.loading = false;
      state.error = payload;
    });
  },
});

export default authSlice.reducer;
export const { setAuthed } = authSlice.actions;

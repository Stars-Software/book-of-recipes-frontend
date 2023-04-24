import { createSlice } from "@reduxjs/toolkit";
import { signInProfile, signUpProfile } from "../thunks/auth.thunks";

const accessToken = localStorage.getItem("accesToken")
  ? localStorage.getItem("accessToken")
  : null;

const initialState = {
  accessToken,
  error: null,
  loading: false,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
     signUpProfile.fulfilled,
      (state) => {
        state.success = true;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(signUpProfile.pending, (state) => {
      state.success = false;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      signUpProfile.rejected,
      (state, { payload }: any) => {
        state.success = false;
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export default authSlice.reducer;
export const { setAccessToken } = authSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    setProfileData(state, action) {
      const { payload } = action;
      state = payload;
    },
  },
});

export default profileSlice.reducer;
export const { setProfileData } = profileSlice.actions;

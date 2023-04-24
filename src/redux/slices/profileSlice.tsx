import { createSlice } from "@reduxjs/toolkit";
import {
  ProfileAction,
  ProfileState,
} from "../../modules/common/types/profile.types";

const initialState: ProfileState = {
  geocode: null,
  name: "",
  email: "",
  avatar: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData(state, action: ProfileAction) {
      const { payload } = action;
      state = payload;
    },
  },
});

export default profileSlice.reducer;
export const { setProfileData } = profileSlice.actions;

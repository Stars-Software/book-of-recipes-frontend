import { createSlice } from "@reduxjs/toolkit";
import {
  ProfileAction,
  ProfileState,
} from "../../modules/common/types/profile.types";

type InitialState = {
  data: ProfileState | null;
  loading: boolean;
  error: Error | null;
};

const initialState: InitialState = {
  data: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData(state: InitialState, action: ProfileAction) {
      const { payload } = action;
      state.data = payload;
    },
  },
});

export default profileSlice.reducer;
export const { setProfileData } = profileSlice.actions;

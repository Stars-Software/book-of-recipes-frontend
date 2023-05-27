import { createSlice } from "@reduxjs/toolkit";
import {
  AuthAction,
  Geocode,
  ProfileAction,
  ProfileState,
} from "../../modules/common/types/profile.types";

type InitialState = {
  data: ProfileState | null;
  geocode: Geocode | null;
  authed: boolean;
};

const initialState: InitialState = {
  data: null,
  authed: false,
  geocode: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData(state: InitialState, { payload }: ProfileAction) {
      state.data = payload;
    },
    setAuthed(state: InitialState, { payload }: AuthAction) {
      state.authed = payload;
    },
  },
});

export default profileSlice.reducer;
export const { setProfileData, setAuthed } = profileSlice.actions;

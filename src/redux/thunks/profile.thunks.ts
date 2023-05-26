import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileService } from "../../services/http-service/profile.service";
import { setProfileData } from "../slices/profileSlice";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await profileService.getProfile();
      const { data } = response;
      return dispatch(setProfileData(data));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

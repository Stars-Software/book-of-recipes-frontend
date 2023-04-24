import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileService } from "../../services/http-service/profile.service";
import { setProfileData } from "../slices/profileSlice";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, { dispatch }) => {
    const response = await profileService.getProfile();
    return dispatch(setProfileData(response));
  }
);

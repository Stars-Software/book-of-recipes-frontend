import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileService } from "../../modules/services/http-service/profile.service";
import { ISignIn, ISignUp } from "../../modules/common/types/profile.types";
import { setProfileData } from "../slices/profileSlice";

export const signInProfile = createAsyncThunk(
  "profile/signIn",
  async (options: ISignIn) => {
    const response = await profileService.signIn(options);
    console.log("login", response);
    return setProfileData(response);
  }
);

export const signUpProfile = createAsyncThunk(
  "profile/signUp",
  async (options: ISignUp) => {
    const response = await profileService.signUp(options);
    console.log("register", response);
    return setProfileData(response);
  }
);

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async () => {
    const response = await profileService.getProfile();
    return setProfileData(response);
  }
);

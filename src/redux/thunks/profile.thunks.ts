import { setAuthed, setProfileData } from "../slices/profileSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileService } from "../../services/http-service/profile.service";
import { AuthFormData, SignIn } from "../../modules/common/types/auth.types";
import { tokenService } from "../../services/token-service/access-token.service";
import { setError } from "../slices/app.slice";

export const signInProfile = createAsyncThunk(
  "profile/signIn",
  async (formData: SignIn, { dispatch }) => {
    try {
      const { data } = await profileService.signIn(formData);
      tokenService.setToken(data.accessToken);
      dispatch(setAuthed(true));
    } catch (error: any) {
      dispatch(setError(error.response.data.error));
    }
  }
);

export const signUpProfile = createAsyncThunk(
  "profile/signUp",
  async (formData: AuthFormData, { dispatch }) => {
    const { avatar, ...userData } = formData;
    try {
      const { data } = await profileService.signUp(userData);
      tokenService.setToken(data.accessToken);
      await profileService.uploadAvatar(avatar!);
      dispatch(setAuthed(true));
    } catch (error: any) {
      dispatch(setError(error.response.data.error));
    }
  }
);

export const refreshSession = createAsyncThunk(
  "profile/refreshSession",
  async (_, { dispatch }) => {
    try {
      const { data } = await profileService.refreshSession();
      tokenService.setToken(data.accessToken);
      dispatch(setAuthed(true));
    } catch (error: any) {
      dispatch(setError(error));
    }
  }
);

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, { dispatch }) => {
    try {
      const response = await profileService.getProfile();
      const { data } = response;
      dispatch(setProfileData(data));
    } catch (error: any) {
      dispatch(setError(error));
    }
  }
);

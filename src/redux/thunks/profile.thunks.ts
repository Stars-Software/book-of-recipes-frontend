import { setAuthed, setGeoCode, setProfileData } from "../slices/profileSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileService } from "../../services/http-service/profile.service";
import { AuthFormData, SignIn } from "../../modules/common/types/auth.types";
import { tokenService } from "../../services/token-service/access-token.service";
import { setError } from "../slices/app.slice";
import { geolocationService } from "../../services/geo-service/geo.service";


export const signInProfile = createAsyncThunk(
  "profile/signIn",
  async (formData: SignIn, { dispatch }) => {
    try {
      const { data } = await profileService.signIn(formData);
      tokenService.setToken(data.accessToken);
      dispatch(setAuthed(true));
    } catch (error) {
      dispatch(setError(error));
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
    } catch (error) {
      dispatch(setError(error));
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
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const logOutProfile = createAsyncThunk(
  "profile/logOut",
  async (_, { dispatch }) => {
    try {
      await profileService.logOut();
      tokenService.clear();
      dispatch(setAuthed(false));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const fetchProfile = createAsyncThunk(
  "profile/fetchData",
  async (_, { dispatch }) => {
    try {
      const { data } = await profileService.getProfile();
      dispatch(setProfileData(data));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const getGeoCode = createAsyncThunk(
  "profile/getGeoCode",
  async (_, { dispatch }) => {
    try {
      const coords = await geolocationService.getCurrentPosition();
      dispatch(setGeoCode(coords));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/http-service/auth.service";
import { profileService } from "../../services/http-service/profile.service";
import { AuthFormData, SignIn } from "../../modules/common/types/auth.types";
import { tokenService } from "../../services/token-service/access-token.service";
import { setAccessToken } from "../slices/auth.slice";

export const signInProfile = createAsyncThunk(
  "auth/signIn",
  async (options: SignIn, { dispatch }) => {
    const { accessToken } = await authService.signIn(options);
    tokenService.setToken(accessToken);
    dispatch(setAccessToken(accessToken));
  }
);

export const signUpProfile = createAsyncThunk(
  "auth/signUp",
  async (options: AuthFormData, { dispatch }) => {
    const { avatar, ...data } = options;
    const { accessToken } = await authService.signUp(data);
    tokenService.setToken(accessToken);
    dispatch(setAccessToken(accessToken));
    await profileService.uploadAvatar(avatar!);
  }
);

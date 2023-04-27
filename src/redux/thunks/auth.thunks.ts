import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/http-service/auth.service";
import { profileService } from "../../services/http-service/profile.service";
import { AuthFormData, SignIn } from "../../modules/common/types/auth.types";
import { tokenService } from "../../services/token-service/access-token.service";
import { setAuthed } from "../slices/auth.slice";

export const signInProfile = createAsyncThunk(
  "auth/signIn",
  async (options: SignIn, { dispatch, rejectWithValue }) => {
    try {
      const { accessToken } = await authService.signIn(options);
      tokenService.setToken(accessToken);
      dispatch(setAuthed(true));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const signUpProfile = createAsyncThunk(
  "auth/signUp",
  async (options: AuthFormData, { dispatch, rejectWithValue }) => {
    const { avatar, ...data } = options;
    try {
      const { accessToken } = await authService.signUp(data);
      tokenService.setToken(accessToken);
      dispatch(setAuthed(true));
      await profileService.uploadAvatar(avatar!);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

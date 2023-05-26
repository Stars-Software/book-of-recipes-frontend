import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/http-service/auth.service";
import { profileService } from "../../services/http-service/profile.service";
import { AuthFormData, SignIn } from "../../modules/common/types/auth.types";
import { tokenService } from "../../services/token-service/access-token.service";
import { setAuthed } from "../slices/auth.slice";

export const signInProfile = createAsyncThunk(
  "auth/signIn",
  async (formData: SignIn, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await authService.signIn(formData);
      tokenService.setToken(data.accessToken);
      dispatch(setAuthed(true));
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

//note: all thunks must be refactored!!!

export const signUpProfile = createAsyncThunk(
  "auth/signUp",
  async (formData: AuthFormData, { dispatch, rejectWithValue }) => {
    const { avatar, ...userData } = formData;
    try {
      const { data } = await authService.signUp(userData);
      tokenService.setToken(data.accessToken);
      await profileService.uploadAvatar(avatar!);
      dispatch(setAuthed(true));
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

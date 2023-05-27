import { SignIn, SignUp } from "../../modules/common/types/auth.types";
import { HttpService } from "./implementation/http.service";

export class ProfileService extends HttpService {
  async signIn(options: SignIn) {
    return await this.post("user/login", options);
  }

  async signUp(options: SignUp) {
    return await this.post("user/register", options);
  }

  async refreshSession() {
    return await this.get("user/refresh");
  }
  async getProfile() {
    return await this.get(`user/profile/`);
  }

  async uploadAvatar(data: FormData) {
    return await this.post("user/upload", data);
  }

  async getAvatar(path: string) {
    return await this.get(`user/avatar/images/${path}`);
  }
}

export const profileService = new ProfileService();

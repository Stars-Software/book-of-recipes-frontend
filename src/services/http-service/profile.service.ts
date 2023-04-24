import { HttpService } from "./implementation/http.service";

export class ProfileService extends HttpService {
  async getProfile() {
    return await this.get(`user/profile/`);
  }

  async uploadAvatar(data: FormData) {
    return await this.post("user/upload", data);
  }

}

export const profileService = new ProfileService();

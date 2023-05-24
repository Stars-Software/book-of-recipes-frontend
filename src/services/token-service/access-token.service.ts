class TokenService {
  private storage = localStorage;
  private fieldName = "accessToken";

  setToken(token: string) {
    this.storage.setItem(this.fieldName, token);
    return token;
  }

  getToken() {
    console.log(this.storage.getItem(this.fieldName));
    const token = this.storage.getItem(this.fieldName);
    return token;
  }
}

export const tokenService = new TokenService();

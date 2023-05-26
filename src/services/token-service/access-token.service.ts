class TokenService {
  private storage = localStorage;
  private fieldName = "accessToken";

  setToken(token: string) {
    this.storage.setItem(this.fieldName, token);
    return token;
  }

  getToken() {
    const token = this.storage.getItem(this.fieldName);
    return token;
  }

  clear() {
    localStorage.clear();
  }
}

export const tokenService = new TokenService();

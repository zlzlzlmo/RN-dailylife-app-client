import AbstractStorage from "../storage";

export interface IToken {
  accessToken: string;
  refreshToken: string;
}

class UserStorage extends AbstractStorage<IToken> {
  setAccessToken(value: string): void {
    this.set("accessToken", value);
  }

  getAccessToken(): string | null | undefined {
    return this.get("accessToken");
  }

  setRefreshToken(value: string): void {
    this.set("refreshToken", value);
  }

  getRefreshToken(): string | null | undefined {
    return this.get("refreshToken");
  }

  setAllToken({ accessToken, refreshToken }: IToken): void {
    this.setAccessToken(accessToken);
    this.setRefreshToken(refreshToken);
  }
}

export default UserStorage;

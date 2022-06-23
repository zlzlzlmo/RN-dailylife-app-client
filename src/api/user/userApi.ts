import AbstractApi from "../api";
import { OEndpointType } from "../endpoint.type";

type LoginUserIdType = {
  userId: string;
};

type LoginPasswordType = {
  password: string;
  repeatPassword?: string;
};

export type LoginInfoType = LoginUserIdType & LoginPasswordType;

export type SignupFormType = LoginInfoType & {
  nickName: string;
};

class UserApi extends AbstractApi {
  async login(loginForm: LoginInfoType) {
    const result = await this.post(OEndpointType.login, loginForm);
    return result;
  }

  async signup(signupForm: SignupFormType) {
    const { password, repeatPassword } = signupForm;

    if (this.isSamePassword({ password, repeatPassword })) {
      return {
        statusCode: 401,
        message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
      };
    }

    const result = await this.post(OEndpointType.signup, signupForm);
    return result;
  }

  private isSamePassword({ password, repeatPassword }: LoginPasswordType) {
    return password === repeatPassword;
  }
}

export default UserApi;

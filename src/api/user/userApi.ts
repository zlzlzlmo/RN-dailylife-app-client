import { ILoginInfo } from "../../components/screens/login-screen/login-form/useLoginForm";
import { ISignupForm } from "../../components/screens/sinup-screen/signup-form/useSignupForm";
import { IToken } from "../../util/storage/user-storage/userStorage";
import { IResponse } from "../api";
import { OEndpointType } from "../api.type";
import ApiBuilder from "../builder";

class UserApi {
  static async login(loginForm: ILoginInfo): Promise<IResponse<IToken>> {
    const builder = new ApiBuilder<IToken>("post", OEndpointType.login)
      .setBody(loginForm)
      .build();
    const result = await builder.fetch();
    return result;
  }

  static async signup(signupForm: ISignupForm): Promise<IResponse<IToken>> {
    const { password, checkPassword } = signupForm;

    if (password !== checkPassword) {
      return {
        statusCode: 401,
        message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
      };
    }

    const builder = new ApiBuilder<IToken>("post", OEndpointType.signup)
      .setBody(signupForm)
      .build();
    const result = await builder.fetch();
    return result;
  }
}

export default UserApi;

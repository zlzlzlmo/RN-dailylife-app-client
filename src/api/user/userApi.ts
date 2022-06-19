import { ILoginInfo } from "../../components/screens/login-screen/login-form/LoginForm";
import { IToken } from "../../util/storage/user-storage/userStorage";
import { OEndpointType } from "../api.type";
import ApiBuilder from "../builder";

class UserApi {
  static async login(loginForm: ILoginInfo) {
    const builder = new ApiBuilder<IToken>("post", OEndpointType.login)
      .setBody(loginForm)
      .build();
    const result = await builder.fetch();
    return result;
  }
}

export default UserApi;

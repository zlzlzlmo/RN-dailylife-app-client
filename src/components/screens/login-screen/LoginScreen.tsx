import {
  Platform,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";

import { rootContainerCss } from "../../../styles/mixin";
import LogoBox from "../../blocks/logoBox/LogoBox";
import LoginForm from "./login-form/LoginForm";
import Logo from "assets/icons/logo.png";
import { colors } from "../../../styles/variables/color";
import { color } from "react-native-reanimated";
import { useState } from "react";
import UserApi from "../../../api/user/userApi";

type LoginInfoNameType = "userId" | "password";
export type LoginInfoType = Record<LoginInfoNameType, string>;

const LoginScreen = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    userId: "",
    password: "",
  });

  const handleLoginInfo = (name: LoginInfoNameType, text: string) => {
    setLoginInfo({
      ...loginInfo,
      [name]: text,
    });
  };

  const handleLogin = async () => {
    const { userId, password } = loginInfo;
    const isAllEnteredForLoginInfo = userId.length > 0 && password.length > 0;

    if (!isAllEnteredForLoginInfo) {
      Alert.alert("로그인 실패", "아이디와 패스워드 모두 입력하시길 바랍니다.");
      return;
    }
    console.log("dd11d");

    const result = await new UserApi().login(loginInfo);
    console.log("result : ", result);
    Alert.alert("로그인 성공", "로그인 성공");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContaiaer} accessibilityHint="logo">
        <Image style={styles.logo} source={Logo} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="아이디를 입력해주세요."
        onChangeText={handleLoginInfo.bind(this, "userId")}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력해주세요."
        onChangeText={handleLoginInfo.bind(this, "password")}
      />
      <View style={[styles.button, styles.mainButton]}>
        <Button
          title="로그인"
          color={colors.whiteColor}
          onPress={handleLogin}
        />
      </View>
      <View style={[styles.button, styles.subButton]}>
        <Button title="회원가입" color={colors.whiteColor} />
      </View>
      {/* <LogoBox />
      <LoginForm /> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  logoContaiaer: {
    paddingTop: 10,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.mainColor,
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  button: {
    borderRadius: 5,
    marginVertical: 5,
  },
  mainButton: {
    backgroundColor: colors.mainColor,
  },
  subButton: {
    backgroundColor: colors.subColor,
  },
});

import {
  Platform,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Image,
} from "react-native";

import { rootContainerCss } from "../../../styles/mixin";
import LogoBox from "../../blocks/logoBox/LogoBox";
import LoginForm from "./login-form/LoginForm";
import Logo from "assets/icons/logo.png";
import { colors } from "../../../styles/variables/color";
import { color } from "react-native-reanimated";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContaiaer}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <TextInput style={styles.input} placeholder="아이디를 입력해주세요." />
      <TextInput style={styles.input} placeholder="비밀번호를 입력해주세요." />
      <View style={[styles.button, styles.mainButton]}>
        <Button title="로그인" color={colors.whiteColor} />
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

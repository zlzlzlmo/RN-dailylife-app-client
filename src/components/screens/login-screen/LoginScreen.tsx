import { Platform, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { rootContainerCss } from "../../../styles/mixin";
import LogoBox from "../../blocks/logoBox/LogoBox";
import LoginForm from "./login-form/LoginForm";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LogoBox />
      <LoginForm />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    ...rootContainerCss,
  },
});

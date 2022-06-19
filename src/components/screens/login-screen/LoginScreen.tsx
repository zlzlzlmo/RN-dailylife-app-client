import { Platform } from "react-native";
import styled from "styled-components/native";
import { rootContainerCss } from "../../../styles/mixIn";
import LogoBox from "../../blocks/logoBox/LogoBox";
import LoginForm from "./login-form/LoginForm";

const Container = styled.KeyboardAvoidingView`
  ${rootContainerCss}
`;

const LoginScreen = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <LogoBox />
      <LoginForm />
    </Container>
  );
};

export default LoginScreen;

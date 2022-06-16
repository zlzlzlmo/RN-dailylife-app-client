import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import Icon from "../../atoms/icon";
import LoginForm from "./login-form/LoginForm";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
  padding-left: 20;
  padding-right: 20;
  align-items: center;
`;

const LogoBox = styled.View`
  width: 100%;
  height: 100;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;

const LoginScreen = () => {
  return (
    <Container>
      <LogoBox>
        <Icon iconType="LOGO" />
      </LogoBox>
      <LoginForm />
    </Container>
  );
};

export default LoginScreen;

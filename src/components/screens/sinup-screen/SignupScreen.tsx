import React from "react";
import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { rootContainerCss } from "../../../styles/mixIn";
import LogoBox from "../../blocks/logoBox/LogoBox";
import SignupForm from "./signup-form/SignupForm";

const Container = styled.KeyboardAvoidingView`
  ${rootContainerCss};
`;

const SignupScreen = () => {
  return (
    <Container>
      <LogoBox />
      <SignupForm />
    </Container>
  );
};

export default SignupScreen;

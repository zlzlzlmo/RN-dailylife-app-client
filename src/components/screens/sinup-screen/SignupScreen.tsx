import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { containerCss } from "../../../styles/mixIn";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import LogoBox from "../../blocks/logoBox/LogoBox";

const Container = styled.KeyboardAvoidingView`
  ${containerCss};
`;

const SignupScreen = () => {
  return (
    <Container>
      <LogoBox />
      <Input inputType="BASIC" placeholder="아이디를 입력해주세요." />
      <Input inputType="BASIC" placeholder="닉네임을 입력해주세요." />
      <Input
        inputType="BASIC"
        placeholder="비밀번호를 입력해주세요."
        secureTextEntry
      />
      <Input
        inputType="BASIC"
        placeholder="비밀번호 확인을 입력해주세요."
        secureTextEntry
      />
      <Button buttonType="BASIC" title="회원가입" />
    </Container>
  );
};

export default SignupScreen;

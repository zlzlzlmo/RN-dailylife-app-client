import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Button from "../../../atoms/button";
import Input from "../../../atoms/input";

const LoginFormBox = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10;
`;

const LoginForm = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <LoginFormBox>
      <Input inputType="BASIC" placeholder="아이디를 입력해주세요." />
      <Input
        inputType="BASIC"
        placeholder="비밀번호를 입력해주세요."
        secureTextEntry={true}
      />
      <Button buttonType="BASIC" title="로그인" />
      <Button buttonType="SUB" title="회원가입" />
    </LoginFormBox>
  );
};

export default LoginForm;

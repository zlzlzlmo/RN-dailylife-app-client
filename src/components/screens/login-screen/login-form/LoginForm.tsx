import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import styled from "styled-components/native";
import Button from "../../../atoms/button";
import Input from "../../../atoms/input";
import { RootStackParamList } from "../../RootStackPrams";

type loginScreenProp = StackNavigationProp<RootStackParamList, "Login">;

const Container = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LoginForm = () => {
  const navigation = useNavigation<loginScreenProp>();

  return (
    <Container>
      <Input inputType="BASIC" placeholder="아이디를 입력해주세요." />
      <Input
        inputType="BASIC"
        placeholder="비밀번호를 입력해주세요."
        secureTextEntry={true}
      />
      <Button buttonType="BASIC" title="로그인" />
      <Button
        buttonType="SUB"
        title="회원가입"
        onPress={() => navigation.navigate("Signup")}
      />
    </Container>
  );
};

export default LoginForm;

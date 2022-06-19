import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import styled from "styled-components/native";
import { OEndpointType } from "../../../../api/api.type";
import ApiBuilder from "../../../../api/builder";
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

  const [loginInfo, setLoginInfo] = useState({
    userId: "",
    password: "",
  });

  const handleLoginInfo = (name: string, text: string) => {
    setLoginInfo({
      ...loginInfo,
      [name]: text,
    });
  };

  const useIdChange = (text: string): void => handleLoginInfo("userId", text);
  const passwordChange = (password: string): void =>
    handleLoginInfo("password", password);

  const handleLogin = async () => {
    const builder = new ApiBuilder("post", OEndpointType.login)
      .setBody(loginInfo)
      .build();
    const result = await builder.fetch();
    console.log(result);
  };

  return (
    <Container>
      <Input
        inputType="BASIC"
        placeholder="아이디를 입력해주세요."
        name="userId"
        onChangeText={useIdChange}
      />
      <Input
        inputType="BASIC"
        placeholder="비밀번호를 입력해주세요."
        secureTextEntry={true}
        onChangeText={passwordChange}
      />
      <Button buttonType="BASIC" title="로그인" onPress={handleLogin} />
      <Button
        buttonType="SUB"
        title="회원가입"
        onPress={() => navigation.navigate("Signup")}
      />
    </Container>
  );
};

export default LoginForm;

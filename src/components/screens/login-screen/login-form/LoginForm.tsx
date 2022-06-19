import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import styled from "styled-components/native";
import Button from "../../../atoms/button";
import Input from "../../../atoms/input";
import { RootStackParamList } from "../../RootStackPrams";
import ModalPopup from "../../../blocks/modal/ModalPopup";
import usePopup from "../../../../hooks/usePopup/usePopup";
import UserApi from "../../../../api/user/userApi";
import useLoginForm from "./useLoginForm";

type loginScreenProp = StackNavigationProp<RootStackParamList, "Login">;

const Container = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LoginForm = () => {
  const navigation = useNavigation<loginScreenProp>();
  const { isVisbile, modalContent, closePopup, openPopup } = usePopup();
  const { changePassword, changeUserId, loginInfo } = useLoginForm();

  const handleLogin = async () => {
    const result = await UserApi.login(loginInfo);
    const failedLogin = result.statusCode !== 200 && result.message;

    if (failedLogin) {
      openPopup({ content: result.message! });
      return;
    }

    console.log("로그인 성공! 홈으로 이동");
  };

  return (
    <Container>
      <Input
        inputType="BASIC"
        placeholder="아이디를 입력해주세요."
        name="userId"
        onChangeText={changeUserId}
      />
      <Input
        inputType="BASIC"
        placeholder="비밀번호를 입력해주세요."
        secureTextEntry={true}
        onChangeText={changePassword}
      />
      <Button
        buttonType="BASIC"
        title="로그인"
        onPress={handleLogin}
        marginBottom={10}
      />
      <Button
        buttonType="SUB"
        title="회원가입"
        onPress={() => navigation.navigate("Signup")}
      />

      {isVisbile && modalContent && (
        <ModalPopup
          modalVisible={isVisbile}
          content={modalContent}
          onPress={closePopup}
        />
      )}
    </Container>
  );
};

export default LoginForm;

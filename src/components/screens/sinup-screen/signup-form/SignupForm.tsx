import React, { useState } from "react";
import Button from "../../../atoms/button";
import Input from "../../../atoms/input";
import styled from "styled-components/native";
import { Platform, View } from "react-native";
import useSignupForm from "./useSignupForm";
import UserApi from "../../../../api/user/userApi";
import usePopup from "../../../../hooks/usePopup/usePopup";
import ModalPopup from "../../../blocks/modal/ModalPopup";

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

const SignupForm = () => {
  const { openPopup, isVisbile, modalContent, closePopup } = usePopup();
  const {
    changeUserId,
    changeNickName,
    changePassword,
    changeCheckPassword,
    signupForm,
  } = useSignupForm();

  const handleSignUp = async () => {
    const result = await new UserApi().signup(signupForm);
    const failedSignup = result.statusCode !== 200 && result.message;

    if (failedSignup) {
      openPopup({ content: result.message! });
      return;
    }

    console.log("회원가입 성공!!");
  };
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Input
        inputType="BASIC"
        placeholder="아이디를 입력해주세요."
        onChangeText={changeUserId}
        marginVertical={5}
      />
      <Input
        inputType="BASIC"
        placeholder="닉네임을 입력해주세요."
        onChangeText={changeNickName}
        marginVertical={5}
      />
      <Input
        inputType="BASIC"
        placeholder="비밀번호를 입력해주세요."
        onChangeText={changePassword}
        secureTextEntry
        marginVertical={5}
      />
      <Input
        inputType="BASIC"
        placeholder="비밀번호 확인을 입력해주세요."
        onChangeText={changeCheckPassword}
        secureTextEntry
        marginVertical={5}
      />
      <Button
        buttonType="BASIC"
        title="회원가입"
        onPress={handleSignUp}
        marginVertical={5}
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

export default SignupForm;

import React, { useState } from "react";
import Button from "../../../atoms/button";
import Input from "../../../atoms/input";
import styled from "styled-components/native";
import { View } from "react-native";
import useSignupForm from "./useSignupForm";
import UserApi from "../../../../api/user/userApi";
import usePopup from "../../../../hooks/usePopup/usePopup";
import ModalPopup from "../../../blocks/modal/ModalPopup";

const Container = styled.View`
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
    const result = await UserApi.signup(signupForm);
    if (result.statusCode !== 200 && result.message) {
      openPopup({ content: result.message });
      return;
    }
    console.log("회원가입 성공!!");
  };
  return (
    <Container>
      <Input
        inputType="BASIC"
        placeholder="아이디를 입력해주세요."
        onChangeText={changeUserId}
      />
      <Input
        inputType="BASIC"
        placeholder="닉네임을 입력해주세요."
        onChangeText={changeNickName}
      />
      <Input
        inputType="BASIC"
        placeholder="비밀번호를 입력해주세요."
        onChangeText={changePassword}
        secureTextEntry
      />
      <Input
        inputType="BASIC"
        placeholder="비밀번호 확인을 입력해주세요."
        onChangeText={changeCheckPassword}
        secureTextEntry
      />
      <Button buttonType="BASIC" title="회원가입" onPress={handleSignUp} />

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

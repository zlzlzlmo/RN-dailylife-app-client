import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import Button from "../../../atoms/button";
import Input from "../../../atoms/input";
import ModalPopup from "../../../blocks/modal/ModalPopup";
import usePopup from "../../../../hooks/usePopup/usePopup";
import UserApi from "../../../../api/user/userApi";
import useLoginForm from "./useLoginForm";
import { RootStackParamList } from "../../../../../App";
import { KeyboardAvoidingView, Platform, View } from "react-native";

type NavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const LoginForm = () => {
  const navigation = useNavigation<NavigationProp>();
  const { isVisbile, modalContent, closePopup, openPopup } = usePopup();
  const { changePassword, changeUserId, loginInfo } = useLoginForm();

  const handleLogin = async () => {
    const result = await new UserApi().login(loginInfo);
    const failedLogin = result.statusCode !== 200 && result.message;

    if (failedLogin) {
      openPopup({ content: result.message! });
      return;
    }

    console.log("로그인 성공! 홈으로 이동");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <Input
          inputType="BASIC"
          placeholder="아이디를 입력해주세요."
          name="userId"
          onChangeText={changeUserId}
          marginVertical={5}
        />
        <Input
          inputType="BASIC"
          placeholder="비밀번호를 입력해주세요."
          secureTextEntry={true}
          onChangeText={changePassword}
          marginVertical={5}
        />
        <Button
          buttonType="BASIC"
          title="로그인"
          onPress={handleLogin}
          marginVertical={5}
        />
        <Button
          buttonType="SUB"
          title="회원가입"
          onPress={() => navigation.navigate("Signup")}
          marginVertical={5}
        />
      </View>
      {isVisbile && modalContent && (
        <ModalPopup
          modalVisible={isVisbile}
          content={modalContent}
          onPress={closePopup}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

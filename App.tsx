import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import Button from "./src/components/atoms/button";
import Icon from "./src/components/atoms/icon";
import Input from "./src/components/atoms/input";
import { colors } from "./src/styles/variables/color";

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

const LoginFormBox = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10;
`;

export default function App() {
  return (
    <Container>
      <LogoBox>
        <Icon iconType="LOGO" />
      </LogoBox>

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
    </Container>
  );
}

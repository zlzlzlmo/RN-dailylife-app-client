import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { colors } from "./src/styles/variables/color";
import { Input, Button } from "react-native-elements";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
  align-items: center;
`;

const LogoBox = styled.View`
  /* width: 100%; */
`;

const Logo = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: ${colors.mainColor};
`;

const InputBox = styled.View`
  margin-top: 100px;
  width: 90%;
`;

export default function App() {
  return (
    <Container>
      <LogoBox>
        <Logo>Hooney SNS</Logo>
      </LogoBox>
      <InputBox>
        <Input placeholder="아이디를 입력해주세요" />
        <Input placeholder="비밀번호를 입력해주세요" />
      </InputBox>
    </Container>
  );
}

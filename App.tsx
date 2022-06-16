import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import Button from "./src/components/atoms/button";
import Icon from "./src/components/atoms/icon";
import Input from "./src/components/atoms/input";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/components/screens/login-screen/LoginScreen";
import SignupScreen from "./src/components/screens/sinup-screen/SignupScreen";

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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="로그인" component={LoginScreen} />
        <Stack.Screen name="회원가입" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

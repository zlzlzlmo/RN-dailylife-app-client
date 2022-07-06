import { Platform, View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/components/screens/login-screen/LoginScreen";
import SignupScreen from "./src/components/screens/sinup-screen/SignupScreen";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/components/screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "로그인",
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              title: "회원가입",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

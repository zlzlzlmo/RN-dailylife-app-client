import React from "react";
import { KeyboardAvoidingView, View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { rootContainerCss } from "../../../styles/mixin";
import LogoBox from "../../blocks/logoBox/LogoBox";
import SignupForm from "./signup-form/SignupForm";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <LogoBox />
      <SignupForm />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    ...rootContainerCss,
  },
});

import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { InputProps } from ".";
import { colors } from "../../../styles/variables/color";

const BasicInput = (props: InputProps) => {
  return <TextInput {...props} style={{ ...props }} />;
};

export default BasicInput;

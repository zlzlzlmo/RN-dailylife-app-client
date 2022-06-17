import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { InputProps } from ".";
import { colors } from "../../../styles/variables/color";

const Input = styled.TextInput<InputProps>`
  background-color: ${colors.blendColor};
  height: ${({ height }) => height || 40};
  margin-bottom: ${({ marginBottom }) => marginBottom || 10};
  border-radius: 5;
  padding-left: 10;
  padding-right: 10;
  width: 100%;
`;

const BasicInput = (props: InputProps) => {
  return <Input {...props} />;
};

export default BasicInput;

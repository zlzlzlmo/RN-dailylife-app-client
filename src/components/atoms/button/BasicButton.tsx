import React from "react";
import { Button, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ButtonProps } from ".";
import { colors } from "../../../styles/variables/color";

const StyledButton = styled.Button``;

const BasicButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        borderRadius: 5,
        overflow: "hidden",
        marginBottom: props.marginBottom,
      }}
    >
      <StyledButton color={colors.mainColor} {...props} />
    </TouchableOpacity>
  );
};

export default BasicButton;

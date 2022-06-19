import React from "react";
import { Button, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ButtonProps } from ".";
import { colors } from "../../../styles/variables/color";

const StyledButton = styled.Button``;

const SubButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        borderRadius: 5,
        overflow: "hidden",
        marginBottom: props.marginBottom,
      }}
    >
      <StyledButton color={colors.subColor} {...props} />
    </TouchableOpacity>
  );
};

export default SubButton;

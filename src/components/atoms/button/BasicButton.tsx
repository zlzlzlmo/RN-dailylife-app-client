import React from "react";
import { Button, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ButtonProps } from ".";

const StyledButton = styled.Button``;

const BasicButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        borderRadius: 5,
        marginTop: 10,
        overflow: "hidden",
      }}
    >
      <StyledButton {...props} />
    </TouchableOpacity>
  );
};

export default BasicButton;

import React from "react";
import styled from "styled-components/native";
import Icon from "../../atoms/icon";

const Container = styled.View`
  width: 100%;
  height: 100;
  justify-content: center;
  align-items: center;
`;

const LogoBox = () => {
  return (
    <Container style={{ marginVertical: 50 }}>
      <Icon iconType="LOGO" />
    </Container>
  );
};

export default LogoBox;

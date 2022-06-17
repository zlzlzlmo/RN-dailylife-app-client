import React from "react";
import styled from "styled-components/native";
import Icon from "../../atoms/icon";

const Container = styled.View`
  width: 100%;
  height: 100;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;

const LogoBox = () => {
  return (
    <Container>
      <Icon iconType="LOGO" />
    </Container>
  );
};

export default LogoBox;

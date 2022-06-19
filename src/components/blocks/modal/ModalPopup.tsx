import React from "react";
import Modal from "react-native-modal";
import styled from "styled-components/native";

import { View, Text, GestureResponderEvent } from "react-native";
import Button from "../../atoms/button";

interface ModalPopupProps {
  modalVisible: boolean;
  content: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const ModalInnerContainer = styled.View`
  background-color: #fff;
  padding: 20px 50px;
  border-radius: 10;
`;

const ModalText = styled.Text`
  text-align: center;
  font-weight: 700;
  margin-bottom: 15;
`;

const ModalPopup = ({ modalVisible, content, onPress }: ModalPopupProps) => {
  return (
    <Modal isVisible={modalVisible} animationIn="slideInLeft">
      <ModalInnerContainer>
        <ModalText>{content}</ModalText>
        <Button buttonType="BASIC" title="확인" onPress={onPress} />
      </ModalInnerContainer>
    </Modal>
  );
};

export default ModalPopup;

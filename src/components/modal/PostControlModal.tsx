import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { colors } from "../../styles/variables/color";

interface PostControlModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
}

const PostControlModal = ({
  isModalVisible,
  closeModal,
}: PostControlModalProps) => {
  return (
    <Modal
      isVisible={isModalVisible}
      animationIn="fadeInRight"
      animationOut="fadeOutDown"
    >
      <View style={styles.container}>
        <Pressable onPress={closeModal}>
          <Text style={styles.delete}>삭제</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default PostControlModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    padding: 20,
  },
  delete: {
    fontSize: 18,
  },
});

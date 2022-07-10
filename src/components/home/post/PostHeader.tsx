import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import useModal from "../../../hooks/usePopup/usePopup";
import PostControlModal from "../../modal/PostControlModal";
import { colors } from "../../../styles/variables/color";

interface PostHeaderProps {
  profileImage: string;
  userName: string;
  createdAt: string;
}

const PostHeader = ({ profileImage, userName, createdAt }: PostHeaderProps) => {
  const { isModalVisbile, openModal, closeModal } = useModal();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSide}>
        <View>
          <Image
            style={styles.profileImage}
            source={require("../../../assets/profile.png")}
          />
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.date}>{createdAt}</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={openModal}>
          <Feather name="more-vertical" size={24} color="black" />
        </Pressable>
      </View>

      <PostControlModal
        isModalVisible={isModalVisbile}
        closeModal={closeModal}
      />
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightSide: {},
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 999,
    resizeMode: "contain",
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    marginVertical: 3,
  },
  date: {
    color: colors.lightGrey,
    marginVertical: 3,
  },
});

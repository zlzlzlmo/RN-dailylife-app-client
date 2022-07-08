import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../../styles/variables/color";
import { Feather } from "@expo/vector-icons";
import useModal from "../../hooks/usePopup/usePopup";
import PostControlModal from "../modal/PostControlModal";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Post = () => {
  return (
    <View style={styles.container}>
      <PostHeader />
      <PostContent />
      <PostTags />
      <PostFooter />
    </View>
  );
};

export default Post;

const PostHeader = () => {
  const { isModalVisbile, openModal, closeModal } = useModal();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSide}>
        <View>
          <Image
            style={styles.profileImage}
            source={require("../../assets/profile.png")}
          />
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.name}>Seunghoon Shin</Text>
          <Text style={styles.date}>2022-07-06 (수)</Text>
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

const PostContent = () => {
  return (
    <View style={styles.contentContainer}>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, itaque
        natus? Ullam consectetur modi maxime ducimus, incidunt quia numquam ut
        amet eligendi nihil vitae? Eius facere possimus placeat illo fuga.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/photos/businesss-desk-office-with-notebook-and-cactustop-view-table-from-picture-id829374196?k=20&m=829374196&s=170667a&w=0&h=eG3x-IbGc6WaLShW52hUTyIFa36mqBOnEVaEotrZNR4=",
          }}
        />

        <Image
          style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/photos/businesss-desk-office-with-notebook-and-cactustop-view-table-from-picture-id829374196?k=20&m=829374196&s=170667a&w=0&h=eG3x-IbGc6WaLShW52hUTyIFa36mqBOnEVaEotrZNR4=",
          }}
        />

        <Image
          style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/photos/businesss-desk-office-with-notebook-and-cactustop-view-table-from-picture-id829374196?k=20&m=829374196&s=170667a&w=0&h=eG3x-IbGc6WaLShW52hUTyIFa36mqBOnEVaEotrZNR4=",
          }}
        />
      </View>
    </View>
  );
};

const PostTags = () => {
  return (
    <View style={styles.tagsContainer}>
      <Text style={styles.tag}>#Front End</Text>
      <Text style={styles.tag}>#React Native</Text>
    </View>
  );
};

const PostFooter = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.iconContainer}>
        <AntDesign
          style={styles.icon}
          name="like2"
          size={20}
          color={colors.subColor}
        />
        <Text style={styles.count}>12</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome5
          style={styles.icon}
          name="comments"
          size={20}
          color={colors.lightGrey}
        />
        <Text style={styles.count}>12</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: colors.whiteColor,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
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
  contentContainer: {
    marginVertical: 15,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  image: {
    width: "32%",
    minHeight: 100,
    maxHeight: 200,
    resizeMode: "contain",
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tag: {
    color: colors.subColor,
    fontWeight: "bold",
    marginRight: 8,
  },
  footerContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  iconContainer: {
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  count: {
    color: colors.lightGrey,
  },
});
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../../styles/variables/color";

const Post = () => {
  return (
    <View style={styles.container}>
      <PostHeader />
      <PostContent />
      <PostTags />
    </View>
  );
};

export default Post;

const PostHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image
          style={styles.profileImage}
          source={require("../../assets/profile.png")}
        />
      </View>
      <View>
        <Text style={styles.name}>Seunghoon Shin</Text>
        <Text style={styles.date}>2022-07-06 (수)</Text>
      </View>
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
  },
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
    color: colors.inputPlacehoderColor,
    marginVertical: 3,
  },
  contentContainer: {
    marginVertical: 15,
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
});

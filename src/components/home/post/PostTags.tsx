import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../styles/variables/color";

const PostTags = () => {
  return (
    <View style={styles.tagsContainer}>
      <Text style={styles.tag}>#Front End</Text>
      <Text style={styles.tag}>#React Native</Text>
    </View>
  );
};

export default PostTags;

const styles = StyleSheet.create({
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

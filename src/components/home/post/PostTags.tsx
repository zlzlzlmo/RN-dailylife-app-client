import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../styles/variables/color";
import { ITag } from "../../../mocks/post-dummy";

interface PostTagsProps {
  tags: ITag[];
}

const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <View style={styles.tagsContainer}>
      {tags.map((tag) => (
        <Text key={tag.id} style={styles.tag}>
          #{tag.name}
        </Text>
      ))}
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

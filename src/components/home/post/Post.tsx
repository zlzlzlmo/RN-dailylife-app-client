import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../../styles/variables/color";
import { IPost } from "../../../mocks/post-dummy";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostTags from "./PostTags";
import PostFooter from "./PostFooter";

const Post = (item: IPost) => {
  return (
    <View style={styles.container}>
      <PostHeader
        profileImage={item.profileImage}
        userName={item.userName}
        createdAt={item.createdAt}
      />
      <PostContent content={item.content} images={item.images} />
      <PostTags tags={item.tags} />
      <PostFooter like={item.like} comments={item.comments} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: colors.whiteColor,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

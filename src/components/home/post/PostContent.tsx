import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { IPostImage } from "../../../mocks/post-dummy";

interface PostContentProps {
  content: string;
  images: IPostImage[];
}

const PostContent = ({ content, images }: PostContentProps) => {
  return (
    <View style={styles.contentContainer}>
      <Text>{content}</Text>
      <View style={styles.imageContainer}>
        {images.map((image) => (
          <Image
            key={image.id}
            style={styles.image}
            source={{
              uri: image.url,
            }}
          />
        ))}
      </View>
    </View>
  );
};
export default PostContent;

const styles = StyleSheet.create({
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
});

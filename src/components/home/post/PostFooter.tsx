import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../../styles/variables/color";
import { IComment } from "../../../mocks/post-dummy";

interface PostFooterProps {
  like: number;
  comments: IComment[];
}

const PostFooter = ({ like, comments }: PostFooterProps) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.iconContainer}>
        <AntDesign
          style={styles.icon}
          name="like2"
          size={20}
          color={colors.subColor}
        />
        <Text style={styles.count}>{like}</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome5
          style={styles.icon}
          name="comments"
          size={20}
          color={colors.lightGrey}
        />

        <Text style={styles.count}>{comments.length}</Text>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
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

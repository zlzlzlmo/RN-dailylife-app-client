import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../../styles/variables/color";

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

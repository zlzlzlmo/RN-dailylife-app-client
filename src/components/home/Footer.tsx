import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/variables/color";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Footer = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.container,
        paddingBottom: insets.bottom + 15,
        paddingTop: 15,
      }}
    >
      <Pressable>
        <Ionicons name="home-outline" size={24} color={colors.subColor} />
      </Pressable>
      <Pressable>
        <FontAwesome5 name="user-friends" size={24} color={colors.lightGrey} />
      </Pressable>
      <Pressable>
        <AntDesign name="profile" size={24} color={colors.lightGrey} />
      </Pressable>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.whiteColor,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/variables/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="home-outline" size={24} color={colors.subColor} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="user-friends" size={24} color={colors.lightGrey} />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="profile" size={24} color={colors.lightGrey} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 100,
    backgroundColor: colors.whiteColor,
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

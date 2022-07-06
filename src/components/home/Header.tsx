import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../styles/variables/color";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <AntDesign
          style={styles.searchIcon}
          name="search1"
          size={24}
          color={colors.inputPlacehoderColor}
        />
        <TextInput style={styles.input} placeholder="게시글을 검색해보세요." />
        <AntDesign
          style={styles.resetIcon}
          name="closecircle"
          size={24}
          color={colors.inputPlacehoderColor}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    padding: 20,
  },
  inputContainer: {
    position: "relative",
    backgroundColor: "blue",
    borderRadius: 10,
  },
  searchIcon: {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    transform: [{ translateY: -10 }],
    left: 10,
  },
  resetIcon: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -10 }],
    right: 10,
  },
  input: {
    backgroundColor: colors.inputBackgroundColor,
    height: 50,
    paddingHorizontal: 50,
    overflow: "hidden",
  },
});

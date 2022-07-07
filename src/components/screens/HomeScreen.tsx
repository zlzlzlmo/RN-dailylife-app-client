import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../home/Header";
import { colors } from "../../styles/variables/color";
import Post from "../home/Post";
import Footer from "../home/Footer";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Post />
      {/* <Footer /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    position: "relative",
  },
});

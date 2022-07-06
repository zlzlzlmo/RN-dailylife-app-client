import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../home/Header";
import { colors } from "../../styles/variables/color";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* <Text>HomeScreen</Text> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

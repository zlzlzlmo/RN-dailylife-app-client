import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../home/Header";
import { colors } from "../../styles/variables/color";
import Post from "../home/post/Post";
import Footer from "../home/Footer";
import { DUMMY_POST } from "../../mocks/post-dummy";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={DUMMY_POST}
        renderItem={(renderItem) => <Post {...renderItem.item} />}
        keyExtractor={(item) => item.id}
      />
      <Footer />
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

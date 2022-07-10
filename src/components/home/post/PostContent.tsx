import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const PostContent = () => {
  return (
    <View style={styles.contentContainer}>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, itaque
        natus? Ullam consectetur modi maxime ducimus, incidunt quia numquam ut
        amet eligendi nihil vitae? Eius facere possimus placeat illo fuga.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/photos/businesss-desk-office-with-notebook-and-cactustop-view-table-from-picture-id829374196?k=20&m=829374196&s=170667a&w=0&h=eG3x-IbGc6WaLShW52hUTyIFa36mqBOnEVaEotrZNR4=",
          }}
        />

        <Image
          style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/photos/businesss-desk-office-with-notebook-and-cactustop-view-table-from-picture-id829374196?k=20&m=829374196&s=170667a&w=0&h=eG3x-IbGc6WaLShW52hUTyIFa36mqBOnEVaEotrZNR4=",
          }}
        />

        <Image
          style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/photos/businesss-desk-office-with-notebook-and-cactustop-view-table-from-picture-id829374196?k=20&m=829374196&s=170667a&w=0&h=eG3x-IbGc6WaLShW52hUTyIFa36mqBOnEVaEotrZNR4=",
          }}
        />
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

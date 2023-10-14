import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import FastImage from "react-native-fast-image";
import { images } from "../../assets/images";


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
    marginTop: 30
  },
  image: {
    width: 40,
    height: 40,
    marginEnd: 10,
    marginStart:14,
    backgroundColor: "#FFFFFF",
    borderRadius: 20
  },
  text: {
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "left"
  }
});
const UserInfoComponent = () => {
  return <View style={styles.container}>
    <FastImage source={images.imgAvatarDefault} style={styles.image} />
    <Text style={styles.text}>Reina_redbrick</Text>
  </View>;
};
export default memo(UserInfoComponent);

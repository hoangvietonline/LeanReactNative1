import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import { images } from "../../../assets/images";

const BottomToolChatComponent = () => {
  return <View style={styles.root}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter mes"
        keyboardType="default"
      />
      <FastImage source={images.icSend} style={styles.iconSend} />
    </View>
    <View style={styles.containerSelectPhoto}>
      <FastImage source={images.icSelectPhoto} style={styles.iconSelectPhoto} />
    </View>
  </View>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    height: 44,
    width: Dimensions.get("screen").width,
    marginBottom: 56,
    paddingHorizontal: 24,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#EAECF0",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  input: {
    marginStart: 20,
    flex: 1
  },
  iconSend: {
    width: 26,
    height: 26,
    marginEnd: 7
  },
  containerSelectPhoto: {
    backgroundColor: "#FFF",
    marginStart: 6,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    padding: 3,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    justifyContent: "center", 
    alignItems: "center"
  },
  iconSelectPhoto: {
    width: 20,
    height: 20
  }
});

export default BottomToolChatComponent;

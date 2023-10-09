import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { images } from "../../assets/images";
import React, { memo } from "react";
import { showLoading } from "../../utils/ref-setup";

const styles = StyleSheet.create({
  textTittle: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#FFFFFF",
    textAlign: "left",
    letterSpacing: 0.38
  },
  containerTittle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  image: {
    width: 17,
    height: 17,
    marginStart: 4
  }
});

export interface IHeadList {
  title: string,
  // onPressCallback: () => void
}

const HeadListComponent = ({ title }: IHeadList) => {
  return <TouchableOpacity style={styles.containerTittle} activeOpacity={0.9} onPress={showLoading}>
    <Text style={styles.textTittle}>{title}</Text>
    <FastImage source={images.icChevronRight} style={styles.image} />
  </TouchableOpacity>;
};

export default memo(HeadListComponent);

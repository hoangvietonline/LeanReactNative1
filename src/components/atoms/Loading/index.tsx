import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { Colors } from "../../../styles/color";
import FastImage from "react-native-fast-image";
import { images } from "../../../assets/images";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blackOpacity
  },
  loadingView: {
    width: 60,
    height: 60,
    borderRadius: 10
  }
});

export interface Props {
  styleCustom?: any;
}

const Loading = ({ styleCustom }: Props) => {
  return <View style={[styles.container, styleCustom]}>
    <FastImage source={images.redbrickLoading} style={styles.loadingView} />
  </View>;
};

export default memo(Loading);

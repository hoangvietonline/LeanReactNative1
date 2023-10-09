import { Pressable, StyleSheet, View } from "react-native";
import { memo } from "react";
import { Colors } from "../../../styles/color";
import FastImage from "react-native-fast-image";
import { images } from "../../../assets/images";
import { hideLoading } from "../../../utils/ref-setup";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blackOpacity
  },
  pressArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  press: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"

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
  return <View style={[styles.container]}>
    <Pressable style={[styles.press]} onPress={hideLoading}>
      <View style={[styles.pressArea, styleCustom]} />
    </Pressable>
    <FastImage source={images.redbrickLoading} style={styles.loadingView} />
  </View>;
};

export default memo(Loading);

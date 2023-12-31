import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { images } from "../../../assets/images";
import LinearGradient from "react-native-linear-gradient";

export interface IHeadChatComponent {
  onBackPress: () => void;
}

const HeadChatComponent = ({ onBackPress }: IHeadChatComponent) => {
  return <View style={styles.container}>
    <TouchableOpacity style={styles.backgroundButton} onPress={onBackPress}>
      <FastImage resizeMode={"contain"} source={images.icChevronLeft} style={styles.imageBack} />
    </TouchableOpacity>

    <View style={styles.avatarContainer}>
      <LinearGradient colors={["#3ADBAA", "#3FD3B1"]} style={styles.avatarBackground}>
        <FastImage source={images.icAvatar} style={styles.image} />
      </LinearGradient>
      <View style={styles.active} />
    </View>

    <Text style={styles.name}>Sam Saez</Text>

  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 26
  },
  image: {
    width: 50,
    height: 50
  },
  imageBack: {
    width: 18,
    height: 24,
  },
  avatarBackground: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFF"
  },
  avatarContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginStart: 13,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0)"
  },
  active: {
    width: 12.5,
    height: 12.5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "#3FD3B1",
    position: "absolute",
    bottom: 0,
    end: 0
  },
  name: {
    fontSize: 16,
    color: "#5E5F66",
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: -0.32,
    marginStart: 13
  },
  backgroundButton: {
    marginStart: 24,
    paddingHorizontal: 9,
    paddingVertical: 13
  }
});

export default HeadChatComponent;

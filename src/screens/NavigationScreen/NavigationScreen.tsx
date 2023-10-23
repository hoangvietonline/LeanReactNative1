import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList, Screens } from "../../Navigation/Navigator.config";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const NavigationScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const moveChatScreen = () => {
    navigation.navigate(Screens.ChatScreen);
  };

  const moveHomeScreen = () => {
    navigation.navigate(Screens.HomeScreen);
  };

  return <View style={styles.root}>
    <Pressable onPress={moveChatScreen}>
      <View style={styles.item}>
        <Text style={styles.text}>Chat Screen</Text>
      </View>
    </Pressable>

    <Pressable onPress={moveHomeScreen}>
      <View style={styles.item}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    </Pressable>

  </View>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    flex: 1
  },
  item: {
    backgroundColor: "#dcd7d7",
    padding: 48,
    marginBottom: 32,
    width: Dimensions.get("screen").width * 0.6,
    borderRadius: 10
  },
  text: {
    fontSize: 24,
    color: "#000000"
  }
});

export default NavigationScreen;


import { StyleSheet, View } from "react-native";
import { GameMockModel } from "../../model/game-mock-model";
import FastImage from "react-native-fast-image";
import { memo } from "react";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingEnd: 8
  },
  image: {
    flex: 1
  }
});

export interface IHomeGameItem {
  gameMockModel: GameMockModel,
  style: any
}

const HomeGameItem = ({ gameMockModel, style }: IHomeGameItem) => {
  return <View style={styles.container}>
    <FastImage source={{ uri: gameMockModel.icon }}
               style={style}
               resizeMode="cover"
    />
  </View>;
};

export default memo(HomeGameItem);


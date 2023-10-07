import { Animated, StyleSheet, View } from "react-native";
import React, { memo } from "react";
import HeadListComponent from "../HeadListComponent/HeadListComponent";
import { RedbrickOriginalMockData } from "../../constant/mock/redbrick-original-mock-data";
import HomeGameItem from "../HomeGameItem/HomeGameItem";
import { GameMockModel } from "../../model/game-mock-model";
import FlatList = Animated.FlatList;

const styles = StyleSheet.create({
  container: {
    justifyContent:"flex-start",
    paddingBottom:45
  },
  item: {
    height: 81,
    width: 143
  },
  space:{
    height:12
  }
});

const renderGameItem = ({ item }: {
  item: GameMockModel
}) => {
  return <HomeGameItem gameMockModel={item} style={styles.item} />;
};

const GameRecentListComponent = () => {
  return <View style={styles.container}>
    <HeadListComponent title={"Recently Played"} />
    <View style={styles.space}></View>
    <FlatList
      data={RedbrickOriginalMockData}
      renderItem={renderGameItem}
      horizontal={true}
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${"item"}-${index}`}
    />
  </View>;
};

export default memo(GameRecentListComponent);

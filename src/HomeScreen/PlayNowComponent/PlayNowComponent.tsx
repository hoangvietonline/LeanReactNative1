import { Animated, StyleSheet, View } from "react-native";
import React, { memo } from "react";
import HeadListComponent from "../HeadListComponent/HeadListComponent";
import HomeGameItem from "../HomeGameItem/HomeGameItem";
import { GameMockModel } from "../../model/game-mock-model";
import { PlayNowMockData } from "../../constant/mock/play-now-mock-data";
import FlatList = Animated.FlatList;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingBottom: 45
  },
  item: {
    height: 81,
    width: 143
  },
  space: {
    height: 12
  }, titleStyle: {
    marginStart: 14
  },
  listStyle: {
    paddingStart: 14
  }
});

const renderGameItem = ({ item }: {
  item: GameMockModel
}) => {
  return <HomeGameItem gameMockModel={item} style={styles.item} />;
};

const PlayNowComponent = () => {
  return <View style={styles.container}>
    <HeadListComponent title={"Play Now"} style={styles.titleStyle} />
    <View style={styles.space}></View>
    <FlatList
      style={styles.listStyle}
      data={PlayNowMockData.slice(0, 8)}
      renderItem={renderGameItem}
      horizontal={true}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${"item"}-${index}`}
    />
    <FlatList
      style={styles.listStyle}
      data={PlayNowMockData.slice(8, 17)}
      renderItem={renderGameItem}
      horizontal={true}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${"item"}-${index}`}
    />
    <FlatList
      style={styles.listStyle}
      data={PlayNowMockData.slice(18, PlayNowMockData.length)}
      renderItem={renderGameItem}
      horizontal={true}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${"item"}-${index}`}
    />
  </View>;
};

export default memo(PlayNowComponent);

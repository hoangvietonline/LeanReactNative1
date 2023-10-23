import { Animated, StyleSheet, View } from "react-native";
import HeadListComponent from "../HeadListComponent/HeadListComponent";
import { RedbrickOriginalMockData } from "../../../constant/mock/redbrick-original-mock-data";
import React from "react";
import { GameMockModel } from "../../../model/game-mock-model";
import HomeGameItem from "../HomeGameItem/HomeGameItem";
import { TrendingMockData } from "../../../constant/mock/trending-mock-data";
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
    height: 4
  },
  titleStyle: {
    marginStart: 14
  },
  listStyle: {
    paddingStart: 14,
    marginTop:8
  }
});

const renderGameItem = ({ item }: {
  item: GameMockModel
}) => {
  return <HomeGameItem gameMockModel={item} style={styles.item} />;
};

const GameTrendingListComponent = () => {
  return <View style={styles.container}>
    <HeadListComponent title={"Trending"} style={styles.titleStyle} />
    <View style={styles.space}></View>
    <FlatList
      style={styles.listStyle}
      data={TrendingMockData.slice(0, 6)}
      renderItem={renderGameItem}
      horizontal={true}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${"item"}-${index}`}
    />
    <FlatList
      style={styles.listStyle}
      data={TrendingMockData.slice(6, RedbrickOriginalMockData.length)}
      renderItem={renderGameItem}
      horizontal={true}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${"item"}-${index}`}
    />
  </View>;
};

export default GameTrendingListComponent;

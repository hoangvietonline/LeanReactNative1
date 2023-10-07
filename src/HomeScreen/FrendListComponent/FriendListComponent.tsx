import { Animated, StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { FriendModel } from "../../model/friend-model";
import FriendItem from "./Item/FriendItem";
import HeadListComponent from "../HeadListComponent/HeadListComponent";
import FlatList = Animated.FlatList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 45,
    marginTop: 25
  },
  space: {
    height: 12
  }
});

const renderFriendItem = ({ item }: {
  item: FriendModel
}) => {
  return <FriendItem model={item} />;
};

const FriendListComponent = () => {
  const friends: FriendModel[] = [
    new FriendModel("Hoangviet", "", true, "hv"),
    new FriendModel("Hkasd", "", false, "hk"),
    new FriendModel("Vipiadsi", "", true, "beokd"),
    new FriendModel("Hichaha", "", false, "haha"),
    new FriendModel("Nguyen", "", true, "hkhf")
  ];
  return <View style={styles.container}>
    <HeadListComponent title={"Friends"} />
    <View style={styles.space}></View>
    <FlatList
      data={friends}
      renderItem={renderFriendItem}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${"item"}-${index}`}
    />
  </View>;
};
export default memo(FriendListComponent);

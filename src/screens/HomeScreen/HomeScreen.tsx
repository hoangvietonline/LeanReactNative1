import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import LoadingIndicator from "../../components/molecules/Loading/LoadingIndicator";
import { setLoadRef } from "../../utils/ref-setup";
import UserInfoComponent from "./UserInfoComponent/UserInfoComponent";
import FriendListComponent from "./FrendListComponent/FriendListComponent";
import GameRecentListComponent from "./GameRecentListComponent/GameRecentListComponent";
import GameRedbrickOriginalComponent from "./GameRedBrickOriginalComponent/GameRedbrickOriginalComponent";
import GameTrendingListComponent from "./GameTrendingListComponent/GameTrendingListComponent";
import PlayNowComponent from "./PlayNowComponent/PlayNowComponent";
import React from "react";

const HomeScreen = () => {
  return <SafeAreaView style={styles.container}>
    <LoadingIndicator
      ref={ref => {
        setLoadRef(ref);
      }}
    />
    <Text style={styles.titleHome}>Home</Text>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollStyle}>
      <UserInfoComponent />
      <FriendListComponent />
      <GameRecentListComponent />
      <GameRedbrickOriginalComponent />
      <GameTrendingListComponent />
      <PlayNowComponent />
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#28292F"
  },
  rootHome: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#28292F"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: "#000000"
  },
  scrollStyle: {
    backgroundColor: "#000000",
    flexDirection: "column",
    flex: 1
  },
  titleHome: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
    color: "#FFF"
  }
});

export default HomeScreen;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import UserInfoComponent from "./src/HomeScreen/UserInfoComponent/UserInfoComponent";
import FriendListComponent from "./src/HomeScreen/FrendListComponent/FriendListComponent";
import GameRecentListComponent from "./src/HomeScreen/GameRecentListComponent/GameRecentListComponent";
import GameRedbrickOriginalComponent
  from "./src/HomeScreen/GameRedBrickOriginalComponent/GameRedbrickOriginalComponent";
import PlayNowComponent from "./src/HomeScreen/PlayNowComponent/PlayNowComponent";
import LoadingIndicator from "./src/components/molecules/Loading/LoadingIndicator";
import { setLoadRef } from "./src/utils/ref-setup";

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
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
        <PlayNowComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

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

export default App;

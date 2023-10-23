import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import LoadingIndicator from "../../components/molecules/Loading/LoadingIndicator";
import { setLoadRef } from "../../utils/ref-setup";
import UserInfoComponent from "./UserInfoComponent/UserInfoComponent";
import FriendListComponent from "./FrendListComponent/FriendListComponent";
import GameRecentListComponent from "./GameRecentListComponent/GameRecentListComponent";
import GameRedbrickOriginalComponent from "./GameRedBrickOriginalComponent/GameRedbrickOriginalComponent";
import GameTrendingListComponent from "./GameTrendingListComponent/GameTrendingListComponent";
import PlayNowComponent from "./PlayNowComponent/PlayNowComponent";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../Navigation/Navigator.config";

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const goBack = () => {
    navigation.goBack();
  };

  return <SafeAreaView style={styles.container}>
    <LoadingIndicator
      ref={ref => {
        setLoadRef(ref);
      }}
    />
    <Pressable onPress={goBack}><Text style={styles.titleHome}>Home</Text></Pressable>
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

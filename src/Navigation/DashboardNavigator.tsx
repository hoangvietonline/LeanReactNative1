import { RootStackParamList, Screens } from "./Navigator.config";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Fragment } from "react";
import NavigationScreen from "../screens/NavigationScreen/NavigationScreen";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const DashBoard = createNativeStackNavigator<RootStackParamList>();
const DashboardNavigator = () => {

  const renderScreens = () => {
    return <Fragment>
      <DashBoard.Screen
        name={Screens.NavigationScreen}
        component={NavigationScreen}
      />
      <DashBoard.Screen
        name={Screens.ChatScreen}
        component={ChatScreen}
      />
      <DashBoard.Screen
        name={Screens.HomeScreen}
        component={HomeScreen}
      />
    </Fragment>;
  };


  return (
    <DashBoard.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={Screens.NavigationScreen}>
      <DashBoard.Group>{renderScreens()}</DashBoard.Group>
    </DashBoard.Navigator>
  );
};

export default DashboardNavigator;

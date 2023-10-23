export enum Screens {
  NavigationScreen = "NavigationScreen",
  HomeScreen = "HomeScreen",
  ChatScreen = "GamePlayListScreen"
}

export type RootStackParamList = {
  [Screens.NavigationScreen]: undefined;
  [Screens.HomeScreen]: undefined;
  [Screens.ChatScreen]: undefined;
};

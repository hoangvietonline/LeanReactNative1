/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useEmployee from "./src/hooks/useEmployee";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ChatScreen from "./src/screens/ChatScreen/ChatScreen";

function App(): React.JSX.Element {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ChatScreen />
    </QueryClientProvider>
  );
}

export default App;

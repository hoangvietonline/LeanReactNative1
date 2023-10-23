/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardNavigator from "./src/Navigation/DashboardNavigator";
import { NavigationContainer } from "@react-navigation/native";


function App(): React.JSX.Element {
  const queryClient = new QueryClient()
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <DashboardNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;

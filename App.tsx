import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationTabs } from "./app/src/infrastructure/navigation/navigation-tabs";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <NavigationTabs />
      </NavigationContainer>
    </PaperProvider>
  );
}

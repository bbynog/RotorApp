import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationTabs } from "./app/src/infrastructure/navigation/navigation-tabs";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
}

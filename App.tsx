import React from "react";
import { HomeScreen } from "./app/src/features/home/screens/home.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Manifest" component={HomeScreen} />
        <Tab.Screen name="WaB" component={HomeScreen} />
        <Tab.Screen name="List" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

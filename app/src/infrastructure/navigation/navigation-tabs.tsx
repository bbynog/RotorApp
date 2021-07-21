import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../../features/home/screens/home.screen";
import { ManifestScreen } from "../../features/manifest/screens/manifest.screen";
import { WeightAndBalanceScreen } from "../../features/wab/screens/wab.screen";
import { PassengerListScreen } from "../../features/passenger-list/screens/passenger-list.screen";

export const NavigationTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Manifest" component={ManifestScreen} />
      <Tab.Screen name="WaB" component={WeightAndBalanceScreen} />
      <Tab.Screen name="List" component={PassengerListScreen} />
    </Tab.Navigator>
  );
};

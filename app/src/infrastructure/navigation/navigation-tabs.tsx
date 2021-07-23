import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    HomeStack,
    ManifestStack,
    WeightAndBalanceStack,
} from './navigation-stack'

import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export const NavigationTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={tabBarOptions}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Manifest" component={ManifestStack} />
            <Tab.Screen name="WaB" component={WeightAndBalanceStack} />
        </Tab.Navigator>
    )
}

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        let iconName

        switch (route.name) {
            case 'Home':
                iconName = 'home'
                break
            case 'Manifest':
                iconName = 'clipboard-list'
                break
            case 'WaB':
                iconName = 'helicopter'
        }

        return <FontAwesome5 name={iconName} size={size} color={color} />
    },
})

const tabBarOptions = {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
}

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../../features/home/screens/home.screen'
import { ManifestScreen } from '../../features/manifest/screens/manifest.screen'
import { WeightAndBalanceScreen } from '../../features/wab/screens/wab.screen'

const Stack = createStackNavigator()

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export const ManifestStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Manifest" component={ManifestScreen} />
        </Stack.Navigator>
    )
}

export const WeightAndBalanceStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WaB" component={WeightAndBalanceScreen} />
        </Stack.Navigator>
    )
}

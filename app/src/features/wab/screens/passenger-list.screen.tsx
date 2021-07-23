import React from 'react';
import { Text } from 'react-native';
import { PassengerListModule } from '../module/passenger-list.module';
import { View } from '../styles/passenger-list.styles';

export const PassengerListScreen = () => {
    return (
        <View>
            <PassengerListModule />
        </View>
    );
};

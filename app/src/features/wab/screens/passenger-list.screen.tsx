import React from 'react';
import { Text, View } from 'react-native';
import { PassengerListModule } from '../module/passenger-list.module';
import { styles } from '../styles/passenger-list.styles';

export const PassengerListScreen = () => {
    return (
        <View style={styles.screenMainContainer}>
            <PassengerListModule />
        </View>
    );
};

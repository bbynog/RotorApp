import React from 'react';
import { View, ImageBackground, Dimensions, Text } from 'react-native';
import { styles } from '../styles/passenger-list.styles';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ButtonInputData } from '../../../components/textinput/soulDataInput.component';

export const PassengerListModule = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <ImageBackground
            source={require('../../../../assets/heli-proto-background.png')}
            style={{
                ...styles.backGroundStyle,
                height: Dimensions.get('window').height - tabBarHeight * 2,
            }}
        >
            <View style={styles.moduleContainer}>
                <View style={styles.frontRowStyles}>
                    <View style={styles.soulContainerStyles}>
                        <ButtonInputData header="Pax 1" massType="lt" />
                    </View>
                    <View style={styles.soulContainerStyles}>
                        <ButtonInputData header="Pilot" massType="kgs" />
                    </View>
                </View>
                <View style={styles.backRowStyles}>
                    <View style={styles.soulContainerStyles}>
                        <ButtonInputData header="Pax 1" massType="lt" />
                    </View>
                    <View style={styles.soulContainerStyles}>
                        <ButtonInputData header="Pilot" massType="kgs" />
                    </View>
                </View>
                <View style={styles.tanksRowStyles}>
                    <View style={styles.tankContainerStyles}>
                        <ButtonInputData header="Pax 1" massType="lt" />
                    </View>
                    <View style={styles.tankContainerStyles}>
                        <ButtonInputData header="Pilot" massType="kgs" />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

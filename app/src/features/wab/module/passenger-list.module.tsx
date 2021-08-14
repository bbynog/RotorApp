import * as React from 'react';
import { InputData } from '../../../components/textinput/text-input-wab.component';
import { View, ImageBackground, Dimensions, Text } from 'react-native';
import { styles } from '../styles/passenger-list.styles';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ButtonInputData } from '../../../components/textinput/button-input-data.component';

export const PassengerListModule = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <>
            <ImageBackground
                source={require('../../../../assets/heli-proto-background-2.png')}
                style={{
                    ...styles.backGroundStyle,
                    height: Dimensions.get('window').height - tabBarHeight * 2,
                }}
            >
                <View style={styles.moduleContainer}>
                    {/* <InputData
                        label="Pilot's Name"
                        placeholder="Type pilot's name"
                        massType="kgs"
                    />
                    <InputData
                        label="Passenger 1's Name"
                        placeholder="Type passenger 1's name"
                        massType="kgs"
                    />
                    <InputData
                        label="Passenger 2's Name"
                        placeholder="Type passenger 2's name"
                        massType="kgs"
                    />
                    <InputData
                        label="Passenger 3's Name"
                        placeholder="Type passenger 3's name"
                        massType="kgs"
                    />
                    <InputData
                        label="Main"
                        placeholder="Type passenger 3's name"
                        massType="lts"
                        onlyMass={true}
                    />
                    <InputData
                        label="Auxiliary"
                        placeholder="Type passenger 3's name"
                        massType="lts"
                        onlyMass={true}
                    /> */}
                    <ButtonInputData header="Pilot" massType="kgs" />
                </View>
            </ImageBackground>
        </>
    );
};

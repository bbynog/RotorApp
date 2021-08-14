import { StyleSheet, Dimensions } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export const styles = StyleSheet.create({
    moduleContainer: {
        flex: 1,
    },
    backGroundStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    screenMainContainer: {
        flex: 1,
    },
    nameInputStyles: {
        width: 270,
        marginHorizontal: 5,
        paddingTop: 5,
    },
    massInputStyles: {
        width: 100,
        marginHorizontal: 5,
        paddingTop: 5,
    },
    soulContainerStyles: {
        flexDirection: 'row',
    },
    fuelInputStyles: {
        width: 185,
        marginHorizontal: 5,
        paddingTop: 5,
    },
});

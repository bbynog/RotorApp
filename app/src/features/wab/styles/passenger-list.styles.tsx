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
});

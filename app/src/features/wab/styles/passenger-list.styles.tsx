import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    moduleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    backGroundStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    frontRowStyles: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 93,
        paddingTop: 30,
        marginBottom: 110,
        paddingBottom: 20,
    },
    backRowStyles: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 93,
        marginBottom: 110,
        paddingBottom: 25,
    },
    tanksRowStyles: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 73,
        marginBottom: 120,
        paddingBottom: 25,
    },
    soulContainerStyles: {
        flexDirection: 'row',
        flex: 1,
        flexGrow: 0.36,
    },
    tankContainerStyles: {
        flexDirection: 'row',
        flex: 1,
        flexGrow: 0.47,
    },
});

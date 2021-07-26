import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const styles = StyleSheet.create({
    personDataContainer: {
        flexDirection: 'row',
    },
    nameInputContainer: {
        width: 290,
        marginLeft: 5,
    },
    massInputContainer: {
        width: 80,
        marginLeft: 10,
    },
    fuelLabelContainer: {
        width: 280,
        marginLeft: 15,
    },
    fuelLabelTextStyles: {
        flex: 1,
        fontSize: 20,
        paddingTop: 10,
    },
    separator: {
        marginTop: 25,
        marginBottom: 25,
    },
});

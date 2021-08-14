import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';

export const styles = StyleSheet.create({
    viewDataContainer: {
        width: 110,
        height: 110,
        borderWidth: 4,
        borderRadius: 10,
        borderColor: colors.secondary,
    },
    viewHeaderTextStyles: {
        fontSize: 30,
        alignSelf: 'center',
        color: colors.secondary,
        fontWeight: 'bold',
    },
    viewTextStyles: {
        fontSize: 22,
        alignSelf: 'center',
        color: colors.primary,
        fontWeight: 'bold',
    },
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
    buttonInputStyles: {
        width: 110,
        height: 110,
    },
    buttonLabelStyles: {
        fontSize: 18,
    },
});

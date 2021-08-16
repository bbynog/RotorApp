import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';

export const styles = StyleSheet.create({
    viewDataContainer: {
        width: 100,
        height: 75,
        borderWidth: 4,
        borderRadius: 10,
        borderColor: colors.secondary,
    },
    headerTextStyles: {
        fontSize: 19,
        alignSelf: 'center',
        color: colors.secondary,
        fontWeight: 'bold',
        flex: 1,
    },
    textNameStyles: {
        fontSize: 17,
        alignSelf: 'center',
        color: colors.primary,
        fontWeight: 'bold',
        flex: 1,
    },
    textMassStyles: {
        fontSize: 17,
        alignSelf: 'center',
        color: colors.primary,
        fontWeight: 'bold',
        flex: 1,
    },
});

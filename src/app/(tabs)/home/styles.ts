import { StyleSheet } from 'react-native';
import globalStyles from '@/globals/globalStyles';

const styles = StyleSheet.create({
    container: {
        gap: 50,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    filtersContainer: {
        gap: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    recommendationsContentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: '100%',
    },
    helpText: {
        color: globalStyles.lightGray,
        opacity: 0.8
    },
    helpTextTitle: {
        color: globalStyles.white,
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default styles;

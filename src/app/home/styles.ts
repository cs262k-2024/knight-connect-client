import { StyleSheet, Dimensions } from 'react-native';

import globalStyles from '@/globals/globalStyles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    filtersContainer: {
        padding: 10,
        shadowColor: globalStyles.black,
        shadowOpacity: 0.1,
        shadowRadius: 30,
        backgroundColor: globalStyles.gray,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: '90%'
    },
    filterButtonText: {
        color: globalStyles.black
    },
    recommendationsContentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: '100%'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        alignItems: 'center',
        backgroundColor: globalStyles.white,
        top: 0,
        padding: 20,
    }
});

export default styles;

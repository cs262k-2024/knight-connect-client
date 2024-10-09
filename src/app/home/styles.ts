import { StyleSheet, Dimensions } from 'react-native';

import globalStyles from '@/globals/globalStyles';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 50,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    filtersContainer: {
        gap: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    filterButtonText: {
        // color: globalStyles.black
    },
    recommendationsContentContainer: {
        // display: 'flex',
        // flexDirection: 'column',
        // gap: 20,
        // width: '100%'
    },
});

export default styles;

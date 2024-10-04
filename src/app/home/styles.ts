import { StyleSheet, Dimensions } from 'react-native';

import globalStyles from '@/globals/globalStyles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        backgroundColor: globalStyles.black,
    },
    filtersContainer: {
        elevation: 1,
        padding: 10,
        shadowColor: globalStyles.black,
        shadowOpacity: 0.1,
        shadowRadius: 30,
        backgroundColor: globalStyles.gray,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: width - 50
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
        backgroundColor: globalStyles.black,
        top: 0,
        left: 0,
        padding: 20,
        shadowColor: globalStyles.lightBlue,
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 5,
            width: 0
        },
        shadowRadius: 4,
        elevation: 10,
        paddingTop: 60
    }
});

export default styles;

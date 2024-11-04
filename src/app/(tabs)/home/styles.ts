import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
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
    recommendationsContentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: '100%',
    },
});

export default styles;

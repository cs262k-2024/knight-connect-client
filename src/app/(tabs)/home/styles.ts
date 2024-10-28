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
        width: '100%'
    },
    calendarContainer: {
        position: 'absolute',
        bottom: 50,
        right: 20,
        width: 200,
        height: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;

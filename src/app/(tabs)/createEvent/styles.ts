import { StyleSheet } from 'react-native';
import globalStyles from '@/globals/globalStyles';

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    labelContainer: {
        gap: 10,
        flex: 1,
        flexDirection: 'column',
    },
    label: {
        color: globalStyles.lightGray,
        fontFamily: 'Fredoka',
        fontSize: 20,
    },
    listContainer: {
        width: '100%',
    },
    itemContainer: {
        borderColor: globalStyles.darkGray,
        borderWidth: 2,
        borderRadius: 50,
        margin: 5,
    },
    itemSelectedContainer: {
        backgroundColor: '#62aeff',
        borderWidth: 2,
        borderRadius: 50,
        borderColor: globalStyles.lightBlue,
        margin: 5,
    },
    itemText: {
        padding: 10,
        color: globalStyles.gray,
    },
    itemSelectedText: {
        padding: 10,
        color: globalStyles.black,
    },
    continueButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: '100%',
    },
    continueButton: {
        borderRadius: 50,
        paddingVertical: 15,
        width: '70%',
        backgroundColor: globalStyles.lightBlue,
    },
    buttonText: {
        color: globalStyles.white,
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    headerText: {
        color: globalStyles.white,
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 36,
        textAlign: 'left',
    },
    credentials: {
        color: globalStyles.darkGray,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
    },
});

export default styles;

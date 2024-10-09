import { StyleSheet } from 'react-native';
import globalStyles from '@/globals/globalStyles';

const styles = StyleSheet.create({
    darkmode: {
        backgroundColor: globalStyles.black,
        height: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        marginTop: 30,
        gap: 10,
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
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

    itemContainer: {
        borderColor: globalStyles.darkGray,
        borderWidth: 2,
        borderRadius: 50,
        margin: 5,
    },

    itemText: {
        borderRadius: 10,
        padding: 10,
        color: globalStyles.gray,
    },
    itemSelectedContainer: {
        backgroundColor: '#62aeff',
        borderWidth: 2,
        borderColor: globalStyles.lightBlue,
        borderRadius: 50,
        margin: 5,
    },

    continueButtonContainer: {
        display: 'flex',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    continueButton: {
        borderRadius: 50,
        paddingTop: 15,
        paddingBottom: 15,
        width: '90%',
        backgroundColor: globalStyles.lightBlue,
    },
    buttonText: {
        color: globalStyles.white,
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
});

export default styles;

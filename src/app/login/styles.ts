import { StyleSheet } from 'react-native';

import globalStyles from '@/globals/globalStyles';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        // padding: 20,
        backgroundColor: globalStyles.black,
    },
    welcome: {
        color: globalStyles.white,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        textAlign: 'center',
        userSelect: 'none',
    },
    credentials: {
        color: globalStyles.darkGray,
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center',
        userSelect: 'none',
    },
    forgot: {
        color: globalStyles.darkGray,
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'right',
        userSelect: 'none',
    },
    login: {
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: globalStyles.lightBlue,
    },
    loginText: {
        color: globalStyles.white,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    otherLogin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: globalStyles.darkGray,
        gap: 10,
        backgroundColor: 'none',
        paddingTop: 15,
        paddingBottom: 15
    },
    otherLoginText: {
        color: globalStyles.black,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    signup: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupText: {
        color: globalStyles.black,
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        userSelect: 'none',
    },
    signupLink: {
        color: globalStyles.lightBlue,
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        userSelect: 'none',
    }
});

export default styles;

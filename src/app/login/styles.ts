import { StyleSheet } from 'react-native';

import globalStyles from '@/globals/globalStyles';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    welcome: {
        marginTop: 30,
        color: globalStyles.black,
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 36,
        textAlign: 'center',
        userSelect: 'none',
    },
    credentials: {
        marginTop: 10,
        color: globalStyles.darkGray,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center',
        userSelect: 'none',
    },
    username: {
        marginTop: 30,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: globalStyles.darkGray,
    },
    password: {
        marginTop: 20,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: globalStyles.darkGray,
    },
    forgot: {
        marginTop: 10,
        color: globalStyles.black,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'right',
        userSelect: 'none',
    },
    login: {
        marginTop: 30,
        borderRadius: 10,
        padding: 20,
        backgroundColor: globalStyles.lightBlue,
    },
    loginText: {
        color: globalStyles.white,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    divider: {
        marginTop: 10,
    },
    otherLogin: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: globalStyles.darkGray,
        padding: 20,
        gap: 10,
    },
    otherLoginText: {
        color: globalStyles.black,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    signup: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupText: {
        color: globalStyles.black,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        userSelect: 'none',
    },
    signupLink: {
        color: globalStyles.lightBlue,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        userSelect: 'none',
    }
});

export default styles;
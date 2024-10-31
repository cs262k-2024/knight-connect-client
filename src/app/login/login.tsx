import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { router } from 'expo-router';

import { FontAwesome5 } from '@expo/vector-icons';

import Button from '@/components/button';
import Input from '@/components/input';
import Divider from '@/components/divider';

import globalStyles from '@/globals/globalStyles';
import loginStyles from './styles';

function LoginInput({
    type,
    updateText,
}: {
    type: string;
    updateText: (e: string) => void;
}) {
    const [focused, updateFocused] = useState(false);

    return (
        <Input
            containerStyle={ {
                borderWidth: 1,
                borderColor: focused ? globalStyles.darkMaroon : 'transparent',
                backgroundColor: globalStyles.veryDarkGray,
            } }
            inputStyle={ {
                color: globalStyles.white,
            } }
            placeholder={ type[0].toUpperCase() + type.slice(1) }
            inputMode={ type === 'email' ? type : undefined }
            secureTextEntry={ type === 'password' }
            onFocus={ () => updateFocused(true) }
            onBlur={ () => updateFocused(false) }
            onChangeText={ (e) => updateText(e) }
        />
    );
}

export default function Login({
    action,
    updateAction,
}: {
    action: string;
    updateAction: (e: string) => void;
}) {
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');

    async function login() {
        if(action === 'Login')
            router.navigate('/home');
        else
            router.navigate('/selectInterests');
    }

    return (
        <View style={ styles.container }>
            <View
                style={ {
                    gap: 10,
                    width: '100%',
                } }
            >
                <LoginInput updateText={ updateEmail } type="email" />
                <LoginInput updateText={ updatePassword } type="password" />
            </View>

            { action === 'Login' && (
                <Text style={ styles.forgot } onPress={ () => {} }>
                    Forgot password?
                </Text>
            ) }

            <View
                style={ {
                    gap: 25,
                    width: '100%',
                } }
            >
                <Button
                    style={ Object.assign({}, loginStyles.actionButton, {
                        borderColor: globalStyles.darkMaroon,
                        marginTop: 20,
                        width: '100%',
                    }) }
                    onPress={ login }
                    disabled={ email === '' || password === '' }
                >
                    <Text style={ loginStyles.actionButtonText }>{ action }</Text>
                </Button>

                <Button style={ styles.otherLogin } onPress={ login }>
                    <FontAwesome5
                        name="google"
                        size={ 24 }
                        color={ globalStyles.gold }
                    />

                    <Text style={ styles.otherLoginText }>
                        { action } with Google
                    </Text>
                </Button>
            </View>

            <Divider text="or" style={ { marginTop: 30 } } />

            <View style={ styles.signup }>
                <Text style={ styles.signupText }>{ action === 'Login' ? 'Don\'t' : 'Already' } have an account? </Text>
                <Text
                    style={ styles.signupLink }
                    onPress={ () =>
                        action === 'Login'
                            ? updateAction('Sign Up')
                            : updateAction('Login')
                    }
                >
                    { action === 'Login' ? 'Sign Up' : 'Login' }.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        width: '100%',
        alignItems: 'center',
    },
    forgot: {
        color: globalStyles.gold,
        fontSize: 12,
        alignSelf: 'flex-end',
        userSelect: 'none',
        opacity: 0.5,
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
        paddingBottom: 15,
    },
    otherLoginText: {
        color: globalStyles.white,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    signup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginTop: 30,
    },
    signupText: {
        color: globalStyles.darkGray,
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        userSelect: 'none',
    },
    signupLink: {
        color: globalStyles.maroon,
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        userSelect: 'none',
    },
});

import { useState, useContext } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import { router } from 'expo-router';

import Button from '@/components/button';
import Input from '@/components/input';
import Divider from '@/components/divider';
import Loading from '@/components/loading';

import { UserContext } from '@/contexts/userContext';

import globalStyles from '@/globals/globalStyles';
import { BACKEND_URL } from '@/globals/backend';

import loginStyles from './styles';

function LoginInput({
    type,
    updateText,
    updateIncorrect
}: {
    type: string;
    updateText: (e: string) => void;
    updateIncorrect: (b: boolean) => void;
}) {
    const [focused, updateFocused] = useState(false);

    return (
        <Input
            containerStyle={ {
                borderWidth: 1,
                borderColor: focused ? globalStyles.darkMaroon : 'transparent',
                backgroundColor: focused ? 'transparent' : globalStyles.veryDarkGray,
            } }
            inputStyle={ {
                color: globalStyles.white,
            } }
            placeholder={ type[0].toUpperCase() + type.slice(1) }
            inputMode={ type === 'email' ? type : 'text' }
            secureTextEntry={ type === 'password' }
            onFocus={ () => updateFocused(true) }
            onBlur={ () => updateFocused(false) }
            onChangeText={
                (e) => {
                    updateText(e);
                    // updateIncorrect(false);
                }
            }
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
    const { updateUser } = useContext(UserContext);

    const [isLoading, updateLoading] = useState(false);

    const [name, updateName] = useState('');
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');

    const [hasSubmittedOnce, updateHasSubmittedOnce] = useState(false);
    const [incorrectUser, updateIncorrect] = useState(false);

    async function login() {
        updateHasSubmittedOnce(true);
        if (action === 'Sign Up' && (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password) || !/[a-z]/.test(password))) return Alert.alert('Invalid Password');
        if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Alert.alert('Invalid Email');

        updateLoading(true);

        if (action === 'Login') {
            const response = await fetch(`${BACKEND_URL}/validate/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if(!response.ok) {
                updateLoading(false);
                updateIncorrect(true);

                return Alert.alert('User not found. Maybe try another password');
            }

            const json = await response.json();

            updateUser(json.data);
            router.navigate('/home');
        }
        else {
            if (name === '') {
                Alert.alert('Invalid Name');
                return;
            }
            
            updateUser({
                id: '',
                name: name,
                email: email,
                preferences: [],
                bio: '',
                password: password,
                joined_events: [],
                friends: [],
                incoming_requests: []
            });

            router.navigate(`/selectInterests?email=${email}`);
        }
    }

    if(isLoading) return <Loading />;

    return (
        <View style={ styles.container }>
            <View
                style={ {
                    gap: 10,
                    width: '100%',
                } }
            >
                {
                    action !== 'Login' && (
                        <LoginInput updateIncorrect={ updateIncorrect } updateText={ updateName } type="name" />
                    )
                }

                <LoginInput updateIncorrect={ updateIncorrect } updateText={ updateEmail } type="email" />
                <LoginInput updateIncorrect={ updateIncorrect } updateText={ updatePassword } type="password" />

                {
                    incorrectUser && (
                        <Text style={ styles.badPassword }>
                        X Email Address or Password is Incorrect
                        </Text>
                    )
                }

                {
                    hasSubmittedOnce && (
                        <>
                            { action === 'Sign Up' && password.length < 8 && (
                                <Text style={ styles.badPassword }>
                                    X at least 8 characters
                                </Text>
                            ) }
            
                            { action === 'Sign Up' && !/\d/.test(password) && (
                                <Text style={ styles.badPassword }>
                                    X at least 1 number
                                </Text>
                            ) }
            
                            { action === 'Sign Up' && !/[A-Z]/.test(password) && (
                                <Text style={ styles.badPassword }>
                                    X at least 1 uppercase letter
                                </Text>
                            ) }
            
                            { action === 'Sign Up' && !/[a-z]/.test(password) && (
                                <Text style={ styles.badPassword }>
                                    X at least 1 lowercase letter
                                </Text>
                            ) }
                        </>
                    )
                }
            </View>

            <View
                style={ {
                    gap: 25,
                    width: '100%',
                } }
            >
                <Button
                    style={ Object.assign({}, loginStyles.actionButton, {
                        borderColor: globalStyles.gold,
                        marginTop: 20,
                        width: '100%',
                    }) }
                    onPress={ login }
                    disabled={ email === '' || password === '' }
                >
                    <Text style={ loginStyles.actionButtonText }>{ action }</Text>
                </Button>
            </View>

            <Divider text="or" style={ { marginTop: 30 } } />

            <View style={ styles.signup }>
                <Text style={ styles.signupText }>
                    { action === 'Login' ? 'Don\'t' : 'Already' } have an account?{ ' ' }
                </Text>

                <Text
                    style={ styles.signupLink }
                    onPress={
                        () => {
                            updateIncorrect(false);

                            action === 'Login'
                                ? updateAction('Sign Up')
                                : updateAction('Login');
                        }
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
        color: globalStyles.gray,
        fontSize: 12,
        alignSelf: 'flex-end',
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
        color: globalStyles.gray,
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
    badPassword: {
        color: globalStyles.maroon,
        fontSize: 12,
        alignSelf: 'flex-end',
        userSelect: 'none',
    }
});

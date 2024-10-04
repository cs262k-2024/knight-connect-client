import { useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    Alert,
    Pressable
} from 'react-native';

import { router } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Divider from '@/components/divider';
import Input from '@/components/input';
import Button from '@/components/button';

import globalStyles from '@/globals/globalStyles';
import styles from './styles';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const forgotPassword = () => {
        Alert.alert('Forgot Password!');
    };

    const login = () => {
        Alert.alert(`Login with Username '${username}' and Password '${password}'!`);
    };

    const loginFacebook = () => {
        Alert.alert('Login with Facebook!');
    };

    const loginGoogle = () => {
        Alert.alert('Login with Google!');
    };

    const signup = () => {
        Alert.alert('Signup!');
    };

    return (
        <ScrollView
            style={ styles.container }
            contentContainerStyle={
                {
                    gap: 10
                }
            }
            stickyHeaderIndices={ [0] }
        >
            <Pressable
                onPress={ () => router.navigate('/') }
            >
                <View>
                    <FontAwesome5 name="long-arrow-alt-left" size={ 24 } color={ globalStyles.darkGray } />
                </View>
            </Pressable>

            <Text style={ styles.welcome }>Welcome Back!</Text>
            <Text style={ styles.credentials }>Please login to access your account</Text>

            <View
                style={
                    {
                        marginTop: 20,
                        gap: 5
                    }
                }
            >
                <Input
                    value={ username }
                    onChangeText={ setUsername }
                    placeholder="Enter Username"
                    autoFocus={ true }
                    inputMode="email"
                />

                <Input
                    value={ password }
                    onChangeText={ setPassword }
                    placeholder="Enter Password"
                    secureTextEntry={ true }
                />
            </View>

            <Text style={ styles.forgot } onPress={ forgotPassword }>Forgot Password?</Text>
            
            <View
                style={
                    {
                        marginTop: 20
                    }
                }
            >
                <Button
                    style={ styles.login }
                    onPress={ login }
                >
                    <Text style={ styles.loginText }>Login</Text>
                </Button>
            </View>

            
            <Divider style={ styles.divider } text="Or" />
            
            <Button
                onPress={ loginFacebook }
                style={ styles.otherLogin }
            >
                <FontAwesome5 name="facebook" size={ 24 } color={ globalStyles.lightBlue } />

                <Text style={ styles.otherLoginText }>Login with Facebook</Text>
            </Button>
            
            <Button
                style={ styles.otherLogin }
                onPress={ loginGoogle }
            >
                <FontAwesome5 name="google" size={ 24 } color={ globalStyles.black } />
                
                <Text style={ styles.otherLoginText }>Login with Google</Text>
            </Button>
            
            <View style={ styles.signup }>
                <Text style={ styles.signupText }>Don't have an account? </Text>
                <Text style={ styles.signupLink } onPress={ signup }>Signup</Text>
            </View>
        </ScrollView>
    );
}

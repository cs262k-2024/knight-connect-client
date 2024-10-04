import { useState } from 'react';
import { View, ScrollView, Text, Alert, Pressable, TextInput } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Divider from '@/components/divider';
import Input from '@/components/input';

import globalStyles from '@/globals/globalStyles';
import styles from './styles';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, _setPassword] = useState('');

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
        <ScrollView style={ styles.container }>
            <Text style={ styles.welcome }>Welcome Back!</Text>
            <Text style={ styles.credentials }>Use Credentials to access your account</Text>

            <TextInput
                style={ styles.username }
                value={ username }
                onChangeText={ setUsername }
                placeholder="Enter Username"
                placeholderTextColor={ globalStyles.darkGray }
                autoFocus={ true }
                inputMode="email"
            />

            <Input
                // style={ styles.password }
                // value={ password }
                // onChangeText={ setPassword }
                placeholder="Enter Password"
                // placeholderTextColor={ globalStyles.darkGray }
                // secureTextEntry={ true }
            />

            <Text style={ styles.forgot } onPress={ forgotPassword }>Forgot Password?</Text>
            
            <Pressable style={ styles.login } onPress={ login }>
                <Text style={ styles.loginText }>Login</Text>
            </Pressable>
            
            <Divider style={ styles.divider } text="Or" />
            
            <Pressable style={ styles.otherLogin } onPress={ loginFacebook }>
                <FontAwesome5 name="facebook" size={ 24 } color={ globalStyles.lightBlue } />

                <Text style={ styles.otherLoginText }>Login with Facebook</Text>
            </Pressable>
            
            <Pressable style={ styles.otherLogin } onPress={ loginGoogle }>
                <FontAwesome5 name="google" size={ 24 } color={ globalStyles.black } />
                
                <Text style={ styles.otherLoginText }>Login with Google</Text>
            </Pressable>
            
            <View style={ styles.signup }>
                <Text style={ styles.signupText }>Don't have an account? </Text>
                <Text style={ styles.signupLink } onPress={ signup }>Signup</Text>
            </View>
        </ScrollView>
    );
}

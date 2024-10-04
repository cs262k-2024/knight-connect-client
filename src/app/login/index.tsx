import { useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    Alert,
    Pressable,
    StyleSheet
} from 'react-native';

import { router } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Divider from '@/components/divider';
import Input from '@/components/input';
import Button from '@/components/button';

import globalStyles from '@/globals/globalStyles';
import styles from './styles';

export default function Login() {
    return (
        <View
            style={
                {
                    gap: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                }
            }
        >
            <Text
                style={
                    {
                        color: globalStyles.white,
                        fontSize: 32,
                        // fontWeight: 'bold',
                        letterSpacing: 2,
                        fontFamily: 'Cedarville'
                    }
                }
            >
                KnightConnect
            </Text>
        </View>
    );

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const [inputSelected, updateInputSelected] = useState('email');

    // const forgotPassword = () => {
    //     Alert.alert('Forgot Password!');
    // };

    // const login = () => {
    //     Alert.alert(`Login with Username '${username}' and Password '${password}'!`);
    // };

    // const loginFacebook = () => {
    //     Alert.alert('Login with Facebook!');
    // };

    // const loginGoogle = () => {
    //     Alert.alert('Login with Google!');
    // };

    // const signup = () => {
    //     Alert.alert('Signup!');
    // };

    // return (
    //     <ScrollView
    //         style={ styles.container }
    //         contentContainerStyle={
    //             {
    //                 gap: 10
    //             }
    //         }
    //         stickyHeaderIndices={ [0] }
    //     >
    //         <>
    //             <Pressable
    //                 onPress={ () => router.navigate('/') }
    //                 style={
    //                     {
    //                         marginTop: 30,
    //                         left: 0,
    //                         position: 'absolute'
    //                     }
    //                 }
    //             >
    //                 <View
    //                     style={
    //                         {
    //                             alignSelf: 'center'
    //                         }
    //                     }
    //                 >
    //                     <FontAwesome5 name="long-arrow-alt-left" size={ 32 } color={ globalStyles.darkGray } />
    //                 </View>
    //             </Pressable>
    //         </>

    //         <Text style={ styles.welcome }>Welcome Back!</Text>
    //         <Text style={ styles.credentials }>Please login to access your account</Text>

    //         <View
    //             style={
    //                 {
    //                     marginTop: 20,
    //                     gap: 5
    //                 }
    //             }
    //         >
    //             <Input
    //                 containerStyle={
    //                     {
    //                         borderWidth: 1,
    //                         borderColor: inputSelected === 'email' ? globalStyles.lightBlue : globalStyles.gray
    //                     }
    //                 }
    //                 placeholder="Email"
    //                 autoFocus={ true }
    //                 inputMode="email"
    //                 onFocus={
    //                     () => updateInputSelected('email')
    //                 }
    //                 onBlur={
    //                     () => updateInputSelected('')
    //                 }
    //             />

    //             <Input
    //                 containerStyle={
    //                     {
    //                         borderWidth: 1,
    //                         borderColor: inputSelected === 'password' ? globalStyles.lightBlue : globalStyles.gray
    //                     }
    //                 }
    //                 placeholder="Password"
    //                 secureTextEntry={ true }
    //                 onFocus={
    //                     () => updateInputSelected('password')
    //                 }
    //                 onBlur={
    //                     () => updateInputSelected('')
    //                 }
    //             />
    //         </View>

    //         <Text style={ styles.forgot } onPress={ forgotPassword }>Forgot Password?</Text>
            
    //         <View
    //             style={
    //                 {
    //                     marginTop: 20
    //                 }
    //             }
    //         >
    //             <Button
    //                 style={ styles.login }
    //                 onPress={ login }
    //             >
    //                 <Text style={ styles.loginText }>Login</Text>
    //             </Button>
    //         </View>

            
    //         <Divider text="Or" />
            
    //         <Button
    //             onPress={ loginFacebook }
    //             style={ styles.otherLogin }
    //         >
    //             <FontAwesome5 name="facebook" size={ 24 } color={ globalStyles.lightBlue } />

    //             <Text style={ styles.otherLoginText }>Login with Facebook</Text>
    //         </Button>
            
    //         <Button
    //             style={ styles.otherLogin }
    //             onPress={ loginGoogle }
    //         >
    //             <FontAwesome5 name="google" size={ 24 } color={ globalStyles.black } />
                
    //             <Text style={ styles.otherLoginText }>Login with Google</Text>
    //         </Button>
            
    //         <View style={ styles.signup }>
    //             <Text style={ styles.signupText }>Don't have an account? </Text>
    //             <Text style={ styles.signupLink } onPress={ signup }>Signup</Text>
    //         </View>
    //     </ScrollView>
    // );
}

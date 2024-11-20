import { useState } from 'react';
import { View, Text } from 'react-native';

import TouchableWrapper from '@/components/touchableWrapper';
import Divider from '@/components/divider';
import Button from '@/components/button';
import Logo from '@/components/texts/logo';

import Login from './login';

import globalStyles from '@/globals/globalStyles';
import styles from './styles';

export default function LoginLanding() {
    const [action, updateAction] = useState('');

    return (
        <TouchableWrapper>
            <View
                style={ {
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 60,
                    height: '100%',
                    padding: 20,
                } }
            >
                <Logo />

                { action === '' ? (
                    <>
                        <View
                            style={ {
                                gap: 20,
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            } }
                        >
                            <Button
                                onPress={ () => updateAction('Sign Up') }
                                style={ Object.assign({}, styles.actionButton, {
                                    borderColor: globalStyles.darkMaroon,
                                }) }
                            >
                                <Text style={ styles.actionButtonText }>
                                    Create New Account
                                </Text>
                            </Button>

                            <Divider text="or" />

                            <Button
                                onPress={ () => updateAction('Login') }
                                style={ Object.assign({}, styles.actionButton, {
                                    borderColor: globalStyles.darkGold,
                                }) }
                            >
                                <Text style={ styles.actionButtonText }>Log In</Text>
                            </Button>
                        </View>
                    </>
                ) : (
                    <Login updateAction={ updateAction } action={ action } />
                ) }
            </View>
        </TouchableWrapper>
    );
}

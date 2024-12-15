/**
 * @file _layout.tsx
 * @description This file contains the layout for the Profile screen in the Knight Connect client application.
 * It uses the `expo-router` for navigation and `react-native` components for the UI.
 */

import { View, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { Icon } from '@rneui/themed';
import globalStyles from '@/globals/globalStyles';

/**
 * ProfileLayout component
 * @description This component defines the layout for the Profile screen, including the header and navigation options.
 * @returns {JSX.Element} The ProfileLayout component.
 */
export default function ProfileLayout() {
    return (
        <Stack
            screenOptions={ {
                headerShown: true,
            } }
        >
            <Stack.Screen
                name="index"
                options={ {
                    headerShadowVisible: false,
                    title: 'Profile',
                    headerRight: () => (
                        <View>
                            <TouchableOpacity
                                onPress={ () => {
                                    Haptics.impactAsync(
                                        Haptics.ImpactFeedbackStyle.Soft,
                                    );

                                    router.navigate('/editProfile');
                                } }
                            >
                                <Icon
                                    name="account-edit-outline"
                                    type="material-community"
                                    color={ globalStyles.gray }
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTitleStyle: {
                        color: globalStyles.white,
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: globalStyles.black,
                    },
                } }
            />
        </Stack>
    );
}

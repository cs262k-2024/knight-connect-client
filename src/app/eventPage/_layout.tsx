/**
 * @file _layout.tsx
 * @fileoverview This file contains the layout component for the Event Page in the Knight Connect Client application.
 * It uses the `expo-router` for navigation and `react-native` for UI components.
 */

import { Pressable } from 'react-native';
import { router, Stack } from 'expo-router';
import { Icon } from '@rneui/themed';
import globalStyles from '@/globals/globalStyles';

/**
 * EventPageLayout component
 * 
 * This component defines the layout for the Event Page. It includes a header with a back button
 * that navigates to the home page. The header style and content style are customized using global styles.
 * 
 * @returns {JSX.Element} The layout component for the Event Page.
 */
export default function EventPageLayout() {
    return (
        <Stack
            screenOptions={ {
                headerShown: true,
                contentStyle: {
                    backgroundColor: globalStyles.black,
                }
            } }
        >
            <Stack.Screen
                name="index"
                options={ {
                    headerShadowVisible: false,
                    title: '',
                    header: () => (
                        <Pressable
                            onPress={
                                () => {
                                    router.navigate('/home');
                                }
                            }
                            style={ { width: '100%', alignItems: 'flex-start', paddingBottom: 10  } }
                        >
                            <Icon
                                name="chevron-left"
                                size={ 40 }
                                type="material-community"
                                color={ globalStyles.gray }
                            />
                        </Pressable>
                    ),
                    headerTitleStyle: {
                        color: globalStyles.white,
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: globalStyles.black,
                    }
                } }
            />
        </Stack>
    );
}

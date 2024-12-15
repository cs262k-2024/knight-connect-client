/**
 * @file _layout.tsx
 * @fileoverview This file contains the TabLayout component which sets up the tab navigation for the application using the `expo-router` Tabs component and AntDesign icons.
 */

import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

import globalStyles from '@/globals/globalStyles';

/**
 * TabLayout component sets up the tab navigation for the application.
 * It uses the `expo-router` Tabs component and AntDesign icons for the tab bar.
 * 
 * @returns {JSX.Element} The TabLayout component.
 */
export default function TabLayout() {
    return (
        <Tabs
            screenOptions={ {
                headerShown: false,
                tabBarStyle: {
                    padding: 10,
                    backgroundColor: globalStyles.black,
                    borderTopColor: globalStyles.darkGray,
                },
                tabBarActiveTintColor: globalStyles.gold,
                tabBarInactiveTintColor: globalStyles.gray,
            } }
        >
            <Tabs.Screen
                name="home"
                options={ {
                    title: '',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={ 24 } color={ color } />
                    ),
                } }
            />

            <Tabs.Screen
                name="createEvent"
                options={ {
                    title: '',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="pluscircleo" size={ 24 } color={ color } />
                    ),
                } }
            />

            <Tabs.Screen
                name="calendar"
                options={ {
                    title: '',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="calendar" size={ 24 } color={ color } />
                    ),
                } }
            />

            <Tabs.Screen
                name="profile"
                options={ {
                    title: '',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={ 24 } color={ color } />
                    ),
                } }
            />
        </Tabs>
    );
}

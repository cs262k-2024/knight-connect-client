/**
 * @file _layout.tsx
 * @fileoverview This file defines the layout for the Calendar screen in the Knight Connect client application.
 * It uses the `expo-router` library to create a stack navigator with customized screen options.
 */

import { Stack } from 'expo-router';
import globalStyles from '@/globals/globalStyles';

/**
 * CalendarLayout component
 * 
 * This component sets up the layout for the Calendar screen using a stack navigator.
 * It hides the header and applies global styles for the background color and padding.
 * 
 * @returns {JSX.Element} The stack navigator with the specified screen options.
 */
export default function CalendarLayout() {
    return (
        <Stack
            screenOptions={ {
                headerShown: false,
                contentStyle: {
                    backgroundColor: globalStyles.black,
                    padding: 20,
                },
            } }
        >
            <Stack.Screen name="index" />
        </Stack>
    );
}

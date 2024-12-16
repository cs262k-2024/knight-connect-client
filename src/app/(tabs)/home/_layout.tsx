/**
 * HomeLayout component renders a stack navigator for the home tab with customized screen options.
 * 
 * @file /home/alex/Documents/Projects/calvin/k/knight-connect-client/src/app/(tabs)/home/_layout.tsx
 */

import { Stack } from 'expo-router';
import globalStyles from '@/globals/globalStyles';

/**
 * HomeLayout component sets up the stack navigator for the home tab.
 * It hides the header and applies global styles for the background color and padding.
 * 
 * @returns {JSX.Element} The stack navigator for the home tab.
 */
export default function HomeLayout() {
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

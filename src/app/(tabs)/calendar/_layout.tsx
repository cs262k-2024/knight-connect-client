/**
 * This file defines the layout for creating events in the calendar tab of the Knight Connect client application.
 * It uses the `Stack` component from `expo-router` to manage the navigation stack.
 */

import { Stack } from 'expo-router';

/**
 * The `CreateEventLayout` component sets up the navigation stack for the create event screen.
 * It hides the header and defines a single screen named "index".
 *
 * @returns {JSX.Element} The layout for the create event screen.
 */
export default function CreateEventLayout() {
    return (
        <Stack
            screenOptions={ {
                headerShown: false,
            } }
        >
            <Stack.Screen name="index" />
        </Stack>
    );
}

import { Stack } from 'expo-router';

export default function EditUserLayout() {
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

import { Stack } from 'expo-router';

export default function HelloWorldLayout() {
    return (
        <Stack
            screenOptions={
                {
                    contentStyle: {
                        backgroundColor: 'var(--black)'
                    }
                }
            }
        >
            <Stack.Screen name="index" options={ { headerShown: false } } />
        </Stack>
    );
}

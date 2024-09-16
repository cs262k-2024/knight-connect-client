import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';

import './main.css';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
            <Stack.Screen name="(helloWorld)" options={ { headerShown: false } } />

            <Stack.Screen name="+not-found" options={ { headerShown: false } } />
        </Stack>
    );
}

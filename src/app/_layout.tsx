import { useEffect } from 'react';

import { useFonts } from 'expo-font';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import globalStyles from '@/globals/globalStyles';

import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded)
            SplashScreen.hideAsync();
    }, [loaded]);

    if (!loaded) return null;

    return (
        <Stack
            screenOptions={
                {
                    contentStyle: {
                        backgroundColor: globalStyles.black
                    }
                }
            }
        >
            <Stack.Screen name="(home)" options={ { headerShown: false } } />

            <Stack.Screen name="+not-found" options={ { headerShown: false } } />
        </Stack>
    );
}
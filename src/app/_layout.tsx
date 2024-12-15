/**
 * RootLayout component that sets up the main application layout.
 * It includes font loading, splash screen handling, and context providers.
 * 
 * @file /home/alex/Documents/Projects/calvin/k/knight-connect-client/src/app/_layout.tsx
 */

import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import UserContextProvider from '@/contexts/userContext';
import globalStyles from '@/globals/globalStyles';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

/**
 * RootLayout component that sets up the main application layout.
 * It includes font loading, splash screen handling, and context providers.
 * 
 * @returns {JSX.Element | null} The main application layout or null if fonts are not loaded.
 */
export default function RootLayout() {
    const [loaded] = useFonts({
        Fredoka: require('../assets/fonts/Fredoka-VariableFont.ttf'),
        RobotoMono: require('../assets/fonts/RobotoMono-VariableFont.ttf'),
        Playfair: require('../assets/fonts/PlayfairDisplay-VariableFont.ttf'),
        PlayfairItalic: require('../assets/fonts/PlayfairDisplay-Italic-VariableFont.ttf'),
    });

    useEffect(() => {
        if (loaded) SplashScreen.hideAsync();
    }, [loaded]);

    if (!loaded) return null;

    return (
        <UserContextProvider>
            <GestureHandlerRootView>
                <BottomSheetModalProvider>
                    <Stack
                        screenOptions={ {
                            contentStyle: {
                                backgroundColor: globalStyles.black,
                                paddingTop: 50,
                            },
                            headerShown: false,
                        } }
                    >
                        <Stack.Screen
                            name="(tabs)"
                            options={ { headerShown: false } }
                        />
                        <Stack.Screen
                            name="login"
                            options={ { headerShown: false } }
                        />
                        <Stack.Screen
                            name="editProfile"
                            options={ {
                                presentation: 'containedTransparentModal',
                            } }
                        />

                        <Stack.Screen name="+not-found" />
                    </Stack>
                </BottomSheetModalProvider>
            </GestureHandlerRootView>
        </UserContextProvider>
    );
}

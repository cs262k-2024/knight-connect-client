import { Stack } from 'expo-router';

import globalStyles from '@/globals/globalStyles';

export default function HomeLayout() {
    return (
        <Stack
            screenOptions={
                {
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: globalStyles.black,
                        padding: 20,
                    }
                }
            }
        >
            <Stack.Screen name="index" />
        </Stack>
    );
}

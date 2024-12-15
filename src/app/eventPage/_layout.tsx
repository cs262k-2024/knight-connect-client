import { TouchableOpacity, View } from 'react-native';
import { router, Stack } from 'expo-router';

import { Icon } from '@rneui/themed';

import globalStyles from '@/globals/globalStyles';

export default function EventPageLayout() {
    return (
        <Stack
            screenOptions={ {
                headerShown: true,
                contentStyle: {
                    backgroundColor: globalStyles.black,
                }
            } }
        >
            <Stack.Screen
                name="index"
                options={ {
                    headerShadowVisible: false,
                    title: '',
                    headerLeft: () => (
                        <View>
                            <TouchableOpacity
                                onPress={ () => router.navigate('/home') }
                            >
                                <Icon
                                    name="chevron-left"
                                    size={ 30 }
                                    type="material-community"
                                    color={ globalStyles.gray }
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTitleStyle: {
                        color: globalStyles.white,
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: globalStyles.black,
                    }
                } }
            />
        </Stack>
    );
}

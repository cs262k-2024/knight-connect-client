import globalStyles from '@/globals/globalStyles';
import { Icon } from '@rneui/themed';
import { router, Stack } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function EventPageLayout() {
    return (
        <Stack
            screenOptions={ {
                headerShown: true,
            } }
        >
            <Stack.Screen
                name="index"
                options={ {
                    headerShadowVisible: false,
                    title: 'Event',
                    headerLeft: () => (
                        <View>
                            <TouchableOpacity
                                onPress={ () => {
                                    Haptics.impactAsync(
                                        Haptics.ImpactFeedbackStyle.Soft,
                                    );

                                    router.navigate('/(tabs)/home');
                                } }
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
                    },
                } }
            />
        </Stack>
    );
}

import { Stack, router } from 'expo-router';
import globalStyles from '@/globals/globalStyles';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import * as Haptics from 'expo-haptics';

export default function ProfileLayout() {
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
                    title: 'Profile',
                    headerRight: () => (
                        <View>
                            <TouchableOpacity
                                onPress={ () => {
                                    router.navigate('/editProfile');
                                    Haptics.impactAsync(
                                        Haptics.ImpactFeedbackStyle.Soft,
                                    );
                                } }
                            >
                                <Icon
                                    name="account-edit-outline"
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

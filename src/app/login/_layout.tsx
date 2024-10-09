import { View } from 'react-native';
import { Slot } from 'expo-router';

export default function LoginLayout() {
    return (
        <View
            style={
                {
                    marginTop: 30,
                    flex: 1
                }
            }
        >
            <Slot />
        </View>
    );
}

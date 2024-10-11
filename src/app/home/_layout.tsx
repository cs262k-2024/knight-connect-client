import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function HomeLayout() {
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

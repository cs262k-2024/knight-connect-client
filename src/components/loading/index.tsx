import { View, StyleSheet, Text } from 'react-native';

import globalStyles from '@/globals/globalStyles';

export default function Loading() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                Loading...
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    text: {
        textAlign: 'center',
        color: globalStyles.white,
        fontStyle: 'italic',
        fontSize: 16,
    }
});

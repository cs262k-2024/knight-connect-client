import { Text, ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function HelloWorld() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>Hello World!</Text>

                <Text>- Keith's Favorite Team</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});

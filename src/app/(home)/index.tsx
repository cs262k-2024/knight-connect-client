import { ScrollView, Text } from 'react-native';

import styles from './styles';

export default function Home() {
    return (
        <ScrollView style={ styles.container }>
            <Text style={ styles.headerText }>Knight Connect</Text>

            <Text style={ styles.italicText }>- Keith's Favorite Team (CS262K)</Text>
        </ScrollView>
    );
}

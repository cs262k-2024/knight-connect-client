import { ScrollView, Text, StyleSheet, View } from 'react-native';

type EventRecommendationContainerProps = {
    title: string;
};

export default function EventRecommendationContainer(props: EventRecommendationContainerProps) {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignSelf: 'stretch'
        },
        headerContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        headerText: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        seeAllText: {
            fontSize: 12,
            color: '#007BFF',
            alignSelf: 'center'
        }
    });
    
    return (
        <ScrollView
            style={ styles.container }
            horizontal={ true }
        >
            <View
                style={ styles.headerContainer }
            >
                <Text
                    style={ styles.headerText }
                >
                    { props.title }
                </Text>

                <Text style={ styles.seeAllText }>See All</Text>
            </View>
        </ScrollView>
    );
}

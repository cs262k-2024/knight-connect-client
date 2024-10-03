import { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

import Event from '../event';

import { EVENTS } from '@/globals/constants';
import globalStyles from '@/globals/globalStyles';

type EventRecommendationProps = {
    title: string;
};

export default function EventRecommendation(props: EventRecommendationProps) {
    const [events, updateEvents] = useState<CalvinEvent[]>([]);

    useEffect(() => {
        (async function() {
            // Fetch events -> get from backend and use title as a filter
            updateEvents(EVENTS);
        })();
    }, []);
    
    return (
        <View style={ styles.container }>
            <View style={ styles.headerContainer }>
                <Text
                    style={ styles.headerText }
                >
                    { props.title }
                </Text>

                <Text style={ styles.seeAllText }>See All</Text>
            </View>
            
            <ScrollView
                style={ styles.container }
                contentContainerStyle={ styles.container }
                horizontal={ true }
            >
                <View style={ styles.cardContainer }>
                    {
                        events.map(
                            (event, index) => (
                                <Event
                                    key={ index }
                                    { ...event }
                                />
                            )
                        )
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        gap: 20
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
        color: globalStyles.lightBlue,
        alignSelf: 'center'
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    }
});

import { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

import Event from '../event';

import { EVENTS } from '@/globals/constants';
import globalStyles from '@/globals/globalStyles';

type EventRecommendationProps = {
    title: string;
    eventCardType?: string;
    horizontalScroll?: boolean;
};

export default function EventRecommendation(props: EventRecommendationProps) {
    const styles = StyleSheet.create({
        // TODO: Put shadow on the right side and left side
        container: {
            display: 'flex',
            alignSelf: 'stretch',
            gap: 20,
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
            alignSelf: 'center',
            textDecorationLine: 'underline'
        },
        cardContainer: {
            display: 'flex',
            flexDirection: props.horizontalScroll ? 'row' : 'column',
            gap: 20,
            paddingBottom: 5
        }
    });
    
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
            
            <ScrollView style={ styles.container } horizontal={ props.horizontalScroll }>
                <View style={ styles.cardContainer }>
                    {
                        events.filter(
                            (_e, i) => props.horizontalScroll ? i < 8 : i < 3
                        ).map(
                            (event, index) => (
                                <Event
                                    key={ index }
                                    eventCardType={ props.eventCardType }
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

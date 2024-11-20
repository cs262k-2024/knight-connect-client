import { ScrollView, Text, StyleSheet, View } from 'react-native';

import Event from '../event';

import globalStyles from '@/globals/globalStyles';

type EventRecommendationProps = {
    title: string;
    events: CalvinEvent[];
    eventCardType?: string;
    horizontalScroll?: boolean;
};

export default function EventRecommendation(props: EventRecommendationProps) {
    const styles = StyleSheet.create({
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
            color: globalStyles.white,
        },
        seeAllText: {
            fontSize: 12,
            color: globalStyles.lightBlue,
            alignSelf: 'center',
            textDecorationLine: 'underline',
        },
        cardContainer: {
            display: 'flex',
            flexDirection: props.horizontalScroll ? 'row' : 'column',
            gap: 20,
            paddingBottom: 5,
        },
    });

    return (
        <View style={ styles.container }>
            <View style={ styles.headerContainer }>
                <Text style={ styles.headerText }>{ props.title }</Text>

                <Text style={ styles.seeAllText }>See All</Text>
            </View>

            <ScrollView
                style={ styles.container }
                horizontal={ props.horizontalScroll }
            >
                <View style={ styles.cardContainer }>
                    {
                        props.events.length === 0 && <Text style={ styles.headerText }>No events...</Text>
                    }

                    { props.events
                        .filter((_e, i) =>
                            props.horizontalScroll ? i < 8 : i < 3,
                        )
                        .map((event, index) => (
                            <Event
                                key={ index }
                                eventCardType={ props.eventCardType }
                                { ...event }
                            />
                        )) }
                </View>
            </ScrollView>
        </View>
    );
}

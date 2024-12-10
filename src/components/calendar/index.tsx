import { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet, Pressable } from 'react-native';

import * as NativeCalendar from 'react-native-calendars';

import globalStyles from '@/globals/globalStyles';

function dateToString(d: Date) {
    const date = new Date(d);

    return date.toISOString().split('T')[0];
}

export default function Calendar(props: { events: CalvinEvent[], isUser?: boolean }) {
    const [items, setItems] = useState<{ [key: string]: CalvinEvent[] }>({});
    const [refresh, updateRefresh] = useState(false);

    useEffect(() => {
        setItems(loadItemsForMonth((new Date()).getTime()));
    }, [props]);

    function loadItemsForMonth(timestamp: number) {
        const tempItems = { ...items };

        for (let i = -14; i <= 14; i++) {
            const date = new Date(timestamp);
            date.setDate(date.getDate() + i);
            
            const dateString = dateToString(date);

            tempItems[dateString] = props.events.filter(event => dateToString(new Date(event.start_date)) === dateString);
        }

        updateRefresh(!refresh);

        return tempItems;
    }

    function Item(reservation: CalvinEvent) {
        return (
            <View
                style={ styles.item }
            >
                <Pressable
                    onPress={ () => Alert.alert(reservation.name) }
                    style={ { flex: 1 } }
                >
                    <Text style={ { color: globalStyles.lightGray, fontSize: 15, fontWeight: 'bold' } }>{ reservation.name }</Text>
                    <Text style={ { color: globalStyles.gray, fontSize: 15, fontStyle: 'italic' } }>{ reservation.location }</Text>
                </Pressable>

                {
                    props.isUser && (
                        <Pressable
                            style={
                                {
                                    paddingHorizontal: 10,
                                    alignSelf: 'center',
                                    
                                }
                            }
                            onPress={ () => {} }
                        >
                            <Text style={ styles.text }>x</Text>
                        </Pressable>
                    )
                }
            </View>
        );
    }

    function EmptyDate() {
        return (
            <View style={ styles.emptyDate }>
                <Text style={ styles.text }>This is empty date!</Text>
            </View>
        );
    }

    const rowHasChanged = (
        r1: NativeCalendar.AgendaEntry,
        r2: NativeCalendar.AgendaEntry,
    ) => {
        return r1.name !== r2.name;
    };

    return (
        <NativeCalendar.Agenda
            items={ items }
            loadItemsForMonth={ (d: NativeCalendar.DateData) => setItems(loadItemsForMonth(d.timestamp)) }
            selected={ (new Date()).toISOString() }
            renderItem={ Item }
            renderEmptyDate={ EmptyDate }
            rowHasChanged={ rowHasChanged }
            showClosingKnob={ true }
            theme={ {
                reservationsBackgroundColor: globalStyles.black,
                calendarBackground: globalStyles.black,
                agendaDayTextColor: globalStyles.gray,
                agendaDayNumColor: globalStyles.maroon,
                agendaTodayColor: globalStyles.gold,
                agendaKnobColor: globalStyles.lightBlue,
            } }
        />
    );
}

const styles = StyleSheet.create({
    item: {
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        borderWidth: 1,
        borderColor: globalStyles.darkGray,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15
    },
    emptyDate: {
        height: 15,
        flex: 1,
        padding: 10,
        marginRight: 10,
        marginTop: 10,
        justifyContent: 'center',
        textAlign: 'left',
        display: 'flex',
    },
    dayItem: {
        marginLeft: 34,
    },
    text: {
        color: globalStyles.white,
        fontSize: 15,
    },
});

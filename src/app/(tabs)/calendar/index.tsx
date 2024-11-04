import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import * as NativeCalendar from 'react-native-calendars';

import { EVENTS } from '@/globals/constants';
import globalStyles from '@/globals/globalStyles';

import styles from './styles';

function timeToString(time: number) {
    const date = new Date(time);

    return date.toISOString().split('T')[0];
}

function loadEvents() {
    const items: { [key: string]: Array<CalvinEvent> } = {};

    for (const event of EVENTS) {
        const dateStr = timeToString(event.date.valueOf());

        if (dateStr in items) items[dateStr].push(event);
        else items[dateStr] = [event];
    }
    return items;
}

export default function () {
    const [items, setItems] = useState<{ [key: string]: Array<CalvinEvent> }>(
        {},
    );

    useEffect(() => {
        setItems(loadEvents());
    }, []);

    function loadItems(day: NativeCalendar.DateData) {
        const tempItems = { ...items };

        for (let i = -14; i <= 14; i++) {
            const date = timeToString(day.timestamp + i * 24 * 60 * 60 * 1000);

            if (!(date in tempItems)) tempItems[date] = [];
        }

        return tempItems;
    }

    const renderItem = (reservation: CalvinEvent) => {
        return (
            <TouchableOpacity
                style={ styles.item }
                onPress={ () => Alert.alert(reservation.name) }
            >
                <Text style={ styles.text }>{ reservation.name }</Text>
                <Text style={ styles.text }>{ reservation.location }</Text>

                <Text style={ styles.text }>{ reservation.description }</Text>
                <Text style={ styles.text }>{ reservation.type }</Text>
            </TouchableOpacity>
        );
    };

    const renderEmptyDate = () => {
        return (
            <View style={ styles.emptyDate }>
                <Text style={ styles.text }>This is empty date!</Text>
            </View>
        );
    };

    const rowHasChanged = (
        r1: NativeCalendar.AgendaEntry,
        r2: NativeCalendar.AgendaEntry,
    ) => {
        return r1.name !== r2.name;
    };

    return (
        <NativeCalendar.Agenda
            items={ items }
            loadItemsForMonth={ (d: NativeCalendar.DateData) =>
                setItems(loadItems(d))
            }
            selected={ timeToString(Date.now()) }
            renderItem={ renderItem }
            renderEmptyDate={ renderEmptyDate }
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

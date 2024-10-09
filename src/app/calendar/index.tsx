import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import * as NativeCalendar from 'react-native-calendars';

import { EVENTS } from '@/globals/constants.ts';
import styles from './styles';

function timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

function loadEvents() {
	const items = {};
	for (const event of EVENTS) {
	    const dateStr = timeToString(event.date.valueOf());
	    if (dateStr in items) {
		    items[dateStr].push(event);
	    }
            else {
		    items[dateStr] = [event];
	    }
	}
	return items;
}

export default function () {
    const [items, setItems] = useState<NativeCalendar.AgendaSchedule>(loadEvents());

    const loadItems = (day: NativeCalendar.DateData) => {
	    for (let i = -14; i <= 14; ++i) {
		    const date = timeToString(day.timestamp + i * 24 * 60 * 60 * 1000);
		    if (!(date in items)) {
			    items[date] = [];
		    }
	    }
	    setItems(items);
    };

    const renderItem = (reservation: NativeCalendar.AgendaEntry, isFirst: boolean) => {
        const fontSize = isFirst ? 16 : 14;
        const color = isFirst ? 'black' : '#43515c';

        return (
            <TouchableOpacity
                style={ styles.item }
                onPress={ () => Alert.alert(reservation.name) }
            >
                <Text style={ { fontSize, color } }>{ reservation.name }</Text>
                <Text style={ { fontSize, color } }>{ reservation.location }</Text>
                <Text style={ { fontSize, color } }>{ reservation.description }</Text>
                <Text style={ { fontSize, color } }>{ reservation.type }</Text>
            </TouchableOpacity>
        );
    };

    const renderEmptyDate = () => {
        return (
            <View style={ styles.emptyDate }>
                <Text>This is empty date!</Text>
            </View>
        );
    };

    const rowHasChanged = (r1: NativeCalendar.AgendaEntry, r2: NativeCalendar.AgendaEntry) => {
        return r1.name !== r2.name;
    };

    return (
        <NativeCalendar.Agenda
            items={ items }
            loadItemsForMonth={ loadItems }
            selected={ timeToString(Date.now()) }
            renderItem={ renderItem }
            renderEmptyDate={ renderEmptyDate }
            rowHasChanged={ rowHasChanged }
            showClosingKnob={ true }
        />
    );
}

import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import * as NativeCalendar from 'react-native-calendars';

import styles from './styles';

function timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

export default function () {
    const [items, setItems] = useState<NativeCalendar.AgendaSchedule>({});

    const loadItems = (day: NativeCalendar.DateData) => {
        const strTime = timeToString(day.timestamp);
        items[strTime] = [];
        setItems(items);
        // const itemsCopy = items;

        // setTimeout(() => {
        //     for (let i = -15; i < 85; i++) {
        //         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        //         const strTime = timeToString(time);

        //         if (!itemsCopy[strTime]) {
        //             itemsCopy[strTime] = [];

        //             const numItems = Math.floor(Math.random() * 3 + 1);
        //             for (let j = 0; j < numItems; j++) {
        //                 itemsCopy[strTime].push({
        //                     name: 'Item for ' + strTime + ' #' + j,
        //                     height: Math.max(50, Math.floor(Math.random() * 150)),
        //                     day: strTime
        //                 });
        //             }
        //         }
        //     }

        //     const newItems: NativeCalendar.AgendaSchedule = {};
        //     Object.keys(itemsCopy).forEach(key => {
        //         newItems[key] = itemsCopy[key];
        //     });
        //     setItems(newItems);
        // }, 1000);
    };

    const renderItem = (reservation: NativeCalendar.AgendaEntry, isFirst: boolean) => {
        const fontSize = isFirst ? 16 : 14;
        const color = isFirst ? 'black' : '#43515c';

        return (
            <TouchableOpacity
                style={[styles.item, { height: reservation.height }]}
                onPress={() => Alert.alert(reservation.name)}
            >
                <Text style={{ fontSize, color }}>{reservation.name}</Text>
            </TouchableOpacity>
        );
    };

    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    };

    const rowHasChanged = (r1: NativeCalendar.AgendaEntry, r2: NativeCalendar.AgendaEntry) => {
        return r1.name !== r2.name;
    };

    return (
        <NativeCalendar.Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={'2024-05-16'}
            renderItem={renderItem}
            renderEmptyDate={renderEmptyDate}
            rowHasChanged={rowHasChanged}
            showClosingKnob={true}
            markingType={'period'}
            markedDates={{
                // '2017-05-08': { textColor: '#43515c' },
                // '2017-05-09': { textColor: '#43515c' },
                // '2017-05-14': { startingDay: true, endingDay: true, color: 'blue' },
                // '2017-05-21': { startingDay: true, color: 'blue' },
                // '2017-05-22': { endingDay: true, color: 'gray' },
                // '2017-05-24': { startingDay: true, color: 'gray' },
                // '2017-05-25': { color: 'gray' },
                // '2017-05-26': { endingDay: true, color: 'gray' }
            }}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        />
    )
}

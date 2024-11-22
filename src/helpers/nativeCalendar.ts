import { Alert, Platform } from 'react-native';

import * as Calendar from 'expo-calendar';

async function getDefaultCalendarSource() {
    if (Platform.OS !== 'ios')
        return { isLocalAccount: true, name: 'Expo Calendar', type: 'local' };
    try {
        const calendars = await Calendar.getCalendarsAsync();
        const defaultCalendars = calendars.filter(
            (each) =>
                each.allowsModifications &&
                each.entityType === Calendar.EntityTypes.EVENT &&
                each.source.name === 'iCloud',
        );

        if (defaultCalendars.length === 0) {
            Alert.alert('No calendar available');
            return null;
        }

        return defaultCalendars[0].source;
    }
    catch (e: any) {
        Alert.alert(e.toString());
        return null;
    }
}

async function grantPermissions() {
    const { status: status1 } =
        await Calendar.requestCalendarPermissionsAsync();

    if (status1 !== 'granted') {
        Alert.alert('Calendar permission not granted');
        return false;
    }
    
    const { status: status2 } = await Calendar.requestRemindersPermissionsAsync();
    
    if (status2 !== 'granted') {
        Alert.alert('Reminders permission not granted');
        return false;
    }
    
    return true;
}

async function addEventToCalendar(
    title: string,
    startDate: Date,
    endDate: Date,
    location?: string,
    details?: string
) {
    if (!(await grantPermissions())) {
        Alert.alert('Calendar permission not granted');
        return false;
    }

    const defaultCalendarSource = await getDefaultCalendarSource();
    if (defaultCalendarSource === null) return false;

    try {
        const calendarId = await Calendar.createCalendarAsync({
            title: 'Knight Connect',
            color: 'blue',
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'internalCalendarName',
            ownerAccount: 'personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });

        await Calendar.createEventAsync(calendarId, {
            title,
            startDate,
            endDate,
            location,
            timeZone: 'EST',
            notes: details,
        });
    }
    catch (e: any) {
        Alert.alert(e.toString());
        return false;
    }

    return true;
}

export { addEventToCalendar };

import { Alert, Platform } from 'react-native';

import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import * as SQLite from 'expo-sqlite';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        try {
            const projectId =
                Constants?.expoConfig?.extra?.eas?.projectId ??
                Constants?.easConfig?.projectId;
            if (!projectId) {
                throw new Error('Project ID not found');
            }
            token = (
                await Notifications.getExpoPushTokenAsync({
                    projectId,
                })
            ).data;
        }
        catch (e) {
            token = `${e}`;
        }
    }
    else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}

// register for push notifications on app start
(async () => {
    try {
        await registerForPushNotificationsAsync();
    }
    catch (e) {
        Alert.alert(`failed to register for push notifications: ${e}`);
    }
})();

const addNotificationRecord = async (eventID: string, notificationID: string) => {
    const db = await SQLite.openDatabaseAsync('db.db');
    // create the table if it doesn't exist
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS Notifications (
            eventID TEXT PRIMARY KEY,
            notificationID TEXT NOT NULL
        );
    `);
    await db.runAsync('INSERT INTO Notifications (eventID, notificationID) VALUES (?, ?)', eventID, notificationID);
};

// call this function to schedule a notification
export const scheduleNotification = async (id: string, title: string, body: string, date: Date) => {
    const notificationID = await (Notifications as any).scheduleNotificationAsync({
        content: {
            title,
            body,
            sound: true,
        },
        trigger: {
            date,
        },
    });
    await addNotificationRecord(id, notificationID);
};

export const unscheduleNotification = async (id: string) => {
    const db = await SQLite.openDatabaseAsync('db.db');
    const record = await db.getFirstAsync('SELECT * FROM Notifications WHERE eventID = ?', id);
    if (!record) {
        return;
    }
    await Notifications.cancelScheduledNotificationAsync((record as any).notificationID);
};

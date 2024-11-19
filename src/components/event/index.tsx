import { useContext, useEffect, useState } from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

import { router } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import { UserContext } from '@/contexts/userContext';

import Button from '../button';

import { userJoinedEvent } from '@/helpers/user';

import { BACKEND_URL } from '@/globals/backend';
import globalStyles from '@/globals/globalStyles';

type EventProps = CalvinEvent & {
    eventCardType?: string;
};

export default function Event(props: EventProps) {
    const { user, updateUser } = useContext(UserContext);

    if (!user) return;

    const event: CalvinEvent = (() => {
        const tempEvent: EventProps = { ...props };
        delete tempEvent.eventCardType;

        return tempEvent;
    })();

    useEffect(() => {}, [user]);

    async function joinEvent() {
        const response = await fetch(`${BACKEND_URL}/join/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: user?.id,
                event_id: event.id,
            })
        });

        if(!response.ok)
            return Alert.alert('Error');

        const json = await response.json();

        updateUser(json.data);
    }

    function renderActionButton() {
        let backgroundColor;

        if (props.eventCardType === 'price')
            backgroundColor = globalStyles.maroon;
        else backgroundColor = globalStyles.gold;

        return (
            <Button
                disabled={ userJoinedEvent(user!, event) }
                onPress={ joinEvent }
                style={ {
                    backgroundColor: 'none',
                    borderColor: backgroundColor,
                } }
            >
                <Text
                    style={ {
                        color: globalStyles.white,
                    } }
                >
                    { userJoinedEvent(user!, event) ? 'Joined' : 'Join' }
                </Text>
            </Button>
        );
    }

    return (
        <TouchableOpacity
            onPress={ () => router.navigate('/eventPage') }
            style={ {
                ...styles.container,
                width: props.eventCardType === 'price' ? '95%' : 'auto',
            } }
        >
            <View style={ styles.imageContainer }>
                <Image
                    source={ {
                        uri: props.cover_uri
                            ? props.cover_uri
                            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FiSXn0_Suecx7cveYhokZe2Qx8qGu3Vwmw&s',
                    } }
                    style={ {
                        width: 90,
                        height: 90,
                        borderRadius: 10,
                    } }
                />
            </View>

            <View style={ styles.infoContainer }>
                <Text style={ styles.headerText }>{ props.name }</Text>

                <View style={ styles.joinLocContainer }>
                    <View style={ styles.locationContainer }>
                        <EvilIcons
                            name="location"
                            size={ 16 }
                            color={ globalStyles.gray }
                        />

                        <Text style={ styles.locationText }>
                            { props.location.substring(0, 10) }...
                        </Text>
                    </View>

                    { renderActionButton() }
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: globalStyles.veryDarkGray,
    },
    imageContainer: {},
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: globalStyles.white,
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    locationText: {
        color: globalStyles.gray,
        fontSize: 12,
    },
    joinLocContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
});

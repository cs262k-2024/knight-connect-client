import { useContext, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { router } from 'expo-router';

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { UserContext } from '@/contexts/userContext';

import Input from '@/components/input';
import Button from '@/components/button';

import { BACKEND_URL } from '@/globals/backend';
import globalStyles from '@/globals/globalStyles';

import styles from './styles';

export default function CreateEvent() {
    const { user } = useContext(UserContext);

    const [eventName, updateEventName] = useState('');
    const [eventDescription, updateEventDescription] = useState('');
    const [eventLocation, updateEventLocation] = useState('');

    const [date, updateDate] = useState(new Date());

    function onDateChange(_event: DateTimePickerEvent, selectedDate?: Date) {
        if(!selectedDate) return;

        const currentDate = selectedDate;
        
        updateDate(currentDate);
    }

    if(!user) return <></>;

    async function publish() {
        const response = await fetch(`${BACKEND_URL}/event/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                organizer: user?.id,
                name: eventName,
                start_date: date,
                // TODO
                end_date: date,
                location: eventLocation,
                description: eventDescription,
                // TODO
                tags: [],
                // TODO
                cover_uri: '',
                price: 0.0
            })
        });

        if(!response.ok)
            return Alert.alert('Error');

        router.navigate('/home');
    }

    return (
        <View style={ styles.container }>
            <Text
                style={
                    {
                        color: globalStyles.white,
                        textAlign: 'center',
                        fontSize: 26,
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        fontFamily: 'Playfair'
                    }
                }
            >
                Create Event
            </Text>

            <View style={ styles.labelContainer }>
                <Text style={ styles.label }>Name</Text>

                <Input
                    value={ eventName }
                    onChangeText={ updateEventName }
                    containerStyle={
                        {
                            backgroundColor: 'none',
                            borderColor: globalStyles.darkGray,
                            borderWidth: 1
                        }
                    }
                    inputStyle={
                        {
                            color: globalStyles.white,
                        }
                    }
                    placeholderTextColor={ globalStyles.gray }
                    placeholder="Name"
                />
            </View>

            <View style={ styles.labelContainer }>
                <Text style={ styles.label }>Date</Text>

                <DateTimePicker
                    testID="dateTimePicker"
                    value={ date }
                    mode="datetime"
                    onChange={ onDateChange }
                    style={
                        {
                            alignSelf: 'flex-start',
                        }
                    }
                />
            </View>

            <View style={ styles.labelContainer }>
                <Text style={ styles.label }>Location</Text>

                <Input
                    value={ eventLocation }
                    onChangeText={ updateEventLocation }
                    containerStyle={
                        {
                            backgroundColor: 'none',
                            borderColor: globalStyles.darkGray,
                            borderWidth: 1
                        }
                    }
                    inputStyle={
                        {
                            color: globalStyles.white,
                        }
                    }
                    placeholderTextColor={ globalStyles.gray }
                    placeholder="Location"
                />
            </View>

            <View style={ styles.labelContainer }>
                <Text style={ styles.label }>Description</Text>

                <Input
                    value={ eventDescription }
                    onChangeText={ updateEventDescription }
                    containerStyle={
                        {
                            backgroundColor: 'none',
                            borderColor: globalStyles.darkGray,
                            borderWidth: 1
                        }
                    }
                    inputStyle={
                        {
                            color: globalStyles.white,
                        }
                    }
                    placeholderTextColor={ globalStyles.gray }
                    placeholder="Description"
                />
            </View>

            <Button
                onPress={ publish }
                style={
                    {
                        backgroundColor: 'none',
                        borderColor: globalStyles.darkMaroon
                    }
                }
            >
                <Text style={ { textAlign: 'center', color: globalStyles.white } }>Publish</Text>
            </Button>
        </View>
    );
}

/**
 * @fileoverview This file contains the CreateEvent component which allows users to create and publish events.
 * The component includes form fields for event name, date, location, description, and tags.
 * It also handles form submission and communicates with the backend to save the event details.
 */

import { useContext, useState } from 'react';
import { TouchableOpacity, View, Text, Alert, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { UserContext } from '@/contexts/userContext';

import Input from '@/components/input';
import Button from '@/components/button';
import Loading from '@/components/loading';

import { BACKEND_URL } from '@/globals/backend';
import { CATEGORIES } from '@/globals/constants';
import globalStyles from '@/globals/globalStyles';

import styles from './styles';

/**
 * CreateEvent component allows users to create and publish events.
 * It includes form fields for event name, date, location, description, and tags.
 * It also handles form submission and communicates with the backend to save the event details.
 * 
 * @returns {JSX.Element} The CreateEvent component.
 */
export default function CreateEvent() {
    const { user } = useContext(UserContext);

    const [isLoading, updateLoading] = useState(false);

    const [eventName, updateEventName] = useState('');
    const [eventDescription, updateEventDescription] = useState('');
    const [eventLocation, updateEventLocation] = useState('');

    const [tags, updateTags] = useState<string[]>([]);

    const [date, updateDate] = useState<Date | null>(null);
    const [time, updateTime] = useState<Date | null>(null);

    const [isShowDate, updateShowingDate] = useState(false);
    const [isShowTime, updateShowingTime] = useState(false);

    /**
     * Handles the date change event from the DateTimePicker.
     * 
     * @param {DateTimePickerEvent} _event - The event object from the DateTimePicker.
     * @param {Date} [selectedDate] - The selected date from the DateTimePicker.
     */
    function onDateChange(_event: DateTimePickerEvent, selectedDate?: Date) {
        if(!selectedDate) return;

        const currentDate = selectedDate;
        
        updateShowingDate(false);
        updateDate(currentDate);
    }

    /**
     * Handles the time change event from the DateTimePicker.
     * 
     * @param {DateTimePickerEvent} _event - The event object from the DateTimePicker.
     * @param {Date} [selectedDate] - The selected date from the DateTimePicker.
     */
    function onTimeChange(_event: DateTimePickerEvent, selectedDate?: Date) {
        if(!selectedDate) return;

        const currentDate = selectedDate;
        
        updateShowingTime(false);
        updateTime(currentDate);
    }

    if(!user) return <></>;

    /**
     * Publishes the event by sending a POST request to the backend.
     * It includes the event details such as organizer, name, start date, end date, location, description, tags, cover URI, and price.
     * If the request is successful, it navigates to the home page and reloads the events.
     * If the request fails, it shows an error alert.
     */
    async function publish() {
        updateLoading(true);

        const fullDate = date!;
        fullDate.setHours(time!.getHours());
        fullDate.setMinutes(time!.getMinutes());

        const response = await fetch(`${BACKEND_URL}/event/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                organizer: user?.id,
                name: eventName,
                start_date: fullDate,
                // TODO
                end_date: fullDate,
                location: eventLocation,
                description: eventDescription,
                // TODO
                tags: tags,
                // TODO
                cover_uri: '',
                price: ''
            })
        });

        if(!response.ok) {
            updateLoading(false);
            
            return Alert.alert('Error');
        }

        router.navigate('/home?reload=true');
    }

    if(isLoading) return <Loading />;

    return (
        <ScrollView style={ styles.container } contentContainerStyle={ { gap: 20 } }>
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

                {
                    isShowDate && (
                        <DateTimePicker
                            value={ date ? date : new Date() }
                            mode="date"
                            onChange={ onDateChange }
                            style={
                                {   
                                    alignSelf: 'flex-start',
                                }
                            }
                        />
                    )
                }

                {
                    isShowTime && (
                        <DateTimePicker
                            value={ time ? time : new Date() }
                            mode="time"
                            onChange={ onTimeChange }
                            style={
                                {   
                                    alignSelf: 'flex-start',
                                }
                            }
                        />
                    )
                }

                <View
                    style={ { gap: 20, width: '50%' } }
                >
                    {
                        !date ? (
                            <Button
                                onPress={ () => updateShowingDate(true) }
                            >
                                <Text style={ { color: globalStyles.white } }>Pick date</Text>
                            </Button>
                        ) : (
                            <Pressable onPress={ () => updateShowingDate(true) }>
                                <Text style={ { color: globalStyles.white } }>{ date.getMonth() }/{ date.getFullYear() }/{ date.getDate() }</Text>
                            </Pressable>
                        )
                    }

                    {
                        !time ? (
                            <Button
                                onPress={ () => updateShowingTime(true) }
                            >
                                <Text style={ { color: globalStyles.white } }>Pick time</Text>
                            </Button>
                        ) : (
                            <Pressable onPress={ () => updateShowingTime(true) }>
                                <Text style={ { color: globalStyles.white } }>
                                    { time.getHours() > 12 ? time.getHours() - 12 : time.getHours() }:{ time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes() }
                                    { time.getHours() > 12 ? ' PM' : ' AM' }
                                </Text>
                            </Pressable>
                        )
                    }
                </View>
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

            <SafeAreaView style={ styles.listContainer }>
                <Text style={ styles.label }>Tags</Text>

                <View
                    style={ {
                        flexDirection: 'row',
                        gap: 5,
                        flexWrap: 'wrap',
                    } }
                >
                    {
                        CATEGORIES.map(
                            (item, i) => (
                                <TouchableOpacity
                                    key={ i }
                                    onPress={ () => {
                                        if(tags.includes(item))
                                            updateTags(tags.filter((tag) => tag !== item));
                                        else
                                            updateTags([ ...tags, item ]);
                                    } }
                                    style={
                                        tags.includes(item)
                                            ? styles.itemSelectedContainer
                                            : styles.itemContainer
                                    }
                                >
                                    <Text
                                        style={
                                            tags.includes(item)
                                                ? styles.itemSelectedText
                                                : styles.itemText
                                        }
                                    >
                                        { item }
                                    </Text>
                                </TouchableOpacity>
                            )
                        )
                    }
                </View>
            </SafeAreaView>

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
        </ScrollView>
    );
}

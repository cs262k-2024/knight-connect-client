import { useContext, useState } from 'react';
import { TouchableOpacity, View, Text, Alert, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { UserContext } from '@/contexts/userContext';

import Input from '@/components/input';
import Button from '@/components/button';

import { BACKEND_URL } from '@/globals/backend';
import { CATEGORIES } from '@/globals/constants';
import globalStyles from '@/globals/globalStyles';

import styles from './styles';

function SelectTagsHeader() {
    return (
        <View style={ styles.container }>
            <View>
                <Text style={ styles.headerText }>Your Interests</Text>
            </View>

            <View>
                <Text style={ styles.credentials }>
                    Select your interests and get personalized campus event
                    recommendations
                </Text>
            </View>
        </View>
    );
}

function SelectTagsFooter({
    submit,
}: {
    submit: () => void;
}) {
    return (
        <View style={ styles.continueButtonContainer }>
            <Button style={ styles.continueButton } onPress={ submit }>
                <Text style={ styles.buttonText }>Continue</Text>
            </Button>
        </View>
    );
}

export default function CreateEvent() {
    const { user } = useContext(UserContext);

    const [isLoading, updateLoading] = useState(false);

    const [eventName, updateEventName] = useState('');
    const [eventDescription, updateEventDescription] = useState('');
    const [eventLocation, updateEventLocation] = useState('');

    const [tags, updateTags] = useState<string[]>([]);

    const [date, updateDate] = useState(new Date());

    function onDateChange(_event: DateTimePickerEvent, selectedDate?: Date) {
        if(!selectedDate) return;

        const currentDate = selectedDate;
        
        updateDate(currentDate);
    }

    if(!user) return <></>;

    async function publish() {
        updateLoading(true);

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
                tags: tags,
                // TODO
                cover_uri: '',
                price: ''
            })
        });

        if(!response.ok)
            return Alert.alert('Error');

        router.navigate('/home?reload=true');
    }

    if(isLoading) return <Text style={ { color: globalStyles.white } }>Loading...</Text>;

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

            <SafeAreaView style={ styles.listContainer }>
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

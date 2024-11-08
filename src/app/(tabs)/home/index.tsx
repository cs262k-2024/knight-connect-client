import { useState } from 'react';
import { ScrollView, View, Text, Image, Pressable, Modal } from 'react-native';

import { router } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import Input from '@/components/input';
import Button from '@/components/button';
import Logo from '@/components/texts/logo';
import Calendar from '@/components/calendar';

import EventRecommendation from '@/components/eventRecommendation';
import Event from '@/components/event';

import globalStyles from '@/globals/globalStyles';
import { CATEGORIES, EVENTS } from '@/globals/constants';

import styles from './styles';

export default function Home() {
    const [fitler, updateFilter] = useState('');
    const [isCalendarVisible, toggleCalendar] = useState(false);

    return (
        <ScrollView contentContainerStyle={ styles.container }>
            <View style={ styles.headerContainer }>
                <Logo fontSize={ 20 } />

                <Pressable
                    onPress={
                        () => router.navigate('/profile')
                    }
                >
                    <Image
                        source={ {
                            uri: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
                        } }
                        width={ 50 }
                        height={ 50 }
                        borderRadius={ 100 }
                    />
                </Pressable>
            </View>

            <Button
                onPress={ () => toggleCalendar(true) }
                style={ {
                    backgroundColor: 'none',
                    width: '100%',
                    padding: 10,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    borderColor: globalStyles.darkGray,
                } }
            >
                <Text style={ { color: globalStyles.gray } }>
                    Open Calendar View
                </Text>
            </Button>

            <View
                style={ {
                    gap: 20,
                } }
            >
                <View style={ styles.filtersContainer }>
                    <Input
                        placeholder="Search"
                        frontIcon={ (
                            <EvilIcons
                                name="search"
                                size={ 24 }
                                color={ globalStyles.gray }
                            />
                          ) }
                        containerStyle={ {
                            backgroundColor: globalStyles.veryDarkGray,
                            width: '100%',
                        } }
                        onChangeText={ (e) => updateFilter(e) }
                    />

                    <ScrollView
                        horizontal={ true }
                        contentContainerStyle={ {
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 10,
                        } }
                    >
                        { CATEGORIES.map((c, i) => (
                            <Button
                                key={ i }
                                onPress={
                                    () =>
                                        updateFilter(
                                            c.split(' ')[1].replaceAll(' ', ''),
                                        ) // get rid of emojis
                                }
                            >
                                <Text
                                    style={ {
                                        color: globalStyles.white,
                                    } }
                                >
                                    { c }
                                </Text>
                            </Button>
                        )) }
                    </ScrollView>
                </View>

                <View style={ styles.recommendationsContentContainer }>
                    { fitler.replaceAll(' ', '').length > 0 ? (
                        <>
                            { (function filterEvents() {
                                const filteredEvents = EVENTS.filter(
                                    (e) =>
                                        e.name
                                            .toLowerCase()
                                            .includes(fitler.toLowerCase()) ||
                                        e.location
                                            .toLowerCase()
                                            .includes(fitler.toLowerCase()) ||
                                        e.description
                                            .toLowerCase()
                                            .includes(fitler.toLowerCase()) ||
                                        e.type
                                            .toLowerCase()
                                            .includes(fitler.toLowerCase()),
                                ).map((e, i) => <Event key={ i } { ...e } />);

                                if (filteredEvents.length === 0)
                                    return (
                                        <Text
                                            style={ {
                                                color: globalStyles.white,
                                                fontSize: 16,
                                                textAlign: 'center',
                                            } }
                                        >
                                            No events found...
                                        </Text>
                                    );

                                return filteredEvents;
                            })() }
                        </>
                    ) : (
                        <>
                            <EventRecommendation
                                title="Upcoming Events"
                                horizontalScroll={ true }
                            />
                            
                            <EventRecommendation
                                title="Recommended for You"
                                eventCardType="price"
                                horizontalScroll={ false }
                            />
                        </>
                    ) }
                </View>

                <Modal
                    visible={ isCalendarVisible }
                    onRequestClose={ () => toggleCalendar(false) }
                    animationType="slide"
                    transparent={ true }
                >
                    <Calendar events={ EVENTS } />
                    { /* a close button */ }
                    
                    <Button
                        onPress={ () => toggleCalendar(false) }
                        style={ {
                            backgroundColor: globalStyles.veryDarkGray,
                            width: '100%',
                            padding: 10,
                            borderRadius: 10,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        } }
                    >
                        <Text style={ { color: globalStyles.white, textAlign: 'center' } }>
                            Close
                        </Text>
                    </Button>
                </Modal>
            </View>
        </ScrollView>
    );
}

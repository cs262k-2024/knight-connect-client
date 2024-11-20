import { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Pressable, Modal, Alert } from 'react-native';

import { router, useLocalSearchParams } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

import Input from '@/components/input';
import Button from '@/components/button';
import Logo from '@/components/texts/logo';
import Calendar from '@/components/calendar';

import EventRecommendation from '@/components/eventRecommendation';
import Event from '@/components/event';

import { BACKEND_URL } from '@/globals/backend';
import globalStyles from '@/globals/globalStyles';
import { CATEGORIES } from '@/globals/constants';

import styles from './styles';

export default function Home() {
    const params = useLocalSearchParams();

    const [filter, updateFilter] = useState('');
    const [isCalendarVisible, toggleCalendar] = useState(false);

    const [events, updateEvents] = useState<CalvinEvent[]>([]);
    const [page, _updatePage] = useState(0);

    useEffect(() => {
        (async function () {
            const response = await fetch(`${BACKEND_URL}/event/${page}/`);

            if(!response.ok)
                return Alert.alert('Error');

            const json = await response.json();

            updateEvents(json.data);
        })();
    }, [params.reload]);

    if(isCalendarVisible)
        return (
            <Modal
                style={
                    {
                        height: '100%',
                        width: '100%'
                    }
                }
                onRequestClose={ () => toggleCalendar(false) }
                animationType="slide"
                transparent={ true }
            >
                <View style={ { marginTop: 30 } } />

                <View
                    style={
                        {
                            height: '70%',
                        }
                    }
                >
                    <Calendar events={ events } />
                </View>


                <Button
                    onPress={ () => toggleCalendar(false) }
                    style={ {
                        backgroundColor: globalStyles.veryDarkGray,
                        width: '70%',
                        padding: 10,
                        borderRadius: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginBottom: 60,
                    } }
                >
                    <Text style={ { color: globalStyles.white, textAlign: 'center' } }>
                        Close
                    </Text>
                </Button>
            </Modal>
        );
    
    return (
        <>
            <ScrollView contentContainerStyle={ styles.container }>
                <View>
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
                                            () => {
                                                // get rid of emojis
                                                const strippedCategory = c.split(' ')[1].replaceAll(' ', '');

                                                if(filter === c.split(' ')[1].replaceAll(' ', ''))
                                                    return updateFilter('');

                                                updateFilter(strippedCategory);
                                            }
                                        }
                                        style={
                                            {
                                                backgroundColor: filter === c.split(' ')[1].replaceAll(' ', '') ? globalStyles.lightBlue : 'none',
                                                borderColor: filter === c.split(' ')[1].replaceAll(' ', '') ? 'none' : globalStyles.darkGray,
                                            }
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
                            { filter.replaceAll(' ', '').length > 0 ? (
                                <>
                                    { (function filterEvents() {
                                        const filteredEvents = events.filter(
                                            (e) =>
                                                e.name
                                                    .toLowerCase()
                                                    .includes(filter.toLowerCase()) ||
                                                e.location
                                                    .toLowerCase()
                                                    .includes(filter.toLowerCase()) ||
                                                e.description
                                                    ?.toLowerCase()
                                                    ?.includes(filter.toLowerCase()) ||
                                                e.tags.filter(t => t.toLowerCase().includes(filter.toLowerCase())).length > 0
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
                                        events={ events }
                                    />
                                    
                                    <EventRecommendation
                                        title="Recommended for You"
                                        eventCardType="price"
                                        horizontalScroll={ false }
                                        events={ events }
                                    />
                                </>
                            ) }
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View
                style={
                    {
                        position: 'absolute',
                        zIndex: 100,
                        bottom: 5,
                        padding: 10
                    }
                }
            >
                <Button
                    onPress={ () => toggleCalendar(true) }
                    style={ {
                        backgroundColor: globalStyles.maroon,
                        borderRadius: 100,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        borderColor: globalStyles.darkMaroon,
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 6,
                        paddingBottom: 6,
                        alignItems: 'center'
                    } }
                >
                    <AntDesign name="calendar" size={ 30 } color={ globalStyles.white } />
                </Button>
            </View>
        </>
    );
}

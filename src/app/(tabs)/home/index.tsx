import { useState, useEffect } from 'react';
import { ScrollView, View, Text, Modal, Alert } from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

import Input from '@/components/input';
import Button from '@/components/button';
import Logo from '@/components/texts/logo';
import Calendar from '@/components/calendar';
import Loading from '@/components/loading';

import EventRecommendation from '@/components/eventRecommendation';
import Event from '@/components/event';

import { BACKEND_URL } from '@/globals/backend';
import globalStyles from '@/globals/globalStyles';
import { CATEGORIES } from '@/globals/constants';

import styles from './styles';

export default function Home() {
    const params = useLocalSearchParams();

    const [isLoading, updateLoading] = useState(false);

    const [filter, updateFilter] = useState('');
    const [isCalendarVisible, toggleCalendar] = useState(false);

    const [isHelpVisible, toggleHelp] = useState(false);

    const [events, updateEvents] = useState<CalvinEvent[]>([]);
    const [page, _updatePage] = useState(0);

    useEffect(() => {
        (async function () {
            updateLoading(true);
            const response = await fetch(`${BACKEND_URL}/event/${page}/`);

            if(!response.ok)
                return Alert.alert('Error');

            const json = await response.json();

            updateEvents(json.data);
            updateLoading(false);
        })();
    }, [params.reload]);

    if(isLoading) return <Loading />;

    return (
        <>
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
                visible={ isCalendarVisible }
            >
                <View style={ { marginTop: 30 } } />
                
                <View style={ { height: '100%' } }>
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
                        marginBottom: 15,
                        position: 'absolute',
                        zIndex: 100,
                        bottom: 0
                    } }
                >
                    <Text style={ { color: globalStyles.white, textAlign: 'center' } }>
                        Close
                    </Text>
                </Button>
            </Modal>

            <Modal
                style={
                    {
                        height: '100%',
                        width: '100%',
                        backgroundColor: globalStyles.white
                    }
                }
                onRequestClose={ () => toggleHelp(false) }
                animationType="slide"
                visible={ isHelpVisible }
            >
                <ScrollView
                    style={
                        {
                            padding: 20,
                            height: '100%',
                            backgroundColor: globalStyles.veryDarkGray
                        }
                    }
                >
                    <View style={ { marginTop: 30 } } />
        
                    <View style={ { gap: 30 } }>
                        <View style={ { gap: 20 } }>
                            <Text style={ styles.helpTextTitle }>Select Interests</Text>

                            <Text style={ styles.helpText }>
                                A select interest screen should pop up when a user creates a new account. User can choose one or more interests and continue. 

                                To change the interests later on, click on the right most button at the bottom of the screen, then click on the add button right next to "Your Interests." There the user can check and uncheck interests. Then save your changes. 
                            </Text>
                        </View>

                        <View style={ { gap: 20 } }>
                            <Text style={ styles.helpTextTitle }>View Events</Text>

                            <Text style={ styles.helpText }>
                                After the user logs in, the home page should show a list of upcoming events. User can check details of each event by clicking on them. 
                            </Text>
                        </View>

                        <View style={ { gap: 20 } }>
                            <Text style={ styles.helpTextTitle }>Search and Filter</Text>

                            <Text style={ styles.helpText }>
                                There is a search bar on the top of the home screen. Click on the search bar to search events. 

                                On the home screen, there are filter buttons below the search bar. User can click on the buttons to show only one category. 

                                You can use the search bar and the filter together to filter the search results. 
                            </Text>
                        </View>

                        <View style={ { gap: 20 } }>
                            <Text style={ styles.helpTextTitle }>Join Events</Text>

                            <Text style={ styles.helpText }>
                                User can join events by clicking on the join button of the events. By joining an event, the user also receives a notification before an event. The event should also be created in the user's system calendar.
                            </Text>
                        </View>

                        <View style={ { gap: 20 } }>
                            <Text style={ styles.helpTextTitle }>Create Events</Text>

                            <Text style={ styles.helpText }>
                                Click on the second button from the left at the bottom of the screen, and you will go to the create event screen. On this screen, type in the information of the event you want to create. Then click on the publish button to complete the process. 
                            </Text>
                        </View>
                    </View>
        
                    <View style={ { marginTop: 30 } } />

                    <Button
                        onPress={ () => toggleHelp(false) }
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
                </ScrollView>
            </Modal>

            <ScrollView contentContainerStyle={ styles.container }>
                <View>
                    <View style={ styles.headerContainer }>
                        <Logo fontSize={ 20 } />
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
                                            () => updateFilter(filter === c ? '' : c)
                                        }
                                        style={
                                            {
                                                backgroundColor: filter === c ? globalStyles.lightBlue : 'transparent',
                                                borderColor: filter === c ? 'transparent' : globalStyles.darkGray,
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
                        padding: 10,
                        gap: 20
                    }
                }
            >
                <Button
                    onPress={ () => toggleHelp(true) }
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
                    <Ionicons name="help" size={ 30 } color={ globalStyles.white } />
                </Button>

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

/**
 * Home component that displays the main home screen of the application.
 * It includes event recommendations, notifications, and various modals for help and calendar.
 * 
 * @file /home/alex/Documents/Projects/calvin/k/knight-connect-client/src/app/(tabs)/home/index.tsx
 */

import { useState, useEffect, useContext } from 'react';
import { Pressable, ScrollView, View, Text, Modal, Alert } from 'react-native';

import { useLocalSearchParams, router } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import Input from '@/components/input';
import Button from '@/components/button';
import Logo from '@/components/texts/logo';
import Calendar from '@/components/calendar';
import Loading from '@/components/loading';

import EventRecommendation from '@/components/eventRecommendation';
import Event from '@/components/event';

import { UserContext } from '@/contexts/userContext';
import { useLogout } from '@/hooks/logout';

import { BACKEND_URL } from '@/globals/backend';
import globalStyles from '@/globals/globalStyles';
import { CATEGORIES } from '@/globals/constants';

import styles from './styles';

/**
 * Home component that displays the main home screen of the application.
 * It includes event recommendations, notifications, and various modals for help and calendar.
 * 
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
    const params = useLocalSearchParams();

    const { user, updateUser } = useContext(UserContext);
    const logout = useLogout();

    const [isLoading, updateLoading] = useState(false);

    const [filter, updateFilter] = useState('');
    const [isCalendarVisible, toggleCalendar] = useState(false);

    const [isHelpVisible, toggleHelp] = useState(false);

    const [isNotificationsVisible, toggleNotifications] = useState(false);
    const [notifications, updateNotifications] = useState<User[] | null>(null);

    const [events, updateEvents] = useState<CalvinEvent[]>([]);
    const [page, _updatePage] = useState(0);

    /**
     * Sends a request to delete a friend request.
     * 
     * @param {string} friendId - The ID of the friend to delete.
     * @returns {Promise<void>} A promise that resolves when the request is complete.
     */
    async function deleteRequest(friendId: string) {
        updateLoading(true);

        const response = await fetch(`${BACKEND_URL}/rejectfriend/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user!.id,
                friend_id: friendId
            })
        });

        if(!response.ok) {
            updateLoading(false);
            return Alert.alert('Error deleting request');
        }

        const json = await response.json();

        updateUser(json.data);
        openNotifs();

        router.navigate('/home?reload=true');
    }

    /**
     * Fetches and displays notifications for the user.
     * 
     * @returns {Promise<void>} A promise that resolves when the notifications are fetched.
     */
    async function openNotifs() {
        if(!user) return;

        toggleNotifications(true);

        const response = await fetch(`${BACKEND_URL}/friendrequest/${user.id}/`);

        if(!response.ok) {
            toggleNotifications(false);

            return Alert.alert('Error fetching notifications');
        }

        const json = await response.json();

        updateNotifications(json.data);
    }

    useEffect(() => {
        (async function () {
            updateLoading(true);
            const response = await fetch(`${BACKEND_URL}/event/${page}/`);

            if(!response.ok) {
                logout();

                return Alert.alert('Error');
            }

            const json = await response.json();

            updateEvents(json.data);
            updateLoading(false);
        })();
    }, [params.reload]);

    if(isLoading) return <Loading />;

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
        );

    return (
        <>
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

            <Modal
                style={
                    {
                        height: '100%',
                        width: '100%',
                        backgroundColor: globalStyles.white
                    }
                }
                onRequestClose={ () => toggleNotifications(false) }
                animationType="slide"
                visible={ isNotificationsVisible }
            >
                <ScrollView
                    style={
                        {
                            padding: 20,
                            height: '100%',
                            backgroundColor: globalStyles.veryDarkGray
                        }
                    }
                    contentContainerStyle={ { display: 'flex', flexDirection: 'column', gap: 20 } }
                >
                    <View style={ { marginTop: 30 } } />

                    <Text style={ { color: globalStyles.white, fontSize: 24 } }>Notifications</Text>

                    {
                        notifications ? (
                            notifications.map(
                                (n, i) => (
                                    <View key={ i } style={ { gap: 20, flexDirection: 'row', justifyContent: 'space-between' } }>
                                        <View>
                                            <Text style={ styles.helpTextTitle }>{ n.name }</Text>

                                            <Text style={ styles.helpText }>
                                                { n.email }
                                            </Text>
                                        </View>

                                        <View style={ { flexDirection: 'row', gap: 20 } }>
                                            <Pressable
                                                onPress={
                                                    async () => {
                                                        updateLoading(true);

                                                        const response = await fetch(`${BACKEND_URL}/friends/`, {
                                                            method: 'POST',
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            },
                                                            body: JSON.stringify({
                                                                user_id: user!.id,
                                                                friend_id: n.id
                                                            })
                                                        });

                                                        if(!response.ok) {
                                                            updateLoading(false);
                                                            return Alert.alert('Error accepting request');
                                                        }

                                                        const json = await response.json();
                                                        
                                                        deleteRequest(n.id);
                                                    }
                                                }
                                            >
                                                <AntDesign name="check" size={ 24 } color={ globalStyles.gray } />
                                            </Pressable>

                                            <Pressable
                                                onPress={ () => deleteRequest(n.id) }
                                            >
                                                <AntDesign name="close" size={ 24 } color={ globalStyles.gray } />
                                            </Pressable>
                                        </View>
                                    </View>
                                )
                            )
                        ) : <Loading />
                    }

                    {
                        (notifications && notifications.length === 0) && (
                            <Text style={ { color: globalStyles.white, fontSize: 16, textAlign: 'center' } }>
                                No notifications...
                            </Text>
                        )
                    }

                    <Button
                        onPress={ () => toggleNotifications(false) }
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

                        <Pressable
                            onPress={
                                () => openNotifs()
                            }
                        >
                            <Feather name="bell" size={ 24 } color={ globalStyles.gray } />
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

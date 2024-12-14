import { useContext, useEffect, useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    SafeAreaView,
    Alert,
    Pressable
} from 'react-native';

import { useLocalSearchParams, router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Divider, Icon } from '@rneui/base';

import ParallaxScrollView from '@/components/parallaxScrollView';
import Button from '@/components/button';
import Loading from '@/components/loading';

import { UserContext } from '@/contexts/userContext';

import { joinEvent, userJoinedEvent } from '@/helpers/user';

import { BACKEND_URL } from '@/globals/backend';
import globalStyles from '@/globals/globalStyles';

import styles from './styles';

export default function EventPage() {
    const params = useLocalSearchParams();

    const { user, updateUser } = useContext(UserContext);

    const [event, updateEvent] = useState<CalvinEvent | null>(null);

    const [participants, updateParticipants] = useState<User[]>([]);

    const [isLoading, updateLoading] = useState(true);

    useEffect(() => {
        updateLoading(true);

        (async function() {
            const response = await fetch(`${BACKEND_URL}/getevent/${params.id}/`);

            if(!response.ok) {
                router.back();
                return Alert.alert('Error');
            }

            const json = await response.json();

            updateEvent(json.data);

            const participantResponse = await fetch(`${BACKEND_URL}/participants/${json.data.id}/`);
            
            if(!participantResponse.ok) {
                router.back();
                return Alert.alert('Error');
            }

            const participantsJson = await participantResponse.json();

            updateParticipants(participantsJson.data);
            updateLoading(false);
        })();
    }, []);

    async function addFriend(friendId: string) {
        updateLoading(true);

        const response = await fetch(`${BACKEND_URL}/friendrequest/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: user!.id,
                friend_id: friendId,
            }),
        });

        if(!response.ok) {
            updateLoading(false);
            return Alert.alert('Error');
        }

        const json = await response.json();

        updateParticipants([...participants, json.data]);
        updateUser(json.data);
        updateLoading(false);
    }

    if(isLoading || !event) return <Loading />;

    return (
        <SafeAreaView style={ styles.container }>
            <ParallaxScrollView
                headerBackgroundColor={ { light: '#A1CEDC', dark: '#1D3D47' } }
                headerImage={ (
                    <Image
                        source={ {
                            uri: event.cover_uri,
                        } }
                        style={ { flex: 1 } }
                    />
                ) }
            >
                <ScrollView style={ styles.container }>
                    <View style={ styles.section }>
                        <Text style={ styles.title }>
                            { event.name }
                        </Text>
                    </View>
                    
                    <View style={ styles.section }>
                        <View style={ styles.row }>
                            <View>
                                <Icon
                                    color={ globalStyles.gray }
                                    name="calendar"
                                    type="antdesign"
                                    style={ { paddingRight: 5 } }
                                />
                            </View>

                            <View style={ { gap: 5 } }>
                                <Text style={ styles.text }>
                                    { (new Date(event.start_date)).toLocaleDateString() }
                                </Text>

                                <Text style={ styles.subtext }>
                                    { (new Date(event.start_date)).toLocaleTimeString() } - { (new Date(event.end_date)).toLocaleTimeString() }
                                </Text>
                            </View>
                        </View>

                        <Divider color={ globalStyles.darkGray } />

                        <View style={ [styles.row, { paddingVertical: 10 }] }>
                            <View>
                                <Icon
                                    color={ globalStyles.gray }
                                    name="location-outline"
                                    type="ionicon"
                                    style={ { paddingRight: 5 } }
                                />
                            </View>

                            <View
                                style={ [
                                    { justifyContent: 'center' },
                                    { paddingVertical: 10 },
                                ] }
                            >
                                <Text numberOfLines={ 1 } style={ styles.text }>
                                    { event.location }
                                </Text>
                            </View>
                        </View>

                        <Divider color={ globalStyles.darkGray } />
                    </View>

                    <View style={ styles.section }>
                        <View>
                            <Text style={ styles.sectionTitle }>About</Text>
                        </View>

                        <View>
                            <Text numberOfLines={ 10 } style={ styles.subtext }>
                                { event.description }
                            </Text>
                        </View>
                    </View>

                    <View style={ styles.lastSection }>
                        <View>
                            <Text style={ styles.sectionTitle }>Tags</Text>
                        </View>
                        
                        <View style={ styles.row }>
                            { event.tags.slice(0, 4).map((interest) => {
                                return (
                                    <View
                                        key={ interest }
                                        style={ styles.interestContainer }
                                    >
                                        <Text style={ styles.interestText }>
                                            { interest }
                                        </Text>
                                    </View>
                                );
                            }) }
                        </View>
                    </View>

                    <View style={ styles.lastSection }>
                        <View>
                            <Text style={ styles.sectionTitle }>People Attending</Text>
                        </View>
                        
                        <View style={ styles.row }>
                            { participants.filter(p => p.id !== user!.id).map((p, i) => {
                                return (
                                    <Pressable
                                        onPress={
                                            () => {
                                                Alert.alert(`Friend ${ p.name }`, `Do you want to friend ${ p.name }?`, [
                                                    {
                                                      text: 'No',
                                                      onPress: () => {},
                                                      style: 'cancel',
                                                    },
                                                    {text: 'Yes', onPress: () => addFriend(p.id)},
                                                ]);
                                            }
                                        }
                                        key={ i }
                                    >
                                        <View
                                            style={
                                                {
                                                    borderColor: user?.friends.includes(p.id) ? globalStyles.lightBlue : globalStyles.darkGray,
                                                    borderWidth: 2,
                                                    borderRadius: 50,
                                                    margin: 5,
                                                    paddingLeft: 5,
                                                    alignSelf: 'center',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                }
                                            }
                                        >
                                            <AntDesign name="user" size={ 16 } color={ globalStyles.gray } />

                                            <Text style={ styles.interestText }>
                                                { p.name }
                                            </Text>
                                        </View>
                                    </Pressable>
                                );
                            }) }

                            {
                                participants.length === 0 && (
                                    <Text style={ styles.interestText }>
                                        No one has joined yet
                                    </Text>
                                )
                            }
                        </View>
                    </View>

                    <View style={ { marginBottom: 100 } } />
                </ScrollView>
            </ParallaxScrollView>

            <View style={ styles.stickyfooter }>
                <View>
                    <Text style={ styles.buttonText }>{ event.price }</Text>
                </View>

                <Button
                    disabled={ userJoinedEvent(user!, event) }
                    onPress={
                        () => {
                            joinEvent(user!, event);
                            router.back();
                        }
                    }
                >
                    <Text style={ styles.buttonText }>Join</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
}

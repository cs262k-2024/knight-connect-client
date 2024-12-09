import { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    Alert
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';
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

    const { user } = useContext(UserContext);

    const [event, updateEvent] = useState<CalvinEvent | null>(null);
    const [isLoading, updateLoading] = useState(true);

    useEffect(() => {
        (async function() {
            updateLoading(true);
            const response = await fetch(`${BACKEND_URL}/getevent/${params.id}/`);

            if(!response.ok)
                return Alert.alert('Error');

            const json = await response.json();

            updateEvent(json.data);
            updateLoading(false);
        })();
    }, []);

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
                <View style={ styles.container }>
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
                </View>
            </ParallaxScrollView>

            <View style={ styles.stickyfooter }>
                <View>
                    <Text style={ styles.buttonText }>{ event.price }</Text>
                </View>

                <Button
                    disabled={ userJoinedEvent(user!, event) }
                    onPress={
                        () => joinEvent(user!, event)
                    }
                >
                    <Text style={ styles.buttonText }>Join</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
}

import { useContext, useEffect, useState } from 'react';

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Avatar, Divider, Icon } from '@rneui/themed';

import * as Haptics from 'expo-haptics';

import { UserContext } from '@/contexts/userContext';

import globalStyles from '@/globals/globalStyles';

import styles from './styles';
import { router } from 'expo-router';

export default function UserProfile() {
    const { user } = useContext(UserContext);

    if(!user) return;

    const [numInterests, setNumInterests] = useState(user.interests.length > 3 ? 3 : user.interests.length);

    useEffect(() => {
        if(!user) return;

        setNumInterests(user.interests.length > 3 ? 3 : user.interests.length);
    }, [user]);

    return (
        <ScrollView style={ styles.container }>
            <View style={ styles.userInfoSection }>
                <View style={ { paddingHorizontal: 20 } }>
                    <Avatar
                        size={ 64 }
                        rounded
                        source={ {
                            uri: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
                        } }
                    />
                </View>

                <View>
                    <Text style={ styles.title }>{ user.username }</Text>

                    <View style={ [styles.avatarContainer, styles.center] }>
                        <Icon
                            name="location"
                            size={ 14 }
                            type="octicon"
                            color={ globalStyles.gray }
                        />

                        <Text style={ styles.caption }>Calvin University</Text>
                    </View>
                </View>
            </View>

            <View style={ styles.userStatsSection }>
                <View style={ [{ flexDirection: 'column' }, styles.center] }>
                    <Text style={ styles.caption }>Friends</Text>
                    <Text style={ styles.title }>24.5k</Text>
                </View>
                
                <Divider orientation="vertical" />
                
                <View style={ [{ flexDirection: 'column' }, styles.center] }>
                    <Text style={ styles.caption }>Interests</Text>
                    <Text style={ styles.title }>{ user.interests.length }</Text>
                </View>

                <Divider orientation="vertical" />
                
                <View style={ [{ flexDirection: 'column' }, styles.center] }>
                    <Text style={ styles.caption }>Events</Text>
                    <Text style={ styles.title }>5</Text>
                </View>
            </View>

            <View style={ styles.section }>
                <Text style={ styles.sectionTitle }>About Me</Text>
                
                <Text style={ { fontSize: 16, color: globalStyles.gray } }>
                    Hi this is a sample bio. New to Calvin. Looking for
                    connections.
                </Text>
            </View>

            <View style={ styles.section }>
                <View style={ styles.selectInterestsHeader }>
                    <Text style={ styles.sectionTitle }>Your Interests ({ user.interests.length })</Text>

                    <TouchableOpacity
                        style={ [
                            styles.interestContainer,
                            {
                                backgroundColor: globalStyles.lightBlue,
                                borderColor: globalStyles.lightBlue,
                            },
                        ] }
                        onPress={ 
                            () => {
                                Haptics.impactAsync(
                                    Haptics.ImpactFeedbackStyle.Soft,
                                );

                                router.navigate('/selectInterests?edit=true');
                            } 
                        }
                    >
                        <Text
                            style={ [
                                styles.interestText,
                                { color: globalStyles.white },
                            ] }
                        >
                            Add +
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={ styles.row }>
                    { user.interests.slice(0, numInterests + 1).map(interest => {
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

                    {
                        user.interests.length > 4 && (
                            <TouchableOpacity
                                    style={ [
                                        styles.interestContainer,
                                        {
                                            backgroundColor: globalStyles.lightBlue,
                                            borderColor: globalStyles.lightBlue,
                                        },
                                    ] }
                                    onPress={ 
                                        () => {
                                            Haptics.impactAsync(
                                                Haptics.ImpactFeedbackStyle.Soft,
                                            );

                                            if(numInterests < user.interests.length) setNumInterests(user.interests.length);
                                            else setNumInterests(3);
                                        } 
                                    }
                                >
                                    <Text
                                        style={ [
                                            styles.interestText,
                                            { color: globalStyles.white },
                                        ] }
                                    >
                                        {
                                            numInterests < user.interests.length
                                                ? 'See all...'
                                                : 'Show Less'
                                        }
                                    </Text>
                                </TouchableOpacity>
                        )
                    }

                </View>
            </View>

            <View style={ styles.section }>
                <Text style={ styles.sectionTitle }>Your Saved Events (5)</Text>
            </View>
        </ScrollView>
    );
}

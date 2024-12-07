import { useContext, useEffect, useState, useRef, useCallback } from 'react';

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Avatar, Divider, Icon } from '@rneui/themed';

import * as Haptics from 'expo-haptics';

import { UserContext } from '@/contexts/userContext';

import globalStyles from '@/globals/globalStyles';

import styles from './styles';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import InterestsBottomSheetModal from '@/components/selectInterestsBottomSheet';

export default function UserProfile() {
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const handlePresentModalPress = useCallback(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        bottomSheetRef.current?.present();
    }, []);
    const { user } = useContext(UserContext);

    if (!user) return;

    const [numInterests, setNumInterests] = useState(
        user.preferences.length > 3 ? 3 : user.preferences.length,
    );

    useEffect(() => {
        if (!user) return;

        setNumInterests(user.preferences.length > 3 ? 3 : user.preferences.length);
    }, [user]);

    return (
        <ScrollView style={ styles.container }>
            <InterestsBottomSheetModal ref={ bottomSheetRef } />
            
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
                    <Text style={ styles.title }>{ user.name }</Text>

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
                    <Text style={ styles.title }>{ user.preferences.length }</Text>
                </View>

                <Divider orientation="vertical" />

                <View style={ [{ flexDirection: 'column' }, styles.center] }>
                    <Text style={ styles.caption }>Saved Events</Text>
                    <Text style={ styles.title }>{ user.joined_events.length }</Text>
                </View>
            </View>

            <View style={ styles.section }>
                <Text style={ styles.sectionTitle }>About Me</Text>

                <Text style={ { fontSize: 16, color: globalStyles.gray } }>
                    { user.bio }
                </Text>
            </View>

            <View style={ styles.section }>
                <View style={ styles.selectInterestsHeader }>
                    <Text style={ styles.sectionTitle }>
                        Your Interests ({ user.preferences.length })
                    </Text>

                    <TouchableOpacity
                        style={ [
                            styles.interestContainer,
                            {
                                backgroundColor: globalStyles.lightBlue,
                                borderColor: globalStyles.lightBlue,
                            },
                        ] }
                        onPress={ handlePresentModalPress }
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
                    { user.preferences
                        .slice(0, numInterests + 1)
                        .map((interest) => {
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

                    { user.preferences.length > 4 && (
                        <TouchableOpacity
                            style={ [
                                styles.interestContainer,
                                {
                                    backgroundColor: globalStyles.darkGray,
                                    borderColor: globalStyles.gray,
                                },
                            ] }
                            onPress={ () => {
                                Haptics.impactAsync(
                                    Haptics.ImpactFeedbackStyle.Soft,
                                );

                                if (numInterests < user.preferences.length)
                                    setNumInterests(user.preferences.length);
                                else setNumInterests(3);
                            } }
                        >
                            <Text
                                style={ [
                                    styles.interestText,
                                    { color: globalStyles.white },
                                ] }
                            >
                                { numInterests < user.preferences.length
                                    ? 'See all...'
                                    : 'Show Less' }
                            </Text>
                        </TouchableOpacity>
                    ) }
                </View>
            </View>
        </ScrollView>
    );
}

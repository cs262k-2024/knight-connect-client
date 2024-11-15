import { useCallback, useContext, useRef, useState } from 'react';

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Avatar, Divider, Icon } from '@rneui/themed';
import * as Haptics from 'expo-haptics';

import Input from '@/components/input';
import Button from '@/components/button';

import { UserContext } from '@/contexts/userContext';

import globalStyles from '@/globals/globalStyles';

import { router } from 'expo-router';
import styles from './styles';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import InterestsBottomSheetModal from '@/components/selectInterestsBottomSheet';

export default function UserProfile() {
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const handlePresentModalPress = useCallback(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        bottomSheetRef.current?.present();
    }, []);

    const { user, updateUser } = useContext(UserContext);

    if (!user) return;

    const [username, updateUsername] = useState(user.username);
    const [bio, updateBio] = useState(user.bio);

    function save() {
        if (!user) return;

        updateUser({
            ...user,
            ...(username && { username }),
            ...(bio && { bio }),
        });

        router.navigate('/profile');
    }

    const containerInputStyle = {
        backgroundColor: 'none',
        borderColor: globalStyles.darkGray,
        borderWidth: 1,
    };

    const inputStyle = {
        color: globalStyles.white,
    };

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

                <View
                    style={ {
                        width: '60%',
                        flex: 1,
                        flexDirection: 'column',
                        gap: 10,
                        alignItems: 'flex-start',
                    } }
                >
                    <Input
                        containerStyle={ containerInputStyle }
                        inputStyle={ inputStyle }
                        placeholder={ username }
                        value={ username }
                        onChangeText={ updateUsername }
                    />

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

                <Input
                    containerStyle={ containerInputStyle }
                    inputStyle={ inputStyle }
                    placeholder={ bio }
                    value={ bio }
                    onChangeText={ updateBio }
                />
            </View>

            <View style={ styles.section }>
                <View style={ styles.selectInterestsHeader }>
                    <Text style={ styles.sectionTitle }>
                        Your Interests ({ user.interests.length })
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
                        // onPress={() => {
                        //     Haptics.impactAsync(
                        //         Haptics.ImpactFeedbackStyle.Soft,
                        //     );

                        //     save();
                        //     router.navigate('/selectInterests?edit=true');
                        // }}
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
                    { user.interests.map((interest) => {
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

            <View style={ styles.section }>
                <Button
                    onPress={ save }
                    style={ { backgroundColor: globalStyles.lightBlue } }
                >
                    <Text
                        style={ {
                            color: globalStyles.white,
                            textAlign: 'center',
                        } }
                    >
                        Save
                    </Text>
                </Button>
            </View>
        </ScrollView>
    );
}

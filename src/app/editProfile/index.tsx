/**
 * @fileoverview This file contains the EditProfile component which allows users to edit their profile information such as username, bio, and interests.
 * It uses various React Native components and hooks to manage state and handle user interactions.
 */

import { useCallback, useContext, useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    Alert,
} from 'react-native';
import { router } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Avatar, Input, Icon } from '@rneui/themed';
import InterestsBottomSheetModal from '@/components/selectInterestsBottomSheet';
import Loading from '@/components/loading';
import { UserContext } from '@/contexts/userContext';
import globalStyles from '@/globals/globalStyles';
import { BACKEND_URL } from '@/globals/backend';
import styles from './styles';

/**
 * EditProfile component allows users to edit their profile information.
 * It includes fields for username, bio, and interests.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function EditProfile() {
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    /**
     * Handles the presentation of the bottom sheet modal for selecting interests.
     * Uses haptic feedback to enhance user experience.
     */
    const handlePresentBottomSheet = useCallback(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        bottomSheetRef.current?.present();
    }, []);

    const { user, updateUser } = useContext(UserContext);

    if (!user) return;

    const [username, updateUsername] = useState(user.name);
    const [bio, updateBio] = useState(user.bio);
    const [isLoading, updateLoading] = useState(false);

    /**
     * Saves the updated user profile information to the backend.
     * Displays a loading indicator while the request is being processed.
     * If the request fails, an alert is shown to the user.
     * 
     * @async
     * @function
     */
    async function save() {
        if (!user) return;

        updateLoading(true);
        const response = await fetch(`${BACKEND_URL}/edituser/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: user.id,
                ...(username && { name: username }),
                ...(bio && { bio }),
            }),
        });

        if (!response.ok) {
            updateLoading(false);
            
            return Alert.alert('Error');
        }

        const json = await response.json();
        updateUser(json.data);

        router.back();
    }

    if(isLoading) return <Loading />;

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={ true }
            style={ styles.container }
        >
            <SafeAreaView style={ styles.container }>
                <View style={ styles.topButtonsContainer }>
                    <View>
                        <TouchableOpacity
                            onPress={ () => {
                                router.back();
                            } }
                        >
                            <Icon
                                name="x"
                                type="feather"
                                color={ globalStyles.white }
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={ () => {
                                Haptics.impactAsync(
                                    Haptics.ImpactFeedbackStyle.Soft,
                                );
                                save();
                            } }
                        >
                            <Text style={ styles.saveText }>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    contentContainerStyle={ { flexGrow: 1 } }
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={ styles.avatarContainer }>
                        <Avatar
                            size={ 88 }
                            rounded
                            source={ {
                                uri: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
                            } }
                        />
                    </View>

                    <View>
                        <View style={ styles.center }>
                            <Text style={ styles.caption }>Username</Text>

                            <Input
                                cursorColor={ globalStyles.gray }
                                placeholder="Username"
                                textAlign="center"
                                placeholderTextColor={ globalStyles.darkGray }
                                value={ username }
                                onChangeText={ updateUsername }
                                inputContainerStyle={ styles.inputContainer }
                                inputStyle={ styles.input }
                            />
                        </View>

                        <View style={ styles.center }>
                            <Text style={ styles.caption }>About</Text>

                            <Input
                                multiline={ true }
                                placeholder="Enter a bio"
                                placeholderTextColor={ globalStyles.darkGray }
                                value={ bio }
                                onChangeText={ updateBio }
                                inputContainerStyle={ styles.inputContainer }
                                inputStyle={ styles.input }
                            />
                        </View>
                    </View>

                    <InterestsBottomSheetModal ref={ bottomSheetRef } />

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
                                onPress={ handlePresentBottomSheet }
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
                            { user.preferences.map((interest) => {
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
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

import { useCallback, useContext, useRef, useState } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';

import { Avatar, Input, Icon } from '@rneui/themed';
import * as Haptics from 'expo-haptics';

import { UserContext } from '@/contexts/userContext';

import globalStyles from '@/globals/globalStyles';
import styles from './styles';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import InterestsBottomSheetModal from '@/components/selectInterestsBottomSheet';
import { router } from 'expo-router';

export default function EditProfilel() {
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const handlePresentBottomSheet = useCallback(() => {
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

        router.back();
    }

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
                                textAlign="center"
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
                                onPress={ handlePresentBottomSheet }
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
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

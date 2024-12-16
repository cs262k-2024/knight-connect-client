/**
 * @file SelectInterests component allows users to select their interests and store their preferences.
 * It provides personalized campus event recommendations based on selected interests.
 */

import { useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as Haptics from 'expo-haptics';
import { router, useLocalSearchParams } from 'expo-router';

import Button from '@/components/button';
import Loading from '@/components/loading';

import { UserContext } from '@/contexts/userContext';

import { BACKEND_URL } from '@/globals/backend';
import { CATEGORIES } from '@/globals/constants';

import styles from './styles';

/**
 * Renders the header for the SelectInterests component.
 * @returns {JSX.Element} The header component.
 */
function SelectInterestsHeader(): JSX.Element {
    return (
        <View style={ styles.container }>
            <View>
                <Text style={ styles.headerText }>Your Interests</Text>
            </View>

            <View>
                <Text style={ styles.credentials }>
                    Select your interests and get personalized campus event
                    recommendations
                </Text>
            </View>
        </View>
    );
}

/**
 * Renders the footer for the SelectInterests component.
 * @param {Object} props - The component props.
 * @param {() => void} props.storePreferences - Function to store user preferences.
 * @returns {JSX.Element} The footer component.
 */
function SelectInterestsFooter({
    storePreferences,
}: {
    storePreferences: () => void;
}): JSX.Element {
    return (
        <View style={ styles.continueButtonContainer }>
            <Button style={ styles.continueButton } onPress={ storePreferences }>
                <Text style={ styles.buttonText }>Continue</Text>
            </Button>
        </View>
    );
}

/**
 * Main component for selecting user interests.
 * @returns {JSX.Element} The SelectInterests component.
 */
export default function SelectInterests(): JSX.Element {
    const local = useLocalSearchParams<{ email: string; edit: string }>();
    const { user, updateUser } = useContext(UserContext);
    
    const isEdit = local.edit === 'true';
    
    if(!user && isEdit) return (<></>);

    const [userInterests, setUserInterests] = useState<string[]>(isEdit ? user?.preferences! : []);
    const [isLoading, updateLoading] = useState(false);

    /**
     * Adds or removes selected items to/from userInterests.
     * @param {string} item - The selected item.
     * @returns {string[]} The updated list of user interests.
     */
    function itemSelect(item: string): string[] {
        if (userInterests.includes(item)) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
            setUserInterests((prevItems) =>
                prevItems.filter((categoryItem) => categoryItem !== item),
            );
        }
        else {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
            setUserInterests((prevItems) => [...prevItems, item]);
        }

        return userInterests;
    }

    /**
     * Stores the list of user interests and navigates to the appropriate page.
     * If editing, updates the user preferences. Otherwise, creates a new user.
     * @returns {Promise<void>} A promise that resolves when the preferences are stored.
     */
    async function storePreferences(): Promise<void> {
        if(isEdit && user) {
            // TODO: Update with backend functionality

            updateUser({
                ...user,
                preferences: userInterests,
            });

            router.navigate('/profile');
        }
        else {
            updateLoading(true);
            // Create user
            const response = await fetch(`${BACKEND_URL}/user/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: user!.name,
                    email: user!.email,
                    password: user!.password,
                    bio: user!.bio,
                    preferences: userInterests
                })
            });

            if(!response.ok)
                return Alert.alert('');
            
            const json = await response.json();

            updateUser(json.data);

            router.navigate('/home');
        }
    }

    if(isLoading) return <Loading />;

    return (
        <View style={ styles.darkMode }>
            <SafeAreaView style={ styles.listContainer }>
                <FlatList
                    contentContainerStyle={ {
                        alignItems: 'center',
                        gap: 20,
                    } }
                    numColumns={ 2 }
                    data={ CATEGORIES }
                    renderItem={ ({ item }) => (
                        <TouchableOpacity
                            onPress={ () => {
                                itemSelect(item);
                            } }
                            style={
                                userInterests.includes(item)
                                    ? styles.itemSelectedContainer
                                    : styles.itemContainer
                            }
                        >
                            <Text
                                style={
                                    userInterests.includes(item)
                                        ? styles.itemSelectedText
                                        : styles.itemText
                                }
                            >
                                { item }
                            </Text>
                        </TouchableOpacity>
                    ) }
                    keyExtractor={ (item) => item }
                    ListHeaderComponent={ SelectInterestsHeader }
                    ListFooterComponent={ (
                        <SelectInterestsFooter
                            storePreferences={ storePreferences }
                        />
                    ) }
                />
            </SafeAreaView>
        </View>
    );
}

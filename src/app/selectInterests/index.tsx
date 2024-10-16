import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';

import Button from '@/components/button';

import { CATEGORIES } from '@/globals/constants';
import styles from './styles';

export default function selectInterests() {
    const [userInterests, setUserInterests] = useState<string[]>([]);

    // adds selected items to userInterests. Removes item if already in the list
    const itemSelect = (item: string) => {
        if (userInterests.includes(item)) {
            setUserInterests((prevItems) =>
                prevItems.filter((categoryItem) => categoryItem !== item),
            );
        }
 else {
            setUserInterests((prevItems) => [...prevItems, item]);
        }
        return userInterests;
    };

    // stores the list of user interests and proceeds to the home page
    const storePreferences = () => {
        if (userInterests.length === 0) {
            Alert.alert('Choose at least one category');
        }
 else {
            router.navigate('/home');
        }
        console.log(userInterests);
    };
    return (
        <View style={ styles.darkmode }>
            <SafeAreaView>
                <View style={ styles.container }>
                    <View>
                        <Text style={ styles.headerText }>Your Interests</Text>
                    </View>
                    <View>
                        <Text style={ styles.credentials }>
                            Select your interests and get personalized campus
                            event recommendations
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
            <View style={ styles.listContainer }>
                <FlatList
                    contentContainerStyle={ {
                        alignItems: 'center',
                        gap: 20,
                        // backgroundColor: globalStyles.darkGray,
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
                            <Text style={ styles.itemText }>{ item }</Text>
                        </TouchableOpacity>
                    ) }
                    keyExtractor={ (item) => item }
                ></FlatList>
            </View>
            <View style={ styles.continueButtonContainer }>
                <Button
                    style={ styles.continueButton }
                    onPress={ storePreferences }
                >
                    <Text style={ styles.buttonText }>Continue</Text>
                </Button>
            </View>
        </View>
    );
}

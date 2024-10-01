import { useRef } from 'react';
import { ScrollView, TextInput, View, Text } from 'react-native';

import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import Input from '@/components/input';
import Button from '@/components/button';
import EventRecommendationContainer from '@/components/eventRecommendation';

import globalStyles from '@/globals/globalStyles';
import { CATEGORIES } from '@/globals/constants';

import styles from './styles';

export default function Home() {
    const searchRef = useRef<TextInput>();

    return (
        <ScrollView
            style={ styles.container }
            contentContainerStyle={
                {
                    alignItems: 'center',
                    gap: 20,
                    width: '100%'
                }
            }
        >
            <View style={ styles.filtersContainer }>
                <Input
                    placeholder="Search"
                    frontIcon={
                        <EvilIcons
                            name="search"
                            size={ 24 }
                            color={ globalStyles.darkGray }
                        />
                    }
                    backIcon={
                        <Ionicons
                        name="options"
                        size={ 24 }
                        color={ globalStyles.black }
                        />
                    }
                />

                <ScrollView
                    horizontal={ true }
                    contentContainerStyle={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 10
                        }
                    }
                >
                    {
                        CATEGORIES.map(
                            (c, i) => (
                                <Button
                                    key={ i }
                                    onPress={ () => {} }
                                >
                                    <Text style={ styles.filterButtonText }>{ c }</Text>
                                </Button>
                            )
                        )
                    }
                </ScrollView>
            </View>

            <View style={ styles.recommendationsContentContainer }>
                <EventRecommendationContainer title="Upcoming Events" />
                <EventRecommendationContainer title="Recommended for You" />
            </View>
        </ScrollView>
    );
}
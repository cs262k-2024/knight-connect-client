import { ScrollView, View, Text } from 'react-native';
import { router } from 'expo-router';

import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import Input from '@/components/input';
import Button from '@/components/button';
import EventRecommendation from '@/components/eventRecommendation';

import globalStyles from '@/globals/globalStyles';
import { CATEGORIES } from '@/globals/constants';

import styles from './styles';

export default function Home() {
    return (
        <ScrollView
            style={ styles.container }
            contentContainerStyle={
                {
                    alignItems: 'center',
                    gap: 20
                }
            }
            stickyHeaderIndices={ [0] }
        >
            <View style={ styles.headerContainer }>
                <Text
                    style={
                        {
                            fontWeight: 'bold',
                            letterSpacing: 1,
                        }
                    }
                >
                    KnightConnect
                </Text>

                <Button
                    onPress={ () => router.navigate('/login') }
                    backgroundColor={ globalStyles.lightBlue }
                >
                    <Text
                        style={
                            {
                                color: globalStyles.white
                            }
                        }
                    >
                        Login
                    </Text>
                </Button>
            </View>

            <View style={ styles.filtersContainer }>
                <Input
                    placeholder="Search"
                    frontIcon={ (
                        <EvilIcons
                            name="search"
                            size={ 24 }
                            color={ globalStyles.darkGray }
                        />
                      ) }
                    backIcon={ (
                        <Ionicons
                        name="options"
                        size={ 24 }
                        color={ globalStyles.black }
                        />
                      ) }
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
                <EventRecommendation title="Upcoming Events" horizontalScroll={ true } />
                <EventRecommendation title="Recommended for You" eventCardType="price" horizontalScroll={ false } />
            </View>
        </ScrollView>
    );
}

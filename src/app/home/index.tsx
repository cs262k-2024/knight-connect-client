import { ScrollView, View, Text, Image } from 'react-native';
import { router } from 'expo-router';

import EvilIcons from '@expo/vector-icons/EvilIcons';

import Input from '@/components/input';
import Button from '@/components/button';
import EventRecommendation from '@/components/eventRecommendation';
import Logo from '@/components/texts/logo';

import globalStyles from '@/globals/globalStyles';
import { CATEGORIES } from '@/globals/constants';

import styles from './styles';

export default function Home() {
    return (
        <ScrollView
            contentContainerStyle={ styles.container }
        >
            <View style={ styles.headerContainer }>
                <Logo fontSize={ 20 } />

                <Image
                    source={
                        {
                            uri:
                                'https://cdn.vectorstock.com/i/1000v/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg'
                        }
                    }
                    width={ 50 }
                    height={ 50 }
                    borderRadius={ 100 }
                />
            </View>

            <View
                style={
                    {
                        gap: 20
                    }
                }
            >
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
                        containerStyle={
                            {
                                backgroundColor: globalStyles.veryDarkGray
                            }
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

                {/* <View style={ styles.recommendationsContentContainer }>
                    <EventRecommendation title="Upcoming Events" horizontalScroll={ true } />
                    <EventRecommendation title="Recommended for You" eventCardType="price" horizontalScroll={ false } />
                </View> */}
            </View>
        </ScrollView>
    );
}

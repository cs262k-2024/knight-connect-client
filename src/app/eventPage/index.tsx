import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import React from 'react';

import styles from './styles';
import globalStyles from '@/globals/globalStyles';

import ParallaxScrollView from '@/components/parallaxScrollView';

import { Divider, Icon } from '@rneui/base';
import { CATEGORIES } from '@/globals/constants';

export default function EventPage() {
    return (
        <SafeAreaView style={ styles.container }>
            <ParallaxScrollView
                headerBackgroundColor={ { light: '#A1CEDC', dark: '#1D3D47' } }
                headerImage={ (
                    <Image
                        source={ {
                            uri: 'https://calvin.edu/sites/default/files/styles/wide/public/2024-10/Donna%20Spaan%20Exhibition%20Event%20Calendar-45.png?itok=H1lOaM_a',
                        } }
                        style={ { flex: 1 } }
                    />
                  ) }
            >
                <View style={ styles.container }>
                    <View style={ styles.section }>
                        <Text style={ styles.title }>
                            Light: Donna Spaan Contemporary Art Collection
                        </Text>
                    </View>
                    <View style={ styles.section }>
                        <View style={ styles.row }>
                            <View>
                                <Icon
                                    color={ globalStyles.gray }
                                    name="calendar"
                                    type="antdesign"
                                    style={ { paddingRight: 5 } }
                                />
                            </View>
                            <View style={ { gap: 5 } }>
                                <Text style={ styles.text }>
                                    Friday, November 15, 2024
                                </Text>
                                <Text style={ styles.subtext }>
                                    7:00 PM - 7:45 PM EST
                                </Text>
                            </View>
                        </View>
                        <Divider color={ globalStyles.darkGray } />
                        <View style={ [styles.row, { paddingVertical: 10 }] }>
                            <View>
                                <Icon
                                    color={ globalStyles.gray }
                                    name="location-outline"
                                    type="ionicon"
                                    style={ { paddingRight: 5 } }
                                />
                            </View>
                            <View
                                style={ [
                                    { justifyContent: 'center' },
                                    { paddingVertical: 10 },
                                ] }
                            >
                                <Text numberOfLines={ 1 } style={ styles.text }>
                                    Center Art Gallery in the Covenant Fine Arts
                                    Center
                                </Text>
                            </View>
                        </View>
                        <Divider color={ globalStyles.darkGray } />
                    </View>
                    <View style={ styles.section }>
                        <View>
                            <Text style={ styles.sectionTitle }>About</Text>
                        </View>
                        <View>
                            <Text numberOfLines={ 10 } style={ styles.subtext }>
                                What is light? Where does it comes from? What
                                can it reveal? The works in the Donna Spaan
                                Contemporary Art Collection are varied in their
                                approach, aesthetic, medium, and conceptual,
                                light-driven underpinnings. Yet together, they
                                weave a journey of discovery. Exhibition runs
                                September 3 - November 29, 2024. Come visit this
                                illuminating collection for FREE, no ticket
                                required!
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.lastSection }>
                        <View>
                            <Text style={ styles.sectionTitle }>Tags</Text>
                        </View>
                        <View style={ styles.row }>
                            { CATEGORIES.slice(0, 4).map((interest) => {
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
                </View>
            </ParallaxScrollView>
            <View style={ styles.stickyfooter }>
                <View>
                    <Text style={ styles.buttonText }>Price</Text>
                </View>
                <TouchableOpacity>
                    <View style={ styles.stickyFooterButton }>
                        <Text style={ styles.buttonText }>Going</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

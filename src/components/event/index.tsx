import { Text, View, StyleSheet, Image } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import Button from '../button';

import globalStyles from '@/globals/globalStyles';

type EventProps = CalvinEvent & {
    eventCardType?: string;
};

export default function Event(props: EventProps) {
    function renderActionButton() {
        let backgroundColor;

        if(props.eventCardType === 'price')
            backgroundColor = '#C7B0F173';
        else
            backgroundColor = globalStyles.lightBlue;

        return (
            <Button
                onPress={ () => {} }
                style={
                    {
                        backgroundColor: backgroundColor,
                        borderColor: backgroundColor,
                    }
                }
            >
                <Text
                    style={
                        {
                            color: globalStyles.white
                        }
                    }
                >
                    Join
                </Text>
            </Button>
        );
    }

    return (
        <View
            style={
                {
                    ...styles.container,
                    width: props.eventCardType === 'price' ? '95%' : 'auto'
                }
            }
        >
            <View style={ styles.imageContainer }>
                <Image
                    source={
                        {
                            uri: (
                                props.coverImage
                                    ? props.coverImage
                                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FiSXn0_Suecx7cveYhokZe2Qx8qGu3Vwmw&s'
                            )
                        }
                    }
                    style={
                        {
                            width: 90,
                            height: 90,
                            borderRadius: 10
                        }
                    }
                />
            </View>

            <View style={ styles.infoContainer }>
                <Text style={ styles.headerText }>{ props.name }</Text>

                <View style={ styles.joinLocContainer }>
                    <View style={ styles.locationContainer }>
                        <EvilIcons name="location" size={ 16 } color={ globalStyles.gray } />

                        <Text style={ styles.locationText }>{ props.location.substring(0, 10) }...</Text>
                    </View>

                    { renderActionButton() }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: globalStyles.darkGray
    },
    imageContainer: {},
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: globalStyles.white
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    locationText: {
        color: globalStyles.gray,
        fontSize: 12
    },
    joinLocContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    }
});

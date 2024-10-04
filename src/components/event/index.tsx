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

        if (props.eventCardType === 'price') backgroundColor = '#C7B0F173';
        else backgroundColor = globalStyles.lightBlue;

        return (
            <Button onPress={() => {}} backgroundColor={backgroundColor}>
                <Text
                    style={{
                        color:
                            props.eventCardType === 'price'
                                ? '#2C3E50'
                                : globalStyles.white,
                    }}
                >
                    Join
                </Text>
            </Button>
        );
    }

    return (
        <View
            style={{
                ...styles.container,
                width: props.eventCardType === 'price' ? '95%' : 'auto',
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: props.coverImage
                            ? props.coverImage
                            : 'https://s3-alpha-sig.figma.com/img/70e5/961e/872eb20380cfdf0883dbdfd0f783568d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tb~R-6XLf2S8RRfUramGfN1DozfKDKwBBEMejnum0EaQ9yvKlXgoPlF4WRxl1IyHTB7o2NiyIL2one7cTkHvQziwo1otcl-Hzt6J1D4XhyDzZwq5tImKK~8nGzTtT85ig0Z1jLw3Lhn-9Zs4arwRGE9scp8XYEHwfuqIi2ebj3XHy0S0PeDD5rIwKlLGcu0vjA-lqc2PDf-mU0jl5fD4f67tjBz7POrO3wsBa1GEO-0~RVEYcqVCIoPil4C9yYUjDOnpS~vEOfgz-kImypuqNd8Dq5jWF3jeOqoUzbAdXcSFMxVbhBPAFDZBlRvv0TTLgJ2xcvyyORQh~OB3t4Jdsg__',
                    }}
                    style={{
                        width: 90,
                        height: 90,
                        borderRadius: 10,
                    }}
                />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.headerText}>{props.name}</Text>

                <View style={styles.joinLocContainer}>
                    <View style={styles.locationContainer}>
                        <EvilIcons
                            name="location"
                            size={16}
                            color={globalStyles.darkGray}
                        />

                        <Text style={styles.locationText}>
                            {props.location.substring(0, 10)}...
                        </Text>
                    </View>

                    {renderActionButton()}
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
        shadowColor: globalStyles.black,
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
    imageContainer: {},
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    locationText: {
        color: globalStyles.darkGray,
        fontSize: 12,
    },
    joinLocContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
});

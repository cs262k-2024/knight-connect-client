import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { Avatar, Divider, Icon } from '@rneui/themed';
import globalStyles from '@/globals/globalStyles';
import { CATEGORIES } from '@/globals/constants';
import * as Haptics from 'expo-haptics';

export default function UserProfile() {
    const userInterest = CATEGORIES.slice(0, 7);
    return (
        <ScrollView style={ styles.container }>
            <View style={ styles.userInfoSection }>
                <View style={ { paddingHorizontal: 20 } }>
                    <Avatar
                        size={ 64 }
                        rounded
                        source={ {
                            uri: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
                        } }
                    />
                </View>
                <View>
                    <Text style={ styles.title }>Username</Text>
                    <View style={ [styles.avatarContainer, styles.center] }>
                        <Icon
                            name="location"
                            size={ 14 }
                            type="octicon"
                            color={ globalStyles.gray }
                        />
                        <Text style={ styles.caption }>Calvin University</Text>
                    </View>
                </View>
            </View>
            <View style={ styles.userStatsSection }>
                <View style={ [{ flexDirection: 'column' }, styles.center] }>
                    <Text style={ styles.caption }>Friends</Text>
                    <Text style={ styles.title }>24.5k</Text>
                </View>
                <Divider orientation="vertical" />
                <View style={ [{ flexDirection: 'column' }, styles.center] }>
                    <Text style={ styles.caption }>Interests</Text>
                    <Text style={ styles.title }>7</Text>
                </View>
                <Divider orientation="vertical" />
                <View style={ [{ flexDirection: 'column' }, styles.center] }>
                    <Text style={ styles.caption }>Events</Text>
                    <Text style={ styles.title }>5</Text>
                </View>
            </View>
            <View style={ styles.Section }>
                <Text style={ styles.sectionTitle }>About Me</Text>
                <Text style={ { fontSize: 16, color: globalStyles.gray } }>
                    Hi this is a sample bio. New to Calvin. Looking for
                    connections.
                </Text>
            </View>
            <View style={ styles.Section }>
                <Text style={ styles.sectionTitle }>Your Interests (7)</Text>
                <View style={ styles.row }>
                    { userInterest.map((interest) => {
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
                    <TouchableOpacity
                        style={ [
                            styles.interestContainer,
                            {
                                backgroundColor: globalStyles.lightBlue,
                                borderColor: globalStyles.lightBlue,
                            },
                        ] }
                        onPress={ () => {
                            Haptics.impactAsync(
                                Haptics.ImpactFeedbackStyle.Soft,
                            );
                        } }
                    >
                        <Text
                            style={ [
                                styles.interestText,
                                { color: globalStyles.white },
                            ] }
                        >
                            update +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={ styles.Section }>
                <Text style={ styles.sectionTitle }>Your Saved Events (5)</Text>
            </View>
        </ScrollView>
    );
}
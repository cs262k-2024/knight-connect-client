import { Text, View, StyleSheet, Pressable } from 'react-native';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '@/globals/globalStyles';
import { FontAwesome6 } from '@expo/vector-icons';
import Button from '@/components/button';
export default function WelcomeScreen() {
    return (
        <SafeAreaView style={{ display: 'flex' }}>
            <View style={{ height: '100%' }}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <FontAwesome6
                            name="connectdevelop"
                            size={44}
                            color={globalStyles.lightBlue}
                        />
                        <Text style={styles.heading}>KnightConnect</Text>
                    </View>
                    <View style={styles.featuresContainer}>
                        <View style={styles.feature}>
                            <FontAwesome6
                                name="bookmark"
                                size={34}
                                color={globalStyles.gray}
                            />
                            <View
                                style={{
                                    flexDirection: 'column',
                                    padding: 24,
                                }}
                            >
                                <Text style={styles.subheading}>
                                    Bookmark Any Event
                                </Text>
                                <Text style={styles.paragragh}>
                                    Add events you're interested in and get
                                    notified so you dont miss a beat
                                </Text>
                            </View>
                        </View>
                        <View style={styles.feature}>
                            <FontAwesome6
                                name="people-group"
                                size={34}
                                color={globalStyles.gray}
                            />
                            <View
                                style={{
                                    flexDirection: 'column',
                                    padding: 24,
                                }}
                            >
                                <Text style={styles.subheading}>
                                    Connect With Friends
                                </Text>
                                <Text style={styles.paragragh}>
                                    Add events you're interested in and get
                                    notified so you dont miss a beat
                                </Text>
                            </View>
                        </View>
                        <View style={styles.feature}>
                            <FontAwesome6
                                name="newspaper"
                                size={34}
                                color={globalStyles.gray}
                            />
                            <View
                                style={{
                                    flexDirection: 'column',
                                    padding: 24,
                                }}
                            >
                                <Text style={styles.subheading}>
                                    Create New Event
                                </Text>
                                <Text style={styles.paragragh}>
                                    Add events you're interested in and get
                                    notified so you dont miss a beat
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => {}}
                            backgroundColor={globalStyles.lightBlue}
                        >
                            <Text style={styles.buttonText}>Explore</Text>
                        </Button>
                        <Button onPress={() => {}}>
                            <Text style={styles.buttonText}>Login</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 60,
        paddingHorizontal: 4,
        alignItems: 'center',
        marginVertical: 8,
    },
    headerContainer: {
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
    },
    heading: {
        color: globalStyles.white,
        fontSize: 41,
        fontWeight: 'bold',
    },
    subheading: {
        color: globalStyles.white,
        fontSize: 24,
        fontWeight: 'bold',
    },
    paragragh: {
        color: 'gray',
        fontSize: 14,
    },
    featuresContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 34,
        marginVertical: 24,
    },
    feature: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 24,
        gap: 10,
    },
    buttonText: {
        paddingHorizontal: 94,
        paddingVertical: 10,
        fontSize: 24,
        fontWeight: '500',
    },
});

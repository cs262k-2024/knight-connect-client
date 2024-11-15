import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
    FlatList,
} from 'react-native';
import { forwardRef, useMemo, useState, useCallback, useContext } from 'react';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetView,
    useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { router, useLocalSearchParams } from 'expo-router';
import { UserContext } from '@/contexts/userContext';
import { CATEGORIES } from '@/globals/constants';
import * as Haptics from 'expo-haptics';
import globalStyles from '@/globals/globalStyles';
export type Ref = BottomSheetModal;

const InterestsBottomSheetModal = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ['50%', '75%'], []);
    const { dismiss } = useBottomSheetModal();
    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                { ...props }
                appearsOnIndex={ 0 }
                disappearsOnIndex={ -1 }
            />
        ),
        [],
    );

    const local = useLocalSearchParams<{ email: string; edit: string }>();
    const { user, updateUser } = useContext(UserContext);

    const isEdit = local.edit === 'true';

    if (!user && isEdit) return;

    const [userInterests, setUserInterests] = useState<string[]>(
        isEdit ? user?.interests! : [],
    );

    // adds new items to userInterests. Removes item if already in the list
    const itemSelect = (item: string) => {
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
    };
    // stores new list of user interests and proceeds to the home page
    function storePreferences() {
        if (isEdit && user) {
            updateUser({
                ...user,
                interests: userInterests,
            });

            dismiss();
            router.navigate('/profile');
        }
 else
            updateUser({
                interests: userInterests,
                email: local.email,
                username: 'John Doe',
                bio: 'Hi this is a sample bio. New to Calvin. Looking for connections.',
                events: [],
            });

        if (userInterests.length === 0) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            Alert.alert('Choose at least one category');
        }
 else dismiss();
    }

    return (
        <BottomSheetModal
            backgroundStyle={ styles.darkmode }
            handleIndicatorStyle={ { backgroundColor: globalStyles.gray } }
            ref={ ref }
            index={ 1 }
            snapPoints={ snapPoints }
            enablePanDownToClose={ true }
            backdropComponent={ renderBackdrop }
        >
            <BottomSheetView>
                <BottomSheetView>
                    <BottomSheetView style={ styles.container }>
                        <BottomSheetView>
                            <Text style={ styles.headerText }>
                                Update Interests
                            </Text>
                        </BottomSheetView>
                        <BottomSheetView>
                            <Text style={ styles.credentials }>
                                Update your interests and get personalized
                                campus event recommendations
                            </Text>
                        </BottomSheetView>
                    </BottomSheetView>
                </BottomSheetView>
                <BottomSheetView style={ styles.listContainer }>
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
                    ></FlatList>
                </BottomSheetView>
                <BottomSheetView style={ styles.continueButtonContainer }>
                    <TouchableOpacity
                        style={ styles.continueButton }
                        onPress={ storePreferences }
                    >
                        <Text style={ styles.buttonText }>Update</Text>
                    </TouchableOpacity>
                </BottomSheetView>
            </BottomSheetView>
        </BottomSheetModal>
    );
});

const styles = StyleSheet.create({
    darkmode: {
        backgroundColor: globalStyles.veryDarkGray,
        height: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 10,
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 20,
    },
    headerText: {
        color: globalStyles.white,
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 36,
        textAlign: 'left',
    },
    credentials: {
        color: globalStyles.darkGray,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
    },

    itemContainer: {
        borderColor: globalStyles.darkGray,
        borderWidth: 2,
        borderRadius: 50,
        margin: 3,
    },

    itemText: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        color: globalStyles.gray,
        fontSize: 12,
        fontWeight: 'bold',
    },
    itemSelectedText: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        fontSize: 12,
        fontWeight: 'bold',
        color: globalStyles.lightBlue,
    },
    itemSelectedContainer: {
        backgroundColor: '#62aeff',
        borderWidth: 2,
        borderRadius: 50,
        borderColor: globalStyles.lightBlue,
        margin: 3,
    },

    continueButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    continueButton: {
        borderRadius: 50,
        paddingVertical: 15,
        width: '65%',
        backgroundColor: globalStyles.lightBlue,
    },
    buttonText: {
        color: globalStyles.white,
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
});

export default InterestsBottomSheetModal;

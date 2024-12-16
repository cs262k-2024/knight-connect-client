/**
 * @file styles.ts
 * @description This file contains the styles for the Edit Profile screen of the Knight Connect Client app.
 * It uses React Native's StyleSheet to create a set of styles for various components used in the screen.
 */

import { StyleSheet } from 'react-native';
import globalStyles from '@/globals/globalStyles';

/**
 * @constant {object} styles
 * @description A collection of styles for the Edit Profile screen components.
 * @property {object} center - Styles for centering content.
 * @property {object} container - Styles for the main container.
 * @property {object} section - Styles for sections within the container.
 * @property {object} avatarContainer - Styles for the avatar container.
 * @property {object} sectionTitle - Styles for section titles.
 * @property {object} caption - Styles for captions.
 * @property {object} interestContainer - Styles for the interest container.
 * @property {object} interestText - Styles for the interest text.
 * @property {object} row - Styles for rows of items.
 * @property {object} selectInterestsHeader - Styles for the header of the select interests section.
 * @property {object} topButtonsContainer - Styles for the container of the top buttons.
 * @property {object} saveText - Styles for the save text.
 * @property {object} inputContainer - Styles for the input container.
 * @property {object} input - Styles for the input field.
 */

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: globalStyles.black,
    },
    section: {
        marginVertical: 25,
        paddingHorizontal: 20,
        gap: 10,
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.4,
        color: globalStyles.white,
    },
    caption: {
        fontSize: 16,
        lineHeight: 14,
        letterSpacing: 0.4,
        fontWeight: '500',
        paddingLeft: 5,
        color: globalStyles.gray,
    },
    interestContainer: {
        borderColor: globalStyles.darkGray,
        borderWidth: 2,
        borderRadius: 50,
        margin: 2.5,
        alignSelf: 'center',
    },
    interestText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: globalStyles.gray,
        letterSpacing: 0.4,
        fontSize: 12,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
        marginTop: 10,
    },
    selectInterestsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topButtonsContainer: {
        // position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingBottom: 12,
        paddingHorizontal: 16,
        backgroundColor: globalStyles.black,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    saveText: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.4,
        color: globalStyles.white,
    },
    inputContainer: {
        backgroundColor: globalStyles.veryDarkGray,
        borderRadius: 15,
        height: 60,
        margin: 10,
        padding: 10,
        borderBottomWidth: 0,
    },
    input: {
        color: globalStyles.white,
        fontSize: 16,
    },
});

export default styles;

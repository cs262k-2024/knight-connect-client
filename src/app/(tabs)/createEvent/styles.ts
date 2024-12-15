/**
 * @file styles.ts
 * @description This file contains the styles for the Create Event screen in the Knight Connect client application.
 * It uses React Native's StyleSheet to define various styles for different components used in the screen.
 */

import { StyleSheet } from 'react-native';
import globalStyles from '@/globals/globalStyles';

/**
 * @constant {object} styles
 * @description A StyleSheet object containing styles for various components in the Create Event screen.
 * @property {object} container - Style for the main container.
 * @property {object} labelContainer - Style for the container holding labels.
 * @property {object} label - Style for the labels.
 * @property {object} listContainer - Style for the container holding the list.
 * @property {object} itemContainer - Style for individual item containers.
 * @property {object} itemSelectedContainer - Style for selected item containers.
 * @property {object} itemText - Style for the text of items.
 * @property {object} itemSelectedText - Style for the text of selected items.
 * @property {object} continueButtonContainer - Style for the container holding the continue button.
 * @property {object} continueButton - Style for the continue button.
 * @property {object} buttonText - Style for the text inside buttons.
 * @property {object} headerText - Style for the header text.
 * @property {object} credentials - Style for the credentials text.
 */
const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    labelContainer: {
        gap: 10,
        flex: 1,
        flexDirection: 'column',
    },
    label: {
        color: globalStyles.lightGray,
        fontFamily: 'Fredoka',
        fontSize: 20,
    },
    listContainer: {
        width: '100%',
    },
    itemContainer: {
        borderColor: globalStyles.darkGray,
        borderWidth: 2,
        borderRadius: 50,
        margin: 5,
    },
    itemSelectedContainer: {
        backgroundColor: '#62aeff',
        borderWidth: 2,
        borderRadius: 50,
        borderColor: globalStyles.lightBlue,
        margin: 5,
    },
    itemText: {
        padding: 10,
        color: globalStyles.gray,
    },
    itemSelectedText: {
        padding: 10,
        color: globalStyles.black,
    },
    continueButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: '100%',
    },
    continueButton: {
        borderRadius: 50,
        paddingVertical: 15,
        width: '70%',
        backgroundColor: globalStyles.lightBlue,
    },
    buttonText: {
        color: globalStyles.white,
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
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
});

export default styles;

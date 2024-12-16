/**
 * @file styles.ts
 * @description This file contains the styles for the Select Interests screen in the Knight Connect Client application.
 * 
 * @module styles
 * 
 * @typedef {Object} Styles
 * @property {Object} darkMode - Styles for dark mode background.
 * @property {string} darkMode.backgroundColor - Background color for dark mode.
 * @property {string} darkMode.height - Height of the dark mode container.
 * @property {number} darkMode.paddingBottom - Padding at the bottom of the dark mode container.
 * 
 * @property {Object} container - Styles for the main container.
 * @property {string} container.display - Display property for the container.
 * @property {string} container.flexDirection - Flex direction for the container.
 * @property {number} container.paddingHorizontal - Horizontal padding for the container.
 * @property {number} container.paddingVertical - Vertical padding for the container.
 * @property {number} container.gap - Gap between elements in the container.
 * 
 * @property {Object} listContainer - Styles for the list container.
 * @property {string} listContainer.width - Width of the list container.
 * 
 * @property {Object} headerText - Styles for the header text.
 * @property {string} headerText.color - Color of the header text.
 * @property {string} headerText.fontWeight - Font weight of the header text.
 * @property {number} headerText.fontSize - Font size of the header text.
 * @property {number} headerText.lineHeight - Line height of the header text.
 * @property {string} headerText.textAlign - Text alignment of the header text.
 * 
 * @property {Object} credentials - Styles for the credentials text.
 * @property {string} credentials.color - Color of the credentials text.
 * @property {string} credentials.fontWeight - Font weight of the credentials text.
 * @property {number} credentials.fontSize - Font size of the credentials text.
 * @property {number} credentials.lineHeight - Line height of the credentials text.
 * @property {string} credentials.textAlign - Text alignment of the credentials text.
 * 
 * @property {Object} itemContainer - Styles for the item container.
 * @property {string} itemContainer.borderColor - Border color of the item container.
 * @property {number} itemContainer.borderWidth - Border width of the item container.
 * @property {number} itemContainer.borderRadius - Border radius of the item container.
 * @property {number} itemContainer.margin - Margin around the item container.
 * 
 * @property {Object} itemText - Styles for the item text.
 * @property {number} itemText.padding - Padding around the item text.
 * @property {string} itemText.color - Color of the item text.
 * 
 * @property {Object} itemSelectedText - Styles for the selected item text.
 * @property {number} itemSelectedText.padding - Padding around the selected item text.
 * @property {string} itemSelectedText.color - Color of the selected item text.
 * 
 * @property {Object} itemSelectedContainer - Styles for the selected item container.
 * @property {string} itemSelectedContainer.backgroundColor - Background color of the selected item container.
 * @property {number} itemSelectedContainer.borderWidth - Border width of the selected item container.
 * @property {number} itemSelectedContainer.borderRadius - Border radius of the selected item container.
 * @property {string} itemSelectedContainer.borderColor - Border color of the selected item container.
 * @property {number} itemSelectedContainer.margin - Margin around the selected item container.
 * 
 * @property {Object} continueButtonContainer - Styles for the continue button container.
 * @property {string} continueButtonContainer.display - Display property for the continue button container.
 * @property {string} continueButtonContainer.justifyContent - Justify content property for the continue button container.
 * @property {string} continueButtonContainer.alignItems - Align items property for the continue button container.
 * @property {number} continueButtonContainer.marginTop - Margin top for the continue button container.
 * @property {string} continueButtonContainer.width - Width of the continue button container.
 * 
 * @property {Object} continueButton - Styles for the continue button.
 * @property {number} continueButton.borderRadius - Border radius of the continue button.
 * @property {number} continueButton.paddingVertical - Vertical padding for the continue button.
 * @property {string} continueButton.width - Width of the continue button.
 * @property {string} continueButton.backgroundColor - Background color of the continue button.
 * 
 * @property {Object} buttonText - Styles for the button text.
 * @property {string} buttonText.color - Color of the button text.
 * @property {string} buttonText.fontWeight - Font weight of the button text.
 * @property {number} buttonText.fontSize - Font size of the button text.
 * @property {number} buttonText.lineHeight - Line height of the button text.
 * @property {string} buttonText.textAlign - Text alignment of the button text.
 */

import { StyleSheet } from 'react-native';
import globalStyles from '@/globals/globalStyles';


const styles = StyleSheet.create({
    darkMode: {
        backgroundColor: globalStyles.black,
        height: '100%',
        paddingBottom: 10,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 10,
    },
    listContainer: {
        width: '100%',
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
    itemSelectedContainer: {
        backgroundColor: '#62aeff',
        borderWidth: 2,
        borderRadius: 50,
        borderColor: globalStyles.lightBlue,
        margin: 5,
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
});

export default styles;

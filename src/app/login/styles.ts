/**
 * @file styles.ts
 * @description This file contains the styles for the login screen of the Knight Connect client application.
 * It uses React Native's StyleSheet to define the styles and imports global styles from the globalStyles module.
 */

import { StyleSheet } from 'react-native';

import globalStyles from '@/globals/globalStyles';

/**
 * @constant {object} styles
 * @description An object containing the styles for the login screen components.
 * @property {object} actionButton - Styles for the action button.
 * @property {string} actionButton.backgroundColor - Background color of the action button.
 * @property {number} actionButton.borderWidth - Border width of the action button.
 * @property {string} actionButton.width - Width of the action button.
 * @property {string} actionButton.alignItems - Alignment of items within the action button.
 * @property {object} actionButtonText - Styles for the text inside the action button.
 * @property {string} actionButtonText.color - Color of the text inside the action button.
 * @property {string} actionButtonText.fontFamily - Font family of the text inside the action button.
 * @property {number} actionButtonText.letterSpacing - Letter spacing of the text inside the action button.
 * @property {number} actionButtonText.fontSize - Font size of the text inside the action button.
 */
const styles = StyleSheet.create({
    actionButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        width: '70%',
        alignItems: 'center',
    },
    actionButtonText: {
        color: globalStyles.white,
        fontFamily: 'Fredoka',
        letterSpacing: -0.5,
        fontSize: 16,
    },
});

export default styles;

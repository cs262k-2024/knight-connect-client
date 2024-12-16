/**
 * @file styles.ts
 * @description This file contains the styles for the home tab of the Knight Connect client application.
 * It uses React Native's StyleSheet to create a set of styles for various components in the home tab.
 */

import { StyleSheet } from 'react-native';
import globalStyles from '@/globals/globalStyles';

/**
 * @constant {object} styles
 * @description A StyleSheet object containing styles for the home tab components.
 * @property {object} container - Style for the main container with a gap of 50.
 * @property {object} headerContainer - Style for the header container with flex display, row direction, space-between justification, center alignment, and a bottom margin of 20.
 * @property {object} filtersContainer - Style for the filters container with a gap of 16, flex display, column direction, and center alignment.
 * @property {object} recommendationsContentContainer - Style for the recommendations content container with flex display, column direction, a gap of 20, and full width.
 * @property {object} helpText - Style for the help text with light gray color and 0.8 opacity.
 * @property {object} helpTextTitle - Style for the help text title with white color, font size of 20, bold font weight, and underline text decoration.
 */
const styles = StyleSheet.create({
    container: {
        gap: 50,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    filtersContainer: {
        gap: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    recommendationsContentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: '100%',
    },
    helpText: {
        color: globalStyles.lightGray,
        opacity: 0.8
    },
    helpTextTitle: {
        color: globalStyles.white,
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default styles;

import { StyleSheet } from 'react-native';

import globalStyles from '@/globals/globalStyles';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 32,
        
    },
    headerText: {
        color: globalStyles.white,
        fontSize: 18,
        letterSpacing: 1,
        margin: 16
    },
    italicText: {
        margin: 16,
        color: globalStyles.white,
        fontSize: 18,
        letterSpacing: 1,
        fontStyle: 'italic'
    }
});

export default styles;

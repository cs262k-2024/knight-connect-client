import { StyleSheet } from 'react-native';

import globalStyles from '@/globals/globalStyles';

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
    }
});

export default styles;

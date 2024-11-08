import { StyleSheet } from 'react-native';
import globalStyles from '@/globals/globalStyles';

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
    }
});

export default styles;

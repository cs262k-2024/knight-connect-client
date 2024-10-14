import globalStyles from '@/globals/globalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
    },
    dayItem: {
        marginLeft: 34,
    },
    text: {
        color: globalStyles.white,
        fontSize: 15,
    },
});

export default styles;

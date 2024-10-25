import { StyleSheet } from 'react-native';
import globalStyles from '@/globals/globalStyles';

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: globalStyles.black,
    },
    userInfoSection: {
        paddingHorizontal: 10,
        marginVertical: 25,
        flexDirection: 'row',
    },
    userStatsSection: {
        paddingHorizontal: 20,
        marginVertical: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Section: {
        marginVertical: 25,
        paddingHorizontal: 20,
        gap: 5,
    },
    avatarContainer: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: globalStyles.white,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: globalStyles.white,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
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
        fontSize: 12,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
});

export default styles;

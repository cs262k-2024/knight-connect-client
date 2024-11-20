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

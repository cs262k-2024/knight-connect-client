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
        marginVertical: 15,
        paddingHorizontal: 20,
        gap: 5,
    },
    lastSection: {
        marginTop: 15,
        marginBottom: 45,
        paddingHorizontal: 20,
        gap: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.4,
        color: globalStyles.white,
    },
    sectionTitle: {
        fontSize: 20,
        letterSpacing: 0.4,
        fontWeight: 'bold',
        color: globalStyles.white,
    },
    text: {
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0.4,
        fontWeight: '500',
        paddingLeft: 5,
        flexWrap: 'wrap',
        color: globalStyles.gray,
    },
    subtext: {
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.4,
        fontWeight: '200',
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
        padding: 10,
        color: globalStyles.gray,
        fontSize: 12,
        letterSpacing: 0.4,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    stickyfooter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 24,
        paddingHorizontal: 16,
        paddingTop: 12,
        marginTop: 12,
        backgroundColor: globalStyles.veryDarkGray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderTopColor: globalStyles.darkGray,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.4,
        color: globalStyles.white,
    },
});

export default styles;

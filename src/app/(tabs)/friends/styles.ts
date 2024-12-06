import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    headerTabs: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    headerTab: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#3B82F6',
    },
    headerTabText: {
        color: '#6B7280',
    },
    activeTabText: {
        color: '#3B82F6',
        fontWeight: '600',
    },
    headerActions: {
        flexDirection: 'row',
        gap: 8,
    },
    headerActionButton: {
        padding: 8,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    listContainer: {
        paddingHorizontal: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#22C55E',
        borderWidth: 2,
        borderColor: 'white',
    },
    itemName: {
        fontWeight: '600',
        fontSize: 16,
    },
    itemSubtext: {
        color: '#6B7280',
        fontSize: 14,
    },
    chatButton: {
        padding: 8,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
    modalButton: {
        backgroundColor: '#3B82F6',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
    },
    disabledButton: {
        opacity: 0.5,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: '600',
    },
    selectFriendsText: {
        marginBottom: 8,
        color: '#6B7280',
    },
    friendSelectItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    friendSelectLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    smallAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },

    selectButton: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
    },
    selectedButton: {
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
    },
    unselectedButton: {
        backgroundColor: 'white',
        borderColor: '#D1D5DB',
    },
});
export default styles;

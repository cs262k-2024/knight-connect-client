import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    Modal,
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { Icon } from '@rneui/base';
import { router, useLocalSearchParams } from 'expo-router';
import { BACKEND_URL } from '@/globals/backend';

import styles from './styles';

// Interfaces for type safety
interface Friend {
    id: string;
    name: string;
    avatar: string;
    online: boolean;
    mutualEvents?: number;
}

interface Group {
    id: string;
    name: string;
    members: string[];
    avatar: string;
}

// const FriendsScreen: React.FC = () => {
export default function FriendsScreen() {
    // Sample initial friends data
    const params = useLocalSearchParams();
    const [friends, setFriends] = useState<Friend[]>([
        {
            id: '1',
            name: 'Alex Rodriguez',
            avatar: 'https://via.placeholder.com/50',
            online: true,
            mutualEvents: 3,
        },
        {
            id: '2',
            name: 'Jamie Chen',
            avatar: 'https://via.placeholder.com/50',
            online: false,
            mutualEvents: 2,
        },
        {
            id: '3',
            name: 'Sam Thompson',
            avatar: 'https://via.placeholder.com/50',
            online: true,
            mutualEvents: 5,
        },
    ]);

    // Sample initial groups data
    const [groups, setGroups] = useState<Group[]>([
        {
            id: 'g1',
            name: 'Summer Festival Crew',
            members: ['1', '2', '3'],
            avatar: 'https://via.placeholder.com/50',
        },
    ]);

    // State for different views and modals
    const [activeView, setActiveView] = useState<'friends' | 'groups'>(
        'friends',
    );
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isAddFriendModalOpen, setIsAddFriendModalOpen] = useState(false);
    const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
    const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
    const [newGroupName, setNewGroupName] = useState<string>('');

    // Filter friends based on search term
    const filteredFriends = friends.filter((friend) =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Start a chat with a friend
    const startChat = (friendId: string) => {
        // Navigate to chat screen or open chat with specific friend
        console.log(`Starting chat with friend ${friendId}`);
    };

    // Create a new group
    const createGroup = () => {
        if (newGroupName.trim() && selectedFriends.length > 1) {
            const newGroup: Group = {
                id: `g${groups.length + 1}`,
                name: newGroupName,
                members: selectedFriends,
                avatar: 'https://via.placeholder.com/50',
            };
            setGroups([...groups, newGroup]);
            // Reset modals and selections
            setIsCreateGroupModalOpen(false);
            setSelectedFriends([]);
            setNewGroupName('');
        }
    };

    // Toggle friend selection for group creation
    const toggleFriendSelection = (friendId: string) => {
        setSelectedFriends((prev) =>
            prev.includes(friendId)
                ? prev.filter((id) => id !== friendId)
                : [...prev, friendId],
        );
    };

    // Render friend or group item
    const renderItem = ({ item }: { item: Friend | Group }) => {
        const isFriend = 'online' in item;

        return (
            <TouchableOpacity style={styles.itemContainer}>
                <View style={styles.itemLeft}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: item.avatar }}
                            style={styles.avatar}
                        />
                        {isFriend && (item as Friend).online && (
                            <View style={styles.onlineIndicator} />
                        )}
                    </View>
                    <View>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemSubtext}>
                            {isFriend
                                ? `${(item as Friend).mutualEvents} mutual events`
                                : `${(item as Group).members.length} members`}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.chatButton}
                    onPress={() => startChat(item.id)}
                >
                    <Icon
                        name="message-square"
                        type="feather"
                        color="#3B82F6"
                        size={24}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTabs}>
                    <TouchableOpacity
                        style={[
                            styles.headerTab,
                            activeView === 'friends' && styles.activeTab,
                        ]}
                        onPress={() => setActiveView('friends')}
                    >
                        <Icon
                            name="user-plus"
                            type="feather"
                            color={
                                activeView === 'friends' ? '#3B82F6' : '#6B7280'
                            }
                            size={20}
                        />
                        <Text
                            style={[
                                styles.headerTabText,
                                activeView === 'friends' &&
                                    styles.activeTabText,
                            ]}
                        >
                            Friends
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.headerTab,
                            activeView === 'groups' && styles.activeTab,
                        ]}
                        onPress={() => setActiveView('groups')}
                    >
                        <Icon
                            name="users"
                            type="feather"
                            color={
                                activeView === 'groups' ? '#3B82F6' : '#6B7280'
                            }
                            size={20}
                        />
                        <Text
                            style={[
                                styles.headerTabText,
                                activeView === 'groups' && styles.activeTabText,
                            ]}
                        >
                            Groups
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerActions}>
                    <TouchableOpacity
                        style={styles.headerActionButton}
                        onPress={() => setIsAddFriendModalOpen(true)}
                    >
                        <Icon
                            name="user-plus"
                            type="feather"
                            color="#3B82F6"
                            size={20}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.headerActionButton}
                        onPress={() => setIsCreateGroupModalOpen(true)}
                    >
                        <Icon
                            name="users"
                            type="feather"
                            color="#3B82F6"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Icon
                    name="search"
                    type="feather"
                    color="#9CA3AF"
                    size={20}
                    style={styles.searchIcon}
                />
                <TextInput
                    placeholder={`Search ${activeView === 'friends' ? 'friends' : 'groups'}`}
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    style={styles.searchInput}
                />
            </View>

            {/* List */}
            <FlatList
                data={activeView === 'friends' ? filteredFriends : groups}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />

            {/* Add Friend Modal */}
            <Modal
                visible={isAddFriendModalOpen}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Add Friend</Text>
                            <TouchableOpacity
                                onPress={() => setIsAddFriendModalOpen(false)}
                            >
                                <Icon
                                    name="x"
                                    type="feather"
                                    color="#6B7280"
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            placeholder="Enter username or email"
                            style={styles.modalInput}
                        />
                        <TouchableOpacity style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>
                                Send Friend Request
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Create Group Modal */}
            <Modal
                visible={isCreateGroupModalOpen}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Create Group</Text>
                            <TouchableOpacity
                                onPress={() => setIsCreateGroupModalOpen(false)}
                            >
                                <Icon
                                    name="x"
                                    type="feather"
                                    color="#6B7280"
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            placeholder="Group Name"
                            value={newGroupName}
                            onChangeText={setNewGroupName}
                            style={styles.modalInput}
                        />
                        <Text style={styles.selectFriendsText}>
                            Select Friends
                        </Text>
                        <FlatList
                            data={friends}
                            renderItem={({ item }) => (
                                <View style={styles.friendSelectItem}>
                                    <View style={styles.friendSelectLeft}>
                                        <Image
                                            source={{ uri: item.avatar }}
                                            style={styles.smallAvatar}
                                        />
                                        <Text>{item.name}</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={[
                                            styles.selectButton,
                                            selectedFriends.includes(item.id)
                                                ? styles.selectedButton
                                                : styles.unselectedButton,
                                        ]}
                                        onPress={() =>
                                            toggleFriendSelection(item.id)
                                        }
                                    >
                                        {selectedFriends.includes(item.id) ? (
                                            <Icon
                                                name="check"
                                                type="feather"
                                                color="white"
                                                size={16}
                                            />
                                        ) : (
                                            <Icon
                                                name="x"
                                                type="feather"
                                                color="black"
                                                size={16}
                                            />
                                        )}
                                    </TouchableOpacity>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                        <TouchableOpacity
                            style={[
                                styles.modalButton,
                                selectedFriends.length < 2 &&
                                    styles.disabledButton,
                            ]}
                            onPress={createGroup}
                            disabled={selectedFriends.length < 2}
                        >
                            <Text style={styles.modalButtonText}>
                                Create Group
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

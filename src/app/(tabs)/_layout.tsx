import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

import globalStyles from '@/globals/globalStyles';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={
                {
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: globalStyles.black,
                        borderColor: globalStyles.darkGray,
                    },
                    tabBarActiveTintColor: globalStyles.gold,
                    tabBarInactiveTintColor: globalStyles.gray
                }
            }
        >
            <Tabs.Screen
                name="home"
                options={
                    {
                        title: '',
                        tabBarIcon: ({color}) => (
                            <AntDesign name="home" size={ 24 } color={ color } />
                        )
                    }
                }
            />

            <Tabs.Screen
                name="calendar"
                options={
                    {
                        title: '',
                        tabBarIcon: ({color}) => (
                            <AntDesign name="calendar" size={ 24 } color={ color } />
                        )
                    }
                }
            />
        </Tabs>
    );
}

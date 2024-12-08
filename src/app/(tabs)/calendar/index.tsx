import { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';

import { UserContext } from '@/contexts/userContext';

import Calendar from '@/components/calendar';

import { BACKEND_URL } from '@/globals/backend';
import globalStyles from '@/globals/globalStyles';

export default function UserCalendar() {
    const { user } = useContext(UserContext);

    if(!user) return <></>;

    const [events, updateEvents] = useState<CalvinEvent[]>([]);
    const [isLoading, updateLoading] = useState(false);

    useEffect(() => {
        updateLoading(true);

        (async function() {    
            const response = await fetch(`${BACKEND_URL}/join/${user.id}/`);

            if(!response.ok)
                return;

            const json = await response.json();

            updateEvents(json.data);
            updateLoading(false);
        })();
    }, [user]);

    if(isLoading) return <Text style={ { color: globalStyles.white } }>Loading...</Text>;

    return (
        <Calendar
            events={ events }
            isUser={ true }
        />
    );
}

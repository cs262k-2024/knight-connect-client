import { useContext, useEffect, useState } from 'react';

import { UserContext } from '@/contexts/userContext';

import Calendar from '@/components/calendar';

import { BACKEND_URL } from '@/globals/backend';

export default function UserCalendar() {
    const { user } = useContext(UserContext);

    if(!user) return <></>;

    const [events, updateEvents] = useState<CalvinEvent[]>([]);

    useEffect(() => {
        (async function() {
            const response = await fetch(`${BACKEND_URL}/join/${user.id}/`);

            if(!response.ok)
                return;

            const json = await response.json();

            updateEvents(json.data);
        })();
    }, [user]);

    return (
        <Calendar
            events={ events }
            isUser={ true }
        />
    );
}

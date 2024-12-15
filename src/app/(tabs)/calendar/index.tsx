/**
 * @fileoverview This file contains the UserCalendar component which fetches and displays user-specific calendar events.
 */

import { useContext, useEffect, useState } from 'react';

import { UserContext } from '@/contexts/userContext';

import Calendar from '@/components/calendar';
import Loading from '@/components/loading';

import { BACKEND_URL } from '@/globals/backend';

/**
 * UserCalendar component fetches and displays calendar events for the logged-in user.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function UserCalendar() {
    const { user } = useContext(UserContext);

    if(!user) return <></>;

    const [events, updateEvents] = useState<CalvinEvent[]>([]);
    const [isLoading, updateLoading] = useState(false);

    useEffect(() => {
        updateLoading(true);

        /**
         * Fetches the user's calendar events from the backend.
         *
         * @async
         * @function
         * @returns {Promise<void>} A promise that resolves when the events are fetched and state is updated.
         */
        (async function() {    
            const response = await fetch(`${BACKEND_URL}/join/${user.id}/`);

            if(!response.ok)
                return;

            const json = await response.json();

            updateEvents(json.data);
            updateLoading(false);
        })();
    }, [user]);

    if(isLoading) return <Loading />;

    return (
        <Calendar
            events={ events }
            isUser={ true }
        />
    );
}

import { useContext } from 'react';

import { UserContext } from '@/contexts/userContext';

import Calendar from '@/components/calendar';

export default function UserCalendar() {
    const { user } = useContext(UserContext);

    if(!user) return <></>;

    return (
        <Calendar
            events={ user.events }
            isUser={ true }
        />
    );
}

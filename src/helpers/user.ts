import { BACKEND_URL } from '@/globals/backend';

/*
    See if user has already joined an event

    @param { User object } user: User object
    @param { CalvinEvent object } event: CalvinEvent object

    @returns { boolean }: true if user has joined the event, false otherwise
*/
export function userJoinedEvent(user: User, event: CalvinEvent) {
    return user.joined_events.includes(event.id);
}

/*
    Join an event

    @param { User object } user: User object
    @param { CalvinEvent object } event: CalvinEvent object

    @returns { User object }: Updated user object
*/
export async function joinEvent(user: User, event: CalvinEvent): Promise<User> {
    const response = await fetch(`${BACKEND_URL}/join/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: user?.id,
            event_id: event.id,
        })
    });

    if(!response.ok)
        throw Error();

    const json = await response.json();

    return json.data;
}

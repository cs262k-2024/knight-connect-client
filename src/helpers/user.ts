export function userJoinedEvent(user: User, event: CalvinEvent) {
    return user.joined_events.includes(event.id);
}

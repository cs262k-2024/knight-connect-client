export function userJoinedEvent(user: User, event: CalvinEvent) {
    return (
        user.events.filter((e) => JSON.stringify(e) === JSON.stringify(event))
            .length > 0
    );
}

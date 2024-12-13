// Styles should be imported as modules
declare module '*.css';

declare interface User {
    id: string;
    name: string;
    email: string;
    preferences: string[];
    bio: string;

    password?: string;
    joined_events: string[];

    friends: string[];
    incoming_requests: string[];
}

declare interface CalvinEvent {
    id: string;
    organizer: string;
    name: string;

    date_created: string;
    start_date: string;
    end_date: string;
    
    price: string;

    location: string;
    description?: string;

    cover_uri?: string;
    tags: string[];
}

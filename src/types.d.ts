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
}

declare interface CalvinEvent {
    id: string;
    organizer: string;
    name: string;

    date_created: Date;
    start_date: Date;
    end_date: Date;
    
    price: number;

    location: string;
    description: string;

    cover_uri?: string;
    tags: string[];
}

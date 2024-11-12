// Styles should be imported as modules
declare module '*.css';

declare interface User {
    username: string;
    email: string;
    interests: string[];
    bio: string;
    events: CalvinEvent[];
}

declare interface CalvinEvent {
    id: string;
    name: string;
    date: Date;
    location: string;
    description?: string;
    type: string;
    coverImage?: string;
    price?: number;
}

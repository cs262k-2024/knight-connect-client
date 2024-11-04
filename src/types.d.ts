// Styles should be imported as modules
declare module '*.css';

declare interface User {
    username: string;
    email: string;
    interests: string[];
    bio: string;
}

declare interface CalvinEvent {
    name: string;
    date: Date;
    location: string;
    description: string;
    type: string;
    coverImage?: string;
    price?: number;
}

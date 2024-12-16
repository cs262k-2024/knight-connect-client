/**
 * The main entry point of the application.
 * 
 * This component renders the `Login` component, which is responsible for handling user authentication.
 * 
 * @module App
 * @component
 * @returns {JSX.Element} The rendered `Login` component.
 */
import Login from './login';

export default function App() {
    // The `Login` component is the main entry point of the application.
    return <Login />;
}

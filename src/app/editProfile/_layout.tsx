/**
 * @file _layout.tsx
 * @description This file defines the layout component for the profile editing section of the application.
 * It uses the `Slot` component from `expo-router` to render the appropriate child components.
 */

import { Slot } from 'expo-router';

/**
 * ProfileLayout component
 * 
 * This component serves as the layout for the profile editing section. It renders a `Slot` component
 * which acts as a placeholder for child components to be rendered based on the current route.
 * 
 * @returns {JSX.Element} The rendered Slot component.
 */
export default function ProfileLayout() {
    return <Slot />;
}

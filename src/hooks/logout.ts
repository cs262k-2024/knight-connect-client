import { useContext } from 'react';
import { router } from 'expo-router';

import { UserContext } from '@/contexts/userContext';

/*
    Logout a user

    @returns { void }
*/
export function useLogout() {
    const { updateUser } = useContext(UserContext);

    return function() {
        updateUser(null);
        router.navigate('/login');
    };
}

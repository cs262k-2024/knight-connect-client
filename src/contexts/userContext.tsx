import { createContext, PropsWithChildren, useState } from 'react';

/*
    User Context Object: Store user information through entire session

    user: User | null
    updateUser: (user: User | null) => void
*/
export const UserContext = createContext<{
    user: User | null;
    updateUser: (user: User | null) => void;
        }>({
            user: null,
            updateUser: () => {},
        });

/*
    User Context Wrapper: Provide user context to all children components
*/
export default function UserContextProvider(props: PropsWithChildren) {
    const [user, updateUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={ { user: user, updateUser: updateUser } }>
            { props.children }
        </UserContext.Provider>
    );
}

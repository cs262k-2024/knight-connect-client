import { createContext, PropsWithChildren, useState } from 'react';

export const UserContext = createContext<{
    user: User | null;
    updateUser: (user: User | null) => void;
}>(
    {        
        user: null,
        updateUser: () => {}
    }
);

export default function UserContextProvider(props: PropsWithChildren) {
    const [user, updateUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user: user, updateUser: updateUser }}>
            { props.children }
        </UserContext.Provider>
    );
}

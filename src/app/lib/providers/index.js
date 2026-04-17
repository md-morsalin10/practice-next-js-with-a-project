
import FriendsProvider from '@/components/context/FriendsProvider';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <FriendsProvider>
            {children}
        </FriendsProvider>

    );
};

export default Providers;
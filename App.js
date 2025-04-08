import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { DogProvider } from './contexts/DogContext';
import { CommunityProvider } from './contexts/CommunityContext';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
    return (
        <AuthProvider>
            <DogProvider>
                <CommunityProvider>
                    <AppNavigator />
                </CommunityProvider>
            </DogProvider>
        </AuthProvider>
    );
};

export default App;

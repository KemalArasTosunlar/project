import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../services/auth'; // Assuming auth service is set up

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        // Implement login logic
    };

    const logout = async () => {
        // Implement logout logic
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

/*
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useAuth = () => useContext(UserContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};*/

// UserContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Crear un contexto para almacenar el estado de autenticación
const UserContext = createContext();

// Proveedor de contexto para proporcionar el estado de autenticación a los componentes hijos
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para acceder al estado de autenticación en los componentes
export const useAuth = () => useContext(UserContext);

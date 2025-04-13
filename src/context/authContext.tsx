import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
    isAuthenticated: boolean;
    login: (email: string, password: string) => boolean;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const VALID_USERS = [
    { email: 'cleopatraproject@admin.com', password: 'password' },
    { email: 'admin', password: 'admin' },
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('auth');
        setIsAuthenticated(stored === 'true');
    }, []);

    const login = (email: string, password: string) => {
        const isValid = VALID_USERS.some(
            (user) => user.email === email && user.password === password
        );
        setIsAuthenticated(isValid);
        localStorage.setItem('auth', String(isValid));
        return isValid;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('auth');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;

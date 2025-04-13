import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
    isAuthenticated: boolean;
    user: string | null;
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
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const storedAuth = localStorage.getItem('auth');
        const storedUser = localStorage.getItem('user');
        setIsAuthenticated(storedAuth === 'true');
        setUser(storedUser);
    }, []);

    const login = (email: string, password: string) => {
        const isValid = VALID_USERS.some(
            (user) => user.email === email && user.password === password
        );
        if (isValid) {
            setUser(email);
            localStorage.setItem('user', email);
        }
        setIsAuthenticated(isValid);
        localStorage.setItem('auth', String(isValid));
        return isValid;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;

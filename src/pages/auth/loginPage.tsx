import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "@/context/authContext";

const LoginPage = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const success = login(email, password);
        if (success) {
            navigate('/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-950">
            <form
                onSubmit={handleLogin}
                className="bg-white dark:bg-zinc-900 shadow rounded-lg p-8 w-full max-w-sm space-y-4"
            >
                <h2 className="text-xl font-semibold text-zinc-800 dark:text-white text-center">Login</h2>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-zinc-800 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded hover:opacity-90"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;

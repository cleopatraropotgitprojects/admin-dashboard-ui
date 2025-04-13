import { Sun, Moon } from 'lucide-react';
import {useTheme} from "@/context/themeContext";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    const handleToggle = () => {
        toggleTheme();
    };

    return (
        <header className="flex justify-end items-center px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
            <button
                onClick={handleToggle}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg hover:shadow-purple-700/50 dark:from-yellow-400 dark:to-orange-500 hover:scale-105 active:scale-95"
            >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
};

export default Header;

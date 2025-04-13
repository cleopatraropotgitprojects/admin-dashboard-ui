import {Sun, Moon, Menu} from 'lucide-react';
import {useTheme} from "@/context/themeContext";
import {Sidebar} from "@/components";
import {useState} from "react";
import SidebarMobile from "@/components/sidebar/sidebarMobile";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header className="flex justify-between items-center px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 md:ml-64">
                <button
                    className="md:hidden text-zinc-600 dark:text-zinc-300"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu size={24} />
                </button>

                <button
                    onClick={toggleTheme}
                    className="ml-auto flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg hover:shadow-purple-700/50 dark:from-yellow-400 dark:to-orange-500 hover:scale-105 active:scale-95"
                >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex md:hidden"
                    onClick={() => setSidebarOpen(false)}
                >
                    <div
                        className="w-64 h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <SidebarMobile onClose={() => setSidebarOpen(false)} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;

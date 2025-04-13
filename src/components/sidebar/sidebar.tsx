import {NavLink, useNavigate} from 'react-router-dom';
import {Home, Users, Settings, LogOut} from 'lucide-react';
import {useAuth} from "@/context/authContext";

const Sidebar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <aside className="w-64 h-screen bg-white dark:bg-zinc-900 shadow-lg fixed top-0 left-0 flex flex-col">
            <div className="p-6 text-2xl font-bold text-zinc-800 dark:text-white">
                Admin Panel
            </div>
            <nav className="flex-1 px-4 py-2 space-y-2">
                <NavLink
                    to="/dashboard"
                    className={({isActive}) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                            isActive
                                ? 'bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white'
                                : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`
                    }
                >
                    <Home size={18}/>
                    Dashboard
                </NavLink>

                <NavLink
                    to="/users"
                    className={({isActive}) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                            isActive
                                ? 'bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white'
                                : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`
                    }
                >
                    <Users size={18}/>
                    Users
                </NavLink>

                <NavLink
                    to="/settings"
                    className={({isActive}) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                            isActive
                                ? 'bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white'
                                : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`
                    }
                >
                    <Settings size={18}/>
                    Settings
                </NavLink>
            </nav>
            <div className="px-4 py-2">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-red-100 dark:hover:bg-red-900 hover:text-red-600 dark:hover:text-red-300 transition">
                    <LogOut size={20}/>
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

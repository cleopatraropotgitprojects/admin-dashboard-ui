import { LogOut, Home, Users, Settings, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import {useAuth} from "@/context/authContext";

type Props = {
    onClose: () => void;
};

const SidebarMobile = ({ onClose }: Props) => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    };

    return (
        <div className="w-64 h-full bg-white dark:bg-zinc-900 shadow-lg p-6 flex flex-col z-50">
            {/* Close button */}
            <button
                onClick={onClose}
                className="self-end text-zinc-600 dark:text-zinc-300 hover:text-red-500 mb-4"
            >
                <X size={24} />
            </button>

            <div className="text-2xl font-bold text-zinc-800 dark:text-white mb-6">
                Menu
            </div>

            <nav className="flex flex-col gap-2">
                <NavLink to="/dashboard" onClick={onClose} className="flex items-center gap-3 px-4 py-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <Home size={18} />
                    Dashboard
                </NavLink>

                <NavLink to="/users" onClick={onClose} className="flex items-center gap-3 px-4 py-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <Users size={18} />
                    Users
                </NavLink>

                <NavLink to="/settings" onClick={onClose} className="flex items-center gap-3 px-4 py-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <Settings size={18} />
                    Settings
                </NavLink>
            </nav>
        </div>
    );
};

export default SidebarMobile;

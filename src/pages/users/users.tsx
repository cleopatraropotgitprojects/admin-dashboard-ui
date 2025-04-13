import { Search } from 'lucide-react';
import {RecentUsersTable} from "@/components";
import {useState} from "react";
import {useRecentUsers} from "@/hooks/useRecentUsers";

const UsersPage = () => {
    const [search, setSearch] = useState('');
    const { data } = useRecentUsers();

    const filteredUsers = data?.filter(user =>
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Title */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-zinc-800 dark:text-white">Users</h1>
            </div>

            {/* Search bar */}
            <div className="relative max-w-sm">
                <input
                    type="text"
                    placeholder="Search user by email..."
                    onChange={e => setSearch(e.target.value)}
                    className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 pl-10 text-sm text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            </div>

            {/* Table */}
            <RecentUsersTable data={filteredUsers} />
        </div>
    );
};

export default UsersPage;

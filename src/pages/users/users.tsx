import { Search } from 'lucide-react';

const UsersPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-zinc-800 dark:text-white">Users</h1>
                {/* Future: Add User Button */}
            </div>

            {/* Search bar */}
            <div className="relative max-w-sm">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 pl-10 text-sm text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className="border-b border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Role</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                    </thead>
                    <tbody className="text-zinc-800 dark:text-zinc-200">
                    <tr className="border-b border-zinc-100 dark:border-zinc-700">
                        <td className="px-4 py-2">Alice Johnson</td>
                        <td className="px-4 py-2">alice@example.com</td>
                        <td className="px-4 py-2">Admin</td>
                        <td className="px-4 py-2">Active</td>
                    </tr>
                    <tr className="border-b border-zinc-100 dark:border-zinc-700">
                        <td className="px-4 py-2">Leo Smith</td>
                        <td className="px-4 py-2">leo@example.com</td>
                        <td className="px-4 py-2">Editor</td>
                        <td className="px-4 py-2">Inactive</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Maya Brown</td>
                        <td className="px-4 py-2">maya@example.com</td>
                        <td className="px-4 py-2">Viewer</td>
                        <td className="px-4 py-2">Pending</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersPage;

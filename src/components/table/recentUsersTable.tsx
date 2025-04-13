const RecentUsersTable = () => {
    return (
        <div className="w-full bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-white mb-4">Recent Users</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                    <thead className="border-b border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Joined</th>
                    </tr>
                    </thead>
                    <tbody className="text-zinc-800 dark:text-zinc-200">
                    <tr className="border-b border-zinc-100 dark:border-zinc-700">
                        <td className="px-4 py-2">Alice Johnson</td>
                        <td className="px-4 py-2">alice@example.com</td>
                        <td className="px-4 py-2">Apr 10, 2025</td>
                    </tr>
                    <tr className="border-b border-zinc-100 dark:border-zinc-700">
                        <td className="px-4 py-2">Leo Smith</td>
                        <td className="px-4 py-2">leo@example.com</td>
                        <td className="px-4 py-2">Apr 9, 2025</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Maya Brown</td>
                        <td className="px-4 py-2">maya@example.com</td>
                        <td className="px-4 py-2">Apr 8, 2025</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentUsersTable;

type Props = {
    data?: {
        name: string;
        email: string;
        joined: string;
    }[];
    isLoading?: boolean;
    isError?: boolean;
};

const RecentUsersTable = ({ data, isLoading, isError }: Props) => {
    if (isLoading) return <p className="text-blue-500">Loading users...</p>;
    if (isError || !data) return <p className="text-red-500">Error loading users.</p>;
    if (data.length === 0) return <p className="text-zinc-500">No users found.</p>;

    return (
        <div className="w-full bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-white mb-4">Users</h2>
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
                    {data.map((user, idx) => (
                        <tr
                            key={idx}
                            className="border-b border-zinc-100 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                        >
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">{new Date(user.joined).toLocaleDateString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentUsersTable;

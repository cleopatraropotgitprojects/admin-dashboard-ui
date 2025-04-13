const SettingsPage = () => {
    return (
        <div className="space-y-10 max-w-full">
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-white">Settings</h1>

            {/* Profile Settings */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 space-y-4">
                <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">Profile</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Full Name</label>
                        <input
                            type="text"
                            className="mt-1 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-sm text-zinc-800 dark:text-zinc-100"
                            placeholder="Cleopatra Ropot"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
                        <input
                            type="email"
                            className="mt-1 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-sm text-zinc-800 dark:text-zinc-100"
                            placeholder="cleo@example.com"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 inline-block bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90"
                    >
                        Save Changes
                    </button>
                </form>
            </div>

            {/* Password Settings */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 space-y-4">
                <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">Change Password</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Current Password</label>
                        <input
                            type="password"
                            className="mt-1 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-sm text-zinc-800 dark:text-zinc-100"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">New Password</label>
                        <input
                            type="password"
                            className="mt-1 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-sm text-zinc-800 dark:text-zinc-100"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 inline-block bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90"
                    >
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SettingsPage;

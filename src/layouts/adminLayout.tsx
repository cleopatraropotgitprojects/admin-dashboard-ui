import { Outlet } from 'react-router-dom';
import Sidebar from "../components/sidebar/sidebar";

const AdminLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="ml-64 flex-1 min-h-screen bg-gray-50 dark:bg-zinc-950 p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;

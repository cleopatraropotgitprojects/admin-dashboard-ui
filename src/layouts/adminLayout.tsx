import { Outlet } from 'react-router-dom';
import {Sidebar} from "@/components";
import Header from "@/components/header/header";

const AdminLayout = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <main className="ml-64 flex-1 min-h-screen bg-zinc-50 dark:bg-zinc-950">
                <Header/>
                <div className="p-6">
                    <Outlet/>
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;

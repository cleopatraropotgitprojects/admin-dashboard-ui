import { BarChart2, Users, DollarSign } from 'lucide-react';
import {Card, RecentUsersTable, UserChart} from "@/components";
import {dashboard, usersTable} from "@/mock/data";

const DashboardPage = () => {

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Total Users" value={dashboard.totalUsers.toString()} icon={<Users size={20} />} />
                <Card title="Revenue" value={`$${dashboard.revenue}`} icon={<DollarSign size={20} />} />
                <Card title="Active Orders" value={dashboard.activeOrders.toString()} icon={<BarChart2 size={20} />} />
            </div>

            <UserChart />
            <RecentUsersTable
                data={usersTable}
            />
        </div>
    );
};

export default DashboardPage;

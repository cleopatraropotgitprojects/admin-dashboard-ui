import { BarChart2, Users, DollarSign } from 'lucide-react';
import {Card, RecentUsersTable, UserChart} from "@/components";
import {useDashboardStats} from "@/services/dashboardService";

const DashboardPage = () => {
    const { data, isLoading, isError } = useDashboardStats();
    if (isLoading) return <p className="text-blue-500">Loading dashboard data...</p>;
    if (isError) return <p className="text-red-500">Something went wrong</p>;
    if (!data) return <p className="text-orange-500">No data received</p>;

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Total Users" value={data.totalUsers.toString()} icon={<Users size={20} />} />
                <Card title="Revenue" value={`$${data.revenue}`} icon={<DollarSign size={20} />} />
                <Card title="Active Orders" value={data.activeOrders.toString()} icon={<BarChart2 size={20} />} />
            </div>

            <UserChart />
            <RecentUsersTable />
        </div>
    );
};

export default DashboardPage;

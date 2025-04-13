import { BarChart2, Users, DollarSign } from 'lucide-react';
import Card from "../../components/card/card";
import UserChart from "../../components/chart/userChart";
import RecentUsersTable from "../../components/table/recentUsersTable";

const DashboardPage = () => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Total Users" value="1,248" icon={<Users size={20} />} />
                <Card title="Revenue" value="$14,350" icon={<DollarSign size={20} />} />
                <Card title="Active Orders" value="326" icon={<BarChart2 size={20} />} />
            </div>

            <UserChart />
            <RecentUsersTable />
        </div>
    );
};

export default DashboardPage;

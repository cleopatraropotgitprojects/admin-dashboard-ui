import { useUserGrowth } from '@/hooks/useUserGrowth';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const UserChart = () => {
    const { data, isLoading, isError } = useUserGrowth();

    if (isLoading) return <p className="text-blue-500">Loading chart...</p>;
    if (isError || !data) return <p className="text-red-500">Error loading chart data</p>;

    return (
        <div className="w-full bg-white dark:bg-zinc-900 rounded-xl shadow p-6 text-zinc-800 dark:text-white">
            <h2 className="text-lg font-semibold mb-4">User Growth</h2>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                        <XAxis dataKey="month" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="users"
                            stroke="#4f46e5"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default UserChart;

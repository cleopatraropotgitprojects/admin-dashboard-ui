import axios from "axios";

export interface DashboardStats {
    totalUsers: number;
    revenue: number;
    activeOrders: number;
}

export const getDashboardStatus = async (): Promise<DashboardStats> => {
    const { data } = await axios.get('https://api.example.com/dashboard');
    return data;
};

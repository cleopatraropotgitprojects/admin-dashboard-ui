import axios from "axios";

export interface DashboardStats {
    totalUsers: number;
    revenue: number;
    activeOrders: number;
}

export const getDashboardStatus = async (): Promise<DashboardStats> => {
    const { data } = await axios.get('https://mocki.io/v1/71c8b321-2af4-48fe-82cb-2e45c0c7c976');
    return data;
};

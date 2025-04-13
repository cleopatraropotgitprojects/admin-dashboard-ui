import {useQuery} from "@tanstack/react-query";
import {getDashboardStatus} from "@/hooks/useDashboardStats";

export const useDashboardStats = () => {
    return useQuery({
        queryKey: ['dashboardStats'],
        queryFn: getDashboardStatus,
    });
};

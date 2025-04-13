import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type RecentUser = {
    name: string;
    email: string;
    joined: string;
};

const getRecentUsers = async (): Promise<RecentUser[]> => {
    const { data } = await axios.get('https://mocki.io/v1/4dd7592a-20a6-4620-8cff-3664379d102c');
    return data;
};

export const useRecentUsers = () => {
    return useQuery({
        queryKey: ['recentUsers'],
        queryFn: getRecentUsers,
    });
};

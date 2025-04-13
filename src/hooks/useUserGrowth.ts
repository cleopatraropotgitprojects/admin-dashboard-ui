import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type UserGrowthItem = {
    month: string;
    users: number;
};

const getUserGrowth = async (): Promise<UserGrowthItem[]> => {
    const { data } = await axios.get('https://mocki.io/v1/9d47dad2-81d6-48ce-884e-73bc3710186e');
    return data;
};

export const useUserGrowth = () => {
    return useQuery({
        queryKey: ['userGrowth'],
        queryFn: getUserGrowth,
    });
};

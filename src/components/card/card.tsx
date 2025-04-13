import React from 'react';

type CardProps = {
    title: string;
    value: string;
    icon: React.ReactNode;
};

const Card = ({ title, value, icon }: CardProps) => {
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {icon}
            </div>
            <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{title}</p>
                <p className="text-xl font-semibold text-zinc-800 dark:text-white">{value}</p>
            </div>
        </div>
    );
};

export default Card;

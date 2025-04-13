import { createBrowserRouter, Navigate } from 'react-router-dom';
import AdminLayout from "../layouts/adminLayout";
import DashboardPage from "../pages/dashboard/dashboard";
import UsersPage from "../pages/users/users";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" />,
            },
            {
                path: 'dashboard',
                element: <DashboardPage />,
            },
            {
                path: 'users',
                element: <UsersPage />,
            },
        ],
    },
]);

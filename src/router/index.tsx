import { createBrowserRouter, Navigate } from 'react-router-dom';
import AdminLayout from "../layouts/adminLayout";
import DashboardPage from "../pages/dashboard/dashboard";
import UsersPage from "../pages/users/users";
import SettingsPage from "../pages/settings/settings";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
                <AdminLayout />
        ),
        children: [
            { index: true, element: <Navigate to="/dashboard" /> },
            { path: 'dashboard', element: <DashboardPage /> },
            { path: 'users', element: <UsersPage /> },
            { path: 'settings', element: <SettingsPage /> },
        ],
    },
]);

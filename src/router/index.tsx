import { createBrowserRouter, Navigate } from 'react-router-dom';
import AdminLayout from "../layouts/adminLayout";
import DashboardPage from "../pages/dashboard/dashboard";
import UsersPage from "../pages/users/users";
import SettingsPage from "../pages/settings/settings";
import LoginPage from "@/pages/auth/loginPage";
import ProtectedRoute from "@/router/protectedRoute";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Navigate to="/dashboard" /> },
            { path: 'dashboard', element: <DashboardPage /> },
            { path: 'users', element: <UsersPage /> },
            { path: 'settings', element: <SettingsPage /> },
        ],
    },
]);

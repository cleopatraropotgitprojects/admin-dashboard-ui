import { Navigate } from 'react-router-dom';
import {useAuth} from "@/context/authContext";
import {JSX} from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

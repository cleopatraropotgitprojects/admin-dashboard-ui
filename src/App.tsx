import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {router} from "./router";
import { AuthProvider } from './context/authContext';
import {ThemeProvider} from "@/context/themeContext";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;

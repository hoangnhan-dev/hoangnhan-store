import MainLayout from "@/components/layouts/MainLayout.jsx";
import Home from "@/pages/Home.jsx";

export const router = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ],
    }
];
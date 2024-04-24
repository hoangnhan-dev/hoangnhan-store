import {Outlet} from "react-router-dom";
import Header from "@/components/ui/Header.jsx";
import Footer from "@/components/ui/Footer.jsx";

export default function MainLayout() {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
}
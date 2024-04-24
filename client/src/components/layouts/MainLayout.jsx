import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <div>Header</div>
            <div>{<Outlet />}</div>
            <div>Footer</div>
        </div>
    );
}
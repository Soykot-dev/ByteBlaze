import { Outlet } from "react-router-dom";
import Nav from "../Nav";

const MainLayouts = () => {
    return (
        <div className="">
            <div className="h-16">
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;
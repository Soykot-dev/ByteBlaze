import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

const MainLayouts = () => {
    return (
        <div className="">
            <div className="h-16">
                <Nav></Nav>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayouts;
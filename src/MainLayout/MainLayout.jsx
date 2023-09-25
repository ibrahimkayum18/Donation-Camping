import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div className="w-[90%] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
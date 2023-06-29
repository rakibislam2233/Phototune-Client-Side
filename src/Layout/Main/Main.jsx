import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import Footer from "../../Component/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="w-full bg-[#1B1B1B] text-white">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;
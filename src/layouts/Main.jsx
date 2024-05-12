import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Main = () => {
    return (
        <div className=" bg-[#F0F0FA] my-5 ">
            <Navbar></Navbar>
          <div className="max-w-6xl my-5 mx-auto">
          
            <Outlet></Outlet>
            
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Main;
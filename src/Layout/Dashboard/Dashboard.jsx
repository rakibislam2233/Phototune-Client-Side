import { useState } from "react";
import {AiOutlineCamera, AiOutlineHome, AiOutlineSetting,  AiOutlineUserAdd } from "react-icons/ai";
import {BiImageAdd, BiSolidSelectMultiple, } from "react-icons/bi";
import { FaBuyNLarge } from "react-icons/fa";
import { MdOutlineAddAPhoto, MdPayment } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [open,setOpen] = useState(false)
    const isAdmin = false;
    const isHost =  true;
  return (
    <div className="w-full md:flex justify-between">
      {/* <div className={`w-full duration-100 lg:w-[20%] fixed h-full lg:max-h-screen bg-[#001E3C]  border-r-4 border-[#0A1929]`}>
        
      </div> */}
      <div className="w-full md:fixed md:w-[18%]  bg-[#1B1B1B]">
      <nav className="w-full h-screen text-white flex flex-col  items-center gap-20 px-5 py-5 border-e-2 border-gray-800">
          <div className="text-center">
            <Link to="home">
              <img
                className="w-32 h-28 rounded-full cursor-pointer"
                src="https://i.postimg.cc/dtksy36f/logo.png"
                alt=""
              />
            </Link>
          </div>
         {
          isAdmin ?  <ul className="flex flex-col gap-3 font-semibold">
          <li>
            <Link
              to="/dashboard/adminHome"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
              <AiOutlineHome className="w-5 h-5"></AiOutlineHome>Admin Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/manageUsers"           
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
              <AiOutlineUserAdd className="w-5 h-5"></AiOutlineUserAdd>Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/managePhotography" 
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
              <AiOutlineCamera className="w-5 h-5"></AiOutlineCamera>Manage PhotoGraphy
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/adminSetting"         
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
              <AiOutlineSetting className="w-5 h-5"></AiOutlineSetting>Setting
            </Link>
          </li>
          <li>
           <Link to={'/'}>
           <button className="py-2 mt-2 px-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl flex items-center gap-1">
              Back to home
            </button>
           </Link>
          </li>
        </ul> :isHost ?   <ul className="flex flex-col gap-3 font-semibold">
          <li>
            <Link
              to="/dashboard/hostHome"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
              <AiOutlineHome className="w-5 h-5"></AiOutlineHome>Host Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/addPhotography"           
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
              <BiImageAdd className="w-5 h-5"></BiImageAdd>Add Photography
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/myPhoto"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
              <MdOutlineAddAPhoto className="w-5 h-5"></MdOutlineAddAPhoto>My Photography
            </Link>
          </li>
          <li>
          <Link
              to="/dashboard/hostSetting"         
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
              <AiOutlineSetting className="w-5 h-5"></AiOutlineSetting>Setting
            </Link>
          </li>

          <li>
           <Link to={'/'}>
           <button className="py-2 mt-2 px-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl flex items-center gap-1">
              Back to home
            </button>
           </Link>
          </li>
        </ul> :  <ul className="flex flex-col gap-3 font-semibold">
          <li>
            <Link
              to="/dashboard/userHome"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center duration-200 cursor-pointer"
            >
              <AiOutlineHome className="w-5 h-5"></AiOutlineHome>User Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/selectedPhoto"           
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center duration-200 cursor-pointer"
            >
              <BiSolidSelectMultiple className="w-5 h-5"></BiSolidSelectMultiple> Selected Photo
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/selectedPhoto"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center duration-200 cursor-pointer"
            >
              <FaBuyNLarge className="w-5 h-5"></FaBuyNLarge>Buying Photo
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/paymentHistory"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center duration-200 cursor-pointer"
            >
              <MdPayment className="w-5 h-5"></MdPayment>Payment History
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/userSetting"         
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center duration-200 cursor-pointer"
            >
              <AiOutlineSetting className="w-5 h-5"></AiOutlineSetting>Setting
            </Link>
          </li>
          <li>
           <Link to={'/'}>
           <button className="py-2 mt-2 px-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl flex items-center gap-1">
              Back to home
            </button>
           </Link>
          </li>
        </ul>
         }
        </nav>
      </div>
      <div className="lg:ml-[18%] h-full w-full bg-[#1B1B1B]">
       <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
